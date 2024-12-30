import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import Header from '../Layout/Header';

const managerBlog = [
	{ id:1, image: require('./../../images/testimonials/pic1.jpg'), title:'Alexander Weir', },
	{ id:2, image: require('./../../images/testimonials/pic2.jpg'), title:'Jennifer Wood', },
	{ id:3, image: require('./../../images/testimonials/pic3.jpg'), title:'Melissa Hassib', },
	{ id:4, image: require('./../../images/testimonials/pic1.jpg'), title:'Joseph Macfarlan', },
	{ id:5, image: require('./../../images/testimonials/pic2.jpg'), title:'Henry Crooks', },
	{ id:6, image: require('./../../images/testimonials/pic3.jpg'), title:'James Rogers', },
]

function Jobcvmanager(){
	 const [contacts, setContacts] = useState(managerBlog);
	// delete data  
    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];    
        const index = contacts.findIndex((contact)=> contact.id === contactId);
        newContacts.splice(index, 1);
        setContacts(newContacts);
    }
	return(
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white p-t50 p-b20">
						<div className="container">
							<div className="row">
								<div className="col-xl-3 col-lg-4 m-b30">
									<div className="sticky-top">
										<div className="candidate-info">
											<div className="candidate-detail text-center">
												<div className="canditate-des">
													<Link to={"#"}>
														<img alt="" src={require("./../../images/team/pic1.jpg")} />
													</Link>
													<div className="upload-link" title="update" data-toggle="tooltip" data-placement="right">
														<input type="file" className="update-flie" />
														<i className="fa fa-camera"></i>
													</div>
												</div>
												<div className="candidate-title">
													<div className="">
														<h4 className="m-b5"><Link to={"#"}>David Matin</Link></h4>
														<p className="m-b0"><Link to={"#"}>Web developer</Link></p>
													</div>
												</div>
											</div>
											<ul>
												<li><Link to={"/student-profile"}>
													<i className="fa fa-user-o" aria-hidden="true"></i> 
													<span>Profile</span></Link></li>
												<li><Link to={"/student-my-resume"}>
													<i className="fa fa-file-text-o" aria-hidden="true"></i> 
													<span>My Resume</span></Link></li>
												<li><Link to={"/student-saved-jobs"}>
													<i className="fa fa-heart-o" aria-hidden="true"></i> 
													<span>Saved Jobs</span></Link></li>
												<li><Link to={"/student-applied-job"}>
													<i className="fa fa-briefcase" aria-hidden="true"></i> 
													<span>Applied Jobs</span></Link></li>
												<li><Link to={"/student-alerts"}>
													<i className="fa fa-bell-o" aria-hidden="true"></i> 
													<span>Job Alerts</span></Link></li>
												<li><Link to={"/student-cv-manager"} className="active">
													<i className="fa fa-id-card-o" aria-hidden="true"></i> 
													<span>CV Manager</span></Link></li>
												<li><Link to={"/student-change-password"}>
													<i className="fa fa-key" aria-hidden="true"></i> 
													<span>Change Password</span></Link></li>
												<li><Link to={"./"}>
													<i className="fa fa-sign-out" aria-hidden="true"></i> 
													<span>Log Out</span></Link></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-xl-9 col-lg-8 m-b30">
									<div className="job-bx browse-job clearfix">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase">CV Manager</h5>
											<div className="float-right">
												<span className="select-title">Sort by freshness</span>
												<select className="custom-btn">
													<option>Last 2 Months</option>
													<option>Last Months</option>
													<option>Last Weeks</option>
													<option>Last 3 Days</option>
												</select>
											</div>
										</div>
										<ul className="cv-manager">
											{contacts.map((contact,index)=>(
												<li key={index}>
													<div className="d-flex float-left">
														<div className="job-post-company">
															<Link to={"#"}><span>
																<img alt="" src={contact.image} />
															</span></Link>
														</div>
														<div className="job-post-info">
															<h6><Link to={"#"}>{contact.title}</Link></h6>
															<ul>
																<li><i className="fa fa-map-marker"></i> Sacramento, California</li>
																<li><i className="fa fa-bookmark-o"></i> Full Time</li>
																<li><i className="fa fa-clock-o"></i> 11 days ago</li>
															</ul>
														</div>
													</div>
													<div className="job-links action-bx">
														<Link to={"/files/pdf-sample.pdf"} target="blank"><i className="fa fa-download"></i></Link>
														<Link to={"#"} onClick={()=>handleDeleteClick(contact.id)}>
															<i className="ti-trash"></i>
														</Link>
													</div>
												</li>
											))}	
											
										</ul>
										<div className="pagination-bx float-right">
											<ul className="pagination">
												<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
												<li className="active"><Link to={"#"}>1</Link></li>
												<li><Link to={"#"}>2</Link></li>
												<li><Link to={"#"}>3</Link></li>
												<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
											</ul>
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
export default Jobcvmanager;