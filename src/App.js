
import './styles/App.scss';
import Header from './conponents/Header'
import Shop from "./conponents/Shop";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import {faTabletAlt} from "@fortawesome/free-solid-svg-icons";
import {faHeadphones} from "@fortawesome/free-solid-svg-icons";
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Router, Switch, Redirect} from "react-router";
import Cart from "./conponents/Cart";



function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route exact path={"/shop"} component={Shop}></Route>
                <Route path={"/cart"} component={Cart}></Route>
                <Redirect to={"shop"}></Redirect>

            </Switch>
        </BrowserRouter>

    </div>
  );
}

export default App;
