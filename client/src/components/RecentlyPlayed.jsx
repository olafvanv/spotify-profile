import DashboardCard from "./DashboardCard";

import styles from "./RecentlyPlayed.module.scss";

const RecentlyPlayed = ({ lastPlayed }) => {
  return (
    <DashboardCard color="primary" title="Last played">
      <div className={styles.trackInfo}>
        <img
          className={styles.albumCover}
          src={lastPlayed.album.images[1].url}
          alt="Album cover"
        />
        <div className={styles.trackDetails}>
          <h3 className={styles.track}>{lastPlayed.name}</h3>
          <h5 className={styles.artist}>{lastPlayed.artists[0].name}</h5>
          <h5 className={styles.album}>{lastPlayed.album.name}</h5>
        </div>
      </div>
    </DashboardCard>
  );
};

export default RecentlyPlayed;
