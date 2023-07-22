import styles from './DarkModeToggle.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const DarkModeToggle = ({mode, onToggleMode}) => {
  return (
    <div className={`${styles.toggleWrapper} ${mode === 'light' ? styles.light : styles.dark}`} onClick={() => onToggleMode()}>
      <div className={styles.toggle}></div>
      <span className={styles.lightIcon}><FontAwesomeIcon icon={faSun} /></span>
      <span className={styles.darkIcon}><FontAwesomeIcon icon={faMoon}/></span>
    </div>
  );
}

export default DarkModeToggle;