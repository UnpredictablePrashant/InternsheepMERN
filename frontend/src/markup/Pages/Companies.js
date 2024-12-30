import React from 'react';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import PageTitle from './../Layout/PageTitle';
import Tab2 from './../Element/Tab2';

var bnr = require('./../../images/banner/bnr1.jpg');

function Companies(){
	return(
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + bnr + ")"}}>
					<PageTitle motherName="Home" activeName="Companies" />
				</div>
				<div className="content-block">
					<div className="section-full bg-white content-inner">
						<div className="container">
							<Tab2 />
						</div>
					</div>	
				</div>
			</div>
			<Footer />	
		</>	
	)
}
export default Companies;
