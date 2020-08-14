import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import Rating from "material-ui-rating";

function CheckoutProduct({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();

	console.log(id, title, image, price, rating);

	const removeFromBasket = () => {
		// remove item from basket...
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id,
		});
	};

	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} alt="" />

			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>

				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>

				<Rating value={rating} max={5} />

				<button onClick={removeFromBasket}>Remove from basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
