import React,{useEffect} from 'react'
import {actions} from '../models/User'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
export default connect(
  ({user}) => user,
  dispatch => bindActionCreators(actions,dispatch)
)(function UserComp({getUserInfo,userInfo:{username,phone}}) {
  useEffect(() => {
    getUserInfo()
  },[])
  if (!username&&!phone) return <div>数据加载中....</div>
  return (
    <div>
      <p> 名字： {username} </p>
      <p> 电话： {phone} </p>
    </div>
  )
})
