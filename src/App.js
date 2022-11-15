import './App.css';
import FriendRefer from './pages/FriendRefer';
import Refer from './pages/Refer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';


const App = () => {
  return (
    <div className="App">
     <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Refer />} />
          <Route path="/friend-refer" element={<FriendRefer />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
