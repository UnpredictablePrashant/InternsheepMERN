import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import PageTitle from './../Layout/PageTitle';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { forgotPasswordAction, loadingToggleAction, loginAction } from '../../store/actions/AuthActions';
import { connect, useDispatch } from 'react-redux';
import AuthUtils from '../../utils/AuthUtils';
import Toast from '../../utils/Toast';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useUser } from '../../contexts/UserContext';

var bnr = require('./../../images/banner/bnr2.jpg');

function Loginpage1(props) {
	const [email, setEmail] = useState('');
	let errorsObj = { email: '', password: '' };
	const [errors, setErrors] = useState(errorsObj);
	const [password, setPassword] = useState('');
	const history = useHistory()

	async function onLogin(e, role) {
		e.preventDefault();
		let error = false;
		const errorObj = { ...errorsObj };
		if (email === '') {
			errorObj.email = 'Email is Required';
			error = true;
		}
		if (password === '') {
			errorObj.password = 'Password is Required';
			error = true;
		}
		setErrors(errorObj);
		if (error) {
			return;
		}
		const res = await AuthUtils.login(email, password)

		if (res) {
			Toast.success('Logged In')

			const role = res.role
			if (role == 'student') {
				window.location.href = '/student-profile';
			} else if (role == 'company') {
				window.location.href = '/company-profile';

			}

		} else {
			Toast.failure('Login Failed')
		}

	};

	const forgotPassword = (e) => {
		e.preventDefault();
		let error = false;
		const errorObj = { ...errorsObj };
		if (email === '') {
			errorObj.email = 'Email is Required';
			error = true;
		}
		setErrors(errorObj);
		if (error) return;
	};

	return (
		<>
			<Header />
			<div className="page-content">
				<div className="login-page section-full content-inner-2 shop-account">
					<div className="container">
						<div className="max-w500 m-auto bg-white m-b30">
							<div className="p-a30 job-bx browse-job radius-sm seth">
								<Tabs
									defaultActiveKey="student"
									id="uncontrolled-tab-example"
									className="mb-3"
								>
									<Tab eventKey="student" title="Student">
										<div className="tab-content nav">
											<form onSubmit={(e) => onLogin(e, 'student')} className="col-12 p-a0">
												<h4 className="font-weight-700">Login as Student</h4>
												{/* {props.errorMessage && (
													<div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
														{props.errorMessage}
													</div>
												)}
												{props.successMessage && (
													<div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
														{props.successMessage}
													</div>
												)} */}
												<div className="form-group">
													<label>E-Mail Address*</label>
													<div className="input-group">
														<input
															type="email"
															className="form-control"
															placeholder="Type Your Email Address"
															style={{ marginRight: 0 }}
															value={email}
															onChange={(e) => setEmail(e.target.value)}
														/>
														{errors.email && <div className="text-danger fs-12">{errors.email}</div>}
													</div>
												</div>
												<div className="form-group">
													<label>Password *</label>
													<div className="input-group">
														<input
															type="password"
															className="form-control"
															value={password}
															placeholder="Type Your Password"
															style={{ marginRight: 0 }}
															onChange={(e) => setPassword(e.target.value)}
														/>
														{errors.password && <div className="text-danger fs-12">{errors.password}</div>}
													</div>
												</div>
												<div className="text-center">
													<button style={{ width: '100%' }} className="site-button float-left">Login</button>
												</div>
											</form>
											<div>
												<p
													style={{ width: 'fit-content', margin: '0 auto' }}
													onClick={(e) => forgotPassword(e)}
													className="forget-pass mb-l5"
												>
													<i className="fa fa-unlock-alt"></i> Forgot Password
												</p>
												<SignUpText />
											</div>
										</div>
									</Tab>
									<Tab eventKey="company" title="Company">
										<div className="tab-content nav">
											<form onSubmit={(e) => onLogin(e, 'org')} className="col-12 p-a0">
												<h4 className="font-weight-700">Login as Company</h4>
												{/* {props.errorMessage && (
													<div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
														{props.errorMessage}
													</div>
												)}
												{props.successMessage && (
													<div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
														{props.successMessage}
													</div>
												)} */}
												<div className="form-group">
													<label>E-Mail Address*</label>
													<div className="input-group">
														<input
															type="email"
															className="form-control"
															placeholder="Type Your Email Address"
															style={{ marginRight: 0 }}
															value={email}
															onChange={(e) => setEmail(e.target.value)}
														/>
														{errors.email && <div className="text-danger fs-12">{errors.email}</div>}
													</div>
												</div>
												<div className="form-group">
													<label>Password *</label>
													<div className="input-group">
														<input
															type="password"
															className="form-control"
															value={password}
															placeholder="Type Your Password"
															style={{ marginRight: 0 }}
															onChange={(e) => setPassword(e.target.value)}
														/>
														{errors.password && <div className="text-danger fs-12">{errors.password}</div>}
													</div>
												</div>
												<div className="text-center">
													<button style={{ width: '100%' }} className="site-button float-left">Login</button>
												</div>
											</form>
											<div>
												<p
													style={{ width: 'fit-content', margin: '0 auto' }}
													onClick={(e) => forgotPassword(e)}
													className="forget-pass mb-l5"
												>
													<i className="fa fa-unlock-alt"></i> Forgot Password
												</p>
												<SignUpText />
											</div>
										</div>
									</Tab>
								</Tabs>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

function SignUpText() {
	return (
		<div className='login-page-signup'>
			<p>Sign up as <Link to='/register/student'>Student</Link>/<Link to='/register/company'>Organisation</Link></p>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		errorMessage: state.auth.errorMessage,
		successMessage: state.auth.successMessage,
		showLoading: state.auth.showLoading,
	};
};

export default connect(mapStateToProps)(Loginpage1);