import CommonSlice from '../features/common'
import uiSlice from '../features/UI'
import MenuSlice from '../features/Menus';
import storeSlice from '../features/store'

const reducers={
    menu:MenuSlice,
    tags:uiSlice,
    common:CommonSlice,
    store:storeSlice
}

export default reducers;