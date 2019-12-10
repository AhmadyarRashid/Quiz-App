import React, { Component } from "react";

class Answer extends Component {

  checkHandler = event => {
    const checkedBox = event.target.checked;
    this.props.onChange(checkedBox, event.target.value, event.target.name, this.props.type);
  }


  render() {
    if (this.props.type === "single") {
      return (
        <div className="ck-button">
          <label htmlFor={this.props.id}>
            <input
              type="checkbox"
              id={this.props.id}
              name={this.props.name}
              value={this.props.option}
              letter={this.props.letter}
              //checked={this.props.output === this.props.option ? true : false}
              checked={this.props.output.indexOf(this.props.option) > -1 ? true : false}
              onChange={this.checkHandler}
            />
            <span><p className='answerLetter'>{this.props.letter}</p>{this.props.option}</span>
          </label>
        </div>
      );
    } else if (this.props.type === "multi") {
      return (
        <div className="ck-button">
          <label htmlFor={this.props.id}>
            <input
              type="checkbox"
              id={this.props.id}
              name={this.props.name}
              value={this.props.option}
              letter={this.props.letter}
              checked={this.props.output == "" ? false : (this.props.output.indexOf(this.props.option) > -1 ? true : false)}
              onChange={this.checkHandler}
            />
            <span><p className='answerLetter'>{this.props.letter}</p>{this.props.option}</span>
          </label>
        </div>
      );
    }
  }
}

export default Answer;
