// ProtectedRoute.js
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import Homepage from './Pages/Homepage1';
import Homepage2 from './Pages/Homepage2';

import Jobprofile from './Pages/Jobprofile';
import Jobmyresume from './Pages/Jobmyresume';
import Jobsappliedjob from './Pages/Jobsappliedjob';
import Jobsalert from './Pages/Jobsalert';
import Jobsavedjobs from './Pages/Jobsavedjobs';
import Jobcvmanager from './Pages/Jobcvmanager';
import Changepasswordpage from './Pages/Changepasswordpage';

import Companyprofile from './Pages/Companyprofile';
import Companyresume from './Pages/Companyresume';
import Componypostjobs from './Pages/Componypostjobs';
import Companymanage from './Pages/Companymanage';
import Companytransactions from './Pages/Companytransactions';
import Browsecandidates from './Pages/Browsecandidates';


import Aboutus from './Pages/Aboutus';
import Jobdetail from './Pages/Jobdetail';
import Companies from './Pages/Companies';
import Freejobalerts from './Pages/Freejobalerts';
import Browsejoblist from './Pages/Browsejoblist';
import Browsejobgrid from './Pages/Browsejobgrid';
import Browsejobfilterlist from './Pages/Browsejobfilterlist';
import Browsejobfiltergrid from './Pages/Browsejobfiltergrid';

import Categoryalljob from './Pages/Categoryalljob';
import Categorycompanyjob from './Pages/Categorycompanyjob';
import Categorydesignationsjob from './Pages/Categorydesignationsjob';
import Categoryjobs from './Pages/Categoryjobs';
import Categorylocationjobs from './Pages/Categorylocationjobs';
import Categoryskilljobs from './Pages/Categoryskilljobs';

import Portfoliogrid2 from './Pages/Portfoliogrid2';

import Loginpage1 from './Pages/Loginpage1';
import Loginpage2 from './Pages/Loginpage2';
import Loginpage3 from './Pages/Loginpage3';

import Register1 from './Pages/Register1';
import Register2 from './Pages/Register2';
import Error404 from './Pages/Error404';

import Contact from './Pages/Contact';


import Blogclassic from './Pages/Blogclassic';
import Blogclassicsidebar from './Pages/Blogclassicsidebar';
import Blogdetailgrid from './Pages/Blogdetailgrid';
import Blogdetailgridsidebar from './Pages/Blogdetailgridsidebar';
import Blogleftimg from './Pages/Blogleftimg';
import Blogdetail from './Pages/Blogdetail';
import ScrollToTop from './Element/ScrollToTop';
import RegisterOrg from './Pages/RegisterOrg';
import UserProvider from '../contexts/UserContext';


export const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
	const { user } = useAuth();

	const getRedirectPath = (role) => {
		switch (role) {
			case 'student':
				return '/student-profile';
			case 'company':
				return '/company-profile';
			case 'admin':
				return '/admin-dashboard';
			default:
				return '/login';
		}
	};

	return (
		<Route
			{...rest}
			render={(props) => {
				// Check if user is authenticated
				if (!user) {
					return <Redirect to="/login" />;
				}

				// Check if user's role is allowed
				if (allowedRoles && !allowedRoles.includes(user.role)) {
					return <Redirect to={getRedirectPath(user.role)} />;
				}

				return <Component {...props} />;
			}}
		/>
	);
};

const Markup = () => {

	return (
		<>
			<div className="page-wraper">
				<Switch>
					{/* Public Routes - Accessible to all */}
					<Route path='/' exact component={Homepage} />
					<Route path='/home' exact component={Homepage} />
					<Route path='/about-us' exact component={Aboutus} />
					<Route path='/contact' exact component={Contact} />
					<Route path='/login' exact component={Loginpage1} />
					<Route path='/register/student' exact component={Register2} />
					<Route path='/register/company' exact component={RegisterOrg} />
					<Route path='/error-404' exact component={Error404} />


					{/* Student Routes */}
					<UserProvider>
						<ProtectedRoute path='/student-profile' allowedRoles={['student']} component={Jobprofile} />
						<ProtectedRoute path='/student-my-resume' allowedRoles={['student']} component={Jobmyresume} />
						<ProtectedRoute path='/student-applied-job' allowedRoles={['student']} component={Jobsappliedjob} />
						<ProtectedRoute path='/student-alerts' allowedRoles={['student']} component={Jobsalert} />
						<ProtectedRoute path='/student-saved-jobs' allowedRoles={['student']} component={Jobsavedjobs} />
						<ProtectedRoute path='/student-cv-manager' allowedRoles={['student']} component={Jobcvmanager} />
						<ProtectedRoute path='/student-change-password' allowedRoles={['student']} component={Changepasswordpage} />
					</UserProvider>
					{/* Company Routes */}
					<ProtectedRoute path='/company-profile' allowedRoles={['company']} component={Companyprofile} />
					<ProtectedRoute path='/company-resume' allowedRoles={['company']} component={Companyresume} />
					<ProtectedRoute path='/company-post-jobs' allowedRoles={['company']} component={Componypostjobs} />
					<ProtectedRoute path='/company-manage-job' allowedRoles={['company']} component={Companymanage} />
					<ProtectedRoute path='/company-transactions' allowedRoles={['company']} component={Companytransactions} />
					<ProtectedRoute path='/browse-candidates' allowedRoles={['company']} component={Browsecandidates} />

					{/* Admin Routes */}
					{/* <ProtectedRoute path='/admin-dashboard' allowedRoles={['admin']} component={AdminDashboard} /> */}

					{/* Common Protected Routes - Accessible to logged-in users */}
					<ProtectedRoute path='/job-detail' allowedRoles={['student', 'company', 'admin']} component={Jobdetail} />
					<ProtectedRoute path='/companies' allowedRoles={['student', 'company', 'admin']} component={Companies} />
					<ProtectedRoute path='/browse-job-list' allowedRoles={['student', 'company', 'admin']} component={Browsejoblist} />
					<ProtectedRoute path='/browse-job-grid' allowedRoles={['student', 'company', 'admin']} component={Browsejobgrid} />

					{/* Catch all unmatched routes */}
					<Route path="*" render={() => <Redirect to="/error-404" />} />
				</Switch>
			</div>
		</>
	);
};

export default Markup;