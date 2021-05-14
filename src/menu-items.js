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
                { 
                    id: 'dash',
                    title: 'Dashboard',
                    type: 'collapse',
                    icon: 'feather icon-users',
                    url: '/dashboard/home',
                    children: [
                        {
                            id: 'default',
                            title: 'Total Sales',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'sales',
                            title: 'Total Commision',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'default',
                            title: 'Total Debt',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'default',
                            title: 'Total Winnings',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'default',
                            title: 'Total Fines',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                    ]
                },
                {
                    id: 'games-page',
                    title: 'Games',
                    type: 'collapse',
                    url: '/game-settings',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar',
                    children: [
                        {
                            id: 'default',
                            title: 'Lotto',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'sales',
                            title: 'Raffle',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'default',
                            title: 'Results',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'default',
                            title: 'Reports',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                    ]
                },
                {
                    id: 'account-page',
                    title: 'Accounts',
                    type: 'collapse',
                    url: '/account-settings',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar',
                    children: [
                        {
                            id: 'default',
                            title: 'Create Agent',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'sales',
                            title: 'Allocate Credit Limit',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'default',
                            title: 'Manage Agents',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'default',
                            title: 'Create POS',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'default',
                            title: 'View POS',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'default',
                            title: 'Remove POS',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'default',
                            title: 'Block POS',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'default',
                            title: 'Unblock POS',
                            type: 'item',
                            url: '/dashboard/default'
                        }
                    ]
                },
                {
                    id: 'payments-page',
                    title: 'Payments',
                    type: 'collapse',
                    url: '/payments',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar',
                    children: [
                        {
                            id: 'default',
                            title: 'Credit POS',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'sales',
                            title: 'Increase Cashier Credit Limit',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'default',
                            title: 'Reduce Cashier Credit Limit',
                            type: 'item',
                            url: '/dashboard/default'
                        }
                    ]
                },
                {
                    id: 'reports-page',
                    title: 'Reports',
                    type: 'collapse',
                    url: '/report/listings',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar',
                    children: [
                        {
                            id: 'default',
                            title: 'Winnings',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'sales',
                            title: 'Tickets',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'default',
                            title: 'Credits',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'sales',
                            title: 'Debts',
                            type: 'item',
                            url: '/dashboard/default'
                        },
                        {
                            id: 'sales',
                            title: 'Agents Performance',
                            type: 'item',
                            url: '/dashboard/default'
                        }
                    ]
                },
                {
                    id: 'supplies-page',
                    title: 'Supplies',
                    type: 'collapse',
                    url: '/supplies',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar',
                    children: [
                        {
                            id: 'default',
                            title: 'Place Order',
                            type: 'item',
                            url: '/supplies/placed-order'
                        },
                        {
                            id: 'sales',
                            title: 'Receipt for paper rolls',
                            type: 'item',
                            url: '/supplies/receipt'
                        }
                    ]
                },
                {
                    id: 'messaging-page',
                    title: 'Messaging',
                    type: 'collapse',
                    url: '/messages',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar',
                    children: [
                        {
                            id: 'default',
                            title: 'Cashier',
                            type: 'item',
                            url: '/messaging/cashier'
                        },
                        {
                            id: 'sales',
                            title: 'Support',
                            type: 'item',
                            url: '/messaging/customer-support'
                        }
                    ]
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
