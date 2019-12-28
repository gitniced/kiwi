import React from 'react';

class Tabbar extends React.PuerComponent{
  constructor(props){
    this.state = {
      name: '名字'
    }
  }
  // 注释1
  /**
   * 注释2
   */
  textRender = () => {
    const text = "方法测试";
    return <div>文字测试</div>
  }
  render(){
  return <div title="属性测试">文字测试{textRender}</div>
  }
}