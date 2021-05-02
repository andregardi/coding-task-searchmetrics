import { useContext } from 'react';
import { ReactComponent as RemoveIcon } from '../../../../asstes/icons/removeIcon.svg';
import CategoryContext from '../../../../contexts/CategoryContext';
import NewKeyword from './NewKeyword/NewKeyword';
import styles from './styles.module.css';
import KeywordBadge from './KeywordBadge/KeywordBadge';
import CategoryBox from '../CategoryBox/CategoryBox';

const Category = ({ category }) => {
  const { actions } = useContext(CategoryContext);

  const addKeyword = (keyword) => {
    actions.addKeywordToCategory(category.name, keyword);
  };

  const removeKeyword = (keyword) => {
    actions.removeKeywordFromCategory(category.name, keyword);
  };

  const removeCategory = () => {
    actions.removeCategory(category.name);
  };

  const mappedKeywords = category.keywords.map((keyword) => (
    <KeywordBadge
      key={keyword}
      keyword={keyword}
      removeKeyword={removeKeyword}
    />
  ));

  const title = (
    <h2>
      {category.name}
      <RemoveIcon className={styles.removeIcon} onClick={removeCategory} />
    </h2>
  );

  return (
    <CategoryBox title={title}>
      <div className={styles.keywords}>{mappedKeywords}</div>
      <NewKeyword addKeyword={addKeyword} />
    </CategoryBox>
  );
};

export default Category;
