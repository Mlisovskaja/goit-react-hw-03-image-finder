import { Hearts } from 'react-loader-spinner';
import styles from './loader.module.css';
const Loader = () => {
  return (
    <div className={styles.loader}>
      <Hearts
        height="80"
        width="80"
        color="#3f51b5"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
