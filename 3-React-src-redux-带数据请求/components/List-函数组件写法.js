import React, { useState, useEffect } from "react";
import store from "store";
import actions from 'store/actions'
import { Button } from "antd";
export default function List() {
  const [list, setList] = useState(store.getState().todos);
  useEffect(() => {
    store.subscribe(() => {
      setList(store.getState().todos);
    });
  }, []);
  if (!list[0]) return <div> 数据为空</div>;
  return (
    <div>
      <ul>
        {(list.map((item,index) => (
            <li key={item.id}>
              <p> {item.task} </p>
              <div>
                <Button type="danger" onClick={() => {actions.delTodos(index)}}> 删除 </Button>
              </div>
            </li>
          )))}
      </ul>
    </div>
  );
}
