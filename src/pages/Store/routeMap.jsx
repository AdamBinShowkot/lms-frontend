import loadable from "@loadable/component";

const AddDonnerPage=loadable(()=>import('./Donner'));
const SetupStuck=loadable(()=>import('./Stuck'));
const AddNewBook=loadable(()=>import('./AddNewBook/Form'));
const AddNewBookLists=loadable(()=>import('./AddNewBook/DataLists'));

export default[
    {
        path:'addDonner',
        component:<AddDonnerPage/>
    },
    {
        path:"setupStack",
        component:<SetupStuck/>
    },
    {
        path:"addNewBook",
        component:<AddNewBook/>
    },
    {
        path:"addNewBook/lists",
        component:<AddNewBookLists/>
    }
]