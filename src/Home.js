import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className='home'>
			<img
				className='home__image'
				src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
				alt=''
			/>

			<div className='home__row'>
				<Product
					id='123455'
					title='Staples Hyken Technical Mesh Task Chair (Black) - Adjustable Office Chair with Breathable Mesh Material, Provides Lumbar, arm and Head Support.'
					price={219.95}
					rating={5}
					image='https://m.media-amazon.com/images/I/8189i6pt7aL._AC_UL320_.jpg'
				/>
				<Product
					id='123456'
					title='Over the Sink Dish Drying Rack, iSPECLE Large Premium 201 Stainless Steel Dish Rack with Utensil Holder Hooks for Kitchen Counter Non-slip'
					price={11.96}
					rating={4}
					image='https://images-na.ssl-images-amazon.com/images/I/611T39OilfL._AC_SL1000_.jpg'
				/>
			</div>
			<div className='home__row'>
				<Product
					id='123457'
					title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
					price={11.96}
					rating={3}
					image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
				/>
				<Product
					id='123458'
					title='Laptop Backpack, Slim Durable Laptops Backpack with USB Charging Port'
					price={31.99}
					rating={4}
					image='https://images-na.ssl-images-amazon.com/images/I/81idlqFqcUL._AC_SL1500_.jpg'
				/>
				<Product
					id='123459'
					title='Gaming Headset for Xbox One & PS4, AIMASON Noise Cancelling Over Ear Headphone'
					price={46.34}
					rating={2}
					image='https://images-na.ssl-images-amazon.com/images/I/71AmD4ZUnGL._AC_SL1500_.jpg'
				/>
			</div>

			<div className='home__row'>
				<Product
					id='123450'
					title='Samsung CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty (C49J890DKN)'
					price={1099.79}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/81B0xCF%2BPWL._AC_SL1500_.jpg'
				/>
			</div>
		</div>
	);
}
export default Home;
