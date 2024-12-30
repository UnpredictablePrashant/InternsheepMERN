import React from 'react';

const EmploymentHistory = ({ resumeData, editField, deleteEmployment, addNewEmployment }) => {
    const years = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i);
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return (
        <div className="modal-body">
            <div className="add-emp-body">
                <button onClick={addNewEmployment} className="btn btn-primary">
                    <i className="fas fa-plus"></i> Add Employment
                </button>
            </div>

            {resumeData.employment.map((employment, index) => (
                <form key={employment.id}>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <div className="d-flex justify-content-between align-items-center">
                                    <label>Your Designation</label>
                                    <button
                                        type="button"
                                        onClick={() => deleteEmployment(employment.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                                <input
                                    value={employment.designation || ''}
                                    onChange={(e) => editField(`employment.${index}.designation`, e.target.value)}
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Your Designation"
                                />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>Your Organization</label>
                                <input
                                    value={employment.organisation || ''}
                                    onChange={(e) => editField(`employment.${index}.organisation`, e.target.value)}
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Your Organization"
                                />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>Is this your current company?</label>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                id={`employ_yes_${employment.id}`}
                                                name={`current_company_${employment.id}`}
                                                checked={employment.currentCompany === true}
                                                onChange={() => editField(`employment.${index}.currentCompany`, true)}
                                            />
                                            <label className="custom-control-label" htmlFor={`employ_yes_${employment.id}`}>Yes</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                id={`employ_no_${employment.id}`}
                                                name={`current_company_${employment.id}`}
                                                checked={employment.currentCompany === false}
                                                onChange={() => editField(`employment.${index}.currentCompany`, false)}
                                            />
                                            <label className="custom-control-label" htmlFor={`employ_no_${employment.id}`}>No</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>Started Working From</label>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <select
                                            className="form-control"
                                            value={employment.from?.year || ''}
                                            onChange={(e) => editField(`employment.${index}.from.year`, e.target.value)}
                                        >
                                            <option value="">Select Year</option>
                                            {years.map(year => (
                                                <option key={year} value={year}>{year}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <select
                                            className="form-control"
                                            value={employment.from?.month || ''}
                                            onChange={(e) => editField(`employment.${index}.from.month`, e.target.value)}
                                        >
                                            <option value="">Select Month</option>
                                            {months.map(month => (
                                                <option key={month} value={month}>{month}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {!employment.currentCompany && (
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <label>Worked Till</label>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                            <select
                                                className="form-control"
                                                value={employment.to?.year || ''}
                                                onChange={(e) => editField(`employment.${index}.to.year`, e.target.value)}
                                            >
                                                <option value="">Select Year</option>
                                                {years.map(year => (
                                                    <option key={year} value={year}>{year}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                            <select
                                                className="form-control"
                                                value={employment.to?.month || ''}
                                                onChange={(e) => editField(`employment.${index}.to.month`, e.target.value)}
                                            >
                                                <option value="">Select Month</option>
                                                {months.map(month => (
                                                    <option key={month} value={month}>{month}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>Describe your Job Profile</label>
                                <textarea
                                    className="form-control"
                                    placeholder="Type Description"
                                    value={employment.description || ''}
                                    onChange={(e) => editField(`employment.${index}.description`, e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            ))}
        </div>
    );
};

export default EmploymentHistory;