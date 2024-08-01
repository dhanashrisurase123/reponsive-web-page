import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import "./Insert.css";

const Insert = ({ onProjectSave }) => {
  const [projectName, setProjectName] = useState("");
  const [reason, setReason] = useState("");
  const [type, setType] = useState("");
  const [division, setDivision] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [department, setDepartment] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!projectName) newErrors.projectName = "Project Name is required";
    if (!reason) newErrors.reason = "Reason is required";
    if (!type) newErrors.type = "Type is required";
    if (!division) newErrors.division = "Division is required";
    if (!category) newErrors.category = "Category is required";
    if (!priority) newErrors.priority = "Priority is required";
    if (!department) newErrors.department = "Department is required";
    if (!startDate) newErrors.startDate = "Start Date is required";
    if (!endDate) newErrors.endDate = "End Date is required";
    if (endDate && startDate && endDate < startDate)
      newErrors.endDate = "End date cannot be smaller than start date";
    if (!location) newErrors.location = "Location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) {
      return;
    }

    const project = {
      projectName,
      reason,
      type,
      division,
      category,
      priority,
      department,
      startDate: format(startDate, 'MMMM d, yyyy'),
      endDate: format(endDate, 'MMMM d, yyyy'),
      location,
      status: "Registered",
    };

    // localStorage.clear();

    console.log("Project saved:", project);
    onProjectSave(project);
    navigate("/list");
  };

  return (
    <div className="dashboard">
    <div className="add-project">
      <div className="header">
        <h2>Add Project</h2>
        <button type="button" onClick={handleSave} className="save-button">
          Save Project
        </button>
      </div>
      <form>
        <div className="form-group project-name-group">
          <input
            type="text"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
          {errors.projectName && (
            <span className="error">{errors.projectName}</span>
          )}
        </div>
        <div className="field">
          <div className="form-group">
            <label>Reason</label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            >
              <option value="" disabled>Select reason</option>
              <option value="Businees"> Businees</option>
              <option value="Personal"> Personal</option>
              <option value="Dealrship"> Dealrship</option>
              <option value="Transpot"> Transpot</option>
            </select>
            {errors.reason && <span className="error">{errors.reason}</span>}
          </div>
          <div className="form-group">
            <label>Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="" disabled>Select type</option>
              <option value="Internal">Internal</option>
              <option value="External">External</option>
              <option value="vendor">vendor</option>
            </select>
            {errors.type && <span className="error">{errors.type}</span>}
          </div>
          <div className="form-group">
            <label>Division</label>
            <select
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              required
            >
              <option value="" disabled>Select division</option>
              <option value="Filters">Filters</option>
              <option value="Compressor">Compressor</option>
              <option value="Pumps">Pumps</option>
              <option value="Glass">Glass</option>
              <option value="Water Heater">Water Heater</option>
            </select>
            {errors.division && (
              <span className="error">{errors.division}</span>
            )}
          </div>
        </div>
        <div className="field">
          <div className="form-group">
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>Select category</option>
              <option value="Quality A">Quality A</option>
              <option value="Quality B">Quality B</option>
              <option value="Quality C">Quality C</option>
              <option value="Quality D">Quality D</option>
            </select>
            {errors.category && (
              <span className="error">{errors.category}</span>
            )}
          </div>
          <div className="form-group">
            <label>Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              required
            >
              <option value="" disabled>Select priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            {errors.priority && (
              <span className="error">{errors.priority}</span>
            )}
          </div>
          <div className="form-group">
            <label>Department</label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            >
              <option value="" disabled>Select department</option>
              <option value="Startegy">Startegy</option>
              <option value="Quality">Quality</option>
              <option value="Finance">Finance</option>
              <option value="Manintenace">Manintenace</option>
              <option value="Stores">Stores</option>
            </select>
            {errors.department && (
              <span className="error">{errors.department}</span>
            )}
          </div>
        </div>
        <div className="field">
          <div className="form-group">
            <label>Start Date</label>
            <DatePicker
           
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
              required
              minDate={new Date()}
            />
            {errors.startDate && (
              <span className="error">{errors.startDate}</span>
            )}
          </div>
          <div className="form-group">
            <label>End Date</label>
            <DatePicker
              selected={endDate}
              
              onChange={(date) => setEndDate(date)}
              dateFormat="yyyy-MM-dd"
              required
              minDate={startDate} 
            />
            {errors.endDate && <span className="error">{errors.endDate}</span>}
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            {errors.location && (
              <span className="error">{errors.location}</span>
            )}
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Insert;
