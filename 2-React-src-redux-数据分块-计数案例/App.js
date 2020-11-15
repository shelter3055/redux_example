import React from 'react'
import {connect} from 'react-redux'
import {actions} from './models/Count'
import {bindActionCreators} from 'redux'
/* 
  * connect是react-redux中提供的一个HOC
  * 作用
    *  1. 帮助我们将store中的数据传递给我们的组件
    *  2. 用于更新界面
  * 底层原理
    * HOC
    * 合并分发
    * 跨组件通信    
  * 参数 - 回调函数
    *  mapStateFromProps --- 帮助我们将store中的state传递给我们的组件
      *  参数是state - 项目中的全部state --- 合并
      *  返回值就是你想要的数据
    *  mapDispatchFromProps -- 帮助我们将actions中action发送给reducer
      *  参数是dispatch
      * 返回值就是actions
*/
export default connect(
  ({count}) => count, //分发
  (dispatch) => bindActionCreators(actions,dispatch)
)(function App({n,increment}) {
  return (
    <div>
      <button onClick={increment}> + </button>
      <p> {n} </p>
    </div>
  )
})
