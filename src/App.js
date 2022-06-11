import { useState } from "react";
import "./index.css";

export default function App() {
  const array = ["banana", "cherry", "pear", "apple", "orange", "mango"];

  const [search, setSearch] = useState("");

  const onChange = (e) => {
    const searchFruit = e.target.value;
    setSearch(searchFruit);
  }

  const filtering = array.filter((fruit) => fruit.toLowerCase().indexOf(search.toLowerCase()) !== -1);


  return (
    <div className="App">
      <form>
        <input onChange={onChange} ></input>
      </form>
      <div>
      {search ? filtering.map(fruit => <p>{fruit}</p>) : array.map((fruit) => <p>{fruit}</p>)}
      </div>
    </div>
  );
}

