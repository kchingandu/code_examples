const modalConfig = (state = { isOpen: false, content: '', contentData: {} }, { type, modalConfig }) => {
    switch (type) {
        case 'UPDATE_MODAL_CONFIG':
            return Object.assign({}, state, modalConfig);
        default:
            return state
    }
};

export default modalConfig;
