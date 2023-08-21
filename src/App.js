import './App.css'; 
import Main from './Page/Main/Main';
import { Route, Routes } from 'react-router-dom';
import SearchFood from './Page/Record/SearchFood';

function App() {
  return (
    <> 
   <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/searchFood" element={<SearchFood/>} />


   </Routes>
    </>
  );
}

export default App;
