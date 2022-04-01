import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import useItems from '../hooks/useItems';
import '../styles/ProductList.css';

const ProductList = () => {

	const items = useItems();
	return (
		<section className="main-container">
			<div className="ProductList">
				{
					items.map( (item) => (
						<ProductItem  product={item} key={item.id}  />
					) )
				}
			</div>
		</section>
	);
}

export default ProductList;
