
import { BrowserRouter as Router, Route,Switch } from "react-router-dom"
import Account from "../Account/Account"
import AddAddress from "../Address/AddAddress"
import Address from "../Address/Address"
import Header from "../Header/Header"
import Order from "../Order/Order"

const AllRouter = () =>{
    return(
        <>
            {/* <Router> */}
                <Switch>
                <Route exact path="/Account">
                    <Account/>
                </Route>
                <Route exact path="/order">
                    <Order/>
                </Route>
                <Route exact path="/address">
                    <Address/>
                </Route>
                <Route exact path="/addAddress">
                    <AddAddress/>
                </Route>
                </Switch>
            {/* </Router> */}
        
        </>
    )
}

export default AllRouter