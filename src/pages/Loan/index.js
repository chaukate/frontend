import React from 'react'
import PropTypes from 'prop-types';
import AppLayout from '../../components/AppLayout';
import AppAccordion from '../../components/AppAccordion';

import './index.scss'

import { Progress } from 'antd';
import AppTitle from '../../components/AppTitle';
import AppCard from '../../components/AppCard';
import {
    ProfileTwoTone
} from '@ant-design/icons';

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
            <AppCard key={i}
                avatar={a.avatar}
                title={a.name}
                description={a.contact} />
        )
    })
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
                "contact": "801369989",
                "email": "ronald@gmail.com",
                "onboarding": 100,
                "uploadDriverLicense": 100,
                "updatePersonalInformation": 100,
                "SoftCreditCheck": 0,
                "TaxFormRequest": 0
            },
            {
                "name": "David Lamb",
                "avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                "contact": "801369769",
                "email": "ronald@gmail.com",
                "onboarding": 100,
                "uploadDriverLicense": 100,
                "updatePersonalInformation": 100,
                "SoftCreditCheck": 100,
                "TaxFormRequest": 0
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
                "contact": "801376769",
                "email": "ronald@gmail.com",
                "onboarding": 100,
                "uploadDriverLicense": 100,
                "updatePersonalInformation": 0,
                "SoftCreditCheck": 0,
                "TaxFormRequest": 0
            },
            {
                "name": "Jim Reddik",
                "avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                "contact": "801388899",
                "email": "ronald@gmail.com",
                "onboarding": 100,
                "uploadDriverLicense": 100,
                "updatePersonalInformation": 100,
                "SoftCreditCheck": 0,
                "TaxFormRequest": 0
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
                "contact": "801369999",
                "email": "ronald@gmail.com",
                "onboarding": 100,
                "uploadDriverLicense": 100,
                "updatePersonalInformation": 100,
                "SoftCreditCheck": 100,
                "TaxFormRequest": 0
            },
            {
                "name": "John Hernandez",
                "avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                "contact": "801366669",
                "email": "ronald@gmail.com",
                "onboarding": 100,
                "uploadDriverLicense": 100,
                "updatePersonalInformation": 100,
                "SoftCreditCheck": 100,
                "TaxFormRequest": 0
            }
        ]
    }
]