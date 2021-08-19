import React, { useState } from 'react'
import AppLayout from '../../components/AppLayout';
import AppAccordion from '../../components/AppAccordion';

import { Button } from 'antd';

import './index.scss';

import AppTitle from '../../components/AppTitle';
import { AppModal } from '../../components/AppModal';
import AppForm from '../../components/AppForm';

import { PanelHeader, PanelContent } from './Panel';
import { LoanForm } from './LoanForm';

export default function Loan() {
    const [isVisible, setVisible] = useState(false);

    const cancelHandler = () => {
        setVisible(false);
    }
    const showModalHandler = () => {
        setVisible(true);
    }
    function okHandler() {
        cancelHandler();
    }

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
            <div className="page-header">
                <AppTitle variant="h3" value="Loans" />
                <Button type="primary" onClick={showModalHandler}>Add Loan</Button>
            </div>
            <AppAccordion contents={getContents()} />
            <AppModal title="New Loan" isVisible={isVisible} okHandler={okHandler} cancelHandler={cancelHandler}>
                <AppForm formContents={LoanForm} />
            </AppModal>
        </AppLayout>
    )
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