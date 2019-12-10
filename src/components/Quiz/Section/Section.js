import React, { Component } from "react";
import Answer from "./Answers/Answer";
import NextBtn from "./NextBtn/NextBtn";
import { connect } from "react-redux";
import { quizAction } from "../../../actions/quizActions";

class QuizSection extends Component {
  state = {
    isChecked: false,
    value: "",
    name: "",
    default: true
  };

  handleFieldChange = (checkedBox, value, name, type) => {
    if (type === "multi") {
      let newValue = "";
      if (checkedBox) {
        if (this.state.value === "") {
          newValue = value;
        } else {
          newValue = this.state.value + "," + value;
        }
      } else {
        const array = this.state.value.split(",");
        array.forEach(item => {
          if (item === value) {
            //already in list
          } else {
            if (newValue === "") {
              newValue = item;
            } else {
              newValue = newValue + "," + item;
            }
          }
        });
      }
      if (newValue !== "") {
        checkedBox = true;
      } else {
        checkedBox = false
      }
      this.setState({
        value: newValue,
        isChecked: checkedBox,
        name
      });
    } else {
      this.setState({
        isChecked: checkedBox,
        value,
        name
      });
    }
  };

  setPreviousValue = (preValue, array, type) => {
    if (type === "single") {

      const output = array.filter(item => item === this.state.value);

      if (this.state.value === "" || output.length === 0) {

        this.setState({
          value: preValue,
          isChecked: true
        });
      }
    }
    if (type === "multi") {
      if (preValue !== "") {
        if (this.state.default) {
          this.setState({
            value: preValue,
            isChecked: true,
            default: false
          });
        }
      }
    }
  };

  handlerNextBtn = e => {
    const t = this.props;
    t.quizAction(this.state);
    t.clicked(this.state);

    this.setState({
      isChecked: false,
      value: "",
      name: ""
    });
  };

  handlerBackBtn = e => {
    this.setState({
      isChecked: true,
      value: "",
      name: "",
      default: true
    });
    this.props.backClick(this.state);
  };

  handlerEndBtn = e => {
    this.props.resetClick(this.state);
  };

  getLetter = (index) => {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return alphabet[index]
  }

  render() {


    let screenType;
    let answerBlock;
    console.log = console.warn = console.error = () => { };
    if (this.props.data.isQuestion && !this.props.data.isEnd) {

      let nextBtn;
      let answer;
      let answersArray = [this.props.data.answers[0]];
      const name = this.props.data.answers[0].name;

      const output = this.props.quizReducer.results.filter(item => item.name === name);

      if (output.length > 0) {


        try {
          this.setPreviousValue(
            output[0].answer,
            answersArray[0].options,
            answersArray[0].type
          );
        } catch (e) {
          console.log(e);
        }

      }


      if (answersArray[0].type === "single") {
        answerBlock = answersArray[0].options.map((q, qIndex) => (
          <Answer
            key={"k_" + qIndex}
            id={"a_" + name + "_" + qIndex}
            option={q}
            type="single"
            name={name}
            letter={this.getLetter(qIndex)}
            output={this.state.value}
            onChange={this.handleFieldChange}
          />
        ));
      }



      if (answersArray[0].type === "multi") {
        answerBlock = answersArray[0].options.map((q, qIndex) => {
          //  console.log('======== values ===' , this.state.value);
          return (
            <Answer
              key={"k_" + qIndex}
              id={"a_" + name + "_" + qIndex}
              option={q}
              type="multi"
              name={name}
              letter={this.getLetter(qIndex)}
              output={this.state.value}
              onChange={this.handleFieldChange}
            />
          )
        });
      }

      if (this.state.isChecked) {
        nextBtn = <NextBtn clicked={this.handlerNextBtn} />;
      }

      screenType = (
        <div>
          <div dangerouslySetInnerHTML={{ __html: (this.props.data.question) }} />
          {answer}

          {answerBlock}
          {this.props.step > 1 && (
            <button className="back" onClick={this.handlerBackBtn}>
              Back
            </button>
          )}
          {nextBtn}
        </div>
      );
    } else {
      screenType = (
        <div>
          <div dangerouslySetInnerHTML={{ __html: (this.props.data.title) }} />

          <div dangerouslySetInnerHTML={{ __html: (this.props.data.explainer) }} />

          <br></br>
          {
            <button className="back" onClick={this.handlerBackBtn}>
              Back
            </button>
          }
          {!this.props.data.isEnd ? (
            <NextBtn clicked={this.props.clicked} />
          ) : null}
          {this.props.data.isEnd ? (
            <button className="end" onClick={this.handlerEndBtn}>
              End
            </button>
          ) : null}
        </div>
      );
    }

    return <div className="c-quiz-section">{screenType}</div>;
  }
}

const mapStatToProps = state => ({
  quizReducer: state.quizReducer
});

const mapDispatchToProps = dispatch => ({
  quizAction: value => dispatch(quizAction(value))
});

export default connect(mapStatToProps, mapDispatchToProps)(QuizSection);
