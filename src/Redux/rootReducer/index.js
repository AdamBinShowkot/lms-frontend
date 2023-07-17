import CommonSlice from '../features/common'
import uiSlice from '../features/UI'
import MenuSlice from '../features/Menus'

const reducers={
    menu:MenuSlice,
    tags:uiSlice,
    common:CommonSlice
}

export default reducers;