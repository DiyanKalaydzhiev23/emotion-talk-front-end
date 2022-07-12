import './App.css';
import { Route, Routes } from 'react-router-dom';
import RecordSound from './components/RecordSound/RecordSound';
import Register from './components/Register/Register';
import Login from './components/Login/Login';


function App() {
    return (
		<Routes>
			<Route path="" element={<RecordSound />} />
			<Route path="/register" element={<Register />} />
			<Route path="/login" element={<Login />} />
		</Routes>
    );
}


export default App;
