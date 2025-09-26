// assets
import { BarChartOutlined } from '@ant-design/icons';

// icons
const icons = {
    BarChartOutlined
};

// ==============================|| MENU ITEMS - MY ATTENDANCE ||============================== //

const MyGrades = {
    id: 'my-grades',
    title: 'Grades',
    type: 'group',
    children: [
        {
            id: 'myGrades',
            title: 'Grades',
            type: 'item',
            url: '/my-grades',
            icon: icons.BarChartOutlined,
            breadcrumbs: true
        }
    ]
};

export default MyGrades;
