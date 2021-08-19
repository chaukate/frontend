import React from 'react'
import PropTypes from 'prop-types';
import AppLayout from '../../components/AppLayout';
import AppAccordion from '../../components/AppAccordion';

import './index.scss'

import { Progress, Row, Col } from 'antd';
import AppTitle from '../../components/AppTitle';
import AppCard from '../../components/AppCard';
import {
    ProfileTwoTone
} from '@ant-design/icons';

import { formatPhoneNumber } from '../../utilities/stringHelper';

export default function Loan() {

    const getContents = () => {
        let contents = [];
        LoanRecords.forEach(loan => {
            contents.push({
                header: <PanelHeader progress={loan.progress} type={loan.type} />,
                key: loan.id,
                content: <PanelContent applicants={loan.applicants} />
            });
        });
        return contents;
    }

    return (
        <AppLayout>
            <AppAccordion contents={getContents()} />
        </AppLayout>
    )
}

const PanelHeader = ({ progress, type }) => {
    return (
        <div className="panel-header">
            <ProfileTwoTone />
            <AppTitle variant="h3" value={type} />
            <Progress percent={progress} steps={5} />
        </div>
    )
}

const PanelContent = ({ applicants }) => {
    return applicants.map((a, i) => {
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
    })
}

const CardDescription = ({ applicant }) => {
    return (
        <Row gutter={[16, 16]}>
            <Col xs={8} sm={8} md={8} lg={12} xl={12}>
                {formatPhoneNumber(applicant.contact)}
            </Col>
            <Col xs={8} sm={8} md={8} lg={12} xl={12}>
                {applicant.applicantProgress.map(ap => {
                    return (
                        <Row key={ap.key} gutter={[16, 16]}>
                            <Col> <AppTitle variant="h5" value={ap.title} /></Col>
                            <Col>
                                <Progress type="circle" percent={ap.value} width={30} />
                            </Col>
                        </Row>
                    )
                })}
            </Col>
        </Row>
    )
}

PanelContent.propTypes = {
    applicants: PropTypes.array
}

const LoanRecords = [
    {
        "id": "1",
        "progress": 75,
        "type": "Official Loan Type 1",
        "applicants": [
            {
                "name": "Ronald Robins",
                "avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                "contact": "8013699890",
                "email": "ronald@gmail.com",
                "applicantProgress": [
                    {
                        "title": "On-boarding",
                        "key": "onboarding",
                        "value": 100
                    },
                    {
                        "title": "Driver license",
                        "key": "uploadDriverLicense",
                        "value": 100
                    },
                    {
                        "title": "Personal information",
                        "key": "updatePersonalInformation",
                        "value": 75
                    },
                    {
                        "title": "Soft credit check",
                        "key": "softCreditCheck",
                        "value": 0
                    },
                    {
                        "title": "Tax information",
                        "key": "taxFormRequest",
                        "value": 0
                    }
                ]
            },
            {
                "name": "David Lamb",
                "avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                "contact": "8013697691",
                "email": "ronald@gmail.com",
                "applicantProgress": [
                    {
                        "title": "On-boarding",
                        "key": "onboarding",
                        "value": 100
                    },
                    {
                        "title": "Driver license",
                        "key": "uploadDriverLicense",
                        "value": 100
                    },
                    {
                        "title": "Personal information",
                        "key": "updatePersonalInformation",
                        "value": 100
                    },
                    {
                        "title": "Soft credit check",
                        "key": "softCreditCheck",
                        "value": 0
                    },
                    {
                        "title": "Tax information",
                        "key": "taxFormRequest",
                        "value": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "2",
        "progress": 55,
        "type": "Official Loan Type 2",
        "applicants": [
            {
                "name": "Alex Lendit",
                "avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                "contact": "8013767692",
                "email": "ronald@gmail.com",
                "applicantProgress": [
                    {
                        "title": "On-boarding",
                        "key": "onboarding",
                        "value": 100
                    },
                    {
                        "title": "Driver license",
                        "key": "uploadDriverLicense",
                        "value": 100
                    },
                    {
                        "title": "Personal information",
                        "key": "updatePersonalInformation",
                        "value": 0
                    },
                    {
                        "title": "Soft credit check",
                        "key": "softCreditCheck",
                        "value": 0
                    },
                    {
                        "title": "Tax information",
                        "key": "taxFormRequest",
                        "value": 0
                    }
                ]
            },
            {
                "name": "Jim Reddik",
                "avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                "contact": "8013888993",
                "email": "ronald@gmail.com",
                "applicantProgress": [
                    {
                        "title": "On-boarding",
                        "key": "onboarding",
                        "value": 100
                    },
                    {
                        "title": "Driver license",
                        "key": "uploadDriverLicense",
                        "value": 100
                    },
                    {
                        "title": "Personal information",
                        "key": "updatePersonalInformation",
                        "value": 0
                    },
                    {
                        "title": "Soft credit check",
                        "key": "softCreditCheck",
                        "value": 0
                    },
                    {
                        "title": "Tax information",
                        "key": "taxFormRequest",
                        "value": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "3",
        "progress": 85,
        "type": "Official Loan Type 3",
        "applicants": [
            {
                "name": "Sara Willams",
                "avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                "contact": "8013699994",
                "email": "ronald@gmail.com",
                "applicantProgress": [
                    {
                        "title": "On-boarding",
                        "key": "onboarding",
                        "value": 100
                    },
                    {
                        "title": "Driver license",
                        "key": "uploadDriverLicense",
                        "value": 100
                    },
                    {
                        "title": "Personal information",
                        "key": "updatePersonalInformation",
                        "value": 100
                    },
                    {
                        "title": "Soft credit check",
                        "key": "softCreditCheck",
                        "value": 100
                    },
                    {
                        "title": "Tax information",
                        "key": "taxFormRequest",
                        "value": 0
                    }
                ]
            },
            {
                "name": "John Hernandez",
                "avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                "contact": "8013666695",
                "email": "ronald@gmail.com",
                "applicantProgress": [
                    {
                        "title": "On-boarding",
                        "key": "onboarding",
                        "value": 100
                    },
                    {
                        "title": "Driver license",
                        "key": "uploadDriverLicense",
                        "value": 100
                    },
                    {
                        "title": "Personal information",
                        "key": "updatePersonalInformation",
                        "value": 100
                    },
                    {
                        "title": "Soft credit check",
                        "key": "softCreditCheck",
                        "value": 100
                    },
                    {
                        "title": "Tax information",
                        "key": "taxFormRequest",
                        "value": 0
                    }
                ]
            }
        ]
    }
]