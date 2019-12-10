import React, { Component } from "react";
import SplashScreen from "./components/Quiz/SplashScreen";
import Option from "./components/Quiz/Option/Option";
import QuizScreen from "./components/Quiz/QuizScreen";
import { connect } from 'react-redux';
import { quizAction } from './actions/quizActions';

class App extends Component {

  quizAction = (event) => {
    this.props.quizAction();
  }

  state = {
    showLanding: true,
    showQuiz1: false,
    showQuiz2: false,
    quizKey: ''
  };

  pathHandler = path => {
    if (path === "Quiz1") {
      this.setState({
        showLanding: false,
        showQuiz1: true,
        showQuiz2: false,
        quizKey: "quiz1"
      });
    }
    if (path === "Quiz2") {
      this.setState({
        showLanding: false,
        showQuiz1: false,
        showQuiz2: true,
        quizKey: "quiz2"
      });
    }
  };



  resetQuiz = () => {
    this.setState({
      showLanding: true,
      showQuiz1: false,
      showQuiz2: false,
      quizKey: "",
    });
  };

  render() {
    const data = [
      { name: "Quiz1", label: "Quiz Path 1", desc: "Description of Path 1" },
      { name: "Quiz2", label: "Quiz Path 2", desc: "Description of Path 2" },
    ];

    const Quiz1 = [
      {
        number: 1,
        heading: "Quiz1",
        isQuestion: true,
        logo: "./quiz1/logo/q1_logo.svg",
        heroImage: "./quiz1/hero/q1q1.jpg",
        isEnd: false,
        question: "<h2>Question 1</h2>",
        answers: [
          {
            type: "multi",
            options: [
              "Option 1",
              "Option 2",
              "Option 3",
              "Option 4",
            ],
            name: "quiz1_q1"
          }
        ]
      },
      {
        number: 2,
        heading: "Quiz1",
        isQuestion: false,
        logo: "./quiz1/logo/q1_logo.svg",
        heroImage: "./quiz1/hero/q1q1.jpg",
        heroClassOverride: "heroOverrideClass",
        isEnd: false,
        title: "<h2>Title</h2>",
        explainer: "<h4>Explainer"
      },
      {
        number: 3,
        heading: "Quiz1",
        isQuestion: true,
        heroImage: "./quiz1/hero/q1q2.jpg",
        logo: "./quiz1/logo/q1_logo.svg",
        isEnd: false,
        question: "<h2>Question 2</h2>",
        answers: [
          {
            type: "multi",
            options: [
              "Option 1",
              "Option 2",
              "Option 3",
              "Option 4",
            ],
            name: "quiz1_q2"
          }
        ]
      },
      {
        number: 4,
        heading: "Quiz1",
        isQuestion: false,
        isEnd: false,
        logo: "./quiz1/logo/q1_logo.svg",
        heroImage: "./quiz1/hero/q1q2.jpg",
        heroClassOverride: "heroOverrideClass",
        title: "<h2>Title</h2>",
        explainer: "<h4>Explainer"
      },
      {
        number: 5,
        heading: "Quiz1",
        isQuestion: true,
        logo: "./quiz1/logo/q1_logo.svg",
        heroImage: "./quiz1/hero/q1q3.jpg",
        isEnd: false,
        question: "<h2>Question 3</h2>",
        answers: [
          {
            type: "multi",
            options: [
              "Option 1",
              "Option 2",
              "Option 3",
              "Option 4",
            ],
            name: "quiz1_q3"
          }
        ]
      },
      {
        number: 6,
        heading: "Quiz1",
        isQuestion: false,
        isEnd: false,
        logo: "./quiz1/logo/q1_logo.svg",
        heroImage: "./quiz1/hero/q1q3.jpg",
        heroClassOverride: "heroOverrideClass",
        title: "<h2>Title</h2>",
        explainer: "<h4>Explainer"

      },
      {
        number: 7,
        heading: "Quiz1",
        isQuestion: true,
        logo: "./quiz1/logo/q1_logo.svg",
        heroImage: "./quiz1/hero/q1q4.jpg",
        isEnd: false,
        question: "<h2>Question 4</h2>",
        answers: [
          {
            type: "multi",
            options: [
              "Option 1",
              "Option 2",
              "Option 3",
              "Option 4",
            ],
            name: "quiz1_q4"
          }
        ]
      },
      {
        number: 8,
        heading: "Quiz1",
        isQuestion: false,
        isEnd: false,
        logo: "./quiz1/logo/q1_logo.svg",
        heroImage: "./quiz1/hero/q1q4.jpg",
        heroClassOverride: "heroOverrideClass",
        title: "<h2>Title</h2>",
        explainer: "<h4>Explainer"

      },
      {
        number: 9,
        heading: "Quiz1",
        isQuestion: true,
        logo: "./quiz1/logo/q1_logo.svg",
        heroImage: "./quiz1/hero/q1q5.jpg",
        isEnd: false,
        question: "<h2>Question 5</h2>",
        answers: [
          {
            type: "multi",
            options: [
              "Option 1",
              "Option 2",
              "Option 3",
              "Option 4",
            ],
            name: "quiz1_q5"
          }
        ]
      },
      {
        number: 10,
        heading: "Quiz1",
        isQuestion: false,
        isEnd: true,
        logo: "./quiz1/logo/q1_logo.svg",
        heroImage: "./quiz1/hero/q1q5.jpg",
        heroClassOverride: "heroOverrideClass",
        title: "<h2>Title</h2>",
        explainer: "<h4>Explainer"

      },


    ];

    const Quiz2 = [
      {
        number: 1,
        heading: "Quiz2",
        isQuestion: true,
        isEnd: false,
        logo: "./quiz2/logo/q2_logo.svg",
        heroImage: "./quiz2/hero/q2q1.jpg",
        question: "<h2>Question 1</h2>",
        answers: [
          {
            type: "multi",
            options: [
              "Option 1",
              "Option 2",
              "Option 3",
              "Option 4",
            ],
            name: "quiz2_q1"
          }
        ]
      },
      {
        number: 2,
        heading: "Quiz2",
        logo: "./quiz2/logo/q2_logo.svg",
        heroImage: "./quiz2/hero/q2q1.jpg",
        heroClassOverride: "heroOverrideClass",
        isQuestion: false,
        isEnd: false,
        title: "<h2>Title</h2>",
        explainer: "<h4>Explainer"

      },


      {
        number: 3,
        heading: "Quiz2",
        isQuestion: true,
        isEnd: false,
        logo: "./quiz2/logo/q2_logo.svg",
        heroImage: "./quiz2/hero/q2q2.jpg",
        question: "<h2>Question 2</h2>",
        answers: [
          {
            type: "multi",
            options: [
              "Option 1",
              "Option 2",
              "Option 3",
              "Option 4",
            ],
            name: "quiz2_q2"
          }
        ]
      },
      {
        number: 4,
        heading: "Quiz2",
        logo: "./quiz2/logo/q2_logo.svg",
        heroImage: "./quiz2/hero/q2q2.jpg",
        heroClassOverride: "heroOverrideClass",
        isQuestion: false,
        isEnd: false,
        title: "<h2>Title</h2>",
        explainer: "<h4>Explainer"

      },





      {
        number: 5,
        heading: "Quiz2",
        isQuestion: true,
        isEnd: false,
        logo: "./quiz2/logo/q2_logo.svg",
        heroImage: "./quiz2/hero/q2q3.jpg",
        question: "<h2>Question 3</h2>",
        answers: [
          {
            type: "single",
            options: ["Option 1", "Option 2"],
            name: "quiz2_q3"
          }
        ]
      },
      {
        number: 6,
        heading: "Quiz2",
        logo: "./quiz2/logo/q2_logo.svg",
        heroImage: "./quiz2/hero/q2q3.jpg",
        heroClassOverride: "heroOverrideClass",
        isQuestion: false,
        isEnd: false,
        title: "<h2>Title</h2>",
        explainer: "<h4>Explainer"
      },


      {
        number: 7,
        heading: "Quiz2",
        isQuestion: true,
        isEnd: false,
        logo: "./quiz2/logo/q2_logo.svg",
        heroImage: "./quiz2/hero/q2q4.jpg",
        question: "<h2>Question 4</h2>",
        answers: [
          {
            type: "single",
            options: ["Option 1", "Option 2"],
            name: "quiz2_q4"
          }
        ]
      },



      {
        number: 8,
        heading: "",
        isQuestion: false,
        isEnd: true,
        title: "END TITLE",
        explainer: "END TEXT"
      }
    ];


    let splash;

    if (this.state.showLanding) {
      const options = data.map((q, index) => {
        return (
          <Option
            path={q.name}
            label={q.label}
            name={q.name}
            desc={q.desc}
            key={"k_" + index}
            clickHandler={this.pathHandler}
          />
        );
      });
      splash = <SplashScreen>{options}</SplashScreen>;
    }

    let currentquiz;

    if (this.state.showQuiz1) {
      currentquiz = <QuizScreen quizKey={this.state.quizKey} resetClick={this.resetQuiz} options={Quiz1} />;
    }

    if (this.state.showQuiz2) {
      currentquiz = <QuizScreen quizKey={this.state.quizKey} resetClick={this.resetQuiz} options={Quiz2} />;
    }


    return (
      <div>
        {splash}
        {currentquiz}
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  quizAction: () => dispatch(quizAction())
})

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
