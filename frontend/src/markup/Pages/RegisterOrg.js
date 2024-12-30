import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import {
	forgotPasswordAction,
	loadingToggleAction,
	signupAction,
} from '../../store/actions/AuthActions';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import { Accordion, Card } from 'react-bootstrap';

function RegisterOrg(props) {
	// Form states
	const [formData, setFormData] = useState({
		organizationName: '',
		mobileNumber: '',
		firstName: '',
		lastName: '',
		email: '',
		designation: '',
		password: '',
		employeeCount: '',
	});

	// Error states
	const [errors, setErrors] = useState({
		organizationName: '',
		mobileNumber: '',
		firstName: '',
		lastName: '',
		email: '',
		designation: '',
		password: '',
		employeeCount: '',
	});

	const dispatch = useDispatch();

	// Handle input changes
	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData(prev => ({
			...prev,
			[id]: value
		}));
		// Clear error when user starts typing
		setErrors(prev => ({
			...prev,
			[id]: ''
		}));
	};

	// Validation functions
	const validateEmail = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const validateMobileNumber = (number) => {
		return /^\d{10}$/.test(number);
	};

	const validatePassword = (password) => {
		return password.length >= 8;
	};

	const validateForm = () => {
		const newErrors = {};
		let isValid = true;

		// Organization name validation
		if (!formData.organizationName.trim()) {
			newErrors.organizationName = 'Organization name is required';
			isValid = false;
		}

		// Mobile number validation
		if (!formData.mobileNumber) {
			newErrors.mobileNumber = 'Mobile number is required';
			isValid = false;
		} else if (!validateMobileNumber(formData.mobileNumber)) {
			newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
			isValid = false;
		}

		// First name validation
		if (!formData.firstName.trim()) {
			newErrors.firstName = 'First name is required';
			isValid = false;
		}

		// Last name validation
		if (!formData.lastName.trim()) {
			newErrors.lastName = 'Last name is required';
			isValid = false;
		}

		// Email validation
		if (!formData.email) {
			newErrors.email = 'Email is required';
			isValid = false;
		} else if (!validateEmail(formData.email)) {
			newErrors.email = 'Please enter a valid email address';
			isValid = false;
		}

		// Designation validation
		if (!formData.designation.trim()) {
			newErrors.designation = 'Designation is required';
			isValid = false;
		}

		// Password validation
		if (!formData.password) {
			newErrors.password = 'Password is required';
			isValid = false;
		} else if (!validatePassword(formData.password)) {
			newErrors.password = 'Password must be at least 8 characters long';
			isValid = false;
		}

		// Employee count validation
		if (!formData.employeeCount) {
			newErrors.employeeCount = 'Employee count is required';
			isValid = false;
		} else if (isNaN(formData.employeeCount) || parseInt(formData.employeeCount) < 1) {
			newErrors.employeeCount = 'Please enter a valid number of employees';
			isValid = false;
		}

		setErrors(newErrors);
		return isValid;
	};

	const onSignUp = (e) => {
		e.preventDefault();
		if (validateForm()) {
			dispatch(loadingToggleAction(true));
			dispatch(signupAction(formData.email, formData.password, props.history));
		}
	};

	return (
		<>
			<Header />
			<div className="page-wraper bg-white">
				<div className="register-org-hero content-inner-2 container">
					<div className="grid-container">
						<div>
							<h1>Post Unlimited Internships - for Free.</h1>
							<div className="form-container">
								<form className="dez-form p-b30" onSubmit={onSignUp}>
									<div className="form-group">
										<label htmlFor="organizationName">Name of Organisation</label>
										<input
											id="organizationName"
											value={formData.organizationName}
											type="text"
											onChange={handleChange}
											className={`form-control ${errors.organizationName ? 'is-invalid' : ''}`}
										/>
										<div className="text-danger">{errors.organizationName}</div>
									</div>

									<div className="form-group">
										<label htmlFor="mobileNumber">Official Mobile Number</label>
										<input
											id="mobileNumber"
											value={formData.mobileNumber}
											type="tel"
											onChange={handleChange}
											className={`form-control ${errors.mobileNumber ? 'is-invalid' : ''}`}
											placeholder="10-digit mobile number"
										/>
										<div className="text-danger">{errors.mobileNumber}</div>
									</div>

									<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-group">
										<div>
											<label htmlFor="firstName">First Name</label>
											<input
												id="firstName"
												value={formData.firstName}
												type="text"
												onChange={handleChange}
												className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
											/>
											<div className="text-danger">{errors.firstName}</div>
										</div>
										<div>
											<label htmlFor="lastName">Last Name</label>
											<input
												id="lastName"
												value={formData.lastName}
												type="text"
												onChange={handleChange}
												className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
											/>
											<div className="text-danger">{errors.lastName}</div>
										</div>
									</div>

									<div className="form-group">
										<label htmlFor="email">Official Email ID</label>
										<input
											id="email"
											value={formData.email}
											type="email"
											onChange={handleChange}
											className={`form-control ${errors.email ? 'is-invalid' : ''}`}
											placeholder="hello@example.com"
										/>
										<div className="text-danger">{errors.email}</div>
									</div>

									<div className="form-group">
										<label htmlFor="designation">Your Designation</label>
										<input
											id="designation"
											value={formData.designation}
											type="text"
											onChange={handleChange}
											className={`form-control ${errors.designation ? 'is-invalid' : ''}`}
										/>
										<div className="text-danger">{errors.designation}</div>
									</div>

									<div className="form-group">
										<label htmlFor="password">
											Password <span style={{ color: '#808080', fontWeight: 400, fontSize: '13px' }}>(min 8 characters)</span>
										</label>
										<input
											id="password"
											value={formData.password}
											type="password"
											onChange={handleChange}
											className={`form-control ${errors.password ? 'is-invalid' : ''}`}
										/>
										<div className="text-danger">{errors.password}</div>
									</div>

									<div className="form-group">
										<label htmlFor="employeeCount">Current Number of Employees</label>
										<input
											id="employeeCount"
											value={formData.employeeCount}
											type="number"
											onChange={handleChange}
											className={`form-control ${errors.employeeCount ? 'is-invalid' : ''}`}
											min="1"
										/>
										<div className="text-danger">{errors.employeeCount}</div>
									</div>

									<div className="submit-btn form-group text-left">
										<button style={{ width: '100%' }} type="submit" className="site-button dz-xs-flex m-r5">
											Sign Up
										</button>
									</div>
								</form>

								<div className="already-user text-center bottom">
									<p>Already a User? <Link to="/login" className="">Sign In</Link></p>
								</div>
							</div>
						</div>

						<div className="banner">
							<img src="/global/img/placeholder.jpg" alt="Registration banner" />
						</div>
					</div>

					{/* Stats container remains unchanged */}
					<div className="stats-container">
						<div className="stat">
							<h3>Associated Colleges/ Unis</h3>
							<p>100+</p>
						</div>
						<div className="stat">
							<h3>Associated Organisations</h3>
							<p>100+</p>
						</div>
						<div className="stat">
							<h3>Registered Students</h3>
							<p>100+</p>
						</div>
						<div className="stat">
							<h3>Internships Available</h3>
							<p>100+</p>
						</div>
					</div>
				</div>

				{/* Pricing section remains unchanged */}
				<div className="register-org-pricing content-inner-2 container">
					<h2>Pricing</h2>
					<div className="banner">
						<h5>Limited Time Offer 🎉</h5>
						<h3>Internsheep Premium - 1 Year Plan</h3>
						<h4>Benefits</h4>
						<ul>
							<li>Post unlimited Internships</li>
							<li>Get access to applicant's contact details (Email & Mobile)</li>
							<li>Free Visibility to your Internship posting</li>
							<li>View Candidate's Resume</li>
						</ul>
						<div className='pricing-button'>
							<div className='pricing'>
								<div className='old'>
									<p>(Rs. 95,000 + GST) </p>
								</div>
								<div className='new'>
									<p>FREE !</p>
								</div>
							</div>
							<div>
								<button className='site-button'>Register Now</button>
							</div>
						</div>
					</div>
				</div>


				<div className='section-full register-org-mission content-inner-2 bg-white'>
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


					</div>

				</div>
				<div className='section-full register-org-organisations content-inner-2 bg-white'>
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
			</div>
			<Footer />
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		errorMessage: state.auth.errorMessage,
		successMessage: state.auth.successMessage,
		showLoading: state.auth.showLoading,
	};
};

export default connect(mapStateToProps)(RegisterOrg);