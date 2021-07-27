import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './componant/Main'
import Header from './componant/Header';
import ShowFavCaffe from './componant/ShowFavCaffe';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
      <div>
        <Header/>
          <Switch>
            <Route path="/retreive">
              <ShowFavCaffe />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
