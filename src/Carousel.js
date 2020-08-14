import React from "react";
import "./Carousel.css";

function Carousel() {
	return (
		<div class="carousel-wrapper">
			<span id="item-1"></span>
			<span id="item-2"></span>
			<span id="item-3"></span>
			<div class="carousel-item item-1">
				<a class="arrow arrow-prev" href="#item-3"></a>
				<a class="arrow arrow-next" href="#item-2"></a>
			</div>

			<div class="carousel-item item-2">
				<a class="arrow arrow-prev" href="#item-1"></a>
				<a class="arrow arrow-next" href="#item-3"></a>
			</div>

			<div class="carousel-item item-3">
				<a class="arrow arrow-prev" href="#item-2"></a>
				<a class="arrow arrow-next" href="#item-1"></a>
			</div>
		</div>
	);
}

export default Carousel;
