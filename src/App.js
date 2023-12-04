import { useState } from "react";
import "./App.css";
import ImageList from "./components/ImageList.js";
import searchImages from "./api.js";
import SearchHeader from "./SearchHeader.js";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceHolder={images} />
    </div>
  );
  //Data from the subclass is sent to the 'handleSubmit' function
}

export default App;
