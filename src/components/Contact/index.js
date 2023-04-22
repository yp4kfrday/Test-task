import React, {  } from 'react';
import Modal from 'react-modal';

import './styles.css'
import '../../styles/colors.css';
import '../../styles/styles.css';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: '1px solid',
      borderRadius: '15%',
    },
  };

function Contact({ isOpen, onClose }) {
    return (
      <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
        <div className='form'>
          <label htmlFor="name">Имя:</label>
          <input type="text" id="name"
           />
  
          <label htmlFor="phone">Телефон:</label>
          <input type="text" id="phone" />
  
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
  
          <button type="submit">Отправить</button>
        </div>
      </Modal>
    );
  }
  
export default Contact
