import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
  import Ailogo from './Components/Ailogo'
import Sidebar from './Components/Sidebar'
import './Components/Aics.css'
import Students from './Components/Students'
import Settings from './Components/Settings'
import Lesson from './Components/Lesson'
function App() {
  return (
    <main>
      <Router>
      <header>
    <Ailogo/>
    
      </header>
        <section class="container">
    <switch>
      <Route path="/" exact component={Sidebar}/>
      <Route path="/students" exact component={Students}/>
      <Route path="/lesson" exact component={Lesson}/>
      <Route path="/settings" exact component={Settings}/>
    </switch>
        </section>
     
      </Router>
      </main>
  );
}

export default App;
