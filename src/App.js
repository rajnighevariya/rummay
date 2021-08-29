import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';



function App() {
  return (
    <BrowserRouter>

      <Route to="/" component={Home}></Route>
    </BrowserRouter>

  );
}

export default App;
