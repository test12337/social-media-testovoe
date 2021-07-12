import React, { useState } from 'react';
import './Header.scss';
import { Modal } from '../Modal/Modal';

const Header = ({modalSubmit}) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header_wrapper">
                        <h1 className="header_title">Social Media</h1>
                        <button className="header_button success" onClick={toggle}>New post</button>
                    </div>
                </div>
            </header>
            {(modal) ? <Modal modalChange={setModal} modalSubmit={modalSubmit}/> : null }
        </>
    )
}

export { Header };