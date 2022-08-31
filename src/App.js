import './App.css';
import { Route, Routes } from 'react-router-dom';
import RecordSound from './components/RecordSound/RecordSound';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import About from './components/About/About';


function App() {
    return (
		<Routes>
			<Route path="" element={<Home />} />
			<Route path="/about" element={<About/>} />
			<Route path="/register" element={<Register />} />
			<Route path="/login" element={<Login />} />
			<Route path="/emotion-talk" element={<RecordSound/>} />
		</Routes>
    );
}


export default App;
