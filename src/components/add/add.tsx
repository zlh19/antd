import * as React from 'react'
import { Component } from 'react'
import './add.scss';

interface InterfaceProps{
  onAdd:any
}

class Add extends Component<InterfaceProps,any> {
  private iptDom: HTMLInputElement

  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <div className="ipt-wrap" >
            <input type="text" className="ipt" ref={(input) => { this.iptDom = input}}/>
            <button className="btn" onClick={()=>this.addInfor()}>Add</button>
          </div>
      </div>
    )
  }

  addInfor(){
    const iptValue = this.iptDom.value;
    const {onAdd}=this.props;
    onAdd(iptValue);
  }

}

export {
  Add
}
