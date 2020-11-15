import React,{useState} from 'react'
import actions from 'store/actions'
export default function Tab() {
  const [val,setVal] = useState('')
  function send (e) {
    if (e.keyCode == 13 ) {
      actions.addTodos(val)
      setVal('')
    }
  }
  return ( 
    <div>
      <input
        value={val}
        onChange={e=>{setVal(e.target.value)}}
        onKeyDown={send}
      />
    </div>
  )
}
