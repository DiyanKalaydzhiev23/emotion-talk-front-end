import './App.css';
import { Route, Routes } from 'react-router-dom';
import RecordSound from './components/RecordSound/RecordSound';
import Register from './components/Register/Register';


function App() {
    return (
		<Routes>
			<Route path="" element={<RecordSound />} />
			<Route path="/register" element={<Register />} />
		</Routes>
    );
}


export default App;
