const ModalImage = ({ largeImageURL, tags }) => {
  return (
    <div>
      <img src={largeImageURL} alt={tags} />
    </div>
  );
};

export default ModalImage;
