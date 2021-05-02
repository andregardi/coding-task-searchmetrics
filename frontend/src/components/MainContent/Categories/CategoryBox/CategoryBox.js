import styles from './styles.module.css';

const CategoryBox = ({ title, children }) => {
  return (
    <div className={styles.category}>
      <div className={styles.categoryBox}>
        {title && <div className={styles.categoryTitle}>{title}</div>}
        {children}
      </div>
    </div>
  );
};

export default CategoryBox;
