import '../App.css'
import {useState, useEffect, useRef} from "react";
import {ref, onValue, set, remove, push, child, onChildAdded, onChildRemoved, query, orderByChild } from 'firebase/database'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Item from './Item';
import {faFloppyDisk, faX } from '@fortawesome/free-solid-svg-icons';

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
      setCurrentID(props.data.listID);
      setCurrentListName(props.data.listName);    

      onChildAdded(query(ref(props.data.database, 'Lists/'+props.data.listID+'/Items'), orderByChild('timestamp')), (data)=>HandleOnItemAdded(data));
      onChildRemoved(query(ref(props.data.database, 'Lists/'+props.data.listID+'/Items'), orderByChild('timestamp')), (data)=>HandleOnItemDeleted(data));
    }
  }, [props]);

  useEffect(()=>{
    // console.log(currentItems);
  }, [currentItems]);

  const OnChangeItemTask = (targetItem, newTask)=>{
    setCurrentItems((prevItems)=>{
      const items = [...prevItems];
      items.forEach((item)=>{
        if(item.id === targetItem.id){
          item.task = newTask;
        }
      });
      return items;
    });

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

  const OnDeleteItem = (targetItem)=>{
    remove(ref(props.data.database, 'Lists/'+currentID+'/Items/'+targetItem.id))
    .then(()=>{
    })
    .catch((error)=>{
      console.log(error);
    });
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
    setCurrentItems((prevItems)=>{
      var items = [...prevItems];
      items.forEach((item)=>{
        if(item.id === targetItem.id){
          item.checkmark = !targetItem.checkmark;
        }
      });
      items = SortItems(items);
      return items;
    });
    OnPushItemTask(targetItem);
  }

  const CreateEmptyItem = ()=>{
    const itemKey = push(child(ref(props.data.database, 'Lists/'+currentID+'/Items'), 'Items')).key;

    const newItem = {
      id: itemKey,
      checkmark:false,
      task: 'New Task',
      timestamp: -Date.now()
    };

    set(ref(props.data.database, 'Lists/'+currentID+'/Items/'+itemKey), newItem)
    .then(()=>{
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  const HandleOnItemAdded = (data)=>{
    const item = {
      id: data.val().id,
      checkmark: data.val().checkmark,
      task: data.val().task,
      timestamp: data.val().timestamp
    }
    addItem(item);
  }

  const HandleOnItemDeleted = (data)=>{
    setCurrentItems((prevItems)=>{
      var items = SortItems([...prevItems]);
      items = items.filter(state => state.id !== data.key);
      return items;
    });
  }

  const addItem = (item)=>{
    setCurrentItems((prevItems) => {
      var items = SortItems([item, ...prevItems]);
      return items;
    });
  }

  const SortItems = (items)=>{
    const checkedItems = []; const uncheckedItems =[];
    items.forEach((item)=>{
      if(item.checkmark) checkedItems.push(item);
      else if(!item.checkmark) uncheckedItems.push(item);
    });

    const sortedCheckedItems = [...checkedItems].sort((a, b)=> a.timestamp - b.timestamp);
    const sortedUncheckedItems = [...uncheckedItems].sort((a, b)=>a.timestamp - b.timestamp);
    const allSortedItems = [...sortedUncheckedItems, ...sortedCheckedItems];
    return allSortedItems;
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
    <div className='addListItem' onClick={CreateEmptyItem}>Create Task</div>
    {currentItems.map(item => (
        <Item key={item.id} data={{item:item, OnToggleCheck: OnToggleCheck, SaveChanges: SaveChanges, OnPushItemTask:OnPushItemTask, OnChangeItemTask:OnChangeItemTask, OnDeleteItem: OnDeleteItem}}></Item>
    ))}
    </div>
  </div>
  );
}

export default List