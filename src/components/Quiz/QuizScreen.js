import React, { Component } from "react";
import QuizSection from "./Section/Section";

const getImages = require.context("../../../public/images", true);

class QuizScreen extends Component {
  state = {
    data: this.props.options,
    quizKey: this.props.quizKey,
    step: 0
  };


  getQuizLogo(type) {
    const step = this.state.step;
    const showLogo = this.state.data[step].logo;
    const blankImg = "./empty.png";
    if (type === "src") {
      if (showLogo !== "" && showLogo !== undefined && showLogo !== undefined) {
        return getImages(showLogo);
      } else {
        return getImages(blankImg);
      }
    }
  }

  getCloseImg() {
    return getImages("./common/close.svg");
  }

  getHero(type) {
    const step = this.state.step;
    const showHero = this.state.data[step].heroImage;
    const showHeroClass = this.state.data[step].heroClassOverride;
    const blankImg = "./empty.png";

    if (type === "src") {
      if (showHero !== "" && showHero !== undefined && showHero !== undefined) {
        return getImages(showHero);
      } else {
        return getImages(blankImg);
      }
    }

    if (type === "class") {
      let heroClass = "hidden";
      if (showHero !== "") {
        if (
          showHeroClass !== "" &&
          showHeroClass !== undefined &&
          showHeroClass !== undefined
        ) {
          heroClass = "hero " + showHeroClass;
        } else {
          heroClass = "hero"; //this needs to be a global varible
        }
        return heroClass;
      }
    }
  }

  handleFieldChange = checkedBox => {
    this.setState({ isChecked: checkedBox });
  };

  nextStep = () => {
    const step = this.state.step;
    const data = this.state.data;
    if (this.state.step < data.length) {
      this.setState({
        step: step + 1
      });
    }
  };

  backStep = () => {
    const step = this.state.step;

    if (this.state.step >= 1) {
      this.setState({
        step: step - 1
      });
    }
  };


  resetQuiz = e => {
    this.props.resetClick(this.state);
  };

  handlerBackBtn = e => {
    this.props.backClick(this.state);
  };

  render() {
    const step = this.state.step;
    const firstScreen = this.state.data;

    return (
      <div className={this.state.quizKey}>
        <div className="c-quiz-screen">
          <div className="c-quiz-screen__header">
            <img className="logo" alt="" src={this.getQuizLogo("src")}></img>
            <h1>{this.state.data[step].heading}</h1>
            <img className="close" alt="" src={this.getCloseImg()} onClick={this.resetQuiz}></img>
          </div>
          <div className="c-quiz-screen__intro">
            <img
              className={this.getHero("class")}
              alt=""
              src={this.getHero("src")}
            ></img>
          </div>
          <div className="c-quiz-screen__options">
            <QuizSection
              data={firstScreen[step]}
              step={step}
              quiz={this.state.quizKey}
              resetClick={this.resetQuiz}
              backClick={this.backStep}
              clicked={this.nextStep}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default QuizScreen;
