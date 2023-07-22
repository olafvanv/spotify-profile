import styles from './SpotifyButton.module.scss';

const SpotifyButton = ({onPress, children}) => {
  return (
    <div className={styles.button} onClick={onPress}>
      <span>{children}</span>
    </div>
  )
}

export default SpotifyButton;