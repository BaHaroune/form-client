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
          <Route path='/form-client' element={<Form/>}></Route>
          <Route path='form-client/info' element={<Info/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
