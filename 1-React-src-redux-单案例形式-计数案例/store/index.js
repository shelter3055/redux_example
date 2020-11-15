import {createStore} from 'redux'
// createStore会创建一个store实例
import reducer from './reducer'
export default createStore(reducer)