import './App.css';
import AllRoutes from './Pages/AllRoutes';
import Navbar from "./Components/Navbar"
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes /> 
    </div>
  );
}

export default App;
