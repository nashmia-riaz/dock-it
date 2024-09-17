import MartySad from '../assets/marty-sad.png'
function ListsEmpty(){
    console.log('Showing empty');

    return(
    <div className='ListsEmptyContainer'>
        <img src={MartySad}></img>
        <p>You currently have no lists. Try creating a list using the sidebar.</p>
    </div>);
}

export default ListsEmpty;