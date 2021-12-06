import './App.css';
import AddressBookForm from './components/registration/AddressBookForm';
import AddressBookHome from './components/home/AddressBookHome';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={AddressBookHome} />
          <Route exact path="/address" component={AddressBookForm} />
          {/* <Route exact path="/update-address/:id" component={UpdateAddress} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
