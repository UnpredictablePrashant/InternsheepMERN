import React from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Jobsearchform from './../Element/Jobsearchform';

var bnr = require('./../../images/banner/bnr1.jpg');

function Categoryskilljobs(){
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
										<li><Link to ={"/category-designations-jobs"}>Jobs by Designation</Link></li>
										<li className="active"><Link to ={"/category-skill-jobs"}>Jobs by Skill</Link></li>
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
											<h6 className="text-uppercase">Browse Jobs by IT Skills
											<Link to = {""} className="float-right font-12 text-primary">View All</Link></h6>
										</div>
										<div className="row">
											<div className="col-lg-3 col-md-6 col-sm-6">
												<ul className="category-list">
													<li><Link to = {""}>Jobs by Company</Link></li>
													<li><Link to = {""}>Jobs by Category</Link></li>
													<li><Link to = {""}>Jobs by Location</Link></li>
													<li><Link to = {""}>Jobs by Designation</Link></li>
													<li><Link to = {""}>Jobs by Skill</Link></li>
													<li><Link to = {""}>Jobs by Company</Link></li>
													<li><Link to = {""}>Jobs by Category</Link></li>
												</ul>
											</div>    
											<div className="col-lg-3 col-md-6 col-sm-6">
												<ul className="category-list">
													<li><Link to = {""}>Jobs by Company</Link></li>
													<li><Link to = {""}>Jobs by Category</Link></li>
													<li><Link to = {""}>Jobs by Location</Link></li>
													<li><Link to = {""}>Jobs by Designation</Link></li>
													<li><Link to = {""}>Jobs by Skill</Link></li>
													<li><Link to = {""}>Jobs by Location</Link></li>
													<li><Link to = {""}>Jobs by Designation</Link></li>
												</ul>
											</div>  
											<div className="col-lg-3 col-md-6 col-sm-6">
												<ul className="category-list">
													<li><Link to = {""}>Jobs by Company</Link></li>
													<li><Link to = {""}>Jobs by Category</Link></li>
													<li><Link to = {""}>Jobs by Location</Link></li>
													<li><Link to = {""}>Jobs by Designation</Link></li>
													<li><Link to = {""}>Jobs by Skill</Link></li>
													<li><Link to = {""}>Jobs by Company</Link></li>
													<li><Link to = {""}>Jobs by Category</Link></li>
												</ul>
											</div>    
											<div className="col-lg-3 col-md-6 col-sm-6">
												<ul className="category-list">
													<li><Link to = {""}>Jobs by Company</Link></li>
													<li><Link to = {""}>Jobs by Category</Link></li>
													<li><Link to = {""}>Jobs by Location</Link></li>
													<li><Link to = {""}>Jobs by Designation</Link></li>
													<li><Link to = {""}>Jobs by Skill</Link></li>
													<li><Link to = {""}>Jobs by Location</Link></li>
													<li><Link to = {""}>Jobs by Designation</Link></li>
												</ul>
											</div>  									
										</div>    
									</div>    
								</div>
								<div className="col-lg-12 m-b30">
									<div className="job-bx bg-white">
										<div className="job-bx-title clearfix">
											<h6 className="text-uppercase">Browse Jobs By Non-IT Skills
											<Link to = {""} className="float-right font-12 text-primary">View All</Link></h6>
										</div>
										<div className="row">
											<div className="col-lg-3 col-md-6 col-sm-6">
												<ul className="category-list">
													<li><Link to = {""}>Jobs by Company</Link></li>
													<li><Link to = {""}>Jobs by Category</Link></li>
													<li><Link to = {""}>Jobs by Location</Link></li>
													<li><Link to = {""}>Jobs by Designation</Link></li>
													<li><Link to = {""}>Jobs by Skill</Link></li>
													<li><Link to = {""}>Jobs by Company</Link></li>
													<li><Link to = {""}>Jobs by Category</Link></li>
												</ul>
											</div>    
											<div className="col-lg-3 col-md-6 col-sm-6">
												<ul className="category-list">
													<li><Link to = {""}>Jobs by Company</Link></li>
													<li><Link to = {""}>Jobs by Category</Link></li>
													<li><Link to = {""}>Jobs by Location</Link></li>
													<li><Link to = {""}>Jobs by Designation</Link></li>
													<li><Link to = {""}>Jobs by Skill</Link></li>
													<li><Link to = {""}>Jobs by Location</Link></li>
													<li><Link to = {""}>Jobs by Designation</Link></li>
												</ul>
											</div> 
											<div className="col-lg-3 col-md-6 col-sm-6">
												<ul className="category-list">
													<li><Link to = {""}>Jobs by Company</Link></li>
													<li><Link to = {""}>Jobs by Category</Link></li>
													<li><Link to = {""}>Jobs by Location</Link></li>
													<li><Link to = {""}>Jobs by Designation</Link></li>
													<li><Link to = {""}>Jobs by Skill</Link></li>
													<li><Link to = {""}>Jobs by Company</Link></li>
													<li><Link to = {""}>Jobs by Category</Link></li>
												</ul>
											</div>    
											<div className="col-lg-3 col-md-6 col-sm-6">
												<ul className="category-list">
													<li><Link to = {""}>Jobs by Company</Link></li>
													<li><Link to = {""}>Jobs by Category</Link></li>
													<li><Link to = {""}>Jobs by Location</Link></li>
													<li><Link to = {""}>Jobs by Designation</Link></li>
													<li><Link to = {""}>Jobs by Skill</Link></li>
													<li><Link to = {""}>Jobs by Location</Link></li>
													<li><Link to = {""}>Jobs by Designation</Link></li>
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
export default Categoryskilljobs;