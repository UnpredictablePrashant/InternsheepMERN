import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import CountUp from 'react-countup';
import IndexBanner from './../Element/IndexBanner';
import Jobcategories from './../Element/Jobcategories';
import Featureblog from './../Element/Featureblog';
import Jobsection from './../Element/Jobsection';
import Owltestimonial from './../Element/Owlblog1';
import { Accordion, Card } from 'react-bootstrap';

//Images
var bnr2 = require('./../../images/background/bg4.jpg');
var bnr3 = require('./../../images/lines.png');

function Homepage() {
	return (
		<div className="page-wraper">
			<Header />


			<div className="page-content">
				{/* <IndexBanner /> */}
				<div className='section-full content-inner-2 bg-white home-hero'>
					<div className='container '>
						<div className='h-fit my-auto'>
							<h1>Internsheep is more than an internship platform.
							</h1>

							<p className='text-xl text-black'>This is a platform where careers are launched.</p>
							<Link to='/register/student'>
								<button className='site-button mt-2'>Search Internships</button>
							</Link>
						</div>
						<div className=''>
							<img className='rounded-xl' src={require('./../../images/bg6.jpg')} alt='logo' />
						</div>


					</div>

				</div>

				<div className='section-full home-organisations content-inner-2 bg-white'>
					<div className='container '>
						<h2>Our Organisations</h2>

						<div className='organisations'>
							<img src='/global/img/placeholder.jpg' />
							<img src='/global/img/placeholder.jpg' />
							<img src='/global/img/placeholder.jpg' />
							<img src='/global/img/placeholder.jpg' />
							<img src='/global/img/placeholder.jpg' />
							<img src='/global/img/placeholder.jpg' />

						</div>

					</div>

				</div>


				<div className='section-full home-mission content-inner-2 bg-white'>
					<div className='container '>

						<div className='grid-container '>
							<div className='content'>
								<h2>Our Mission</h2>
								<p>To break barriers to provide equal opportunities for students from every background, college, and region in India.</p>
							</div>
							<div className='gallery'>
								<img src='/global/img/placeholder.jpg' />
								<img src='/global/img/placeholder.jpg' />

							</div>

						</div>

						<div className='stats-container'>

							<div className='stat'>
								<h3>Associated Colleges/ Unis</h3>
								<p>100+</p>
							</div>
							<div className='stat'>
								<h3>Associated Organisations</h3>
								<p>100+</p>
							</div>
							<div className='stat'>
								<h3>Registered Students</h3>
								<p>100+</p>
							</div>
							<div className='stat'>
								<h3>Internships Available</h3>
								<p>100+</p>
							</div>
						</div>
					</div>

				</div>

				<div className='section-full home-why-choose content-inner-2 bg-white'>
					<div className='container '>
						<h2>Why Choose Us?</h2>

						<div className='grid-container '>
							<div className='card'>
								<img src='/global/img/placeholder.jpg' />
								<h3>USP Heading</h3>
								<p>Sint tempor laboris consectetur deserunt Lorem officia id.</p>
							</div>
							<div className='card'>
								<img src='/global/img/placeholder.jpg' />
								<h3>USP Heading</h3>
								<p>Sint tempor laboris consectetur deserunt Lorem officia id.</p>
							</div>
							<div className='card'>
								<img src='/global/img/placeholder.jpg' />
								<h3>USP Heading</h3>
								<p>Sint tempor laboris consectetur deserunt Lorem officia id.</p>
							</div>
							<div className='card'>
								<img src='/global/img/placeholder.jpg' />
								<h3>USP Heading</h3>
								<p>Sint tempor laboris consectetur deserunt Lorem officia id.</p>
							</div>

						</div>


					</div>

				</div>

				<div className='section-full home-higher-studies content-inner-2 bg-white'>
					<div className='container '>
						<h2>Planning for Higher Studies?</h2>

						<div className='grid-container '>
							<div className='card'>
								<img src='/global/img/placeholder.jpg' />
								<h3>Planning to Study Abroad</h3>
								<button className='site-button'>Button</button>
							</div>
							<div className='card'>
								<img src='/global/img/placeholder.jpg' />
								<h3>Planning to Study in India</h3>
								<button className='site-button'>Button</button>

							</div>


						</div>


					</div>

				</div>
				<div className='section-full home-jumpstart-career content-inner-2 bg-white'>
					<div className='container '>
						<div className='grid-container '>

							<h2>Jump Start your Career with an Internship.</h2>
							<div className='content'>
								<div className='testimonial'>
									<p>Ex cupidatat et labore esse laboris. Sunt laboris Lorem reprehenderit velit. Dolore magna do quis anim nostrud do. Nisi cupidatat pariatur fugiat voluptate tempor officia dolore magna irure in cupidatat et. Est id et anim labore laboris irure aliquip sit incididunt pariatur nisi. Minim aliqua excepteur veniam anim est occaecat esse sunt nulla dolor aute ex dolore.</p>
								</div>
								<div className='testimonial'>
									<p>Ex cupidatat et labore esse laboris. Sunt laboris Lorem reprehenderit velit. Dolore magna do quis anim nostrud do. Nisi cupidatat pariatur fugiat voluptate tempor officia dolore magna irure in cupidatat et. Est id et anim labore laboris irure aliquip sit incididunt pariatur nisi. Minim aliqua excepteur veniam anim est occaecat esse sunt nulla dolor aute ex dolore.</p>

								</div>
							</div>

						</div>


					</div>

				</div>

				<div className='section-full  faqs content-inner-2 bg-white'>
					<div className='container '>
						<h2>FAQs</h2>

						<div className='questions'>

							<Accordion defaultActiveKey="-1">

								<Accordion.Toggle className='accordion-question' as={Card} eventKey="0">
									<h4> Question</h4>
									<i class="fa fa-caret-down" aria-hidden="true"></i>

								</Accordion.Toggle>

								<Accordion.Collapse className='accordion-answer' eventKey="0">
									<p>
										Answer
									</p>
								</Accordion.Collapse>


							</Accordion>
							<Accordion defaultActiveKey="-1">

								<Accordion.Toggle className='accordion-question' as={Card} eventKey="0">
									<h4> Question</h4>
									<i class="fa fa-caret-down" aria-hidden="true"></i>

								</Accordion.Toggle>

								<Accordion.Collapse className='accordion-answer' eventKey="0">
									<p>
										Answer
									</p>
								</Accordion.Collapse>


							</Accordion>
							<Accordion defaultActiveKey="-1">

								<Accordion.Toggle className='accordion-question' as={Card} eventKey="0">
									<h4> Question</h4>
									<i class="fa fa-caret-down" aria-hidden="true"></i>

								</Accordion.Toggle>

								<Accordion.Collapse className='accordion-answer' eventKey="0">
									<p>
										Answer
									</p>
								</Accordion.Collapse>


							</Accordion>
							<Accordion defaultActiveKey="-1">

								<Accordion.Toggle className='accordion-question' as={Card} eventKey="0">
									<h4> Question</h4>
									<i class="fa fa-caret-down" aria-hidden="true"></i>

								</Accordion.Toggle>

								<Accordion.Collapse className='accordion-answer' eventKey="0">
									<p>
										Answer
									</p>
								</Accordion.Collapse>


							</Accordion>

						</div>
					</div>

				</div>
				{/* <div className="section-full job-categories content-inner-2 bg-white">
					<div className="container">
						<div className="section-head d-flex head-counter clearfix">
							<div className="mr-auto">
								<h2 className="m-b5">Popular Categories</h2>
								<h6 className="fw3">20+ Catetories work wating for you</h6>
							</div>
							<div className="head-counter-bx">
								<h2 className="m-b5 counter"><CountUp end={1800} duration={5} /></h2>
								<h6 className="fw3">Jobs Posted</h6>
							</div>
							<div className="head-counter-bx">
								<h2 className="m-b5 counter"><CountUp end={4500} duration={5} /></h2>
								<h6 className="fw3">Tasks Posted</h6>
							</div>
							<div className="head-counter-bx">
								<h2 className="m-b5 counter"><CountUp end={1500} duration={5} /></h2>
								<h6 className="fw3">Freelancers</h6>
							</div>
						</div>
						<Jobcategories />
					</div>
				</div> */}
				{/* <Featureblog /> */}
				{/* <Jobsection /> */}
				<div className="section-full p-tb70 overlay-black-dark text-white text-center bg-img-fix" style={{ backgroundImage: "url(" + bnr2 + ")" }}>
					<div className="container">
						<div className="section-head text-center text-white">
							<h2 className="m-b5">Testimonials</h2>
							<h5 className="fw4">Few words from candidates</h5>
						</div>
						<Owltestimonial />
					</div>
				</div>
				{/* <div className="section-full content-inner-2 overlay-white-middle" style={{ backgroundImage: "url( " + bnr3 + ")", backgroundPosition: "bottom", backgroundRepeat: "no-repeat", backgroundSize: "100%" }}>
					<div className="container">
						<div className="section-head text-black text-center">
							<h2 className="m-b0">Membership Plans</h2>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
						</div>
						<div className="section-content box-sort-in button-example m-t80">
							<div className="pricingtable-row">
								<div className="row max-w1000 m-auto">
									<div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
										<div className="pricingtable-wrapper style2 bg-white">
											<div className="pricingtable-inner">
												<div className="pricingtable-price">
													<h4 className="font-weight-300 m-t10 m-b0">Basic</h4>
													<div className="pricingtable-bx"><span>Free</span></div>
												</div>
												<p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
												<div className="m-t20">
													<Link to={"/register"} className="site-button radius-xl"><span className="p-lr30">Sign Up</span></Link>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
										<div className="pricingtable-wrapper style2 bg-primary text-white active">
											<div className="pricingtable-inner">
												<div className="pricingtable-price">
													<h4 className="font-weight-300 m-t10 m-b0">Professional</h4>
													<div className="pricingtable-bx"> $ <span>29</span> /  Per Installation </div>
												</div>
												<p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
												<div className="m-t20">
													<Link to={"/register"} className="site-button white radius-xl"><span className="text-primary p-lr30">Sign Up</span></Link>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
										<div className="pricingtable-wrapper style2 bg-white">
											<div className="pricingtable-inner">
												<div className="pricingtable-price">
													<h4 className="font-weight-300 m-t10 m-b0">Extended</h4>
													<div className="pricingtable-bx"> $  <span>29</span> /  Per Installation </div>
												</div>
												<p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
												<div className="m-t20">
													<Link to={"/register"} className="site-button radius-xl"><span className="p-lr30">Sign Up</span></Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}
			</div>
			<Footer />
		</div>
	)
}
export default Homepage;