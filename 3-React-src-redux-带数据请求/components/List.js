import React, { Component } from 'react'
import store from 'store'
import actions from 'store/actions'
import {Button} from 'antd'
export default class List extends Component {
  state = {
    list: store.getState().todos
  }
  componentDidMount () {
    store.subscribe(() => {
      this.setState({
        list: store.getState().todos
      })
    })
  }
  render() {
    const { list } = this.state
    if (!list[0]) return <div>数据为空</div>
    return (
      <div>
        {list.map((item,index) => <div key={item.id}> {item.task} <Button type="danger" onClick={() => {actions.delTodos(index)}}> 删除 </Button> </div>)}
      </div>
    )
  }
}
