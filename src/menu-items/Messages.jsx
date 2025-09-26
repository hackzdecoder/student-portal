// assets
import { MailOutlined } from '@ant-design/icons';

// icons
const icons = {
    MailOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const Messages = {
    id: 'messages',
    title: 'Messages',
    type: 'group',
    children: [
        {
            id: 'messages-item',
            title: 'Messages',
            type: 'item',
            url: '/messages',
            icon: MailOutlined,
            breadcrumbs: true,
            badgeContent: 3,   // Must exist
            badgeColor: 'error'
        }
    ]
};


export default Messages;
