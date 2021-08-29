import { NavLink } from "react-router-dom";
import { FaCube } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";

import './sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className='profile-container center'>
                <div className='user-picture center'></div>
                <p>Pepito Perez</p>
            </div>
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/products' activeClassName='active'>
                            <FaCube className='icon'/>
                            <span>Products</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/new-product' activeClassName='active'>
                            <HiViewGridAdd className='icon'/>
                            <span>Add a Product</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;