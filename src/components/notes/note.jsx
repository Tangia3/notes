import styles from './note.module.css';

function Note() {
    return (
        <>
            <div className={styles.conteiner}>
                <div className={styles.wrapper}>
                    <h1 className={styles.title} contenteditable='true'>Write title here...</h1>
                    <div className={styles.content} contenteditable='true'>Write note here</div>
                </div>
            </div>
        </>
    );
}

export default Note;