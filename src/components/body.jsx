const ImageGallery = ({ imageData }) => {
    return (
      <div>
        {
          imageData.map(image => (
            <div key={image.id} className="image-container">
              <img src={image.img} alt={`Image ${image.id}`}></img>
            </div>
          ))
        }
      </div>
    );
  }
  
  export default ImageGallery;
  