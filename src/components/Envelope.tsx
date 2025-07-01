import { FaHeart } from 'react-icons/fa';
import styles from '../styles/Envelope.module.css' ;
import { useState } from 'react';
export const Envelope = () => {
    const [isShaking, setIsShaking] = useState(false);
    const wishes = [ 'Have a good day', 'You are cute', 'My boy', 'Love you' ];
    const moveLikeBell = () => {
        if (isShaking) return;
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500);
    };

    const giveRandomWish = () =>
    {

    }

    return(
    <>
    <div className={`${styles.container} ${isShaking ? styles.shake : ''}`} onTouchMove={moveLikeBell} onMouseEnter={moveLikeBell} onClick={giveRandomWish}>
        <div className={styles.borderOfTop}>
           
        </div>
         <div className={styles.topOfContainer}></div>
        <svg className={styles.bottomShape} viewBox="0 0 400 100" preserveAspectRatio="none">
            <path d="M0,0 L200,100 L400,0 L400,100 L0,100 Z" fill="#F7567c" />
        </svg>
         <FaHeart className={styles.heartIcon} />
    </div>
    </>);
};