import { FaHeart } from 'react-icons/fa';
import styles from '../styles/Envelope.module.css' ;
export const Envelope = () => {
    return(
    <>
    <div className={styles.container}>
        <div className={styles.borderOfTop}>
           
        </div>
         <div className={styles.topOfContainer}></div>
         <FaHeart className={styles.heartIcon} />
    </div>
    </>);
};