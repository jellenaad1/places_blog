import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import Places from './components/Places';

function App() {
  const prom = <h1>Cao svima</h1>;
  return (

    
    <div className="App">
      <NavBar></NavBar>
      
      <Places />
      
     
    </div>
  );
}

export default App;
