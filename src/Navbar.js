import React, { useState } from 'react';
import './Navbar.css';
import { FaPlus, FaCube, FaLink, FaUpload } from 'react-icons/fa';
import CreateModuleModal from './components/CreateModuleModal';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setDropdownOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateModule = (moduleName) => {
    console.log('Module created:', moduleName);
    closeModal();
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">Course Builder</a>
        </div>

        <div className="navbar-add">
          <button onClick={toggleDropdown} className="add-button">
            <FaPlus /> ADD
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><button onClick={openModal}><FaCube /> Create module</button></li>
              <li><a href="/add-link"><FaLink /> Add a link</a></li>
              <li><a href="/upload"><FaUpload /> Upload</a></li>
            </ul>
          )}
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </div>
      </nav>
      <CreateModuleModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onCreate={handleCreateModule}
      />
    </>
  );
}

export default Navbar;

