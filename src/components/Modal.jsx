import React, { useEffect } from 'react';
import Button from './Button';
import { AiOutlineClose } from 'react-icons/ai';
import '../styles/Modal.css'

const Modal = ({ isOpen, onClose, children, size = "lg", title, closeIcon = true, footerButton }) => {
    if (!isOpen) {
        return null;
    }

    useEffect(() => {
        const escEvent = e => {
            if (e.key === "Escape") {
                onClose()
            }
        }
        window.addEventListener("keydown", escEvent)

        return () => {
            window.removeEventListener("keydown", escEvent)
        }
    }, [])

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 my-modal ${size}`}>
            <div className="fixed inset-0 bg-black opacity-75" onClick={onClose}></div>
            <div className="modal-content z-10">
                <div className={`modal-header ${title ? 'border-bottom' : ''}`}>
                    <h2>{title}</h2>
                    {closeIcon
                        &&
                        <Button
                            type="icon"
                            variant='dark'
                            size='sm'
                            icon={<AiOutlineClose />}
                            onClick={onClose}
                        />
                    }
                </div>
                <div className='modal-body'>
                    {children}
                </div>
                <div className={`modal-footer ${footerButton ? 'pt-5' : ''}`}>
                    {footerButton}
                </div>
            </div>
        </div>
    );
};

export default Modal;