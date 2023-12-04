import ImageItem from "./ImageItem.js";

function ImageList({ imagesPlaceHolder }) {
  return (
    <div className="imageList">
      {imagesPlaceHolder.map((image, index) => {
        return <ImageItem key={index} allImages={image} />;
      })}
    </div>
  );
}

export default ImageList;
