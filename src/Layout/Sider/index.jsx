import {
    useState,
    useEffect
} from 'react'
import {
    MenuFoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MenuUnfoldOutlined,
    FileAddOutlined,
    IdcardOutlined,
    PrinterOutlined,
    ContainerOutlined
} from '@ant-design/icons';
import { 
    Button, 
    Layout,
    Menu, 
    theme 
} from 'antd';
import { useSelector } from 'react-redux';
import { 
    Link,
    useLocation
} from 'react-router-dom';
import menuConfig from '../../config/menuConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './index.css'
const {  
    Sider 
} = Layout;
const SubMenu = Menu.SubMenu;

let test='FileAddOutlined';

const SiderMain=({collapsed})=>{
    const location=useLocation();
    let {pathname}=location;

    const MenuLists=useSelector((state)=>state.menu.menus);

    const roles=localStorage.getItem('role')
    const filterMenu=menuConfig.filter((mnu)=>mnu.roles.includes(roles))
    const [menuLists,setMenulists]=useState([]);

    useEffect(()=>{
        // let MenuLists=sessionStorage.getItem("MenuLists");
        // MenuLists=JSON.parse(MenuLists)
        // //console.log(MenuLists.length)
        if(MenuLists.length){
            let menus=getMenuNodeReduce(MenuLists);
            setMenulists(menus)
        }
    },[MenuLists])

    // Menu lists reduce
    const getMenuNodeReduce=(menuListss)=>{
        return menuListss.reduce((pre,item)=>{
            if(!item.ModuleId){
                pre=[...pre,(
                    <Menu.Item 
                    key={item.path}
                    icon={<div><i className={`${item.IconName}`}></i></div>}
                    >
                        <Link to={item.path}>
                            <strong>
                                {item.name}
                            </strong>
                        </Link>
                    </Menu.Item>
                )
                ]
            }else{
                pre=[...pre,(
                    <SubMenu
                    key={item.MenuName}
                    icon={<div><i className={`${item.IconName}`}></i></div>}
                    title={item.ModuleName}
                    >
                        {getMenuNodeReduce(item.children)}
                    </SubMenu>
                )]
            }
            return pre;
        },[])
    }
    return(
        <>
            <Sider 
            trigger={null} 
            collapsible 
            collapsed={collapsed}
            className={`${collapsed?'collapsed-sidebar':'expand-sidebar'}`}
            style={{
                backgroundColor:'#fff',
                paddingTop:'10px'
            }}
            >
                <div className="logo" />
                <Menu
                style={{
                    height:'100vh'
                }}
                theme="light"
                mode="inline"
                selectedKeys={[pathname?pathname.substr(1):'']}
                defaultSelectedKeys={['1']}
                >
                    {
                        menuLists
                    }

                </Menu>
            </Sider>
        </>
    )
}
export default SiderMain;

