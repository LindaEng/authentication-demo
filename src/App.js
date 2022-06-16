import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      {/* <Home /> */}
    </div>
  );
}

export default App;
