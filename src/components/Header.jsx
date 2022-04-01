import React, { useState,useContext } from 'react';

import '@styles/Header.css';
import icon from  '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg'
import shop from "@icons/icon_shopping_cart.svg"
import Menu from './Menu';
import { AppContext } from '../context/AppContext';
import MyOrder from '../containers/MyOrder';


export const Header = () => {
	const [openMenu, setMenu] = useState(true)
	const [openOrders, setOpenOrders] = useState(false)
	const {State} = useContext(AppContext)
	const handleToggle = () => {
	  setMenu( prev => !prev );
	}

	return (
		<nav>
			<img src={icon} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle} >platzi@example.com</li>
					<li className="navbar-shopping-cart" onClick={() => {setOpenOrders(prev => !prev)} } >
						<img src={shop} alt="shopping cart" />
						<div> { State.cart.length ? State.cart.length : null } </div>
					</li>
				</ul>
			</div>
			{
				openMenu && (
					<Menu/>
				)
				
			}
			{
				openOrders && (
					<MyOrder/>
				)
			}
		</nav>
	);
}

export default Header;
