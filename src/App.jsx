import { useState, useEffect } from "react";
import importData from "./importData.json";
import Container from "./components/container/Container";
import ItemList from "./components/itemList/ItemList";
import ItemForm from "./components/itemForm/ItemForm";
import Toggle from "./components/toggle/Toggle";
import Capacity from "./components/capacity/Capacity";

function App() {
  const [hoursCapacity, setHoursCapacity] = useState (700)

  const [listOfItems, setListOfItems] = useState(importData.items);
  const [newItem, setNewItem] = useState({
    id: listOfItems.length > 0 ? Math.max(...listOfItems.map((item) => item.id)) + 1 : 1,
    firstI: "",
    secondI: "",
  });
  const id = newItem.id;
  useEffect(()=>{
    let tempCapacity = 0
    listOfItems.forEach(element => {
      if(element.secondI === "Senior"){tempCapacity+=200}
      else{tempCapacity+=100}
    });
  setHoursCapacity(tempCapacity)
  },[listOfItems])


  const [toggle, setToggle] = useState(1);
  const [reportAdd, setReportAdd] = useState("");

  const handleCapacityChange = (data) => {
    setCapacityData(data);
  };

  const handleDelete = (itemToDel) => {
    const temp = listOfItems.filter((item) => item.id !== itemToDel);
    setListOfItems(temp);
  };

  const handleToggle = (e) => {
    const source = e.target.name;
    switch (source) {
      case "toggleJedna":
        setToggle(1);
        break;
      case "toggleDva":
        setToggle(2);
        break;
      default:
        break;
    }
  };

  const addItem = (newItem) => {
    const tempItem = [...listOfItems, newItem];
    setListOfItems(tempItem);
    setReportAdd("");
    setNewItem({
      id: newItem.id + 1,
      firstI: "",
      secondI: "",
    });
  };

  return (
    <Container>
      <h3 className="text-center mt-2"><b>Your app for handling projects</b></h3>

      <h5 className="text-center mt-2">Toggle view</h5>

      <Toggle dataIn={toggle} onClick={handleToggle} />

      {toggle === 1 && (
        <>
          <h5 className="text-center mt-2"><b>Your team</b></h5>
          <ItemList dataIn={listOfItems} handleClick={handleDelete} pozice={id} />

          <ItemForm pozice={id} onClick={addItem} />
          <p className="text-center report">{reportAdd}</p>
        </>
      )}
      {toggle === 2 && (
        <>
          <h3 className="text-center mt-3">Your task</h3>
          <Capacity maxCapacity={hoursCapacity} onCapacityChange={handleCapacityChange} />
          <div className="mt-4 text-center">
          </div>
        </>
      )}
    </Container>
  );
}

export default App;
