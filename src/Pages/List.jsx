import '../App.css'
import {useState, useEffect} from "react";
import {ref, onValue, set } from 'firebase/database'
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
  const [currentListName, setCurrentListName] = useState("");
  const [currentID, setCurrentID] = useState("");
  

  useEffect(()=>{
    if(props){
      fetchList(props.data.database, props.data.listID).then((items)=>{
          const fetchedItems = [];
          Object.keys(items).forEach(element => {
              fetchedItems.push(items[element]);
          });
          setCurrentItems(fetchedItems);
      });
      
      setCurrentID(props.data.listID);
      setCurrentListName(props.data.listName);    
    }
  }, [props]);

  const OnChangeItemTask = (targetItem, newTask)=>{
    targetItem.task = newTask;

    // Create a new array with the updated object
    const updatedItems = currentItems.map(item =>{            
      if(item.id === targetItem.id) {
        item.task = newTask;
        return item;
      }
      else return item;
    });
    
    // Set the new state
    setCurrentItems(updatedItems);
  }  

  const OnPushItemTask = (targetItem, newTask)=>{
    targetItem.task = newTask;
    if(props.data.database){
      set(ref(props.data.database, 'Lists/'+currentID+'/Items/'+targetItem.id), targetItem)
      .then(()=>{
      })
      .catch((error)=>{
        console.log(error);
      })
    }    
  }

  const OnChangeListName = (listID, newName)=>{
    if(props.data.database){
      set(ref(props.data.database, 'Lists/'+currentID+'/Name'), newName)
        .then(()=>{
        })
        .catch((error)=>{
          console.log(error);
        })
    }
  }

return (
<div className="mainListView">
  <div className="listName"><input value={currentListName} onChange={(event)=>setCurrentListName(event.target.value)} onBlur={(event)=>OnChangeListName(currentID, event.target.value)}></input></div>
  <div className='listItems'>
  {currentItems.map(item => (
      <div key={item.id}>
        <FontAwesomeIcon className={((!item.checkmark) ? 'unchecked' : 'checked') + ' itemCheckIcon'} icon={(!item.checkmark) ? faCircle : faCircleCheck}/> 
        <input className={((item.checkmark) ? 'itemNameCrossed' : '') +' itemName'} value={item.task} onBlur = {(event)=>OnPushItemTask(item, event.target.value)} onChange={(event)=>OnChangeItemTask(item, event.target.value)}/> 
      </div>
  ))}
  </div>
</div>);
}

export default List