import { Link } from "react-router-dom"
import "./Address.css"
import AddressDisplay from "./AddressDisplay"
function AddressMain(){
    return(
        <div>
            <Link to="./addAddress" style={{ textDecoration: 'none' }}>
            <div className="add_btn">
                <div className="add_btn_main">
                    <span className="add_btn_plus">+</span><br />
                    <p className="add_btn_text">Add Address</p>
                </div>
            </div>
            </Link>
            <div>
                <AddressDisplay/>
            </div>
        </div>
    )
}

export default AddressMain