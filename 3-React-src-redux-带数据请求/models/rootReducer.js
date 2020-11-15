import {combineReducers} from 'redux'
import {reducer as count} from './Count'
import {reducer as user} from './User'
export default combineReducers({
  //分块的数据
  count,user
})