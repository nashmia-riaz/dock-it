import '../App.css'
import {useState, useEffect, useRef} from "react";
import {ref, onValue, set } from 'firebase/database'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import {faCircleCheck, faFloppyDisk, faX } from '@fortawesome/free-solid-svg-icons';

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
  const [saveState, setSaveState] = useState({saveIcon: null, message:'', state:false});
  

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
    addChangeFunction(OnPushItemTask, targetItem);
    setSaveState({saveIcon: faX, saveMessage:'Unsaved changes', state:false});
  }  

  const OnPushItemTask = (targetItem)=>{
    // targetItem.task = newTask;
    if(props.data.database){
      set(ref(props.data.database, 'Lists/'+currentID+'/Items/'+targetItem.id), targetItem)
      .then(()=>{
        setSaveState({saveIcon: faFloppyDisk, saveMessage:'Changes saved', state:true, shouldFadeOut:false});
      })
      .catch((error)=>{
        console.log(error);
      })
    }    
  }

  const OnChangeListName = (listID, newName)=>{
    addChangeFunction(OnPushListName, listID, newName);
    setCurrentListName(newName);
    setSaveState({saveIcon: faX, saveMessage:'Unsaved changes', state:false});
  }

  const OnPushListName = (listID, newName)=>{
    if(props.data.database){
      set(ref(props.data.database, 'Lists/'+currentID+'/Name'), newName)
        .then(()=>{
          setSaveState({saveIcon: faFloppyDisk, saveMessage:'Changes saved', state:true});
        })
        .catch((error)=>{
          console.log(error);
        })
    }
  }

  const changesFunction =useRef([]);

  const addChangeFunction = (func, ...params)=>{
    changesFunction.current.push({func, params});
  }

  const SaveChanges = (event)=>{
    if(event.key !== 'Enter') return;
    changesFunction.current.forEach(({func, params})=>func(...params));
    changesFunction.current = [];    
  }

  const OnToggleCheck= (targetItem)=>{
    targetItem.checkmark = !targetItem.checkmark;

    // Create a new array with the updated object
    const updatedItems = currentItems.map(item =>{            
      if(item.id === targetItem.id) {
        item.checkmark = targetItem.checkmark;
        return item;
      }
      else return item;
    });

    setCurrentItems(updatedItems);
    OnPushItemTask(targetItem);
  }

return (
<div className="mainListView">
  {saveState.saveIcon && <div className={(saveState.state ? 'fadeOut' : 'fadeIn') +' saveProgressContainer'}>
    <div className={(saveState.state ? 'saved' : 'unsaved') +' saveProgress'}>
      <FontAwesomeIcon className='saveIcon' icon={saveState.saveIcon}/>{saveState.saveMessage}
    </div>
  </div>}
  <div className="listName"><input value={currentListName} onKeyDown={SaveChanges} onChange={(event)=>OnChangeListName(currentID, event.target.value)} onBlur={(event)=>OnPushListName(currentID, event.target.value)}></input></div>
  <div className='listItems'>
  {currentItems.map(item => (
      <div key={item.id}>
        <FontAwesomeIcon onClick={()=>OnToggleCheck(item)} className={((!item.checkmark) ? 'unchecked' : 'checked') + ' itemCheckIcon'} icon={(!item.checkmark) ? faCircle : faCircleCheck}/> 
        <input className={((item.checkmark) ? 'itemNameCrossed' : '') +' itemName'} value={item.task} onKeyDown={SaveChanges} onBlur={(event)=>OnPushItemTask(item)} onChange={(event)=>OnChangeItemTask(item, event.target.value)}/> 
      </div>
  ))}
  </div>
</div>);
}

export default List