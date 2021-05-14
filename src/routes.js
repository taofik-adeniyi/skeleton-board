import * as React from 'react';
const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

const SignUp1 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
const SignUp2 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp2'));
const Signin1 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));
const Signin2 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn2'));

///taofik uses
const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
const CustomerSupport = React.lazy(() => import('./Demo/Other/CustomerSupport'));
const Cashier = React.lazy(() => import('./Demo/Other/Cashier'));
const PlacedOrder = React.lazy(() => import('./Demo/Supplies/PlacedOrder'));
const Receipt = React.lazy(() => import('./Demo/Supplies/Receipt'));

const routes = [
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    { path: '/messaging/cashier', exact: true, name: 'Sample Page', component: Cashier },
    { path: '/messaging/customer-support', exact: true, name: 'Sample Page', component: CustomerSupport},
    { path: '/supplies/placed-order', exact: true, name: 'Sample Page', component: PlacedOrder },
    { path: '/supplies/receipt', exact: true, name: 'Sample Page', component: Receipt },



    { path: '/dashboard/home', exact: true, name: 'Analytics', component: DashboardDefault },
    { path: '/dashboard/default', exact: true, name: 'Analytics', component: DashboardDefault },
    { path: '/game-settings', exact: true, name: 'Analytics', component: DashboardDefault },
    { path: '/account-settings', exact: true, name: 'Analytics', component: DashboardDefault },
    { path: '/payments', exact: true, name: 'Analytics', component: DashboardDefault },
    { path: '/report/listings', exact: true, name: 'Analytics', component: DashboardDefault },
    { path: '/supplies', exact: true, name: 'Analytics', component: DashboardDefault },
    { path: '/messages', exact: true, name: 'Analytics', component: DashboardDefault },
    { path: '/auth/signup-1', exact: true, name: 'Signup 1', component: SignUp1 },
    { path: '/auth/signup-2', exact: true, name: 'Signup 2', component: SignUp2 },
    { path: '/auth/signin-1', exact: true, name: 'Signin 1', component: Signin1 },
    { path: '/auth/signin-2', exact: true, name: 'Signin 2', component: Signin2 },
];
export default routes;
