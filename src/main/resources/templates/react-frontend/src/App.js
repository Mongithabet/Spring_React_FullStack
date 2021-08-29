import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeCompnent from './components/ListEmployeeCompnent';
function App() {
  return (
    <div>
      <Router>
        
      <HeaderComponent/>
   
    <div className="container">
      <Switch>
        <Route path="/" component={ListEmployeeCompnent}></Route>
        <Route path="/employees" component={ListEmployeeCompnent}></Route>

    <ListEmployeeCompnent/>

     </Switch>
     </div>
     <FooterComponent/>
     </Router>

          </div>
          
  );
}

export default App;
