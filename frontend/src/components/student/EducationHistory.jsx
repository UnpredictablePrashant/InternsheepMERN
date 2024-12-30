import React from 'react';
import { Form } from 'react-bootstrap';

const EducationHistory = ({ resumeData, editField, deleteEducation, addNewEducation }) => {
    return (
        <div className="modal-body">
            <div className="add-emp-body">
                <button onClick={addNewEducation} className="btn btn-primary">
                    <i className="fas fa-plus"></i> Add Education
                </button>
            </div>

            {resumeData.education.map((education, index) => (
                <form key={education.id}>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <div className="d-flex justify-content-between align-items-center">
                                    <label>Education</label>
                                    <button
                                        type="button"
                                        onClick={() => deleteEducation(education.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                                <Form.Control
                                    as="select"
                                    value={education.degree || ''}
                                    onChange={(e) => editField(`education.${index}.degree`, e.target.value)}
                                >
                                    <option value="">Select Education Level</option>
                                    <option value="Doctorate/PhD">Doctorate/PhD</option>
                                    <option value="Masters/Post-Graduation">Masters/Post-Graduation</option>
                                    <option value="Graduation/Diploma">Graduation/Diploma</option>
                                </Form.Control>
                            </div>
                        </div>

                        {/* <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>Course</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Select Course"
                                    value={education.course || ''}
                                    onChange={(e) => editField(`education.${index}.degree`, e.target.value)}
                                />
                            </div>
                        </div> */}

                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>University/Institute</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Select University/Institute"
                                    value={education.institution || ''}
                                    onChange={(e) => editField(`education.${index}.institution`, e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>Start Year</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Start Year"
                                    value={education.startYear || ''}
                                    onChange={(e) => editField(`education.${index}.startYear`, e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>End Year</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="End Year"
                                    value={education.endYear || ''}
                                    onChange={(e) => editField(`education.${index}.endYear`, e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>Grade</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Grade"
                                    value={education.grade || ''}
                                    onChange={(e) => editField(`education.${index}.grade`, e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            ))}
        </div>
    );
};

export default EducationHistory;