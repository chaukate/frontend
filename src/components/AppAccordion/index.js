import React from 'react';
import PropTypes from 'prop-types';

import 'antd/dist/antd.css';
import './index.scss'

import { Collapse } from 'antd';

const { Panel } = Collapse;

const AppAccordion = ({ contents }) => {
    return (
        <Collapse
            bordered={false}
            expandIconPosition="right"
            className="site-collapse-custom-collapse">
            {contents.map(c => {
                return (
                    <Panel header={c.header} key={c.key} className="site-collapse-custom-panel">
                        {c.content}
                    </Panel>
                )
            })}
        </Collapse>
    )
}

AppAccordion.propTypes = {
    contents: PropTypes.array
}

export default AppAccordion
