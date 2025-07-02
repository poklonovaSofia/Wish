import styles from '../styles/Envelope.module.css';
export const Wish = ({ message }: { message: string }) => {
    return (
        <div className={styles.paper}>
            {message}
        </div>
    );
};