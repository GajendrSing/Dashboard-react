// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './Home/Home';
import ReadMore from './Home/ReadMore';





function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<BasicExample/>}/>
      <Route path='/ReadMore/:name' element={<ReadMore/>} />
     </Routes>
    </div>
  );
}

export default App;
