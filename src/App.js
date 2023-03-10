import './App.css';
import Navbar from './components/navbar';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App" >
    <Navbar/>
    <Routes>
      <Route path="/"element={<Rocket/>} />;
      <Route path ="/missions" element = {<Mission/>} />;
      <Route path = "/profile" element = {<Profile/>} />;
    </Routes>

    
    </div>
  );
}

export default App;
