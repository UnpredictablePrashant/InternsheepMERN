import React from 'react';
import { Link } from 'react-router-dom';
import {Tab,Nav} from 'react-bootstrap';

const tabBlog = [	
	{ image: require("./../../images/gallery/masonry/img1.jpg"), },
	{ image: require("./../../images/gallery/masonry/img2.jpg"), },
	{ image: require("./../../images/gallery/masonry/img3.jpg"), },
	{ image: require("./../../images/gallery/masonry/img4.jpg"), },
	{ image: require("./../../images/gallery/masonry/img5.jpg"), },
	{ image: require("./../../images/gallery/masonry/img6.jpg"), },
	{ image: require("./../../images/gallery/masonry/img3.jpg"), },
	{ image: require("./../../images/gallery/masonry/img1.jpg"), },
	{ image: require("./../../images/gallery/masonry/img2.jpg"), },
]
const tabBlog2 = [	
	{ image: require("./../../images/gallery/masonry/img1.jpg"), },
	{ image: require("./../../images/gallery/masonry/img4.jpg"), },
	{ image: require("./../../images/gallery/masonry/img3.jpg"), },
	{ image: require("./../../images/gallery/masonry/img3.jpg"), },
	{ image: require("./../../images/gallery/masonry/img1.jpg"), },
]
const tabBlog3 = [	
	{ image: require("./../../images/gallery/masonry/img2.jpg"), },
	{ image: require("./../../images/gallery/masonry/img6.jpg"), },
	{ image: require("./../../images/gallery/masonry/img2.jpg"), },	
]
const tabBlog4 = [	
	{ image: require("./../../images/gallery/masonry/img2.jpg"), },
	{ image: require("./../../images/gallery/masonry/img3.jpg"), },
	{ image: require("./../../images/gallery/masonry/img5.jpg"), },
	{ image: require("./../../images/gallery/masonry/img3.jpg"), },
]
const tabBlog5 = [	
	{ image: require("./../../images/gallery/masonry/img1.jpg"), },
	{ image: require("./../../images/gallery/masonry/img3.jpg"), },
	{ image: require("./../../images/gallery/masonry/img4.jpg"), },
	{ image: require("./../../images/gallery/masonry/img6.jpg"), },
	{ image: require("./../../images/gallery/masonry/img2.jpg"), },
]
const tabBlog6 = [	
	{ image: require("./../../images/gallery/masonry/img2.jpg"), },
	{ image: require("./../../images/gallery/masonry/img3.jpg"), },
	{ image: require("./../../images/gallery/masonry/img6.jpg"), },
	{ image: require("./../../images/gallery/masonry/img1.jpg"), },
	{ image: require("./../../images/gallery/masonry/img2.jpg"), },
]


const Tab1 = () => {
	return (
        <Tab.Container defaultActiveKey="All">
			<div className="site-filters style1 clearfix center">
				<Nav as="ul" className="filters" >
					<Nav.Item as="li" className="btn">
						<input type="radio" />
						<Nav.Link to={"#"} eventKey="All"><span>All</span></Nav.Link>
					</Nav.Item>
					<Nav.Item as="li" className="btn">
						<input type="radio" />
						<Nav.Link to={"#"} eventKey="Designing"><span>Designing</span></Nav.Link>
					</Nav.Item>
					<Nav.Item as="li" className="btn">
						<input type="radio" />
						<Nav.Link to={"#"} eventKey="Construct"><span>Construct</span></Nav.Link>
					</Nav.Item>
					<Nav.Item as="li" className="btn">
						<input type="radio" />
						<Nav.Link to={"#"} eventKey="Finance"><span>Finance</span></Nav.Link>
					</Nav.Item>
					<Nav.Item as="li" className="btn">
						<input type="radio" />
						<Nav.Link to={"#"} eventKey="Development"><span>Development</span></Nav.Link>
					</Nav.Item>
					<Nav.Item as="li" className="btn">
						<input type="radio" />
						<Nav.Link to={"#"} eventKey="Archeology"><span>Archeology</span></Nav.Link>
					</Nav.Item>
				</Nav>
			</div>
			
			<Tab.Content>
				<Tab.Pane eventKey="All">
					<ul className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery sp10 row">
						{tabBlog.map((item,index)=>(
							<li className=" col-lg-4 col-md-3 col-sm-6 col-6 web design" key={index}> 
								<div className="dez-box dez-gallery-box">
									<div className="dez-media dez-img-overlay1 dez-img-effect">
										<Link to ={"#"}> <img src={item.image}  alt="" /> </Link>
										<div className="overlay-bx">
											<div className="overlay-icon"> 
												<a className="mfp-link" title="Image Title Come Here" href="images/gallery/masonry/img1.jpg"> <i className="ti-fullscreen"></i> </a>	
											</div>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</Tab.Pane>
				<Tab.Pane eventKey="Designing">
					<ul  className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery sp10 row">
						{tabBlog2.map((item,index)=>(
							<li className="card-container col-lg-4 col-md-3 col-sm-6 col-6 web photography" key={index}>
								<div className="dez-box dez-gallery-box">
									<div className="dez-media dez-img-overlay1 dez-img-effect"> 
									<Link to ={"#"}> <img src={item.image}  alt="" /> </Link>
										<div className="overlay-bx">
											<div className="overlay-icon"> 
												<a className="mfp-link" title="Image Title Come Here" href="images/gallery/masonry/img1.jpg"> <i className="ti-fullscreen"></i> </a>	
											</div>
										</div>
									</div>
								</div>
							</li>
						))}	
					</ul>	
				</Tab.Pane>
				
				<Tab.Pane eventKey="Construct">
					<ul className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery sp10 row">
						{tabBlog3.map((item,index)=>(
							<li className="card-container col-lg-4 col-md-3 col-sm-6 col-6 advertising design photography" key={index}>
								<div className="dez-box dez-gallery-box">
									<div className="dez-media dez-img-overlay1 dez-img-effect ">
									<Link to ={"#"}> <img src={item.image}  alt="" /> </Link>
										<div className="overlay-bx">
											<div className="overlay-icon"> 
												<a className="mfp-link" title="Image Title Come Here" href="images/gallery/masonry/img6.jpg"> <i className="ti-fullscreen"></i> </a>	
											</div>
										</div>
									</div>
								</div>
							</li>	
						))}	
						
					</ul>
				</Tab.Pane>
				<Tab.Pane eventKey="Finance">
					<ul className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery sp10 row">
						{tabBlog4.map((item,index)=>(
							<li className="card-container col-lg-4 col-md-3 col-sm-6 col-6 advertising design photography" key={index}>
								<div className="dez-box dez-gallery-box">
									<div className="dez-media dez-img-overlay1 dez-img-effect ">
									<Link to ={"#"}> <img src={item.image}  alt="" /> </Link>
										<div className="overlay-bx">
											<div className="overlay-icon"> 
												<a className="mfp-link" title="Image Title Come Here" href="images/gallery/masonry/img6.jpg"> <i className="ti-fullscreen"></i> </a>	
											</div>
										</div>
									</div>
								</div>
							</li>
						))}	
						
					</ul>
				</Tab.Pane>
				<Tab.Pane eventKey="Development">
					<ul className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery sp10 row">
						{tabBlog5.map((item,index)=>(
							<li className="card-container col-lg-4 col-md-3 col-sm-6 col-6 advertising design photography" key={index}>
								<div className="dez-box dez-gallery-box">
									<div className="dez-media dez-img-overlay1 dez-img-effect ">
									<Link to ={"#"}> <img src={item.image}  alt="" /> </Link>
										<div className="overlay-bx">
											<div className="overlay-icon"> 
												<Link className="mfp-link" title="Image Title Come Here" to="images/gallery/masonry/img6.jpg"> <i className="ti-fullscreen"></i> </Link>	
											</div>
										</div>
									</div>
								</div>
							</li>
						))}
						
					</ul>
				</Tab.Pane>	
				<Tab.Pane eventKey="Archeology">
					<ul className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery sp10 row">
						{tabBlog6.map((item,index)=>(
							<li className="card-container col-lg-4 col-md-3 col-sm-6 col-6 advertising design photography" key={index}>
								<div className="dez-box dez-gallery-box">
									<div className="dez-media dez-img-overlay1 dez-img-effect ">
									<Link to ={"#"}> <img src={item.image}  alt="" /> </Link>
										<div className="overlay-bx">
											<div className="overlay-icon"> 
												<a className="mfp-link" title="Image Title Come Here" href="images/gallery/masonry/img6.jpg"> <i className="ti-fullscreen"></i> </a>	
											</div>
										</div>
									</div>
								</div>
							</li>
						))}
						
					</ul>
				</Tab.Pane>	
			</Tab.Content>
		</Tab.Container>		
	);
}
export default Tab1;	