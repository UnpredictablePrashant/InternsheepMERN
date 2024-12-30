import React from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Jobsearchform from './../Element/Jobsearchform';
import Companyname from './../Element/Companyname';

//Images
import logo17 from './../../images/logo/logo17.png';
import logo18 from './../../images/logo/logo18.png';
import logo19 from './../../images/logo/logo19.png';
import logo20 from './../../images/logo/logo20.png';
import logo21 from './../../images/logo/logo21.png';
import bnr from './../../images/banner/bnr1.jpg';


const listBox1 =[
	{ image : logo17, title : 'Email Marketing',	},
	{ image : logo18, title : '24/7 Customer Jobs', },
	{ image : logo19, title : 'African Commodities DMCC Jobs', },
	{ image : logo20, title : 'Foton Motors Jobs', },
	{ image : logo21, title : 'Religare Technologies Jobs', },
	{ image : logo17, title : 'Bank Job', },
	{ image : logo18, title : 'Philips Software Centre Jobs', },
	{ image : logo19, title : 'Samsung Software Jobs', },
	{ image : logo20, title : 'Directi Jobs', },
	{ image : logo21, title : 'Data Entry Jobs', },
]
const listBox2 =[
	{ image : logo21, title : 'Philips Software Centre Jobs', },
	{ image : logo20, title : 'Bank Jobs', },
	{ image : logo19, title : 'Samsung Software Jobs', },
	{ image : logo18, title : 'Directi Jobs', },
	{ image : logo17, title : 'Data Entry Jobs',	},
	{ image : logo21, title : 'Bank Job', },
	{ image : logo20, title : 'Email Marketing',	},
	{ image : logo19, title : '24/7 Customer Jobs', },
	{ image : logo18, title : 'African Commodities DMCC Jobs', },
	{ image : logo17, title : 'Foton Motors Jobs',	},
]
const listBox3 =[
	{ image : logo18, title : 'Directi Jobs', },
	{ image : logo17, title : 'Data Entry Jobs', },
	{ image : logo20, title : 'Philips Software Centre Jobs', },
	{ image : logo21, title : '24/7 Customer Jobs', },
	{ image : logo19, title : 'Bank Job',	},
	{ image : logo17, title : 'Samsung Software Jobs', },
	{ image : logo18, title : 'Directi Jobs',	},
	{ image : logo20, title : 'Foton Motors Jobs', },
	{ image : logo21, title : 'Email Marketing', },
	{ image : logo19, title : 'African Commodities DMCC Jobs',	},
]
function Categorycompanyjob(){
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
										<li className="active"><Link to ={"/category-company-jobs"}>Jobs by Company</Link></li>
										<li><Link to ={"/category-jobs"}>Jobs by Category</Link></li>
										<li><Link to ={"/category-location-jobs"}>Jobs by Location</Link></li>
										<li ><Link to ={"/category-designations-jobs"}>Jobs by Designation</Link></li>
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
											<h6 className="font-weight-700 pull-left text-uppercase">Browse Jobs by Companies</h6>
										</div>
										<Companyname />
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
							</div>
						</div>
					</div>
				</div>	
			</div>
			<Footer />	
		</>
	)
}
export default Categorycompanyjob;