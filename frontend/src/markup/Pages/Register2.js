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
import AuthUtils from '../../utils/AuthUtils';
import Spinner from '../../components/global/Spinner';
var bnr = require('./../../images/background/bg6.jpg');


function Register2(props) {
	const [email, setEmail] = useState('');
	let errorsObj = { email: '', password: '' };
	const [errors, setErrors] = useState(errorsObj);
	const [password, setPassword] = useState('');

	const [loading, setLoading] = useState(false)

	async function onSignUp(e) {

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
		if (error) return;

		setLoading(true)
		const res = await AuthUtils.signup(email, password, 'student')
		setLoading(false)

	}

	function forgotPassword(e) {
		let error = false;
		const errorObj = { ...errorsObj };
		if (email === '') {
			errorObj.email = 'Email is Required';
			error = true;
		}
		setErrors(errorObj);
		if (error) return;
		// dispatch(forgotPasswordAction(email));
	}

	return (
		<>
			<Header />
			<div className="page-wraper">
				<div className="browse-job login-style3">

					<div className="bg-img-fix" >
						<div className="student-login-container">
							<div className="bg-white relative ">
								<div className="login-form style-2">
									<div className="clearfix"></div>
									<div className="tab-content nav p-b30 tab">
										<div id="login" className="tab-pane active ">
											{/* {props.errorMessage && (
												<div className=''>
													{props.errorMessage}
												</div>
											)}
											{props.successMessage && (
												<div className=''>
													{props.successMessage}
												</div>
											)} */}
											<form className=" dez-form p-b30" onSubmit={onSignUp}>
												<h3 className="form-title m-t0">Jumpstart your Career with Internsheep.</h3>
												<div className="dez-separator-outer m-b5">
													<div className="dez-separator bg-primary style-liner"></div>
												</div>
												{/* <div className="dz-social clearfix">
													<ul className="dez-social-icon dez-border pull-right dez-social-icon-lg text-white">
														<li><Link to={''} className="fa fa-facebook  fb-btn mr-1" target="bank"></Link></li>
														<li><Link to={''} className="fa fa-twitter  tw-btn mr-1" target="bank"></Link></li>
														<li><Link to={''} className="fa fa-linkedin link-btn mr-1" target="bank"></Link></li>
														<li><Link to={''} className="fa fa-google-plus  gplus-btn" target="bank"></Link></li>
													</ul>

												</div> */}
												{/* <p style={{ textAlign: 'center', color: 'black', margin: '1rem 0', fontWeight: '600' }}>OR</p> */}

												<div className="form-group">
													<label htmlFor='student-login-email'>Email</label>
													<input id='student-login-email' value={email} type='email' onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="hello@example.com" />
													<div className="text-danger">{errors.email && <div>{errors.email}</div>}</div>
												</div>
												<div className="form-group">
													<label htmlFor='student-login-password'>Password  <span style={{ color: '#808080', fontWeight: 400, fontSize: '13px' }}> (min 8 characters)</span></label>

													<input id='student-login-password' value={password} type='password' className="form-control"
														onChange={(e) =>
															setPassword(e.target.value)
														}
													/>
													<div className="text-danger">{errors.password && <div>{errors.password}</div>}</div>
												</div>
												<div className="form-group text-left">
													<button style={{ width: '100%' }} type="submit" className="site-button dz-xs-flex m-r5"> {loading ? <Spinner /> : 'Sign me up'}</button>
													<span style={{ display: 'block', marginTop: '1rem' }} className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="check1" name="example1" />
														<label className="custom-control-label" htmlFor="check1">Remember me</label>
													</span>
													<p onClick={() => { forgotPassword() }} to="#forgot-password" className="forget-pass m-l5"><i className="fa fa-unlock-alt"></i> Forgot Password</p>
												</div>

											</form>
											<div className="already-user text-center bottom">

												<p>Already a User ? <Link to="/login" style={{}} className="">Sign In</Link></p>
											</div>
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
const mapStateToProps = (state) => {
	return {
		errorMessage: state.auth.errorMessage,
		successMessage: state.auth.successMessage,
		showLoading: state.auth.showLoading,
	};
};
export default connect(mapStateToProps)(Register2);