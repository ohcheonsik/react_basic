import React, { Component } from 'react'

class Mynav extends Component {
  shouldComponentUpdate(newProps, newState){
    console.log('shouldComponentUpdate 작동',
      newProps.data, //변경
      this.props.data//이전
    );
    if(newProps.data === this.props.data){
      return false;
    }
    return true;
  };

  render() {
    console.log('Mynav 실행');
      // console.log("data",this.props.data);
    let lists = [];
    let data = this.props.data;

    /*
    let i=0;
    while(i<data.length){
        lists.push(<li key={data[i].id}><a href="/">{data[i].title}</a></li>);
        i++;
    }
    */

    data.forEach(item => {
      lists.push(<li key={item.id}>
        <a href="/"
          onClick={e=>{
            e.preventDefault();
            this.props.onChangePage(item.id);
          }}
        
        >{item.title}</a></li>);
    });

    return (
    <nav>
      <ul>
        {lists}
      </ul>
    </nav>
    )
  }
}

export default Mynav;