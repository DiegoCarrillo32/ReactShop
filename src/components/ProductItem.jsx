import React, {useState, useContext} from 'react';
import '@styles/ProductItem.css';
import icon from '@icons/bt_add_to_cart.svg'
import { AppContext } from '../context/AppContext';
const ProductItem = ({product :{images, title, price, id} }) => {
	
	const { addToCart } = useContext(AppContext);
	return (
		<div className="ProductItem">
			<img src={ images[0] } alt={title} />
			<div className="product-info">
				<div>
					<p>$ {price} </p>
					<p> {title} </p>
				</div>
				<figure style={{ cursor:'pointer' }} onClick={ () => { addToCart({ images, title, price, id}) } } >
					<img src={icon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
