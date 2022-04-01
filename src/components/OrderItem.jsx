import React, {useContext} from 'react';
import '@styles/OrderItem.css';
import icon from '@icons/icon_close.png'
import { AppContext } from '../context/AppContext';
const OrderItem = ({product}) => {
	const {removeItem} = useContext(AppContext)
	
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p> {product.title} </p>
			<p>$ {product.price} { product.id } </p>
			<img src={icon} alt="close"  onClick={ () => { removeItem(product) } } />
		</div>
	);
}

export default OrderItem;
