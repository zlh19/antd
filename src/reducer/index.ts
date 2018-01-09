import {combineReducers} from 'redux'

import { todos } from './todo'
import { classPanel } from './classPanel'
import { trainClass } from './trainClass'
import { bicycle } from './bicycle'

const appReducer=combineReducers({
    todos,
    classPanel,
    trainClass,
    bicycle
})

export default appReducer

