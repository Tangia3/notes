import styles from './note-preview.module.css';

function NotePreview() {
    return (
        <>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Write title here...</h2>
                <p className={styles.text}>Write note here</p>
            </div>

        </>
    );
}

export default NotePreview;