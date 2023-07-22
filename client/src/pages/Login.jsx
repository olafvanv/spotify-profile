import styles from "./Login.module.scss";
import logo from "../assets/spotify-logo.png";
import SpotifyButton from "../components/SpotifyButton";

const Login = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.loginWrapper}>
        <div className={styles.logo}>
          <div className={styles.imageWrapper}>
            <img src={logo} alt="Spotify Logo" />
          </div>
          <h1 className={styles.title}>Spotify Stats</h1>
        </div>
        <SpotifyButton onPress={() => window.location.href = "/login"}>Login</SpotifyButton>
      </div>
    </div>
  );
};

export default Login;
