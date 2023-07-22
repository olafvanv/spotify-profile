
import { useEffect, useState } from "react";
import RecentlyPlayed from "../components/RecentlyPlayed";
import User from "../components/User";
import styles from './Dashboard.module.scss';
import { getRecentlyPlayed, getTopArtists, getUserDetails } from "../services/spotify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import TopArtists from "../components/TopArtists";

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [recentlyPlayed, setRecentlyPlayed] = useState(null);
  const [topArtists, setTopArtists] = useState(null);

  useEffect(() => {
    getUserDetails().then(res => setUserDetails(res));
    getRecentlyPlayed().then(res => setRecentlyPlayed(res.data.items[0].track));
    getTopArtists('long_term', 7).then(res => setTopArtists(res.data.items))
  }, []);

  const allDataLoaded = () => !!userDetails && !!recentlyPlayed && !!topArtists;

  const DashboardTiles = () => (
    <div className={styles.dashboard}>
      <div className={styles.user}>
        <User userDetails={userDetails}/>
      </div>

      <div className={styles.tileRow}>
        <RecentlyPlayed lastPlayed={recentlyPlayed}/>
        <TopArtists artists={topArtists} />
      </div>
    </div>
  );

  const Loader = () => (
    <div className={styles.loader}>
      <FontAwesomeIcon icon={faGear} className="fa-spin"></FontAwesomeIcon>
      <span>Getting data...</span>
    </div>
  )

  return (
    allDataLoaded() ? <DashboardTiles /> : <Loader /> 
  )
}

export default Dashboard;