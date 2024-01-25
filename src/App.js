import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import AddRoom from './components/room/AddRoom';
import RoomTypeSelector from './components/common/RoomTypeSelector';
import { Router } from 'react-router-dom';

function App() {
  return(
    <>
    <AddRoom/> 
    </>
  )
}

export default App;
