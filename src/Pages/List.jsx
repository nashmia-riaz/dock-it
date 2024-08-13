import '../App.css'
import {useState} from "react";
import {ref, onValue } from 'firebase/database'

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

  if(!props) return;
  if(props.listID =='') return;

  console.log(props);
  
  fetchList(props.data.database, props.data.listID).then((items)=>{
      const fetchedItems = [];
      Object.keys(items).forEach(element => {
          fetchedItems.push(items[element]);
      });
      setCurrentItems(fetchedItems);
  });
return (
<div className="mainListView">
  {currentItems.map(item => (
          <div key={item.id}>
          {item.task}
          </div>
  ))}
</div>);
}

export default List