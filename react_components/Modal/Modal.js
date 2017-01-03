import { connect } from 'react-redux'
import React from 'react';

const Modal = (props) => {

    const { isOpen, content:Content, contentProps } = props.modalConfig;

    return isOpen && renderModal();

    function renderModal() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <Content {...contentProps}/>
                </div>
            </div>
        )
    }

};

const mapStateToProps = state => {
    return { modalConfig: state };
};

const mapDisptachToProps = (dispatch) => {
    return {
        close: () => {
            dispatch({
                config: { isOpen: false },
                type: 'UPDATE_MODAL_CONFIG',
            })
        }
    }
};

export default connect(mapStateToProps, mapDisptachToProps)(Modal);
