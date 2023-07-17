import loadable from "@loadable/component";

const AddDonnerPage=loadable(()=>import('./Donner/Form'));
const DonnerLists=loadable(()=>import('./Donner/DataLists'));
const SetupStuck=loadable(()=>import('./Stuck'));
const AddNewBook=loadable(()=>import('./AddNewBook/Form'));
const BookLists=loadable(()=>import('./AddNewBook/DataLists'));

export default[
    {
        path:'addDonner',
        component:<AddDonnerPage/>
    },
    {
        path:'addDonner/lists',
        component:<DonnerLists/>
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
        component:<BookLists/>
    }
]