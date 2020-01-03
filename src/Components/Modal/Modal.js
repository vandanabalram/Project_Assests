import React from 'react';

// import './Modal.css';

const modal = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default modal;
