import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdClose } from "react-icons/md";
import Qprcode from "../../images/QPR.png"
import "./PopUpModal.css"
  

const PopUpModal = () => {
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" className="nav-btn" onClick={handleShow}>
          Get mate
        </Button>
  
        <Modal show={show} className="onboarding">
        <div className='.modal-content'>
          
            <button className='modal__close' onClick={handleClose}><MdClose /></button>
            <div className='modal__info'>
              <h5>Scan the QR code with your phone camera to download the Curve app</h5>
              <img src={Qprcode} alt="" />
             </div>
          </div>
        </Modal>

      </>
    )
  }

export default PopUpModal