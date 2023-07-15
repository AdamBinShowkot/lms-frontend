import loadable from "@loadable/component";

const AddBookPage=loadable(()=>import('./AddBook'));
const AddUserPage=loadable(()=>import('./AddUser'));


export default[
    {
        path:'addBook',
        component:<AddBookPage/>
    },
    {
        path:'addUser',
        component:<AddUserPage/>
    }
]