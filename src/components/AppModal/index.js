import React from 'react';
import PropTypes from 'prop-types';

import 'antd/dist/antd.css';

import { Modal, Button } from 'antd';

export const AppModal = ({ title, isVisible, okHandler, cancelHandler, children }) => {

    return (
        <Modal
            visible={isVisible}
            title={title}
            onOk={okHandler}
            onCancel={cancelHandler}
            footer={[
                <Button key="back" onClick={cancelHandler}>
                    Return
                </Button>,
                <Button key="submit" type="primary" onClick={okHandler}>
                    Submit
                </Button>
            ]}
        >{children}</Modal>
    )
}

AppModal.propTypes = {
    title: PropTypes.string,
    isVisible: PropTypes.bool,
    okHandler: PropTypes.func,
    cancelHandler: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.elementType, PropTypes.object])
}
