import "./App.css";

import {
  FirebaseDatastore,
  GameEngine,
  RolePlayerGame,
  Title,
} from "@knigam/role-player/src";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { clocktowerRules } from "./clocktowerRules";
import { ClocktowerLobby } from "./components/ClocktowerLobby";

function App() {
  const gameRules = clocktowerRules;
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };
  const datastore = new FirebaseDatastore(firebaseConfig);

  const clocktowerEngine = new GameEngine(gameRules, datastore);

  return (
    <div className="RolePlayerApp">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Title />} />
            <Route
              path="/game/*"
              element={
                <RolePlayerGame
                  height={100}
                  width={100}
                  LobbyComponent={ClocktowerLobby}
                  gameEngine={clocktowerEngine}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
