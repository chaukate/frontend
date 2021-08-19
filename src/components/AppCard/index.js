import React from 'react'
import PropTypes from 'prop-types';
import { Card, Avatar } from 'antd';

import 'antd/dist/antd.css';

const { Meta } = Card;

const AppCard = ({ avatar, title, description }) => {
    return (
        <Card>
            <Meta
                avatar={
                    <Avatar src={avatar} alt={title} />
                }
                title={title}
                description={description}
            />
        </Card>
    )
}

AppCard.propTypes = {
    avatar: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.elementType, PropTypes.object])
}

export default AppCard
