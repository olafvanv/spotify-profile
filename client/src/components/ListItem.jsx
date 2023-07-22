import styles from './ListItem.module.scss';

const ListItem = ({index, thumbnail, title, subtitle}) => {
  return (
    <div className={styles.listItem}>
      <h5 className={styles.index}>{index}</h5>
      <div className={styles.image}>
        <img src={thumbnail} alt="Artists avatar" />
      </div>
      <div className={styles.text}>
        <h4>{title}</h4>
        {subtitle ? <h5>{subtitle}</h5> : null}
      </div>
    </div>
  )
}

export default ListItem;