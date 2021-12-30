import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';

import Walletbalance from './components/Walletbalance';
import Content from './components/Content';
import Cashcard from './components/Cashcard';
import Lastcards from './components/Lastcards'

function App() {
  return (
    <div className="main-container">
      <header className="App-header">
       <Nav/>
       <Content/>
  
   
       
      
 
      </header>

      
    </div>
  );
}

export default App;
