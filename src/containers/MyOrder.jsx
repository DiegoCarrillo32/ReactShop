import React, {useContext} from 'react';
import OrderItem from '../components/OrderItem';
import { AppContext } from '../context/AppContext';
import '../styles/MyOrder.css';
import flecha from '@icons/flechita.svg'
const MyOrder = () => {

	const {State} = useContext(AppContext)
	const totalPrice = () => {
	  let total = 0;
	  State.cart.forEach(element => {
		   total += element.price
	  });
	  return total;
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flecha} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{
					State.cart.map( (product) => (
						
						<OrderItem product={product} key={product.id} />
					) )
				}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$ { totalPrice() } </p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
