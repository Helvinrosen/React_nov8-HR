import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import Homeproj from './components/Home';
import Blog from './components/Blog';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homeproj/>}/>
          <Route exact path='/login' element={
          <Login/>
          }/>
          <Route exact path='/reg' element={<Register/>}/>
          <Route exact path='/blog' element={<Blog/>}/>
          
        </Routes>
      </Router>

  
  </div>
  );
}

export default App;
