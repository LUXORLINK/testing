import { createStore, combineReducers } from 'redux'
import taskReducer from './slices/counter/counter.slices'

const rootReducer = combineReducers({
  tasks: taskReducer,
})

const store = createStore(rootReducer)

export default store
export type RootState = ReturnType<typeof store.getState>
