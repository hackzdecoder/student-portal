// assets
import { UserOutlined } from '@ant-design/icons';

// icons
const icons = {
    UserOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const MyAccount = {
    id: 'my-accounts',
    title: 'Profile',
    type: 'group',
    children: [
        {
            id: 'MyAccount',
            title: 'My Account',
            type: 'item',
            url: '/my-account',
            icon: icons.UserOutlined,
            breadcrumbs: true
        }
    ]
};

export default MyAccount;
