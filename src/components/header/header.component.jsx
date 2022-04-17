import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { auth } from "../../firebase/firebase.utils";
import './header.styles.scss'
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { currentUserSelector } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selector";



const Header = ({currentUser, hidden}) => (

    <div className="header">
        <Link className="logo-container" to="/" >
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="otpion" to="/contact">
                CONTACT
            </Link>
            {
                currentUser ?
                (<div className="option" onClick={ () => auth.signOut()}>SIGN OUT</div>)
                :
                (<Link className="option" to="/signin">SIGN IN</Link>)
            }
            <CartIcon />
        </div>
        {
            hidden?null:<CartDropdown />
        }
    </div>


);

const mapStateToProps = createStructuredSelector({
    currentUser: currentUserSelector,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);