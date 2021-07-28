import "./styles.css";
import React, { useState, useEffect } from "react";

const Home = ({ setMode }) => {
  return (
    <div className="centercontainer">
      <div className="heading">Do you know your Triangles?</div>
      <div className="blockrow">
        <div className="block" onClick={() => setMode("CheckAngles")}>
          <span>Angles of a triangle</span>
        </div>
        <div className="block" onClick={() => setMode("FindHypotenuse")}>
          <span>Find hypotenuse</span>
        </div>
      </div>
      <div className="blockrow">
        <div className="block" onClick={() => setMode("FindArea")}>
          <span>Calculate Area</span>
        </div>
        <div className="block" onClick={() => setMode("TrianglesQuiz")}>
          <span>Take a quiz!</span>
        </div>
      </div>
    </div>
  );
};

const CheckAngles = ({ setMode }) => {
  const [angle1, setAngle1] = useState(0);
  const [angle2, setAngle2] = useState(0);
  const [angle3, setAngle3] = useState(0);
  const [output, setOutput] = useState("");
  const checkTriangle = () => {
    if (Number(angle1 + angle2 + angle3) === 180) {
      setOutput("It is a triangle");
    } else {
      console.log(angle1 + angle2 + angle3);
      setOutput("It's not a triangle");
    }
  };
  return (
    <div className="centercontainer checkanglecontainer">
      <button className="go-back-btn" onClick={() => setMode("Home")}>
        Go back
      </button>
      <h4 className="heading2">
        Input angles below to check if they make a triangle!
      </h4>
      <div className="angleinputs">
        <input
          type="number"
          min="0"
          max="180"
          className="angleinput"
          value={angle1}
          onChange={(e) => setAngle1(Number(e.target.value))}
        />
        <input
          type="number"
          min="0"
          max="180"
          className="angleinput"
          value={angle2}
          onChange={(e) => setAngle2(Number(e.target.value))}
        />
        <input
          type="number"
          min="0"
          max="180"
          className="angleinput"
          value={angle3}
          onChange={(e) => setAngle3(Number(e.target.value))}
        />
      </div>
      <button className="checktrianglebtn" onClick={checkTriangle}>
        Check
      </button>
      <div className="output">{output}</div>
    </div>
  );
};

const FindHypotenuse = ({ setMode }) => {
  const [length1, setLength1] = useState(3);
  const [length2, setLength2] = useState(4);
  const [hypotenuse, setHypotenuse] = useState(null);
  const calculateHypotenuse = () => {
    const calchypotenuse = Math.sqrt(
      Math.pow(length1, 2) + Math.pow(length2, 2)
    );
    setHypotenuse(calchypotenuse);
  };
  useEffect(() => {
    calculateHypotenuse();
  }, [length1, length2]);
  return (
    <div className="centercontainer hypotenusecontainer">
      <button className="go-back-btn" onClick={() => setMode("Home")}>
        Go back
      </button>
      <div className="heading2">Find the Hypotenuse Length of a Triangle</div>
      <img
        src="https://www.clipartmax.com/png/full/235-2353028_right-angled-triangle-coloring-page-triangle.png"
        alt="rightangletriangle"
        height="150px"
      />
      <div className="triangleinputs">
        <label>Base</label>
        <input
          type="number"
          value={length1}
          onChange={(e) => {
            setLength1(Number(e.target.value));
          }}
          className="length1 lengthinput"
        />
        <label>Height</label>
        <input
          type="number"
          value={length2}
          onChange={(e) => {
            setLength2(Number(e.target.value));
          }}
          className="length2 lengthinput"
        />
      </div>
      <div className="output">
        {hypotenuse && <h5>Hypotenuse: {hypotenuse} </h5>}
      </div>
    </div>
  );
};

const FindArea = ({ setMode }) => {
  const [tritype, setType] = useState(0);
  const Type1 = () => {
    const [Base, setBase] = useState(3);
    const [Height, setHeight] = useState(4);

    const [Area, setArea] = useState(null);
    const calculateArea = () => {
      const calcArea = 0.5 * Base * Height;
      setArea(calcArea);
    };
    useEffect(() => {
      calculateArea();
    }, [Base, Height]);
    return (
      <div>
        <div className="triangleinputs">
          <label>Base</label>
          <input
            type="number"
            value={Base}
            min="0"
            onChange={(e) => {
              setBase(Number(e.target.value));
            }}
            className="Base sideinput"
          />
          <label>Height</label>
          <input
            type="number"
            value={Height}
            min="0"
            onChange={(e) => {
              setHeight(Number(e.target.value));
            }}
            className="Height sideinput"
          />
        </div>
        <div className="output">
          {Area ? <h5>Area: {Area} </h5> : <h5>Input side length</h5>}
        </div>
      </div>
    );
  };
  const Type2 = () => {
    const [Side1, setSide1] = useState(1);
    const [Side2, setSide2] = useState(1);
    const [Side3, setSide3] = useState(1);
    const [Area, setArea] = useState(null);
    const calculateArea = () => {
      const S = (Side1 + Side2 + Side3) / 2;
      const calcArea = Math.sqrt(S * (S - Side1) * (S - Side2) * (S - Side3));

      setArea(calcArea);
    };
    useEffect(() => {
      calculateArea();
    }, [Side1, Side2, Side3]);
    return (
      <div>
        <div className="triangleinputs">
          <label>Side 1</label>
          <input
            type="number"
            value={Side1}
            min="0"
            onChange={(e) => {
              setSide1(Number(e.target.value));
            }}
            className="Base sideinput"
          />
          <label>Side 2</label>
          <input
            type="number"
            value={Side2}
            min="0"
            onChange={(e) => {
              setSide2(Number(e.target.value));
            }}
            className="Base sideinput"
          />
          <label>Side 3</label>
          <input
            type="number"
            min="0"
            value={Side3}
            onChange={(e) => {
              setSide3(Number(e.target.value));
            }}
            className="Base sideinput"
          />
        </div>
        <div className="output">
          {Area ? (
            <h5>Area: {Area} </h5>
          ) : (
            <h5>
              Enter valid side lengths such that each side length should be less
              than sum of other two sides
            </h5>
          )}
        </div>
      </div>
    );
  };
  const Type3 = () => {
    const [Side1, setSide1] = useState(1);
    const [Side2, setSide2] = useState(1);
    const [Angle, setAngle] = useState(1);
    const [Area, setArea] = useState(null);
    const calculateArea = () => {
      const calcArea = (Side1 * Side2 * Math.sin((Angle * Math.PI) / 180)) / 2;
      setArea(calcArea);
    };
    useEffect(() => {
      calculateArea();
    }, [Side1, Side2, Angle]);
    return (
      <div>
        <div className="triangleinputs">
          <label>Side 1</label>
          <input
            type="number"
            min="0"
            value={Side1}
            onChange={(e) => {
              setSide1(Number(e.target.value));
            }}
            className="Side1 sideinput"
          />
          <label>Side 2</label>
          <input
            type="number"
            min="0"
            value={Side2}
            onChange={(e) => {
              setSide2(Number(e.target.value));
            }}
            className="Side2 sideinput"
          />
          <label>Angle</label>
          <input
            type="number"
            min="0"
            value={Angle}
            onChange={(e) => {
              setAngle(Number(e.target.value));
            }}
            className="Angle sideinput"
          />
        </div>
        <div className="output">
          {Area ? <h5>Area: {Area} </h5> : <h5>Enter a value to calculate </h5>}
        </div>
      </div>
    );
  };
  const calculatorRenderer = () => {
    if (tritype === 1) {
      return <Type1 />;
    } else if (tritype === 2) {
      return <Type2 />;
    } else if (tritype === 3) {
      return <Type3 />;
    }
  };

  return (
    <div className="centercontainer areacontainer">
      <button className="go-back-btn" onClick={() => setMode("Home")}>
        Go back
      </button>
      <form className="triangletypeform">
        <div>
          <input
            type="radio"
            className="triangletype"
            id="type1"
            name="type"
            onChange={(e) => setType(1)}
          />
          <label htmlFor="type1">Using base and height</label>
        </div>
        <div>
          <input
            type="radio"
            className="triangletype"
            id="type2"
            name="type"
            onChange={(e) => setType(2)}
          />
          <label htmlFor="type2">Using all 3 sides</label>
        </div>
        <div>
          <input
            type="radio"
            className="triangletype"
            id="type3"
            name="type"
            onChange={(e) => setType(3)}
          />
          <label htmlFor="type3">
            Using 2 sides and the angle between them
          </label>
        </div>
      </form>
      <img
        src="https://www.clipartmax.com/png/full/235-2353028_right-angled-triangle-coloring-page-triangle.png"
        alt="rightangletriangle"
        height="150px"
      />
      {calculatorRenderer()}
    </div>
  );
};

const TrianglesQuiz = ({ setMode }) => {
  const Quiz = [
    {
      question:
        "If a triangle has angles 100, 50, 30. Is it an acute triangle?",
      answer: "No",
      options: ["Yes", "No"],
    },
    {
      question: "Can a triangle have more than one obtuse angles...?",
      answer: "No",
      options: ["Yes", "No"],
    },
    {
      question:
        "If a triangle has angles 90, 30, 60. Is it an right angle triangle?",
      answer: "No",
      options: ["Yes", "No"],
    },
    {
      question:
        "If a triangle has angles 125, 25, 30. Is it an obtuse triangle?",
      answer: "Yes",
      options: ["Yes", "No"],
    },
    {
      question:
        "If a triangle has 2 angles of 65, what will be the measure of third angle...?",
      answer: "50",
      options: ["50", "30", "60"],
    },
    {
      question:
        "There is a triangle XYZ where XY is perpendicular to YZ and angle X = 70. What is the measure of angle Z?",
      answer: "20",
      options: ["50", "30", "20"],
    },
    {
      question:
        "If the measure of one angle of a triangle is 95, then which of the following cannot be the measure of remaining angles?",
      answer: "90",
      options: ["80", "90", "15"],
    },
    {
      question:
        "If a triangle has angles 135, 15, 30. Is it an obtuse triangle?",
      answer: "Yes",
      options: ["Yes", "No"],
    },
    {
      question:
        "In an equilateral triangle, what is the sum of any two of its angles?",
      answer: "120",
      options: ["60", "180", "120"],
    },
    {
      question:
        "If a triangle has 2 sides with equal lengths and 60 angle between them. What is the type of triangle?",
      answer: "Both",
      options: ["Equilateral", "Isosceles", "Both"],
    },
  ];
  const answerArray = new Array(Quiz.length);
  answerArray.fill(0);

  let colorsArray = new Array(Quiz.length);
  colorsArray.fill("rgba(224,255,255,0.6)");
  const [answers, setAnswers] = useState(answerArray);
  const [colorArray, setColorArray] = useState(colorsArray);
  const [score, setScore] = useState(null);
  const answerChange = (option, index) => {
    let currentAnswers = [...answers];
    currentAnswers[index] = option;
    setAnswers(currentAnswers);
  };
  const calculateScore = (e) => {
    e.preventDefault();
    const correctAnswers = Quiz.map((ques) => ques.answer);
    let curscore = 0;
    answers.forEach((answer, index) => {
      if (answer === correctAnswers[index]) {
        curscore = curscore + 1;
        colorsArray[index] = "rgba(144,238,144,0.6)";
      } else {
        colorsArray[index] = "rgba(255,0,0,0.6)";
      }
    });
    setScore(curscore);
    setColorArray(colorsArray);
    alert(`You scored ${curscore} points!`);
  };

  // };
  return (
    <div className="centercontainer quizcontainer">
      <button className="go-back-btn" onClick={() => setMode("Home")}>
        Go back
      </button>

      <form className="formcontainer" onSubmit={(e) => calculateScore(e)}>
        <div className="questions">
          {Quiz.map((ques, index) => {
            return (
              <div className="questioncontainer" key={index}>
                <div
                  className="question"
                  style={{ backgroundColor: colorArray[index] }}
                >
                  {" "}
                  {ques.question}{" "}
                </div>
                <div className="inputcontainer">
                  {ques.options.map((option, idx) => {
                    return (
                      <React.Fragment key={idx}>
                        <label>
                          {option}
                          <input
                            type="radio"
                            name={`ques${index}`}
                            id={`ques${idx}`}
                            onChange={(e) => answerChange(option, index)}
                            required
                          />
                        </label>
                        {/* htmlFor={`ques${idx + index}`} */}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <button className="submitquizbtn" type="submit">
          Submit Quiz
        </button>
      </form>
      {/* {score && <div className="score">You scored: {score} points</div>} */}
    </div>
  );
};

export default function App() {
  const [mode, setMode] = useState("Home");
  const content = () => {
    if (mode === "Home") {
      return <Home setMode={setMode} />;
    } else if (mode === "CheckAngles") {
      return <CheckAngles setMode={setMode} />;
    } else if (mode === "FindHypotenuse") {
      return <FindHypotenuse setMode={setMode} />;
    } else if (mode === "FindArea") {
      return <FindArea setMode={setMode} />;
    } else if (mode === "TrianglesQuiz") {
      return <TrianglesQuiz setMode={setMode} />;
    }
  };

  return <div className="App">{content()}</div>;
}
