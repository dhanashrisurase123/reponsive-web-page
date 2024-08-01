
// import React, { useEffect, useState } from 'react';
// import './List.css';

// const List = () => {
//   const [projects, setProjects] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [projectsPerPage] = useState(3); 

//   useEffect(() => {
//     const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
//     setProjects(storedProjects);
//   }, []);

//   const handleStatusChange = (index, newStatus) => {
//     const updatedProjects = [...projects];
//     updatedProjects[index].status = newStatus;
//     setProjects(updatedProjects);
//     localStorage.setItem('projects', JSON.stringify(updatedProjects));
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//     setCurrentPage(1); 
//   };

//   // Filter projects 
//   const filteredProjects = projects.filter(project =>
//     project.projectName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Pagination
//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className='dashboard'>
//     <div className="list-page">
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search by Project Name"
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="search-input"
//         />
//       </div>
//       <table className="project-table">
//         <thead>
//           <tr>
//             <th>Project Name</th>
//             <th>Reason</th>
//             <th>Type</th>
//             <th>Division</th>
//             <th>Category</th>
//             <th>Priority</th>
//             <th>Department</th>
//             <th>Location</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentProjects.map((project, index) => (
//             <tr key={index}>
//               <td>
//                 <p className='project-name'>{project.projectName}</p>
//                 <span className="project-dates">{project.startDate} to {project.endDate}</span>
//               </td>
//               <td>{project.reason}</td>
//               <td>{project.type}</td>
//               <td>{project.division}</td>
//               <td>{project.category}</td>
//               <td>{project.priority}</td>
//               <td>{project.department}</td>
//               <td>{project.location}</td>
//               <td style={{fontWeight: 'bold'}}>{project.status}</td>
//               <td>
//                 <div className="button-group">
//                   <button onClick={() => handleStatusChange(index, 'Running')} className="start-button">Start</button>
//                   <button onClick={() => handleStatusChange(index, 'Closed')} className="close-button">Close</button>
//                   <button onClick={() => handleStatusChange(index, 'Canceled')} className="cancel-button">Cancel</button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div className="pagination">
//         {Array.from({ length: Math.ceil(filteredProjects.length / projectsPerPage) }, (_, index) => (
//           <button key={index + 1} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default List;





import React, { useEffect, useState } from 'react';
import './List.css';

const List = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(3); 

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(storedProjects);
  }, []);

  const handleStatusChange = (index, newStatus) => {
    const updatedProjects = [...projects];
    updatedProjects[index].status = newStatus;
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); 
  };

  const filteredProjects = projects.filter(project =>
    project.projectName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='dashboard'>
      <div className="list-page">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by Project Name"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
        <table className="project-table">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Reason</th>
              <th>Type</th>
              <th>Division</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Department</th>
              <th>Location</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentProjects.map((project, index) => (
              <tr key={index}>
                <td data-label="Project Name">
                  <p className='project-name'>{project.projectName}</p>
                  <span className="project-dates">{project.startDate} to {project.endDate}</span>
                </td>
                <td data-label="Reason">{project.reason}</td>
                <td data-label="Type">{project.type}</td>
                <td data-label="Division">{project.division}</td>
                <td data-label="Category">{project.category}</td>
                <td data-label="Priority">{project.priority}</td>
                <td data-label="Department">{project.department}</td>
                <td data-label="Location">{project.location}</td>
                <td data-label="Status" style={{fontWeight: 'bold'}}>{project.status}</td>
                <td data-label="Action">
                  <div className="button-group">
                    <button onClick={() => handleStatusChange(index, 'Running')} className="start-button">Start</button>
                    <button onClick={() => handleStatusChange(index, 'Closed')} className="close-button">Close</button>
                    <button onClick={() => handleStatusChange(index, 'Canceled')} className="cancel-button">Cancel</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: Math.ceil(filteredProjects.length / projectsPerPage) }, (_, index) => (
            <button key={index + 1} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
