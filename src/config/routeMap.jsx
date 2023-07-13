import loadable,{lazy } from "@loadable/component";
import Loading from '../components/Loading'


// const AddNewNews=loadable({loader:()=>import('../pages/AddNewNews/index'),loading:Loading});
const AddNewNews=loadable(()=>import('../pages/AddNewNews/index'));
const CatalogDashboard=loadable(()=>import('../pages/Catalog/Dashboard'));
const Products=loadable(()=>import('../pages/Catalog/Products'));
const Vendor=loadable(()=>import('../pages/Catalog/Vendor'));
const NewsListsPage=loadable(()=>import('../pages/NewsLists/index'));
const ListDetailsPage=loadable(()=>import('../pages/ListDetails/index'));
const ApproveListsPage=loadable(()=>import('../pages/ApproveLists/index'));
const ApproveListsDetailsPage=loadable(()=>import('../pages/ApproveListDetails/index'))
const NewsSetupPage=loadable(()=>import('../pages/NewsSetup/index'));
const NewsSetupLists=loadable(()=>import('../pages/NewsSetupLists/index'));
const NewsSetupListDetailsPage=loadable(()=>import('../pages/NewsSetupListDetails/index'));
const ReportLists=loadable(()=>import('../pages/ReportLists/index'));
const ReportListsDetails=loadable(()=>import('../pages/ReportDetails/index'));
const PrinListsPage=loadable(()=>import('../pages/PrintLists/index'));
const PrintDetailsPage=loadable(()=>import('../pages/PrintDetails/index'));


export default[
    {
        path:'addNewNews',
        component:<AddNewNews isUpdate={false}/>,
        roles:["reporter"]
    },
    {
        path:'catalog',
        component:<CatalogDashboard/>,
        roles:["reporter"]
    },
    {
        path:'catalog/products',
        component:<Products/>,
        roles:["reporter"]
    },
    {
        path:'catalog/vendor',
        component:<Vendor/>,
        roles:["reporter"]
    },
    {
        path:'newsLists',
        component:<NewsListsPage/>,
        roles:["reporter","approver"]
    },
    {
        path:'newsLists/:id',
        component:<ListDetailsPage/>,
        roles:["reporter","approver"]
    },
    {
        path:'approveLists',
        component:<ApproveListsPage/>,
        roles:["approver"]
    },
    {
        path:'approveLists/:id',
        component:<ApproveListsDetailsPage/>,
        roles:["approver"]
    },
    {
        path:'newsSetup',
        component:<NewsSetupPage/>,
        roles:["approver"]
    },
    {
        path:'newsSetupLists',
        component:<NewsSetupLists/>,
        roles:["approver"]
    },
    {
        path:'newsSetupLists/:id',
        component:<NewsSetupListDetailsPage/>,
        roles:["approver"]
    },
    {
        path:'reportLists',
        component:<ReportLists/>,
        roles:["printer"]
    },
    {
        path:'reportLists/:id',
        component:<ReportListsDetails/>,
        roles:["printer"]
    },
    {
        path:'printLists',
        component:<PrinListsPage/>,
        roles:["printer"]
    },
    {
        path:'printLists/:id',
        component:<PrintDetailsPage/>,
        roles:["printer"]
    },

]