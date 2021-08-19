import { URL } from '../../utilities/constants'
import {
    DashboardOutlined,
    UploadOutlined,
    SolutionOutlined,
} from '@ant-design/icons';

export const NavItems = {
    "items": [
        {
            "lable": "Dashboard",
            "link": URL.DASHBOARD,
            "icon": <DashboardOutlined />
        },
        {
            "lable": "Applicants",
            "link": URL.APPLICANTS,
            "icon": <SolutionOutlined />
        },
        {
            "lable": "Demographics",
            "link": URL.DEMOGRAPHICS,
            "icon": <UploadOutlined />
        },
        {
            "lable": "Loans",
            "link": URL.LOANS,
            "icon": <UploadOutlined />
        }
    ]
}
