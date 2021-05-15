import * as React from 'react';
const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

const SignUp1 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
const SignUp2 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp2'));
const Signin1 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));
const Signin2 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn2'));

///taofik uses
const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
//Messaging route component
const CustomerSupport = React.lazy(() => import('./Demo/Other/CustomerSupport'));
const Cashier = React.lazy(() => import('./Demo/Other/Cashier'));
//Supplies route components
const PlacedOrder = React.lazy(() => import('./Demo/Supplies/PlacedOrder'));
const Receipt = React.lazy(() => import('./Demo/Supplies/Receipt'));
//Reoports Route Components
const Tickets = React.lazy(() => import('./Demo/Reports/Tickets'));
const Winnings = React.lazy(() => import('./Demo/Reports/Winnings'));
const Credit = React.lazy(() => import('./Demo/Reports/Credit'));
const Debt = React.lazy(() => import('./Demo/Reports/Debt'));
const AgentPerformance = React.lazy(() => import('./Demo/Reports/AgentPerformance'));
//Games Route Components
const Lotto = React.lazy(() => import('./Demo/Games/Lotto'));
const Raffle = React.lazy(() => import('./Demo/Games/Raffle'));
const Reports = React.lazy(() => import('./Demo/Games/Reports'));
const Results = React.lazy(() => import('./Demo/Games/Results'));
//Games Route Components
const CreateAgent = React.lazy(() => import('./Demo/Accounts/CreateAgent'));
const CreatePOS = React.lazy(() => import('./Demo/Accounts/CreatePOS'));
const BlockPOS = React.lazy(() => import('./Demo/Accounts/BlockPOS'));
const AllocateCreditLimit = React.lazy(() => import('./Demo/Accounts/AllocateCreditLimit'));
const ManageAgent = React.lazy(() => import('./Demo/Accounts/ManageAgent'));
const RemovePOS = React.lazy(() => import('./Demo/Accounts/RemovePOS'));
const UnblockPOS = React.lazy(() => import('./Demo/Accounts/UnblockPOS'));
const ViewPOS = React.lazy(() => import('./Demo/Accounts/ViewPOS'));
//Payments Route Components
const CreditPOS = React.lazy(() => import('./Demo/Payments/CreditPOS'));
const IncreaseCashier = React.lazy(() => import('./Demo/Payments/IncreaseCashier'));
const ReduceCashier = React.lazy(() => import('./Demo/Payments/ReduceCashier'));




const routes = [
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    
    { path: '/messaging/cashier', exact: true, name: 'Sample Page', component: Cashier },
    { path: '/messaging/customer-support', exact: true, name: 'Sample Page', component: CustomerSupport},
    
    { path: '/supplies/placed-order', exact: true, name: 'Sample Page', component: PlacedOrder },
    { path: '/supplies/receipt', exact: true, name: 'Sample Page', component: Receipt },
    
    { path: '/reports/tickets', exact: true, name: 'Sample Page', component: Tickets },
    { path: '/reports/credits', exact: true, name: 'Sample Page', component: Credit },
    { path: '/reports/winnings', exact: true, name: 'Sample Page', component: Winnings },
    { path: '/reports/debts', exact: true, name: 'Sample Page', component: Debt },
    { path: '/reports/agents-performance', exact: true, name: 'Sample Page', component: AgentPerformance },
    
    { path: '/games/lotto', exact: true, name: 'Sample Page', component: Lotto },
    { path: '/games/raffle', exact: true, name: 'Sample Page', component: Raffle },
    { path: '/games/reports', exact: true, name: 'Sample Page', component: Reports },
    { path: '/games/results', exact: true, name: 'Sample Page', component: Results },
    
    { path: '/account/create-agent', exact: true, name: 'Sample Page', component: CreateAgent },
    { path: '/account/create-pos', exact: true, name: 'Sample Page', component: CreatePOS },
    { path: '/account/block-pos', exact: true, name: 'Sample Page', component: BlockPOS },
    { path: '/account/allocate-credit-limit', exact: true, name: 'Sample Page', component: AllocateCreditLimit },
    { path: '/account/manage-agents', exact: true, name: 'Sample Page', component: ManageAgent },
    { path: '/account/remove-pos', exact: true, name: 'Sample Page', component: RemovePOS },
    { path: '/account/unblock-pos', exact: true, name: 'Sample Page', component: UnblockPOS },
    { path: '/account/view-pos', exact: true, name: 'Sample Page', component: ViewPOS },

    { path: '/payments/credit-pos', exact: true, name: 'Sample Page', component: CreditPOS },
    { path: '/payments/increase-cashier-credit', exact: true, name: 'Sample Page', component: IncreaseCashier },
    { path: '/payments/reduce-cashier-credit', exact: true, name: 'Sample Page', component: ReduceCashier },





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
