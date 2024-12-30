import React from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Jobsearchform from './../Element/Jobsearchform';

var bnr = require('./../../images/banner/bnr1.jpg');

const listBox1 =[
	{ image : require("./../../images/logo/logo17.png"), title : 'Directi Jobs',	},
	{ image : require("./../../images/logo/logo18.png"), title : 'Data Entry Jobs', },
	{ image : require("./../../images/logo/logo19.png"), title : 'Philips Software Centre Jobs', },
	{ image : require("./../../images/logo/logo20.png"), title : 'Foton Motors Jobs', },
	{ image : require("./../../images/logo/logo21.png"), title : 'Bank Jobs', },
	
]
const listBox2 =[
	{ image : require("./../../images/logo/logo21.png"), title : 'Samsung Software Jobs', },
	{ image : require("./../../images/logo/logo20.png"), title : '24/7 Customer Jobs', },
	{ image : require("./../../images/logo/logo19.png"), title : 'Samsung Software Jobs', },
	{ image : require("./../../images/logo/logo18.png"), title : 'Directi Jobs', },
	{ image : require("./../../images/logo/logo17.png"), title : 'Foton Motors Jobs',	},
	
]
const listBox3 =[
	{ image : require("./../../images/logo/logo18.png"), title : 'Directi Jobs', },
	{ image : require("./../../images/logo/logo17.png"), title : 'Data Entry Jobs', },
	{ image : require("./../../images/logo/logo20.png"), title : 'Philips Software Centre Jobs', },
	{ image : require("./../../images/logo/logo21.png"), title : '24/7 Customer Jobs', },
	{ image : require("./../../images/logo/logo19.png"), title : 'Bank Job',	},
	
]
function Categoryjobs (){
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
										<li className="active"><Link to ={"/category-jobs"}>Jobs by Category</Link></li>
										<li><Link to ={"/category-location-jobs"}>Jobs by Location</Link></li>
										<li><Link to ={"/category-designations-jobs"}>Jobs by Designation</Link></li>
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
											<h6 className="text-uppercase">Browse Jobs by Functional Area / Department
											<Link to = {""} className="float-right font-12 text-primary">View All</Link></h6>
										</div>
										<div className="row">
											<div className="col-lg-4 col-sm-12">
												<ul className="category-list category-bx">
													{listBox1.map((item,index)=>(
														<li key={index}>
															<Link to = {""}>
																<div className="logo"><img src={item.image} alt="" /></div>
																<span>{item.title}</span>
															</Link>
														</li>
													))}	
													
												</ul>
											</div>
											<div className="col-lg-4 col-sm-12">
												<ul className="category-list category-bx">
													{listBox2.map((item,index)=>(	
														<li key={index}>
															<Link to = {""}>
																<div className="logo"><img src={item.image} alt="" /></div>
																<span>{item.title}</span>
															</Link>
														</li>
													))}	
													
												</ul>
											</div>
											<div className="col-lg-4 col-sm-12">
												<ul className="category-list category-bx">
													{listBox3.map((item,index)=>(
														<li key={index}>
															<Link to = {""}>
																<div className="logo"><img src={item.image} alt="" /></div>
																<span>{item.title}</span>
															</Link>
														</li>
													))}	
													
												</ul>
											</div>  
										</div>  
									</div>    
								</div>
								<div className="col-lg-12 m-b30">
									<div className="job-bx bg-white">
										<div className="job-bx-title clearfix">
											<h6 className="text-uppercase">Browse Jobs by Industry / Sector
											<Link to = {""} className="float-right font-12 text-primary">View All</Link></h6>
										</div>
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
												</ul>
											</div>
											<div className="col-lg-3 col-sm-6">
												<ul className="category-list">
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
												</ul>
											</div>
											<div className="col-lg-3 col-sm-6">
												<ul className="category-list">
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
export default Categoryjobs;