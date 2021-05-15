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
                    type: 'item',
                    icon: 'feather icon-users',
                    url: '/dashboard/home',
                    classes: 'nav-item',
                    // children: [
                    //     {
                    //         id: 'default',
                    //         title: 'Home',
                    //         type: 'item',
                    //         url: '/dashboard/home'
                    //     }
                    // ]
                },
                {
                    id: 'games-page',
                    title: 'Games',
                    type: 'collapse',
                    // url: '/game-settings',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar',
                    children: [
                        {
                            id: 'default',
                            title: 'Lotto',
                            type: 'item',
                            url: '/games/lotto'
                        },
                        {
                            id: 'sales',
                            title: 'Raffle',
                            type: 'item',
                            url: '/games/raffle'
                        },
                        {
                            id: 'default',
                            title: 'Results',
                            type: 'item',
                            url: '/games/results'
                        },
                        {
                            id: 'default',
                            title: 'Reports',
                            type: 'item',
                            url: '/games/reports'
                        },
                    ]
                },
                {
                    id: 'account-page',
                    title: 'Accounts',
                    type: 'collapse',
                    // url: '/account-settings',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar',
                    children: [
                        {
                            id: 'default',
                            title: 'Create Agent',
                            type: 'item',
                            url: '/account/create-agent'
                        },
                        {
                            id: 'sales',
                            title: 'Allocate Credit Limit',
                            type: 'item',
                            url: '/account/allocate-credit-limit'
                        },
                        {
                            id: 'default',
                            title: 'Manage Agents',
                            type: 'item',
                            url: '/account/manage-agents'
                        },
                        {
                            id: 'default',
                            title: 'Create POS',
                            type: 'item',
                            url: '/account/create-pos'
                        },
                        {
                            id: 'default',
                            title: 'View POS',
                            type: 'item',
                            url: '/account/view-pos'
                        },
                        {
                            id: 'default',
                            title: 'Remove POS',
                            type: 'item',
                            url: '/account/remove-pos'
                        },
                        {
                            id: 'default',
                            title: 'Block POS',
                            type: 'item',
                            url: '/account/block-pos'
                        },
                        {
                            id: 'default',
                            title: 'Unblock POS',
                            type: 'item',
                            url: '/account/unblock-pos'
                        }
                    ]
                },
                {
                    id: 'payments-page',
                    title: 'Payments',
                    type: 'collapse',
                    // url: '/payments',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar',
                    children: [
                        {
                            id: 'default',
                            title: 'Credit POS',
                            type: 'item',
                            url: '/payments/credit-pos'
                        },
                        {
                            id: 'sales',
                            title: 'Increase Cashier Credit Limit',
                            type: 'item',
                            url: '/payments/increase-cashier-credit'
                        },
                        {
                            id: 'default',
                            title: 'Reduce Cashier Credit Limit',
                            type: 'item',
                            url: '/payments/reduce-cashier-credit'
                        }
                    ]
                },
                {
                    id: 'reports-page',
                    title: 'Reports',
                    type: 'collapse',
                    // url: '/report/listings',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar',
                    children: [
                        {
                            id: 'default',
                            title: 'Winnings',
                            type: 'item',
                            url: '/reports/winnings'
                        },
                        {
                            id: 'sales',
                            title: 'Tickets',
                            type: 'item',
                            url: '/reports/tickets'
                        },
                        {
                            id: 'default',
                            title: 'Credits',
                            type: 'item',
                            url: '/reports/credits'
                        },
                        {
                            id: 'sales',
                            title: 'Debts',
                            type: 'item',
                            url: '/reports/debts'
                        },
                        {
                            id: 'sales',
                            title: 'Agents Performance',
                            type: 'item',
                            url: '/reports/agents-performance'
                        }
                    ]
                },
                {
                    id: 'supplies-page',
                    title: 'Supplies',
                    type: 'collapse',
                    // url: '/supplies',
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
                    // url: '/messages',
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
        }
    ]
}

export default chartData;
