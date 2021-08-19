import React, { useState } from 'react'
import PropTypes from 'prop-types';

import './index.scss'

import { Progress, Row, Col, Button } from 'antd';
import {
    ProfileTwoTone
} from '@ant-design/icons';

import AppTitle from '../../components/AppTitle';
import AppCard from '../../components/AppCard';
import AppForm from '../../components/AppForm';

import { formatPhoneNumber } from '../../utilities/stringHelper';

export const PanelHeader = ({ progress, type }) => {
    return (
        <>
            <div className="panel-header">
                <ProfileTwoTone />
                <Progress percent={progress} steps={5} />
            </div>
            <div className="align-center">
                <AppTitle variant="h4" value={type} />
            </div>
        </>
    )
}

PanelHeader.propTypes = {
    progress: PropTypes.number,
    type: PropTypes.string
}

export const PanelContent = ({ applicants }) => {
    const [isAddApplicant, setPanelValues] = useState(false)

    const showApplicantHandler = () => {
        console.log(isAddApplicant);
        setPanelValues(true);
    }

    const closeApplicantHandler = () => {
        console.log(isAddApplicant);
        setPanelValues(false);
    }

    return (
        <>
            <Row>
                <Col span={24}>
                    {applicants.map((a, i) => {
                        return (
                            <Row key={i}>
                                <Col span={24}>
                                    <AppCard
                                        avatar={a.avatar}
                                        title={a.name}
                                        description={<CardDescription applicant={a} />} />
                                </Col>
                            </Row>

                        )
                    })}
                </Col>
            </Row>
            <Row>
                {!isAddApplicant && (
                    <Col span={24}>
                        <Button type="primary" onClick={showApplicantHandler} >Add Applicant</Button>
                    </Col>
                )}
                {isAddApplicant && (
                    <Col span={24}>
                        <AppForm />
                        <Button type="default" onClick={closeApplicantHandler} >Cancel</Button>
                    </Col>
                )}
            </Row>
        </>
    )
}

PanelContent.propTypes = {
    applicants: PropTypes.array
}

const CardDescription = ({ applicant }) => {
    return (
        <Row gutter={[16, 16]}>
            <Col sm={24} md={6} lg={8} xl={12}>
                {formatPhoneNumber(applicant.contact)}
            </Col>
            <Col sm={24} md={18} lg={16} xl={12}>
                {applicant.applicantProgress.map(ap => {
                    return (
                        <Row key={ap.key} gutter={[16, 16]}>
                            <Col sm={6} md={18} lg={18} xl={12}> <AppTitle variant="h5" value={ap.title} /></Col>
                            <Col sm={18} md={6} lg={6} xl={12}>
                                <Progress type="circle" percent={ap.value} width={30} />
                            </Col>
                        </Row>
                    )
                })}
            </Col>
        </Row>
    )
}

CardDescription.propTypes = {
    applicant: PropTypes.object
}
