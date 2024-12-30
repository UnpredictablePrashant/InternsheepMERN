import React from 'react';
import { Form } from 'react-bootstrap';

const Projects = ({ resumeData, editField, deleteProject, addNewProject }) => {
  const years = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="modal-body">
      <div className="add-emp-body">
        <button onClick={addNewProject} className="btn btn-primary">
          <i className="fas fa-plus"></i> Add Project
        </button>
      </div>

      {resumeData.projects.map((project, index) => (
        <form key={project.id}>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <div className="d-flex justify-content-between align-items-center">
                  <label>Project Title</label>
                  <button 
                    type="button" 
                    onClick={() => deleteProject(project.id)} 
                    className="btn btn-danger btn-sm"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter Project Title"
                  value={project.title || ''}
                  onChange={(e) => editField(`projects.${index}.title`, e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <label>Project Link</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter Project Link"
                  value={project.link || ''}
                  onChange={(e) => editField(`projects.${index}.link`, e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <label>Project Status</label>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="custom-control custom-radio">
                      <input 
                        type="radio" 
                        className="custom-control-input" 
                        id={`inprogress_${project.id}`}
                        name={`status_${project.id}`}
                        checked={project.status === 'inProgress'}
                        onChange={() => editField(`projects.${index}.status`, 'inProgress')}
                      />
                      <label className="custom-control-label" htmlFor={`inprogress_${project.id}`}>In Progress</label>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="custom-control custom-radio">
                      <input 
                        type="radio" 
                        className="custom-control-input" 
                        id={`finished_${project.id}`}
                        name={`status_${project.id}`}
                        checked={project.status === 'finished'}
                        onChange={() => editField(`projects.${index}.status`, 'finished')}
                      />
                      <label className="custom-control-label" htmlFor={`finished_${project.id}`}>Finished</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-6">
              <div className="form-group">
                <label>Started Working From</label>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <Form.Control 
                      as="select"
                      value={project.from?.year || ''}
                      onChange={(e) => editField(`projects.${index}.from.year`, e.target.value)}
                    >
                      <option value="">Select Year</option>
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </Form.Control>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <Form.Control 
                      as="select"
                      value={project.from?.month || ''}
                      onChange={(e) => editField(`projects.${index}.from.month`, e.target.value)}
                    >
                      <option value="">Select Month</option>
                      {months.map(month => (
                        <option key={month} value={month}>{month}</option>
                      ))}
                    </Form.Control>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-6">
              <div className="form-group">
                <label>Worked Till</label>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <Form.Control 
                      as="select"
                      value={project.to?.year || ''}
                      onChange={(e) => editField(`projects.${index}.to.year`, e.target.value)}
                    >
                      <option value="">Select Year</option>
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </Form.Control>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <Form.Control 
                      as="select"
                      value={project.to?.month || ''}
                      onChange={(e) => editField(`projects.${index}.to.month`, e.target.value)}
                    >
                      <option value="">Select Month</option>
                      {months.map(month => (
                        <option key={month} value={month}>{month}</option>
                      ))}
                    </Form.Control>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <label>Details of Project</label>
                <textarea 
                  className="form-control" 
                  placeholder="Type Description"
                  value={project.details || ''}
                  onChange={(e) => editField(`projects.${index}.details`, e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      ))}
    </div>
  );
};

export default Projects;