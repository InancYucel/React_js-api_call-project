import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setValue] = useState("");

  const handleFormSubmit = (event) => {
    debugger;
    event.preventDefault(); //To prevent the page from refreshing
    search(valueInput); //This function sends data to the main class with props
  };

  const handleChange = (event) => {
    setValue(event.target.value); //We access the value in input like this
  };

  return (
    <div className="searchHeaderMainDiv">
      <form onSubmit={handleFormSubmit}>
        <label>What are you looking for?</label>
        <input value={valueInput} onChange={handleChange}></input>
        <div>{valueInput}</div>
      </form>
    </div>
  );
  // 1- handleFormSubmit' function runs when input field is triggered with 'Enter'
}

export default SearchHeader;
