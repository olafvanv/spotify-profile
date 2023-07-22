import styles from './DashboardCard.module.scss';

const DashboardCard = ({title, color, children}) => {
  const cardClasses = `${styles.card} ${color === 'primary' ? styles.primary : ''}`;
  return (
    <div className={cardClasses}>
      <h2 className={styles.cardTitle}>{title}</h2>
      {children}
    </div>
  )
};

export default DashboardCard;