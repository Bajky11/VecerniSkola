
import './App.css';
import ListItem from "./components/list/ListItem";
import Error from './components/error/Error';
import { useState } from 'react';



function App() {

  const [items, setItems] = useState([
    { name: "pomeranč", color: "#FF7A00" },
    { name: "jahoda", color: "#BE3030" },
    { name: "kaštany", color: "#D44000" },
    { name: "jablko", color: "#ADB36E" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [selectedColor, setSelectedColor] = useState("#FF7A00");

  return (
    <div className="app">
      <div className="app-container">

        <h1>Seznam</h1>


        <div className="input-container">
          <div className="input">
            <input type="text" onChange={(event) => setInputValue(event.target.value)} />

            <select name="barvy" id="barvy" onChange={(event) => setSelectedColor(event.target.value)}>
              <option value="#FF7A00">oranžová</option>
              <option value="#D44000">hnědá</option>
              <option value="#ADB36E">zelená</option>
              <option value="#BE3030">červená</option>
            </select>

            <input
              type="button"
              value="Vlož"
              onClick={() => {
                if (inputValue.length > 0) {
                  items.push({ name: inputValue, color: selectedColor });
                  setItems([...items])
                }
              }}
            />


          </div>

          {inputValue?.length === 0 && <Error err={"Input error"} msg={"Nelze vložit prázdnou položku!"} />}

        </div>

        <div className='item-list'>
          {items.map((item, index) => (<ListItem item={item} key={index} />))}
        </div>
      </div>
    </div>

  );
}

export default App;
