import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import Rating from "material-ui-rating";

function Product({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();

	const addToBasket = () => {
		// Add item to basket...
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id,
				title,
				image,
				price,
				rating,
			},
		});
	};
	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<Rating value={rating} max={5} />
			</div>

			<img src={image} alt="" />
			<button onClick={addToBasket}>Add to basket</button>
		</div>
	);
}

export default Product;
