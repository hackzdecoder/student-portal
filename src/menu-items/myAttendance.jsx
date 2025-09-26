// assets
import { BookOutlined } from '@ant-design/icons';

// icons
const icons = {
    BookOutlined
};

// ==============================|| MENU ITEMS - MY ATTENDANCE ||============================== //

const MyAttendance = {
    id: 'my-attendance',
    title: 'Attendance',
    type: 'group',
    children: [
        {
            id: 'myAttendance',
            title: 'Attendance',
            type: 'item',
            url: '/my-attendance',
            icon: icons.BookOutlined,
            breadcrumbs: true
        }
    ]
};

export default MyAttendance;
