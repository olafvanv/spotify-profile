import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import styles from './App.module.scss';
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Login from "./pages/Login";
import {token} from './services/authorization';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      return setMode('dark');
    }
    return setMode('light');
  }

  const Home = () => {
    return (
      <div className={`${styles.appContainer} ${mode}-theme`}>
        <Sidebar mode={mode} onToggleMode={() => toggleMode()} />
        <div className={styles.content}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </div>
      </div>
    );
  };
  
  return token ? <Home /> : <Login />;
}

export default App;
