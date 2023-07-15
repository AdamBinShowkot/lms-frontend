import loadable from "@loadable/component";

const AddDonnerPage=loadable(()=>import('./Donner'));
const SetupStuck=loadable(()=>import('./Stuck'));
const AddNewBook=loadable(()=>import('./AddNewBook'));

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
    }
]