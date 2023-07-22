import styles from "./User.module.scss";

const User = ({ userDetails }) => {
  return (
    <div className={styles.userWrapper}>
      <div className={styles.image}>
        <img src={userDetails.user.images[1].url} alt="Profile Avatar" />
      </div>
      <div className={styles.nameAndMeta}>
        <h1 className={styles.name}>{userDetails.user.display_name}</h1>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.total}>
              {userDetails.user.followers.total}
            </span>
            <span>Followers</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.total}>
              {userDetails.following.artists.items.length}
            </span>
            <span>Following</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.total}>
              {userDetails.playlists.items.length}
            </span>
            <span>Playlists</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
