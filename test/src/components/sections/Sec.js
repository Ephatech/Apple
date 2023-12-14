import React, {Component} from 'react';

class Sec extends Component {
  render(){
    return (
        <div>
            <section className={this.props.class}>
        <div className="title-wrapper row pt-4">
          <p>{this.props.title}</p>
        </div>
        <div className="description-wrapper row">
          <p>{this.props.desc}</p>
        </div>
        <div className="links-wrapper">
          <ul>
            <li>{this.props.btn1}</li>
            <li>{this.props.btn2}</li>
          </ul>
        </div>
      </section>
        </div>
    );
}
}

export default Sec;
