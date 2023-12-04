function ImageItem({ allImages }) {
  console.log(allImages);
  return (
    <div>
      <img
        className="imageListImg"
        src={allImages.urls.small}
        alt={allImages.alt_decription}
      ></img>
    </div>
  );
}

export default ImageItem;
