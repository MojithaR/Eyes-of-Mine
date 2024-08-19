import React, { useState } from 'react';
import './AdminView.css';
import dashboardIcon from '../assests/dashboard.png';
import usersIcon from '../assests/users.png';
import settingsIcon from '../assests/settings.png';
import logoutIcon from '../assests/logout.png';
import sampleImage from '../assests/sample-image.jpg';


function AdminView() {
  const [editMode, setEditMode] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleRemoveClick = () => {
    setShowPopup(true);
  };

  const handleDeleteConfirm = () => {
    // Add delete logic here
    setShowPopup(false);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>Yamato-Security</h1>
        <p className="admin-subtitle">Admin Dashboard</p>
      </header>

      <div className="admin-content">
        <div className="admin-sidebar">
          <div className="admin-profile">
            <img src={sampleImage} alt="Admin" className="admin-profile-image" />
            <h2>Admin Name</h2>
            <p>Position</p>
          </div>
          <div className="admin-navigation">
            <button className="button-29"><img src={dashboardIcon} alt="Dashboard" className="icon" />Dashboard</button>
            <button className="button-29"><img src={usersIcon} alt="Users" className="icon" />Users</button>
            <button className="button-29"><img src={settingsIcon} alt="Settings" className="icon" />Settings</button>
            <button className="button-29"><img src={logoutIcon} alt="Logout" className="icon" />Logout</button>
          </div>
        </div>

        <div className="admin-main">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Dept Name</th>
                <th>Employee ID</th>
                <th>User Name</th>
                <th>Task Completion</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className={editMode ? 'edit-mode' : ''}>
                <td contentEditable={editMode}>Dept 1</td>
                <td contentEditable={editMode}>12345</td>
                <td contentEditable={editMode}>John Doe</td>
                <td contentEditable={editMode}>80%</td>
                <td>
                  <button className="button-29" onClick={handleEditClick}>Edit</button>
                  <button className="button-29">View</button>
                  <button className="button-29" onClick={handleRemoveClick}>Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Are you sure to delete this employee?</h2>
            <textarea placeholder="Enter reason"></textarea>
            <button className="button-29" onClick={handleDeleteConfirm}>Delete</button>
            <button className="button-29" onClick={handlePopupClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminView;
