
import './App.css';
import List from './Classique/List';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import InsertExcel from './Classique/InsertExcel';
import Creatform from './Classique/Creatform';
function App(){
    return( <Router>
      <div>
        <Switch>
          <Route exact path='/' component={List} />
          <Route exact path='/create' component={InsertExcel} />
          <Route exact path='/update/:id' component={Creatform} />
        </Switch>
      </div>
    </Router>);
 
}
export default App;