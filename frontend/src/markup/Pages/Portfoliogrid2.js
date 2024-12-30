import React from 'react';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import PageTitle from './../Layout/PageTitle';
import Tab1 from './../Element/Tab1';

var bnr = require('./../../images/banner/bnr2.jpg');

function Portfoliogrid2(){
	return(
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{backgroundImage:"url( " + bnr + ")" }}>
					<PageTitle motherName="Home" activeName="Portfolio Masonry" />
				</div>
				<div className="content-block">
					<div className="section-full content-inner-2 portfolio-box">
						<div className="container">
							<div className="section-head text-black text-center m-b20">
								<h2 className="m-b10">Our Portfolio</h2>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
							</div>
							<Tab1 />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>	
	)
}
export default Portfoliogrid2;