import React from 'react';
import './CenterContent.css';
import schoolSuppliesImage from '../src/assets/school-supplies.png';

function CenterContent() {
  return (
    <div className="center-content">
      <div className="image-container">
        <img src={schoolSuppliesImage} alt="School supplies in a carton box" />
      </div>
      <div className="content">
        <p><strong>Nothing added here yet</strong></p>
        <p>Click on the <strong>[ + ] Add</strong> button to add items to this course</p>
      </div>
    </div>
  );
}

export default CenterContent;
