import { FaHeart } from 'react-icons/fa';
import styles from '../styles/Envelope.module.css' ;
import {Wish} from './wish';
import { useState } from 'react';
export const Envelope = () => {
    const [isShaking, setIsShaking] = useState(false);
    const [wishMessage, setWishMessage] = useState('');
    const [isWishVisible, setIsWishVisible] = useState(false);
    const wishes = [ 'Have a good day', 'You are cute', 'My boy', 'Love you' ];
    const moveLikeBell = () => {
        if (isShaking) return;
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500);
    };

    const giveRandomWish = () =>
    {
        if (isWishVisible) return;
        const random = wishes[Math.floor(Math.random() * wishes.length)];
        setWishMessage(random);
        setIsWishVisible(true);
        setTimeout(() => {
            setWishMessage('');
            setIsWishVisible(false); 
        }, 5000);
    }

    return(
    <>
    <div className={`${styles.container} ${isShaking ? styles.shake : ''}`} onTouchMove={moveLikeBell} onMouseEnter={moveLikeBell} onClick={giveRandomWish}>
        <div className={styles.borderOfTop}>
           
        </div>
        <div className={styles.lidWrapper}>
            <div className={`${styles.topOfContainer} ${isWishVisible ? styles.openLid : ''}`}></div>
        </div>
        {wishMessage && <Wish message={wishMessage} />}
        <svg className={styles.bottomShape} viewBox="0 0 400 100" preserveAspectRatio="none">
            <path d="M0,0 L200,100 L400,0 L400,100 L0,100 Z" fill="#F9567c" />
        </svg>
        <div className={styles.continueBottom}></div>
        <FaHeart className={styles.heartIcon} />
    </div>
    </>);
};