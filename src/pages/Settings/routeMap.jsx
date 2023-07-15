import loadable from "@loadable/component";

const AddUserPage=loadable(()=>import('./AddUser'));
const UserPermissionPage=loadable(()=>import('./Permission'));

export default[
    {
        path:'addUser',
        component:<AddUserPage/>
    },
    {
        path:'userPermission',
        component:<UserPermissionPage/>
    }
]