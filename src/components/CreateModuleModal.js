import React, { useState } from 'react';
import './CreateModuleModal.css';

function CreateModuleModal({ isOpen, onRequestClose, onCreate }) {
  const [moduleName, setModuleName] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleCreate = () => {
    onCreate(moduleName);
    setModuleName('');
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Create New Module</h2>
          <button onClick={onRequestClose} className="close-button">&times;</button>
        </div>
        <div className="modal-body">
          <input
            type="text"
            value={moduleName}
            onChange={(e) => setModuleName(e.target.value)}
            placeholder="Module Name"
            className="input"
          />
        </div>
        <div className="modal-footer">
          <button onClick={onRequestClose} className="button cancel-button">Cancel</button>
          <button onClick={handleCreate} className="button create-button">Create</button>
        </div>
      </div>
    </div>
  );
}

export default CreateModuleModal;
