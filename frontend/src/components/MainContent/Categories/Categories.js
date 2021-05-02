import categoriesActions from '../../../actions';
import CategoryContext from '../../../contexts/CategoryContext';
import useImmerStateStore from '../../../hooks/useImmerStateStore';
import AddCategory from './AddCategory/AddCategory';
import Category from './Category/Category';
import styles from './styles.module.css';

const Categories = (props) => {
  const { state: categories, actions } = useImmerStateStore(
    props.categories,
    categoriesActions
  );
  const categoriesElements = categories.map((category) => (
    <Category key={category.name} category={category} />
  ));

  return (
    <CategoryContext.Provider value={{ categories, actions }}>
      <div className={styles.categories}>
        {categoriesElements}
        <AddCategory />
      </div>
    </CategoryContext.Provider>
  );
};

export default Categories;
