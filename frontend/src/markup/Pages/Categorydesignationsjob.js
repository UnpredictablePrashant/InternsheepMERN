import React from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Jobsearchform from './../Element/Jobsearchform';
import Companyname from './../Element/Companyname';

var bnr = require('./../../images/banner/bnr1.jpg');

function Categorydesignationsjob(){
	return(
		<>
			<Header />
			<div className="page-content">
				<div className="dez-bnr-inr jobs-category overlay-black-middle" style={{backgroundImage:"url(" + bnr + ")"}}>
					<div className="container">
						<div className="dez-bnr-inr-entry">
							<Jobsearchform />
							<div className="category-jobs-info">
								<div className="nav">
									<ul>
										<li ><Link to={"/category-all-jobs"}>All Jobs</Link></li>
										<li><Link to ={"/category-company-jobs"}>Jobs by Company</Link></li>
										<li><Link to ={"/category-jobs"}>Jobs by Category</Link></li>
										<li><Link to ={"/category-location-jobs"}>Jobs by Location</Link></li>
										<li className="active"><Link to ={"/category-designations-jobs"}>Jobs by Designation</Link></li>
										<li><Link to ={"/category-skill-jobs"}>Jobs by Skill</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="content-block">
					<div className="section-full content-inner jobs-category-bx">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 m-b30">
									<div className="job-bx bg-white">
										<div className="job-bx-title clearfix">
											<h6 className="font-weight-700 pull-left text-uppercase">Browse Jobs by Designation</h6>
										</div>
										<Companyname />
										<div className="row">
											<div className="col-lg-3 col-sm-6">
												<ul className="category-list">
													<li><Link to = {""}>Email Marketing</Link></li>
													<li><Link to = {""}>Lead Generation</Link></li>
													<li><Link to = {""}>Public Relations</Link></li>
													<li><Link to = {""}>Telemarketing Jobs</Link></li>
													<li><Link to = {""}>Display Advertising</Link></li>
													<li><Link to = {""}>Marketing Strategy</Link></li>
													<li><Link to = {""}>Search Engine Marketing</Link></li>
													<li><Link to = {""}>Other - Sales & Marketing</Link></li>
													<li><Link to = {""}>Display Advertising</Link></li>
													<li><Link to = {""}>Market & Customer</Link></li>
													<li><Link to = {""}>Search Engine Optimization</Link></li>
													<li><Link to = {""}>Social Media Marketing</Link></li>
													<li><Link to = {""}>Search Engine Marketing</Link></li>
													<li><Link to = {""}>Marketing Strategy</Link></li>
													<li><Link to = {""}>Email Marketing</Link></li>
													<li><Link to = {""}>Lead Generation</Link></li>
													<li><Link to = {""}>Public Relations</Link></li>
													<li><Link to = {""}>Telemarketing Jobs</Link></li>
													<li><Link to = {""}>Display Advertising</Link></li>
													<li><Link to = {""}>Marketing Strategy</Link></li>
													<li><Link to = {""}>Search Engine Marketing</Link></li>
													<li><Link to = {""}>Other - Sales & Marketing</Link></li>
													<li><Link to = {""}>Display Advertising</Link></li>
													<li><Link to = {""}>Market & Customer</Link></li>
													<li><Link to = {""}>Search Engine Optimization</Link></li>
													<li><Link to = {""}>Social Media Marketing</Link></li>
													<li><Link to = {""}>Search Engine Marketing</Link></li>
													<li><Link to = {""}>Marketing Strategy</Link></li>
												</ul>
											</div> 
											<div className="col-lg-3 col-sm-6">
												<ul className="category-list">
													<li><Link to = {""}>Email Marketing</Link></li>
													<li><Link to = {""}>Lead Generation</Link></li>
													<li><Link to = {""}>Public Relations</Link></li>
													<li><Link to = {""}>Telemarketing Jobs</Link></li>
													<li><Link to = {""}>Display Advertising</Link></li>
													<li><Link to = {""}>Marketing Strategy</Link></li>
													<li><Link to = {""}>Search Engine Marketing</Link></li>
													<li><Link to = {""}>Other - Sales & Marketing</Link></li>
													<li><Link to = {""}>Display Advertising</Link></li>
													<li><Link to = {""}>Market & Customer</Link></li>
													<li><Link to = {""}>Search Engine Optimization</Link></li>
													<li><Link to = {""}>Social Media Marketing</Link></li>
													<li><Link to = {""}>Search Engine Marketing</Link></li>
													<li><Link to = {""}>Marketing Strategy</Link></li>
													<li><Link to = {""}>Email Marketing</Link></li>
													<li><Link to = {""}>Lead Generation</Link></li>
													<li><Link to = {""}>Public Relations</Link></li>
													<li><Link to = {""}>Telemarketing Jobs</Link></li>
													<li><Link to = {""}>Display Advertising</Link></li>
													<li><Link to = {""}>Marketing Strategy</Link></li>
													<li><Link to = {""}>Search Engine Marketing</Link></li>
													<li><Link to = {""}>Other - Sales & Marketing</Link></li>
													<li><Link to = {""}>Display Advertising</Link></li>
													<li><Link to = {""}>Market & Customer</Link></li>
													<li><Link to = {""}>Search Engine Optimization</Link></li>
													<li><Link to = {""}>Social Media Marketing</Link></li>
													<li><Link to = {""}>Search Engine Marketing</Link></li>
													<li><Link to = {""}>Marketing Strategy</Link></li>
												</ul>
											</div>
											<div className="col-lg-3 col-sm-6">
												<ul className="category-list">
													<li><Link to = {""}>Jobs by Company</Link></li>
													<li><Link to = {""}>Jobs by Category</Link></li>
													<li><Link to = {""}>Jobs by Location</Link></li>
													<li><Link to = {""}>Jobs by Designation</Link></li>
													<li><Link to = {""}>Jobs by Skill</Link></li>
													<li><Link to = {""}>Jobs by Company</Link></li>
													<li><Link to = {""}>Jobs by Category</Link></li>
													<li><Link to = {""}>Jobs by Company</Link></li>
													<li><Link to = {""}>Jobs by Category</Link></li>
													<li><Link to = {""}>Jobs by Location</Link></li>
													<li><Link to = {""}>Jobs by Designation</Link></li>
													<li><Link to = {""}>Jobs by Skill</Link></li>
													<li><Link to = {""}>Jobs by Location</Link></li>
													<li><Link to = {""}>Jobs by Designation</Link></li>
													<li><Link to = {""}>Jobs by Company</Link></li>
													<li><Link to = {""}>Jobs by Category</Link></li>
													<li><Link to = {""}>Jobs by Location</Link></li>
													<li><Link to = {""}>Jobs by Designation</Link></li>
													<li><Link to = {""}>Jobs by Skill</Link></li>
													<li><Link to = {""}>Jobs by Company</Link></li>
													<li><Link to = {""}>Jobs by Category</Link></li>
													<li><Link to = {""}>Jobs by Company</Link></li>
													<li><Link to = {""}>Jobs by Category</Link></li>
													<li><Link to = {""}>Jobs by Location</Link></li>
													<li><Link to = {""}>Jobs by Designation</Link></li>
													<li><Link to = {""}>Jobs by Skill</Link></li>
													<li><Link to = {""}>Jobs by Location</Link></li>
													<li><Link to = {""}>Jobs by Designation</Link></li>
												</ul>
											</div>     
											<div className="col-lg-3 col-sm-6">
												<ul className="category-list">
													<li><Link to = {""}>Android Jobs</Link></li>
													<li><Link to = {""}>WordPress Jobs</Link></li>
													<li><Link to = {""}>eCommerce Jobs</Link></li>
													<li><Link to = {""}>Design Jobs</Link></li>
													<li><Link to = {""}>Mobile Jobs</Link></li>
													<li><Link to = {""}>MySQL Jobs</Link></li>
													<li><Link to = {""}>SEO Jobs</Link></li>
													<li><Link to = {""}>Website Design Jobs</Link></li>
													<li><Link to = {""}>Web Development Jobs</Link></li>
													<li><Link to = {""}>Web Design Jobs</Link></li>
													<li><Link to = {""}>Programming Jobs</Link></li>
													<li><Link to = {""}>JavaScript Jobs</Link></li>
													<li><Link to = {""}>Developer Jobs</Link></li>
													<li><Link to = {""}>Software Jobs</Link></li>
													<li><Link to = {""}>Android Jobs</Link></li>
													<li><Link to = {""}>WordPress Jobs</Link></li>
													<li><Link to = {""}>eCommerce Jobs</Link></li>
													<li><Link to = {""}>Design Jobs</Link></li>
													<li><Link to = {""}>Mobile Jobs</Link></li>
													<li><Link to = {""}>MySQL Jobs</Link></li>
													<li><Link to = {""}>SEO Jobs</Link></li>
													<li><Link to = {""}>Website Design Jobs</Link></li>
													<li><Link to = {""}>Web Development Jobs</Link></li>
													<li><Link to = {""}>Web Design Jobs</Link></li>
													<li><Link to = {""}>Programming Jobs</Link></li>
													<li><Link to = {""}>JavaScript Jobs</Link></li>
													<li><Link to = {""}>Developer Jobs</Link></li>
													<li><Link to = {""}>Software Jobs</Link></li>
												</ul>
											</div>   
										</div> 
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>		
			</div>	
			<Footer />
		</>
	)
}
export default Categorydesignationsjob;