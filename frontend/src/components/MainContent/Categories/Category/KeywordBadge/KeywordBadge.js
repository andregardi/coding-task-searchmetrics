import { ReactComponent as RemoveIcon } from '../../../../../asstes/icons/removeIcon.svg';
import styles from './styles.module.css';

const KeywordBadge = ({ keyword, removeKeyword }) => {
  return (
    <span key={keyword} className={styles.keywordBadge}>
      {keyword}
      <RemoveIcon
        className={styles.removeIcon}
        onClick={() => removeKeyword(keyword)}
      />
    </span>
  );
};

export default KeywordBadge;
