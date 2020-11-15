import React,{useState,useEffect} from 'react'
import store from 'store'
import actions from 'store/actions'
// console.log('store',store)  dispatch  getState  subscribe replaceReducers
export default function App () {
  //为什么组件中还需要定义state
  const [n,setN] = useState(store.getState().count)
  useEffect(()=> {
    store.subscribe(() => {
      setN(store.getState().count)
    })
  },[])
  return <div>
    <h3> Redux 单案例形式 </h3>
    <hr/>
    <button onClick={actions.increment}> + </button>
    <p> {n} </p>
  </div>
}