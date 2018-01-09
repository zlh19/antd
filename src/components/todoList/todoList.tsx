import * as React from 'react'
import {Component} from 'react'
import { connect } from 'react-redux';
import './todoList.scss';

interface todoListProps{
    todos:Array<any>,
    removeItem:any
}

class TodoList extends Component<todoListProps,any> {
  constructor(props){
    super(props)
  }
  render(){
    const {todos=[],removeItem}=this.props;
    return(
      <div>
          <div className="infor-list">
            <ul>
              {
                todos.map((item,index)=>{
                  return (
                      <li onClick={() => { return removeItem(item) }}>{item.iptInfor}</li>
                  )
                })
              }
            </ul>
          </div>
          <div style={{height:'100px'}}>
          </div>
      </div>
    )
  }

}

export {
  TodoList
}

