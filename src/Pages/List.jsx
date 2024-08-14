import '../App.css'
import {useState, useEffect} from "react";
import {ref, onValue } from 'firebase/database'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import {faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const fetchList = (database, ID)=>{
  return new Promise((resolveContainer)=>{
       const listsRefID = ref(database, 'Lists/'+ID+'/Items');           

      //first we fetch the ID of the lists this user has access to
      onValue(listsRefID, (snapshot)=>{
          const itemPromises = Object.keys(snapshot.val()).map((itemKey)=>{
              return new Promise((resolve)=>{
                  const itemRef = ref(database, 'Lists/'+ID+'/Items/'+itemKey);
                  onValue(itemRef, (snapshot2)=>{
                      resolve (snapshot2.val());
                  })
              });
          });

          Promise.all(itemPromises).then((results)=>{
              resolveContainer(results);            
          });
      });
  });
};

function List(props){
  const [currentItems, setCurrentItems] = useState([]);
  var currentListName = '';
  var currentID = '';
  
  if(props){
    if(props.data.listID && props.data.listName){
      currentID = props.data.listID;
      currentListName = props.data.listName;
    }
  }

  useEffect(()=>{
    if(currentID != ''){
      fetchList(props.data.database, currentID).then((items)=>{
          const fetchedItems = [];
          Object.keys(items).forEach(element => {
              fetchedItems.push(items[element]);
          });
          setCurrentItems(fetchedItems);
      });
    }
  }, [currentID]);

  const OnChangeItemTask = (prevItem, newTask)=>{
    var updatedItems = currentItems;
    updatedItems.map(item => {  
      if(item.id === prevItem.id) {
         item.task = newTask;
        }
      }
    );
    
    // Set the new state
    setCurrentItems(updatedItems);
  }  

  const OnChangeListName = ()=>{}

return (
<div className="mainListView">
  <div className="listName"><input value={currentListName} onChange={()=>OnChangeListName()}></input></div>
  <div className='listItems'>
  {currentItems.map(item => (
      <div key={item.id}>
        <FontAwesomeIcon className={((!item.checkmark) ? 'unchecked' : 'checked') + ' itemCheckIcon'} icon={(!item.checkmark) ? faCircle : faCircleCheck}/> 
        <input className={((item.checkmark) ? 'itemNameCrossed' : '') +' itemName'} value={item.task} onChange={(event)=>OnChangeItemTask(item, event.target.value)}/> 
      </div>
  ))}
  </div>
</div>);
}

export default List