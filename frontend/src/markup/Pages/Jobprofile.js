import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import Profilesidebar from './../Element/Profilesidebar';
import Header from '../Layout/Header';
import { useUser } from '../../contexts/UserContext';
import Format from '../../utils/Format';

const validationSchema = Yup.object().shape({
	firstName: Yup.string()
		.required('Name is required')
		.min(2, 'Name must be at least 2 characters')
		.max(20, 'Name must be less than 30 characters'),
	lastName: Yup.string()
		.required('Name is required')
		.min(2, 'Name must be at least 2 characters')
		.max(20, 'Name must be less than 30 characters'),
	// professionalTitle: Yup.string()
	// 	.required('Professional title is required')
	// 	.max(50, 'Professional title must be less than 50 characters'),
	// languages: Yup.string()
	// 	.required('Please specify at least one language'),
	// age: Yup.number()
	// 	.required('Age is required')
	// 	.min(16, 'Must be at least 16 years old')
	// 	.max(100, 'Invalid age'),
	// expectedSalary: Yup.number()
	// 	.required('Expected salary is required')
	// 	.min(0, 'Salary cannot be negative'),
	// description: Yup.string()
	// 	.required('Please provide a brief description about yourself')
	// 	.min(50, 'Description should be at least 50 characters')
	// 	.max(500, 'Description should not exceed 500 characters'),
	contactNumber: Yup.string()
		.required('Phone number is required')
		.matches(/^[0-9+\-() ]+$/, 'Invalid phone number format'),
	// email: Yup.string()
	// 	.required('Email is required')
	// 	.email('Invalid email format'),
	// city: Yup.string()
	// 	.required('City is required'),
	// country: Yup.string()
	// 	.required('Country is required'),
});

function JobProfile() {

	const { userDetails, updateUserDetails, fetchUserDetails } = useUser();

	useEffect(() => {
		fetchUserDetails();
	}, []);

	const handleSubmit = async (values, { setSubmitting }) => {
		console.log('submitting')
		try {
			await updateUserDetails(values);
		} catch (error) {
			console.error('Error updating profile:', error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white browse-job p-t50 p-b20">
						<div className="container">
							<div className="row">
								<Profilesidebar />
								<div className="col-xl-9 col-lg-8 m-b30">
									<div className="job-bx job-profile">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase">Basic Information</h5>
											<Link to={"./"} className="site-button right-arrow button-sm float-right">Back</Link>
										</div>

										<Formik
											initialValues={userDetails || {
												firstName: "",
												lastName: "",
												dob: "",
												gender: "",
												contactNumber: "",
												description: "",
												email: "",
												address: {
													street: "",
													city: "",
													state: "",
													zip: "",
													country: ""
												}
											}}
											enableReinitialize
											validationSchema={validationSchema}
											onSubmit={handleSubmit}
										>
											{({ isSubmitting, setFieldValue }) => (
												<Form>
													<div className="row m-b30">
														<div className="col-lg-6 col-md-6">
															<div className="form-group">
																<label>First Name: <span className="text-danger">*</span></label>
																<Field
																	type="text"
																	name="firstName"
																	className="form-control"
																	placeholder="Enter your First name"
																/>
																<ErrorMessage
																	name="firstName"
																	component="div"
																	className="text-danger"
																/>
															</div>
														</div>
														<div className="col-lg-6 col-md-6">
															<div className="form-group">
																<label>Last Name: <span className="text-danger">*</span></label>
																<Field
																	type="text"
																	name="lastName"
																	className="form-control"
																	placeholder="Enter your Last name"
																/>
																<ErrorMessage
																	name="lastName"
																	component="div"
																	className="text-danger"
																/>
															</div>
														</div>

														{/* <div className="col-lg-6 col-md-6">
															<div className="form-group">
																<label>Professional title: <span className="text-danger">*</span></label>
																<Field
																	type="text"
																	name="professionalTitle"
																	className="form-control"
																	placeholder="e.g. Web Developer"
																/>
																<ErrorMessage
																	name="professionalTitle"
																	component="div"
																	className="text-danger"
																/>
															</div>
														</div> */}

														{/* <div className="col-lg-6 col-md-6">
															<div className="form-group">
																<label>Languages: <span className="text-danger">*</span></label>
																<Field
																	type="text"
																	name="languages"
																	className="form-control"
																	placeholder="e.g. English, Hindi"
																/>
																<ErrorMessage
																	name="languages"
																	component="div"
																	className="text-danger"
																/>
															</div>
														</div> */}

														<div className="col-lg-6 col-md-6">
															<div className="form-group">
																<label>Date of Birth: (DD-MM-YYYY) <span className="text-danger">*</span></label>
																<Field
																	type="text"
																	name="dob"
																	className="form-control"
																	placeholder="Enter your DOB"
																/>
																<ErrorMessage
																	name="dob"
																	component="div"
																	className="text-danger"
																/>
															</div>
														</div>
														{/* <div className="col-lg-6 col-md-6">
															<div className="form-group">
																<label>Age: <span className="text-danger">*</span></label>
																<Field
																	type="number"
																	name="age"
																	className="form-control"
																	placeholder="Enter your age"
																/>
																<ErrorMessage
																	name="age"
																	component="div"
																	className="text-danger"
																/>
															</div>
														</div> */}

														{/* <div className="col-lg-6 col-md-6">
															<div className="form-group">
																<label>Expected Salary (₹): <span className="text-danger">*</span></label>
																<Field
																	type="number"
																	name="expectedSalary"
																	className="form-control"
																	placeholder="Enter expected salary"
																/>
																<ErrorMessage
																	name="expectedSalary"
																	component="div"
																	className="text-danger"
																/>
															</div>
														</div> */}

														<div className="col-lg-12 col-md-12">
															<div className="form-group">
																<label>Description: <span className="text-danger">*</span></label>
																<Field
																	as="textarea"
																	name="description"
																	className="form-control"
																	placeholder="Tell us about yourself, your skills and experience"
																	rows="4"
																/>
																<ErrorMessage
																	name="description"
																	component="div"
																	className="text-danger"
																/>
															</div>
														</div>
													</div>

													<div className="job-bx-title clearfix">
														<h5 className="font-weight-700 pull-left text-uppercase">Contact Information</h5>
													</div>

													<div className="row">
														<div className="col-lg-6 col-md-6">
															<div className="form-group">
																<label>Phone: <span className="text-danger">*</span></label>
																<Field
																	type="text"
																	name="contactNumber"
																	className="form-control"
																	placeholder="Enter phone number"
																/>
																<ErrorMessage
																	name="contactNumber"
																	component="div"
																	className="text-danger"
																/>
															</div>
														</div>

														<div className="col-lg-6 col-md-6">
															<div className="form-group">
																<label>Email Address: <span className="text-danger">*</span></label>
																<Field
																	type="email"
																	name="email"
																	className="form-control"
																	placeholder="Enter email address"
																/>
																<ErrorMessage
																	name="email"
																	component="div"
																	className="text-danger"
																/>
															</div>
														</div>

														<div className="col-lg-6 col-md-6">
															<div className="form-group">
																<label>Country: <span className="text-danger">*</span></label>
																<Field
																	type="text"
																	name="country"
																	className="form-control"
																	placeholder="Enter country"
																/>
																<ErrorMessage
																	name="country"
																	component="div"
																	className="text-danger"
																/>
															</div>
														</div>

														<div className="col-lg-6 col-md-6">
															<div className="form-group">
																<label>City: <span className="text-danger">*</span></label>
																<Field
																	type="text"
																	name="city"
																	className="form-control"
																	placeholder="Enter city"
																/>
																<ErrorMessage
																	name="city"
																	component="div"
																	className="text-danger"
																/>
															</div>
														</div>
													</div>

													<button
														type="submit"
														className="site-button m-b30"
														disabled={isSubmitting}
													>
														{isSubmitting ? 'Saving...' : 'Save Profile'}
													</button>
												</Form>
											)}
										</Formik>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >
			<Footer />
		</>
	);
}

export default JobProfile;