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
  var currentID = '';
  
  if(props)
    currentID = props.data.listID;

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

  

return (
<div className="mainListView">
  {currentItems.map(item => (
          <div key={item.id}>
            {(!item.checkmark) ? <FontAwesomeIcon className='unchecked' icon={faCircle}/> : <FontAwesomeIcon className='checked' icon={faCircleCheck}/>}
          <p className={((item.checkmark) ? 'itemNameCrossed' : '') +' itemName'}>{item.task}</p> 
          </div>
  ))}
</div>);
}

export default List