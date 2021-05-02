import { useContext } from 'react';
import CategoryContext from '../../../../contexts/CategoryContext';
import useEditingInput from '../../../../hooks/useEditingInput';
import CategoryBox from '../CategoryBox/CategoryBox';
import styles from './styles.module.css';

const AddCategory = () => {
  const { isEditing, inputRef, startEditing, stoptEditing } = useEditingInput();
  const { actions } = useContext(CategoryContext);

  if (!isEditing) {
    return (
      <h3 className={styles.newCategory} onClick={startEditing}>
        + add category
      </h3>
    );
  }

  const formSubmit = async (event) => {
    event.preventDefault();
    const { value } = event.target.elements['category'];

    actions.addCategory(value);
    stoptEditing();
  };

  const title = (
    <form
      onSubmit={formSubmit}
      className={styles.categoryForm}
      autoComplete="off"
    >
      <input ref={inputRef} name="category" onBlur={stoptEditing} />
    </form>
  );

  return (
    <CategoryBox title={title}>
      <span className={styles.hint}>Press ENTER to save</span>
    </CategoryBox>
  );
};

export default AddCategory;
