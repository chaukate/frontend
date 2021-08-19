import React from 'react';
import PropTypes from 'prop-types';

import 'antd/dist/antd.css';

import { Form } from 'antd';

import { AppInput } from '../AppInput'

const AppForm = ({ formContents }) => {
    return (
        <Form
            layout="vertical"
            size="small"
        >
            {
                formContents.map(formContent => {
                    return <AppInput input={formContent} />
                })
            }
        </Form>
    )
}

AppForm.propTypes = {
    formContents: PropTypes.array
}

export default AppForm
