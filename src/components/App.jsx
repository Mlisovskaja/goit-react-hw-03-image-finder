import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ModalImage from './ImageGallery/ModalImage/ModalImage';
import Button from './Shared/Button/Button';
import Modal from './Shared/Modal/Modal';
import Loader from './Shared/Loader/Loader';

import { searchPics } from './Shared/PicsApi';

class App extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
    page: 1,
    showModal: false,
    modalImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchPics();
    }
  }

  async fetchPics() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const data = await searchPics(search, page);
      this.setState(({ items }) => ({
        items: [...items, ...data],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  searchPics = ({ search }) => {
    this.setState({ search, items: [], page: 1 });
  };
  handleClick = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  openModal = ({ largeImageURL, tags }) => {
    this.setState({
      modalImage: {
        largeImageURL,
        tags,
      },
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { items, showModal, modalImage, loading, error } = this.state;
    const { searchPics, handleClick, openModal, closeModal } = this;
    return (
      <>
        <Searchbar onSubmit={searchPics} />
        <ImageGallery items={items} openModal={openModal} />
        {error && <p>{error}</p>}
        {loading && <Loader />}
        {Boolean(items.length) && <Button onClick={handleClick} />}
        {showModal && (
          <Modal close={closeModal}>
            <ModalImage {...modalImage} />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
