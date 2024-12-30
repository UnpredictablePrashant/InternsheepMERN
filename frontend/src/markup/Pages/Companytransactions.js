import React from 'react';
import {Link} from 'react-router-dom';
import Header2 from './../Layout/Header2'; 
import Footer from './../Layout/Footer'; 
import Header from '../Layout/Header';

function Companytransactions(){
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
										<div className="candidate-info company-info">
											<div className="candidate-detail text-center">
												<div className="canditate-des">
													<Link to={"#"}>
														<img alt="" src={require("./../../images/logo/icon3.jpg")} />
													</Link>
													<div className="upload-link" title="update" data-toggle="tooltip" data-placement="right">
														<input type="file" className="update-flie" />
														<i className="fa fa-pencil"></i>
													</div>
												</div>
												<div className="candidate-title">
													<h4 className="m-b5"><Link to={"#"}>@COMPANY</Link></h4>
												</div>
											</div>
											<ul>
												<li><Link to ={"/company-profile"}>
													<i className="fa fa-user-o" aria-hidden="true"></i> 
													<span>Company Profile</span></Link>
												</li>
												<li><Link to={"/company-post-jobs"}>
													<i className="fa fa-file-text-o" aria-hidden="true"></i> 
													<span>Post A Job</span></Link>
												</li>
												<li><Link to={"/company-transactions"} className="active">
													<i className="fa fa-random" aria-hidden="true"></i>
													<span>Transactions</span></Link>
												</li>
												<li><Link to={"/company-manage-job"}>
													<i className="fa fa-briefcase" aria-hidden="true"></i> 
													<span>Manage jobs</span></Link>
												</li>
												<li><Link to={"/company-resume"}>
													<i className="fa fa-id-card-o" aria-hidden="true"></i>
													<span>Resume</span></Link>
												</li>
												<li><Link to={"/student-change-password"}>
													<i className="fa fa-key" aria-hidden="true"></i> 
													<span>Change Password</span></Link>
												</li>
												<li><Link to={"./"}>
													<i className="fa fa-sign-out" aria-hidden="true"></i> 
													<span>Log Out</span></Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-xl-9 col-lg-8 m-b30">
									<div className="job-bx table-job-bx clearfix">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase">Transaction History</h5>
											<Link to={"/company-post-jobs"} className="site-button right-arrow button-sm float-right">Back</Link>
										</div>
										<table>
											<thead>
												<tr>
													<th>Order ID</th>
													<th>Type</th>
													<th>Amount</th>
													<th>Date</th>
													<th>Payment Method</th>
													<th>Status</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="order-id text-primary">#123</td>
													<td className="job-name"><Link to={''}>Social Media Expert</Link></td>
													<td className="amount text-primary">$99.00</td>
													<td className="date">Dec 15,2018</td>
													<td className="transfer">Paypal</td>
													<td className="expired pending">Pending </td>
												</tr>
												<tr>
													<td className="order-id text-primary">#456</td>
													<td className="job-name"><Link to ={'#'}>Web Designer</Link></td>
													<td className="amount text-primary">$199.00</td>
													<td className="date">Nov 10,2018</td>
													<td className="transfer">Bank Transfer</td>
													<td className="expired pending">Pending</td>
												</tr>
												<tr>
													<td className="order-id text-primary">#789</td>
													<td className="job-name"><Link to ={'#'}>Finance Accountant</Link></td>
													<td className="amount text-primary">$299.00</td>
													<td className="date">Oct 5,2018</td>
													<td className="transfer">Paypal</td>
													<td className="expired pending">Pending </td>
												</tr>
												<tr>
													<td className="order-id text-primary">#101</td>
													<td className="job-name"><Link to ={'#'}>Social Media Expert</Link></td>
													<td className="amount text-primary">$399.00</td>
													<td className="date">Dec 15,2018</td>
													<td className="transfer">Bank Transfer</td>
													<td className="expired success">Successfull </td>
												</tr>
												<tr>
													<td className="order-id text-primary">#112</td>
													<td className="job-name"><Link to ={'#'}>Web Designer</Link></td>
													<td className="amount text-primary">$499.00</td>
													<td className="date">Nov 10,2018</td>
													<td className="transfer">Paypal</td>
													<td className="expired pending">Pending </td>
												</tr>
												<tr>
													<td className="order-id text-primary">#987</td>
													<td className="job-name"><Link to ={'#'}>Finance Accountant</Link></td>
													<td className="amount text-primary">$599.00</td>
													<td className="date">Oct 5,2018</td>
													<td className="transfer">Bank Transfer</td>
													<td className="expired success">Successfull </td>
												</tr>
												<tr>
													<td className="order-id text-primary">#654</td>
													<td className="job-name"><Link to ={'#'}>Social Media Expert</Link></td>
													<td className="amount text-primary">$699.00</td>
													<td className="date">Dec 15,2018</td>
													<td className="transfer">Paypal</td>
													<td className="expired success">Successfull </td>
												</tr>
												<tr>
													<td className="order-id text-primary">#321</td>
													<td className="job-name"><Link to ={'#'}>Web Designer</Link></td>
													<td className="amount text-primary">$799.00</td>
													<td className="date">Nov 10,2018</td>
													<td className="transfer">Bank Transfer</td>
													<td className="expired success">Successfull </td>
												</tr>
												<tr>
													<td className="order-id text-primary">#569</td>
													<td className="job-name"><Link to ={'#'}>Finance Accountant</Link></td>
													<td className="amount text-primary">$899.00</td>
													<td className="date">Oct 5,2018</td>
													<td className="transfer">Paypal</td>
													<td className="expired pending">Pending </td>
												</tr>
												<tr>
													<td className="order-id text-primary">#563</td>
													<td className="job-name"><Link to ={'#'}>Web Designer</Link></td>
													<td className="amount text-primary">$999.00</td>
													<td className="date">Nov 10,2018</td>
													<td className="transfer">Bank Transfer</td>
													<td className="expired success">Successfull </td>
												</tr>
											</tbody>
										</table>
										<div className="pagination-bx float-right">
											<ul className="pagination">
												<li className="previous"><Link to ={'#'}><i className="ti-arrow-left"></i> Prev</Link></li>
												<li className="active"><Link to ={'#'}>1</Link></li>
												<li><Link to ={'#'}>2</Link></li>
												<li><Link to ={'#'}>3</Link></li>
												<li className="next"><Link to ={'#'}>Next <i className="ti-arrow-right"></i></Link></li>
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
export default Companytransactions;