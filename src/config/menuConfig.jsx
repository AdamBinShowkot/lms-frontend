import {
    MenuFoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MenuUnfoldOutlined,
    FileAddOutlined,
    IdcardOutlined,
    PrinterOutlined,
    ContainerOutlined,
    BorderTopOutlined,
    UnorderedListOutlined,
    OrderedListOutlined,
    ReconciliationOutlined
} from '@ant-design/icons';


const menuLists=[
    {
        title:"Catalog",
        path:'catalogs',
        icon:<MenuFoldOutlined/>,
        roles:["reporter"],
        child:[
            {
                title:"Dashboard",
                path:'catalog',
                icon:<MenuFoldOutlined/>,
                roles:["reporter"],
                child:[
                    
                ]
            },
            {
                title:"Vendor",
                path:'catalog/vendor',
                icon:<MenuFoldOutlined/>,
                roles:["reporter"],
                child:[
                    
                ]
            },
            {
                title:"Products",
                path:'catalog/products',
                icon:<MenuFoldOutlined/>,
                roles:["reporter"],
                child:[
                    
                ]
            }
        ]
    },
    {
        title:"News Lists",
        path:'newsLists',
        icon:<FileAddOutlined/>,
        roles:["reporter","approver"],
        child:[]
    },
    {
        title:"Approve Lists",
        path:'approveLists',
        icon:<UnorderedListOutlined />,
        roles:["approver"],
        child:[]
    },
    {
        title:"News Setup",
        path:'newsSetup',
        icon:<BorderTopOutlined />,
        roles:["approver"],
        child:[]
    },
    {
        title:"Lists Setup",
        path:'newsSetupLists',
        icon:<OrderedListOutlined />,
        roles:["approver"],
        child:[]
    },
    {
        title:"Report Lists",
        path:'reportLists',
        icon:<ReconciliationOutlined />,
        roles:["printer"],
        child:[]
    },
    {
        title:"Print Lists",
        path:'printLists',
        icon:<PrinterOutlined/>,
        roles:["printer"],
        child:[]
    }

]

export default menuLists