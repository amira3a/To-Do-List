import * as React from 'react';
import { useState, useRef } from 'react';
import './App.css';
import DeleteIcon from '@mui/icons-material/Delete';





function App() {

 const [listItem, setListItem] = useState([])

 const inputRef = useRef()

 const add = () => {
  const value = inputRef.current.value
  if (value.trim().length === 0) {
    alert("Please Enter the task")
    return
  }
  const newData = {completed : false, value}
  setListItem([...listItem , newData])
  inputRef.current.value = ""
 }
 
 
 

 const itemDone = (index) =>{
  const newListItem = [...listItem]

  newListItem[index].completed = !newListItem[index].completed

  setListItem(newListItem)
 }
 
 const toDelete = (index) => {
  const newListItem = [...listItem]
  newListItem.splice(index, 1)
  setListItem(newListItem)

 }

 
 
  return (
    <div className="App">
      <h2>TO DO LIST</h2>
      <ul className='list'>
        {
          listItem.map(({value, completed}, index) => {
            return <>
            <hr></hr>
            <div className='listItem'>
            <li className={completed ? "difstyle" : ""} onClick={() => itemDone(index)}>{value}</li>
            <DeleteIcon className='delicon' onClick={()=> toDelete(index)}/>
            </div>
            <hr></hr>
            </>
          })
        }
      </ul>
      <input id="in" ref={inputRef} placeholder='Enter new task...' />
      
      <button onClick={add}>Add</button>
    </div>
  );
  
}



export default App;
