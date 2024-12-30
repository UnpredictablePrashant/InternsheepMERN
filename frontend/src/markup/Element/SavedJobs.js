import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import swal from "sweetalert";
import {nanoid} from 'nanoid';


const jobAlert=[
	{ id:1, title: 'Social Media Expert', company:"@company-name", date:'December 15,2018', },
	{ id:2, title: 'Web Designer',		company:"@company-name", date:'November 10,2018', },
	{ id:3, title: 'Finance Accountant', 	company:"@company-name", date:'October 5,2018', },
	{ id:4, title: 'Social Media Expert', company:"@company-name", date:'December 15,2018', },
	{ id:5, title: 'Web Designer', 		company:"@company-name", date:'November 10,2018', },
	{ id:6, title: 'Finance Accountant',	company:"@company-name", date:'October 5,2018', },
	{ id:7, title: 'Social Media Expert', company:"@company-name", date:'December 15,2018', },
	{ id:8, title: 'Web Designer', 		company:"@company-name", date:'November 10,2018', },
	{ id:9, title: 'Finance Accountant',	company:"@company-name", date:'October 5,2018', },
	{ id:10, title: 'Social Media Expert', company:"@company-name", date:'December 15,2018', },	
]


const SavedJobs = () =>{	

    const [postModal, setPostModal] = useState(false);
    const [contacts, setContacts] = useState(jobAlert);
    // delete data  
    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];    
        const index = contacts.findIndex((contact)=> contact.id === contactId);
        newContacts.splice(index, 1);
        setContacts(newContacts);
    }
    
    //Add data 
    const [addFormData, setAddFormData ] = useState({
        title:'',
        company:'',
        date:'', 
		image:''
    }); 
    
    // Add contact function
    const handleAddFormChange = (event) => {
        event.preventDefault();    
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };
    
     //Add Submit data
    const handleAddFormSubmit = (event)=> {
        event.preventDefault();
        var error = false;
		var errorMsg = '';
        if(addFormData.title === ""){
            error = true;
			errorMsg = 'Please fill title';
        }else if(addFormData.company === ""){
            error = true;
			errorMsg = 'Please fill Company name.';
        }
        else if(addFormData.date === ""){
            error = true;
			errorMsg = 'Please fill Date';
        }
        if(!error){
            const newContact = {
                id: nanoid(),
                title: addFormData.title,
                company:  addFormData.company,
                date:  addFormData.date ,
				image: addFormData.image,
            };
            const newContacts = [...contacts, newContact];
            setContacts(newContacts);
            setPostModal(false);
            swal('Good job!', 'Successfully Added', "success");
            addFormData.title = addFormData.company = addFormData.date = '';         
            
        }else{
			swal('Oops', errorMsg, "error");
		}
    }; 
    
    
    const [editModal, setEditModal] = useState(false);
    
    // Edit function editable page loop
    const [editContactId, setEditContactId] = useState(null);
   
    // Edit function button click to edit
    const handleEditClick = ( event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);
        const formValues = {
            title: contact.title,
            company: contact.company,
            date: contact.date,
			image: contact.image,
        }
        setEditFormData(formValues);
        setEditModal(true);
    };
    
    
    // edit  data  
    const [editFormData, setEditFormData] = useState({
        title:'',
        company:'',
        date:'',
		image:'',
    })
    
    //update data function
    const handleEditFormChange = (event) => {
        event.preventDefault();   
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    };
    
    // edit form data submit
    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedContact = {
            id: editContactId,
            title: editFormData.title,
            company: editFormData.company,
            date: editFormData.date,
			image: editFormData.image,
        }
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact)=> contact.id === editContactId);
        newContacts[index] = editedContact;
        setContacts(newContacts);
        setEditContactId(null);
        setEditModal(false);    
    }
    
	//For Image upload in ListBlog
	/* const [file, setFile] = React.useState(null)
    const fileHandler = (e) => {
        setFile(e.target.files[0]);
		setTimeout(function(){
			var src = document.getElementById("saveImageFile").getAttribute("src");
			addFormData.image = src; 
		}, 200);
    } */
	
	
	return(
		<>
			
			<div className="job-bx save-job browse-job table-job-bx clearfix">
				<div className="job-bx-title clearfix">
					<h5 className="font-weight-700 pull-left text-uppercase">269 Saved Jobs</h5>
					<div className="float-right">
						<span className="select-title">Sort by freshness</span>
						{/* <select className="custom-btn">
							<option>Last 2 Months</option>
							<option>Last Months</option>
							<option>Last Weeks</option>
							<option>Last 3 Days</option>
						</select> */}
						<Link to={"#"} className="btn site-button" onClick={()=> setPostModal(true)}>+ Add Job</Link>
					</div>
				</div>
				<table>
					<thead>
						<tr>
							<th></th>
							<th>Job Title</th>
							<th>Company</th>
							<th>Date</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						 {contacts.map((contact, index)=>(
							<tr key={index}>
								<td className="job-post-company">
									<Link to={"#"}><span>
										<img alt="" src={require("./../../images/logo/icon2.png")} />
									</span></Link>
								</td>
								<td className="job-name"><Link to={"/job-detail"}>{contact.title}</Link></td>
								<td className="criterias text-primary"><Link to={"/company-profile"}>{contact.company}</Link></td>
								<td className="date">{contact.date}</td>
								<td className="job-links pencil">
									<Link to={"#"} 
										onClick={(event) => handleEditClick(event, contact)}
									>
										<i className="fa fa-pencil"></i>
									</Link>
									<Link to={"#"}
										onClick={()=>handleDeleteClick(contact.id)}
									>
										<i className="ti-trash"></i>
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
			
			<Modal className="modal modal-bx-info fade"  show={postModal} onHide={setPostModal} >
				<div className="">
					<div className="">
						<form >
							<div className="modal-header">
								<h4 className="modal-title fs-20">Add Task</h4>
								<button type="button" className="close" onClick={()=> setPostModal(false)}>
									<span>×</span>
								</button>
							</div>
							<div className="modal-body">
								<i className="flaticon-cancel-12 close"></i>
								<div className="add-contact-box">
									<div className="add-contact-content">
										{/* <div className="image-placeholder">	
											<div className="avatar-edit">
												<input type="file" onChange={fileHandler} id="imageUpload" 
													onClick={(event) => setFile(event.target.value)}
												/> 					
												<label htmlFor="imageUpload" name=''  ></label>
											</div>
											<div className="avatar-preview">
												<div id="imagePreview">
													<img id="saveImageFile" src={file? URL.createObjectURL(file) : user} 
														alt={file? file.name : null}
													/>
												</div>
											</div>
										</div>  */}
										 <div className="form-group">
											<label className="text-black font-w500">Job Title</label>
											<div className="contact-name">
												<input type="text"  className="form-control"  autocomplete="off"
													name="title" required="required"
													onChange={handleAddFormChange}
													placeholder="title"
												/>
												
											</div>
										</div>
										<div className="form-group ">
											<label className="text-black font-w500">Company Name</label>
											<div className="contact-name">
												<input type="text"  className="form-control"  autocomplete="off"
													name="company" required="required"
													onChange={handleAddFormChange}
													placeholder="Company Name"
												/>
												
											</div>
										</div>
										<div className="form-group ">
											<label className="text-black font-w500">Date</label>
											<div className="contact-occupation">
												<input type="text"   autocomplete="off"
													onChange={handleAddFormChange}
													name="date" required="required"
													className="form-control" placeholder="date" 
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<button type="submit" className="btn btn-primary" onClick={handleAddFormSubmit}>Add</button>  
								<button type="button" onClick={()=> setPostModal(false)} className="btn btn-danger"> <i className="flaticon-delete-1"></i> Discard</button>      
							</div>
						</form>
						
					</div>
				</div>
			</Modal>
			<Modal className="modal modal-bx-info"  show={editModal} onHide={setEditModal} >
				<div className="" >
					<div className="">
						<form >
							<div className="modal-header">
								<h4 className="modal-title fs-20">Edit Task</h4>
								<button type="button" className="close" onClick={()=> setEditModal(false)}>
									<span>×</span>
								</button>
							</div>
							<div className="modal-body">
								<i className="flaticon-cancel-12 close" ></i>
								<div className="add-contact-box">
									<div className="add-contact-content">
										<div className="form-group ">
											<label className="text-black font-w500">Job Title</label>
											<div className="contact-name">
												<input type="text"  className="form-control"  autocomplete="off"
													name="title" required="required"
													value={editFormData.title}
													onChange={handleEditFormChange}
												/>
											</div>
										</div>
										<div className="form-group ">
											<label className="text-black font-w500">Company Name</label>
											<div className="contact-name">
												<input type="text"  className="form-control"  autocomplete="off"
													name="company" required="required"
													value={editFormData.company}
													onChange={handleEditFormChange}
												/>
												<span className="validation-text"></span>
											</div>
										</div>
										<div className="form-group ">
											<label className="text-black font-w500">Client</label>
											<div className="contact-occupation">
												<input type="text"   autocomplete="off"
													value={editFormData.date}
													onChange={handleEditFormChange}
													name="date" required="required"
													className="form-control" placeholder="name" 
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<button type="submit" className="btn btn-primary" onClick={handleEditFormSubmit}>Save</button>  
								<button type="button" onClick={()=> setEditModal(false)} className="btn btn-danger">
									<i className="flaticon-delete-1"></i> Discard
								</button>      
							</div>
						</form>
						
					</div>
				</div>
			</Modal>
		</>
	)
}
export default SavedJobs;