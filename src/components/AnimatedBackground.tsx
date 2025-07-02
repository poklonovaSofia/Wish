import styles from '../styles/AnimatedBackgound.module.css';

const icons = [
  './icons/cat.png',
  './icons/cat1.png',
  './icons/black-cat.png',
  './icons/kitty.png',
  './icons/raccoon.png',
  './icons/raccoon1.png',
  './icons/raccoon2.png',
  './icons/happy.png'

];

export const AnimatedBackground = () => {
  return (
    <div className={styles.background}>
      {Array.from({ length: 100 }).map((_, i) => {
        const icon = icons[i % icons.length];
        const size = 20 + Math.random() * 32; // 48-80px
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = 20 + Math.random() * 10;
        const delay = Math.random() * 5;

        return (
          <img
            key={i}
            src={icon}
            className={styles.icon}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};
