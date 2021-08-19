import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const AppTitle = ({ variant, value }) => {

    if (variant === 'p') {
        return (<Paragraph>{value}</Paragraph>)
    }

    const level = parseInt(variant.substr(-1));
    return (<Title level={level}>{value}</Title>)
}

AppTitle.propTypes = {
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p']),
    value: PropTypes.string
}

export default AppTitle
