import DashboardCard from "./DashboardCard";
import ListItem from "./ListItem";
import SpotifyButton from "./SpotifyButton";
import styles from './TopArtists.module.scss';

const TopArtists = ({ artists }) => {
  return (
    <DashboardCard title="Top artists">
      <div className={styles.content}>
        {artists.map((artist, i) => (
          <ListItem
            key={artist.id}
            thumbnail={artist.images[0].url}
            index={i + 1}
            title={artist.name}
          ></ListItem>
        ))}
        <SpotifyButton onPress={() => null}>See all</SpotifyButton>
      </div>
    </DashboardCard>
  );
};

export default TopArtists;
