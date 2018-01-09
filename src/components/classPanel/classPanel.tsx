import * as React from 'react'
import { Component } from 'react'
import './classPanel.scss';

interface Props{
  lesson:Array<any>,
  // getLesson:any
}

class ClassPanel extends Component<Props,any> {
  changeTimer(timer:number) {
    const timers = (timer / 60).toString();
    return parseInt(timers)
  }
  // componentDidMount() {
  //   const { getLesson } = this.props;
  //   getLesson()
  // }
  render() {
    const { lesson=[] }=this.props;
      return (
        <div>
          {
            lesson.map((value, index) => {
              return (
                <div className="tc_class" key={index} style={{ backgroundImage: `url(${value.img})` }}>
                  <div className="tc_title">{value.lessonName}</div>
                  <div className="tc_desc">{value.selfLike} kcal</div>
                </div>
              )
            })
          }
        </div>
      )
  }
}

export{
  ClassPanel
}