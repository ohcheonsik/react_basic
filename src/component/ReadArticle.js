import React, { Component } from 'react'

class ReadArticle extends Component{
  render(){
    console.log('ReadArticle 실행');
    let classNames = "menu";
    
    if (this.props.mode === 'welcome') {
      classNames += ' hidden';
    }

    return(
    <section>
      <article>
        <h2>{this.props.title}</h2>
        <p>{this.props.desc}</p>
        <ul className={classNames}>
          <li><input type="button" className="secondary" value="update" onClick={()=>{
              this.props.onChangeMode('update');
          }} /></li>
          <li><input type="button" className="danger" value="delete" onClick={()=>{
              this.props.onChangeMode('delete');
          }} /></li>
        </ul>        
      </article>
    </section>
    )
  }
}

export default ReadArticle;
