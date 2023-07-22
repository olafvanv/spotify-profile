import styles from "./Sidebar.module.scss";
import logo from "../assets/spotify-logo.png";
import DarkModeToggle from "./DarkModeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../services/authorization";

const Sidebar = ({mode, onToggleMode}) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} alt="Spotify Logo"></img>
        <span className={styles.logoText}>Spotify Stats</span>
      </div>

      <div className={styles.darkModeToggle}>
        <DarkModeToggle mode={mode} onToggleMode={onToggleMode}/>
      </div>
      <div className={styles.logout} title="Logout" onClick={() => logout()}>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </div>
    </div>
  );
};

export default Sidebar;
