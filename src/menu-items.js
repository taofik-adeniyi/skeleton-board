// const chartData = {
//     items: [
//         {
//             id: 'support',
//             title: 'Support',
//             type: 'group',
//             icon: 'icon-support',
//             children: [
//                 {
//                     id: 'sample-page',
//                     title: 'Sample Page',
//                     type: 'item',
//                     url: '/sample-page',
//                     classes: 'nav-item',
//                     icon: 'feather icon-sidebar'
//                 },
//                 {
//                     id: 'menu-level',
//                     title: 'Menu Levels',
//                     type: 'collapse',
//                     icon: 'feather icon-menu',
//                     children: [
//                         {
//                             id: 'menu-level-1.1',
//                             title: 'Menu Level 1.1',
//                             type: 'item',
//                             url: '#!',
//                         },
//                         {
//                             id: 'menu-level-1.2',
//                             title: 'Menu Level 2.2',
//                             type: 'collapse',
//                             children: [
//                                 {
//                                     id: 'menu-level-2.1',
//                                     title: 'Menu Level 2.1',
//                                     type: 'item',
//                                     url: '#',
//                                 },
//                                 {
//                                     id: 'menu-level-2.2',
//                                     title: 'Menu Level 2.2',
//                                     type: 'collapse',
//                                     children: [
//                                         {
//                                             id: 'menu-level-3.1',
//                                             title: 'Menu Level 3.1',
//                                             type: 'item',
//                                             url: '#',
//                                         },
//                                         {
//                                             id: 'menu-level-3.2',
//                                             title: 'Menu Level 3.2',
//                                             type: 'item',
//                                             url: '#',
//                                         }
//                                     ]
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]
// };

// const chartData = {
//     items: [
//         {
//             id: 'support',
//             title: 'Support',
//             type: 'group',
//             icon: 'icon-support',
//             children: [
//                 {
//                     id: 'sample-page',
//                     title: 'Sample Page',
//                     type: 'item',
//                     url: '/sample-page',
//                     classes: 'nav-item',
//                     icon: 'feather icon-sidebar'
//                 },
//                 {
//                     id: 'games-page',
//                     title: 'Games Settings',
//                     type: 'item',
//                     url: '/game-settings',
//                     classes: 'nav-item',
//                     icon: 'feather icon-sidebar'
//                 },
//                 {
//                     id: 'account-page',
//                     title: 'Account Page',
//                     type: 'item',
//                     url: '/account-settings',
//                     classes: 'nav-item',
//                     icon: 'feather icon-sidebar'
//                 },
//                 {
//                     id: 'payments-page',
//                     title: 'Payments',
//                     type: 'item',
//                     url: '/payments',
//                     classes: 'nav-item',
//                     icon: 'feather icon-sidebar'
//                 },
//                 {
//                     id: 'reports-page',
//                     title: 'Reports Listing',
//                     type: 'item',
//                     url: '/report-listings',
//                     classes: 'nav-item',
//                     icon: 'feather icon-sidebar'
//                 },
//                 {
//                     id: 'supplies-page',
//                     title: 'Supplies Settings',
//                     type: 'item',
//                     url: '/supplies',
//                     classes: 'nav-item',
//                     icon: 'feather icon-sidebar'
//                 },
//                 {
//                     id: 'messaging-page',
//                     title: 'Messages Settings',
//                     type: 'item',
//                     url: '/messages',
//                     classes: 'nav-item',
//                     icon: 'feather icon-sidebar'
//                 }
//             ]
//         }
//         ,
//         { 
//             id: 'games',
//             title: 'Games',
//             type: 'item',
//             icon: 'icon-support'
//         }
//     ]
// }


const chartData = {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                { id: 'dash',
                title: 'Home',
                type: 'item',
                icon: 'feather icon-users',
                badge: {
                    title: 'New',
                    type: 'badge-warning'
                },
                url: '/dashboard/home',
                },
                {
                    id: 'games-page',
                    title: 'Games Settings',
                    type: 'item',
                    url: '/game-settings',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                {
                    id: 'account-page',
                    title: 'Account Page',
                    type: 'item',
                    url: '/account-settings',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                {
                    id: 'payments-page',
                    title: 'Payments',
                    type: 'item',
                    url: '/payments',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                {
                    id: 'reports-page',
                    title: 'Reports Listing',
                    type: 'item',
                    url: '/report/listings',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                {
                    id: 'supplies-page',
                    title: 'Supplies Settings',
                    type: 'item',
                    url: '/supplies',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                {
                    id: 'messaging-page',
                    title: 'Messages Settings',
                    type: 'item',
                    url: '/messages',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                // {
                //     id: 'dashboard',
                //     title: 'Dashboard',
                //     type: 'collapse',
                //     icon: 'feather icon-home',
                //     badge: {
                //         title: 'New',
                //         type: 'badge-warning'
                //     },
                //     children: [
                //         {
                //             id: 'default',
                //             title: 'Default',
                //             type: 'item',
                //             url: '/dashboard/default'
                //         },
                //         {
                //             id: 'sales',
                //             title: 'Sales',
                //             type: 'item',
                //             url: '/dashboard/sales',
                //             badge: {
                //                 title: 'NEW',
                //                 type: 'badge-danger'
                //             }
                //         }
                //     ]
                // },
            ]
        },
        {
            id: 'admin-panel',
            title: 'Admin Panel',
            type: 'group',
            icon: 'icon-monitor',
            children: [
                {
                    id: 'helpdesk',
                    title: 'Helpdesk',
                    type: 'collapse',
                    icon: 'feather icon-help-circle',
                    children: [
                        {
                            id: 'hd-dashboard',
                            title: 'Helpdesk Dashboard',
                            type: 'item',
                            url: '/helpdesk/hd-dashboard'
                        },
                        {
                            id: 'hd-ticket',
                            title: 'Create Ticket',
                            type: 'item',
                            url: '/helpdesk/hd-ticket'
                        },
                        {
                            id: 'hd-ticket-list',
                            title: 'Ticket List',
                            type: 'item',
                            url: '/helpdesk/hd-ticket-list'
                        },
                        {
                            id: 'hd-ticket-details',
                            title: 'Ticket Detail',
                            type: 'item',
                            url: '/helpdesk/hd-ticket-details'
                        },
                        {
                            id: 'hd-customer-list',
                            title: 'Customer',
                            type: 'item',
                            url: '/helpdesk/hd-customer-list'
                        }
                    ]
                }
            ]
        },
    ]
}

export default chartData;
