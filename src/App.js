import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Info } from './pages/Info';
import Form from './pages/Form';

function App() {
  return (
      <Router>
        <Link className='hidden' to='info'>Info</Link>

        <Routes>
          <Route path='/' element={<Form/>}></Route>
          <Route path='info' element={<Info/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
