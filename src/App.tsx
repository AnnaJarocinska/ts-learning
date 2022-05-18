import React from 'react';
import {User} from './User';

function App() {
  interface Item {
    itemName: string,
    category: string,
    done: boolean,
    points: number,
    date: string,
    onClick: () => void
}

interface Items extends Array<Item>{}

const items: Item[] = [
  {  
  itemName: "learn TS",
  category: "learning",
  done: false,
  points: 10,
  date: "2022-05-18",
  onClick: () =>console.log("learn TS!") 
},
  {   
  itemName: "clean windows",
  category: "cleaning",
  done: false,
  points: 10,
  date: "2022-05-18",
  onClick: () =>console.log("clean all windows!")
},
  {  
  itemName: "learn VSC keyboard shortcuts",
  category: "learning",
  done: false,
  points: 10,
  date: "2022-05-18",
  onClick: () =>console.log("learn VSC!")
 },
];

const item = {
    itemName: "learn TS",
    category: "learning",
    done: false,
    points: 10,
    date: "2022-05-18",
    onClick: () =>console.log("item")
  }

function generateItem (item:Item) {
  return(
    <>
    <button onClick = {item.onClick}>
        {item.itemName} {item.done && 'done'}
    </button>
    <p>{item.points}</p>
    <p>{item.date}</p>
    </>
)
}
let arrayOfItems = items.map(item => <>
  <div onClick = {item.onClick}>
     <p> {item.itemName} {item.done && 'done'}</p>
  <p>{item.points}</p>
  <p>{item.date}</p>
  </div>
  </>)

const firstItem = generateItem(item);

  return (
    <div className="App">
      <h3>user</h3>
      <User name="name" age={16} onClick={()=> console.log('Hello')}/>
      <h3>item</h3>
  {firstItem}
<h3>items</h3>
  {arrayOfItems}
    </div>
  );
}

export default App;


