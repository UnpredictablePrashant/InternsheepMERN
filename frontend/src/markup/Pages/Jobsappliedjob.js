import React from 'react';
import {Link} from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import Header from '../Layout/Header';

const postBlog = [
	{ title: 'PHP Web Developer', },
	{ title: 'Software Developer', },
	{ title: 'Branch Credit Manager', },
]

function Jobsappliedjob (){
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
													<Link to={'#'}>
														<img alt="" src={require("./../../images/team/pic1.jpg")} />
													</Link>
													<div className="upload-link" title="update" data-toggle="tooltip" data-placement="right">
														<input type="file" className="update-flie" />
														<i className="fa fa-camera"></i>
													</div>
												</div>
												<div className="candidate-title">
													<div className="">
														<h4 className="m-b5"><Link to={''}>David Matin</Link></h4>
														<p className="m-b0"><Link to={''}>Web developer</Link></p>
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
												<li><Link to={"/student-applied-job"} className="active">
													<i className="fa fa-briefcase" aria-hidden="true"></i> 
													<span>Applied Jobs</span></Link></li>
												<li><Link to={"/student-alerts"} >
													<i className="fa fa-bell-o" aria-hidden="true"></i> 
													<span>Job Alerts</span></Link></li>
												<li><Link to= {"/student-cv-manager"}>
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
								<div className="col-xl-9 col-lg-8 m-b30 browse-job">
									<div className="job-bx-title  clearfix">
										<h5 className="font-weight-700 pull-left text-uppercase">2269 Jobs Found</h5>
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
									<ul className="post-job-bx browse-job">
										{postBlog.map((item,index)=>(
											<li key={index}>
												<div className="post-bx">
													<div className="job-post-info m-a0">
														<h4><Link to={"/job-detail"}>{item.title}</Link></h4>
														<ul>
															<li><Link to={"/company-profile"}>@company-name</Link></li>
															<li><i className="fa fa-map-marker"></i> Sacramento, California</li>
															<li><i className="fa fa-money"></i> 25,000</li>
														</ul>
														<div className="job-time m-t15 m-b10">
															<Link to={''} className="mr-1"><span>PHP</span></Link>
															<Link to={''} className="mr-1"><span>Angular</span></Link>
															<Link to={''} className="mr-1"><span>Bootstrap</span></Link>
															<Link to={''} className="mr-1"><span>Wordpress</span></Link>
														</div>
														<div className="posted-info clearfix">
															<p className="m-tb0 text-primary float-left"><span className="text-black m-r10">Posted:</span> 2 day ago</p>
															<Link to={"/student-my-resume"} className="site-button button-sm float-right">Apply Job</Link>
														</div>
													</div>
												</div>
											</li>
										))}	
										
									</ul>
									<div className="pagination-bx m-t30">
										<ul className="pagination">
											<li className="previous"><Link to={'#'}><i className="ti-arrow-left"></i> Prev</Link></li>
											<li className="active"><Link to={'#'}>1</Link></li>
											<li><Link to={'#'}>2</Link></li>
											<li><Link to={'#'}>3</Link></li>
											<li className="next"><Link to={'#'}>Next <i className="ti-arrow-right"></i></Link></li>
										</ul>
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
export default Jobsappliedjob; 