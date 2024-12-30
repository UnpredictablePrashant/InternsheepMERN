import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import Header from '../Layout/Header';

const jobAlert = [
	{ id: 1, title: 'Social Media Expert', date: 'December 15,2018', },
	{ id: 2, title: 'Web Designer', date: 'November 10,2018', },
	{ id: 3, title: 'Finance Accountant', date: 'October 5,2018', },
	{ id: 4, title: 'Social Media Expert', date: 'December 15,2018', },
	{ id: 5, title: 'Web Designer', date: 'November 10,2018', },
	{ id: 6, title: 'Finance Accountant', date: 'October 5,2018', },
	{ id: 7, title: 'Social Media Expert', date: 'December 15,2018', },
	{ id: 8, title: 'Web Designer', date: 'November 10,2018', },
	{ id: 9, title: 'Finance Accountant', date: 'October 5,2018', },
	{ id: 10, title: 'Social Media Expert', date: 'December 15,2018', },
]

function Jobsalert() {
	const [company, setCompany] = useState(false);
	const [contacts, setContacts] = useState(jobAlert);
	// delete data  
	const handleDeleteClick = (contactId) => {
		const newContacts = [...contacts];
		const index = contacts.findIndex((contact) => contact.id === contactId);
		newContacts.splice(index, 1);
		setContacts(newContacts);
	}
	return (
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
												<li><Link to={"/student-alerts"} className="active">
													<i className="fa fa-bell-o" aria-hidden="true"></i>
													<span>Job Alerts</span></Link></li>
												<li><Link to={"/student-cv-manager"}>
													<i className="fa fa-id-card-o" aria-hidden="true"></i>
													<span>CV Manager</span></Link></li>
												<li><Link to={"/student-change-password"}>
													<i className="fa fa-key" aria-hidden="true"></i>
													<span>Change Password</span></Link></li>
												<li><Link to={"#"}>
													<i className="fa fa-sign-out" aria-hidden="true"></i>
													<span>Log Out</span></Link></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-xl-9 col-lg-8 m-b30">
									<div className="job-bx table-job-bx browse-job clearfix">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase">Job Alerts</h5>
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
										<table>
											<thead>
												<tr>
													<th>Premium jobs</th>
													<th>Criterias</th>
													<th>Date</th>
													<th></th>
												</tr>
											</thead>
											<tbody>
												{contacts.map((contact, index) => (
													<tr key={index}>
														<td className="job-name"><Link to={"/job-detail"}>{contact.title}</Link></td>
														<td className="criterias">Lorem Ipsum is simply dummy text.</td>
														<td className="date">{contact.date}</td>
														<td className="job-links">
															<Link to={'#'} onClick={() => setCompany(true)}>
																<i className="fa fa-eye"></i></Link>
															<Link to={"#"}
																onClick={() => handleDeleteClick(contact.id)}
															><i className="ti-trash"></i>
															</Link>
														</td>
													</tr>
												))}

											</tbody>
										</table>
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
									<Modal show={company} onHide={setCompany} className=" fade modal-bx-info">
										<div role="document">
											<div className="modal-content">
												<div className="modal-header">
													<div className="logo-img">
														<img alt="" src={require("./../../images/logo/icon2.png")} />
													</div>
													<h5 className="modal-title">Company Name</h5>
													<button type="button" className="close" onClick={() => setCompany(false)}>
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div className="modal-body">
													<ul>
														<li><strong>Job Title :</strong><p> Web Developer – PHP, HTML, CSS </p></li>
														<li><strong>Experience :</strong><p>5 Year 3 Months</p></li>
														<li><strong>Deseription :</strong>
															<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since.</p>
														</li>
													</ul>
												</div>
												<div className="modal-footer">
													<button type="button" className="btn btn-secondary" onClick={() => setCompany(false)}>Close</button>
												</div>
											</div>
										</div>
									</Modal>

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
export default Jobsalert;