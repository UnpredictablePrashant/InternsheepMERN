import React from 'react';
import { Link } from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import Header from '../Layout/Header';

function Changepasswordpage() {
	return (
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white browse-job p-t50 p-b20">
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
													<span>Profile</span></Link>
												</li>
												<li><Link to={"/student-my-resume"}>
													<i className="fa fa-file-text-o" aria-hidden="true"></i>
													<span>My Resume</span></Link>
												</li>
												<li><Link to={"/student-saved-jobs"}>
													<i className="fa fa-heart-o" ></i>
													<span>Saved Jobs</span></Link>
												</li>
												<li><Link to={"/student-applied-job"}>
													<i className="fa fa-briefcase" ></i>
													<span>Applied Jobs</span></Link>
												</li>
												<li><Link to={"/student-alerts"}>
													<i className="fa fa-bell-o" ></i>
													<span>Job Alerts</span></Link>
												</li>
												<li><Link to={"/student-cv-manager"}>
													<i className="fa fa-id-card-o" ></i>
													<span>CV Manager</span></Link>
												</li>
												<li><Link to={"/student-change-password"} className="active">
													<i className="fa fa-key" ></i>
													<span>Change Password</span>
												</Link>
												</li>
												<li><Link to={"./"}>
													<i className="fa fa-sign-out"></i>
													<span>Log Out</span></Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-xl-9 col-lg-8 m-b30">
									<div className="job-bx job-profile">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase">Change Password</h5>
											<Link to={"/student-cv-manager"} className="site-button right-arrow button-sm float-right">Back</Link>
										</div>
										<form>
											<div className="row">
												<div className="col-lg-12">
													<div className="form-group">
														<label>Old Password</label>
														<input type="password" className="form-control" />
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<label>New Password </label>
														<input type="password" className="form-control" />
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<label>Confirm New Password</label>
														<input type="password" className="form-control" />
													</div>
												</div>
												<div className="col-lg-12 m-b10">
													<button className="site-button">Update Password</button>
												</div>
											</div>
										</form>
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
export default Changepasswordpage;