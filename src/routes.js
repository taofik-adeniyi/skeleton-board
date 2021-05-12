import * as React from 'react';
const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));
const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
const SignUp1 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
const SignUp2 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp2'));
const Signin1 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));
const Signin2 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn2'));
const routes = [
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    { path: '/dashboard/default', exact: true, name: 'Analytics', component: DashboardDefault },
    { path: '/auth/signup-1', exact: true, name: 'Signup 1', component: SignUp1 },
    { path: '/auth/signup-2', exact: true, name: 'Signup 2', component: SignUp2 },
    { path: '/auth/signin-1', exact: true, name: 'Signin 1', component: Signin1 },
    { path: '/auth/signin-2', exact: true, name: 'Signin 2', component: Signin2 },
];
export default routes;