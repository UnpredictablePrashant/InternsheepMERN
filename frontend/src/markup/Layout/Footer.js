import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className="site-footer">
			<div className="footer-top">
				<div className="">
					<div className="grid-container">
						<div className="widget">
							<img src={require("./../../images/logo-white.png")} width="180" className="m-b15 footer-logo" alt="" />
						</div>
						<div className="">
							<div className="widget border-0">
								<h5 className="m-b30 text-white">Quick Links</h5>
								<ul className="list-2 list-line">
									<li><Link to={''}>About Us</Link></li>

									<li><Link to={''}>Privacy Policy</Link></li>
									<li><Link to={''}>Contact Us</Link></li>

									<li><Link to={''}>Terms & Conditions</Link></li>
									<li><Link to={''}>Sitemap</Link></li>
								</ul>
							</div>
						</div>
						{/* <p className="text-capitalize m-b20">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the.</p> */}
						{/* <div className="subscribe-form m-b20">
									<form className="dzSubscribe" action="script/mailchamp.php" method="post">
										<div className="dzSubscribeMsg"></div>
										<div className="input-group">
											<input name="dzEmail" required="required" className="form-control" placeholder="Your Email Address" type="email" />
											<span className="input-group-btn">
												<button name="submit" value="Submit" type="submit" className="site-button radius-xl">Subscribe</button>
											</span>
										</div>
									</form>
								</div> */}
						{/* <ul className="list-inline m-a0">
									<li><Link to={''} className="site-button white facebook circle "><i className="fa fa-facebook"></i></Link></li>
									<li><Link to={''} className="site-button white google-plus circle "><i className="fa fa-google-plus"></i></Link></li>
									<li><Link to={''} className="site-button white linkedin circle "><i className="fa fa-linkedin"></i></Link></li>
									<li><Link to={''} className="site-button white instagram circle "><i className="fa fa-instagram"></i></Link></li>
									<li><Link to={''} className="site-button white twitter circle "><i className="fa fa-twitter"></i></Link></li>
								</ul> */}
					</div>
				</div>

				{/* <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12">
							<div className="widget border-0">
								<h5 className="m-b30 text-white">Find Jobs</h5>
								<ul className="list-2 w10 list-line">
									<li><Link to={''}>US Jobs</Link></li>
									<li><Link to={''}>Canada Jobs</Link></li>
									<li><Link to={''}>UK Jobs</Link></li>
									<li><Link to={''}>Emplois en Fnce</Link></li>
									<li><Link to={''}>Jobs in Deuts</Link></li>
									<li><Link to={''}>Vacatures China</Link></li>
								</ul>
							</div>
						</div> */}
			</div>

			<div className="footer-bottom">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<span> © Copyright 2024 Internsheep Pvt Ltd</span>
						</div>
					</div>
				</div>
			</div>
		</footer >
	)
}

export default Footer;