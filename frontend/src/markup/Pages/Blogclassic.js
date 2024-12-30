import React from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Sibarpost from './../Element/Sibarpost';

var bnr = require('./../../images/banner/bnr1.jpg');

function Blogclassic(){
	return(
		<>
			<Header />
				<div className="page-content bg-white">
					
					<div className="dez-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + bnr + ")"}}>
						<div className="container">
							<div className="dez-bnr-inr-entry">
								<h1 className="text-white">Blog Classic</h1>
								
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to ={"#"}>Home</Link></li>
										<li>Blog Classic</li>
									</ul>
								</div>
								
							</div>
						</div>
					</div>
					
					<div className="content-area">
						<div className="container max-w900">
							<Sibarpost />
							<div className="pagination-bx clearfix text-center">
								<ul className="pagination">
									<li className="previous"><Link to ={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
									<li className="active"><Link to ={""}>1</Link></li>
									<li><Link to ={"#"}>2</Link></li>
									<li><Link to ={"#"}>3</Link></li>
									<li className="next"><Link to ={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
			<Footer />
		</>
	)
}	
export default Blogclassic;