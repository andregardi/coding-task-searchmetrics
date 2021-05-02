import useEditingInput from '../../../../../hooks/useEditingInput';
import styles from './styles.module.css';

const NewKeyword = ({ addKeyword }) => {
  const { isEditing, inputRef, startEditing, stoptEditing } = useEditingInput();

  const formSubmit = async (event) => {
    event.preventDefault();
    const { value } = event.target.elements['newKeyword'];
    addKeyword(value);
    stoptEditing();
  };

  return (
    <form
      className={styles.keywordsForm}
      onSubmit={formSubmit}
      autoComplete="off"
      onBlur={stoptEditing}
    >
      {isEditing ? (
        <span className={styles.editKeywordBadge}>
          <input name="newKeyword" ref={inputRef} />
          <span className={styles.hint}>Press ENTER to save</span>
        </span>
      ) : (
        <span className={styles.addKeywordBadge} onClick={startEditing}>
          + add keyword
        </span>
      )}
    </form>
  );
};

export default NewKeyword;
