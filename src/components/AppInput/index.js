import React from 'react';
import PropTypes from 'prop-types';

import 'antd/dist/antd.css';
import './index.scss';

import {
    Form,
    Input,
    InputNumber,
    Select
} from 'antd';

const { Option } = Select;

export const AppInput = ({ input }) => {
    switch (input.type) {
        case "text":
            return (
                <Form.Item
                    label={input.labelText}
                    name={input.name}
                    rules={[
                        {
                            required: input.isRequired,
                            message: input.requiredMessage
                        }
                    ]}
                >
                    <Input placeholder={input.placeholder} />
                </Form.Item>
            )
        case "number":
            return (
                <Form.Item
                    name={input.name}
                    label={input.labelText}
                    rules={[
                        {
                            required: input.isRequired,
                            message: input.requiredMessage,
                            type: 'number'
                        }
                    ]}
                >
                    <InputNumber className="input-number" placeholder={input.placeholder} />
                </Form.Item>
            )
        case "select":
            return (
                <Form.Item
                    name={input.name}
                    label={input.labelText}
                    rules={[
                        {
                            required: input.isRequired,
                            message: input.requiredMessage
                        }
                    ]}
                >
                    <Select
                        placeholder={input.placeholder}
                        allowClear>
                        {
                            input.options.map((option, i) => {
                                return (
                                    <Option key={i} value={option.value}>{option.text}</Option>
                                )
                            })
                        }
                    </Select>
                </Form.Item>
            )
        default:
            break;
    }
}

AppInput.AppInput = {
    input: PropTypes.object
}
