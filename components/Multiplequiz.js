import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

import UserContext from "../UserContext";
import axiosInstance from "../axiosApi";

const Multiplequiz = ({ navigation }) => {
  const initialQuesObj = {
    answer: 0,
    explanation: "",
    id: 0,
    ques_text: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  };
  const [quesList, setQuesList] = useState([]);
  const [quesCount, setQuesCount] = useState(0);
  const [currentQues, setCurrentQues] = useState(initialQuesObj);
  const [currentExplanation, setCurrentExplanation] = useState(
    "Answer the Question to View Explanation!"
  );
  const [explainDisplayCSS, setExplainDisplayCSS] = useState("none");

  const [option1BtnStyle, setoption1Style] = useState("#841584");
  const [option2BtnStyle, setoption2Style] = useState("#841584");
  const [option3BtnStyle, setoption3Style] = useState("#841584");
  const [option4BtnStyle, setoption4Style] = useState("#841584");

  const userLogValue = useContext(UserContext);

  useEffect(() => {
    if (!userLogValue.value) {
      // return <Redirect to='/login/' />;
    }
    const requestData = async () => {
      const response = await axiosInstance.get("/modes/list-mq/");
      setQuesList(response.data);
      setCurrentQues(response.data[quesCount]);
    };
    requestData();
  }, []);

  const handleClick1 = async () => {
    // Submitting Answer to db and Updating Explanation
    let answerSelected = 1;
    const response = await axiosInstance.post("/modes/answer-mq/", {
      questionID: currentQues.id,
      answer: answerSelected,
    });
    if (answerSelected == currentQues.answer) {
        setoption1Style("green");
    } else {
      if (currentQues.answer == 2) {
        setoption2Style("green");
      } else if (currentQues.answer == 3) {
        setoption3Style("green");
      } else if (currentQues.answer == 4) {
        setoption4Style("green");
      }

        setoption1Style("red");
    }
    // document.querySelector("#opt1").setAttribute("disabled", "");
    // document.querySelector("#opt2").setAttribute("disabled", "");
    // document.querySelector("#opt3").setAttribute("disabled", "");
    // document.querySelector("#opt4").setAttribute("disabled", "");
    setCurrentExplanation(currentQues.explanation);
    // setExplainDisplayCSS("block");
  };

  const handleClick2 = async () => {
    // Submitting Answer to db and Updating Explanation
    let answerSelected = 2;
    const response = await axiosInstance.post("/modes/answer-mq/", {
      questionID: currentQues.id,
      answer: answerSelected,
    });
    if (answerSelected == currentQues.answer) {
        setoption2Style("green");
    } else {
      if (currentQues.answer == 1) {
        setoption1Style("green");
      } else if (currentQues.answer == 3) {
        setoption3Style("green");
      } else if (currentQues.answer == 4) {
        setoption4Style("green");
      }

        setoption2Style("red");
    }
    // document.querySelector("#opt1").setAttribute("disabled", "");
    // document.querySelector("#opt2").setAttribute("disabled", "");
    // document.querySelector("#opt3").setAttribute("disabled", "");
    // document.querySelector("#opt4").setAttribute("disabled", "");
    setCurrentExplanation(currentQues.explanation);
    // setExplainDisplayCSS("block");
  };

  const handleClick3 = async () => {
    // Submitting Answer to db and Updating Explanation
    let answerSelected = 3;
    const response = await axiosInstance.post("/modes/answer-mq/", {
      questionID: currentQues.id,
      answer: answerSelected,
    });
    if (answerSelected == currentQues.answer) {
        setoption3Style("green");
    } else {
      if (currentQues.answer == 2) {
        setoption2Style("green");
      } else if (currentQues.answer == 1) {
        setoption1Style("green");
      } else if (currentQues.answer == 4) {
        setoption4Style("green");
      }

        setoption3Style("red");
    }
    // document.querySelector("#opt1").setAttribute("disabled", "");
    // document.querySelector("#opt2").setAttribute("disabled", "");
    // document.querySelector("#opt3").setAttribute("disabled", "");
    // document.querySelector("#opt4").setAttribute("disabled", "");
    setCurrentExplanation(currentQues.explanation);
    // setExplainDisplayCSS("block");
  };

  const handleClick4 = async () => {
    // Submitting Answer to db and Updating Explanation
    let answerSelected = 4;
    const response = await axiosInstance.post("/modes/answer-mq/", {
      questionID: currentQues.id,
      answer: answerSelected,
    });
    if (answerSelected == currentQues.answer) {
        setoption4Style("green");
    } else {
      if (currentQues.answer == 2) {
        setoption2Style("green");
      } else if (currentQues.answer == 3) {
        setoption3Style("green");
      } else if (currentQues.answer == 1) {
        setoption1Style("green");
      }

        setoption4Style("red");
    }
    // document.querySelector("#opt1").setAttribute("disabled", "");
    // document.querySelector("#opt2").setAttribute("disabled", "");
    // document.querySelector("#opt3").setAttribute("disabled", "");
    // document.querySelector("#opt4").setAttribute("disabled", "");
    setCurrentExplanation(currentQues.explanation);
    // setExplainDisplayCSS("block");
  };

  const changeNextQuestion = () => {
    if (quesList.length - 2 == quesCount) { //last question disable button
      // document.querySelector("#changeNextButton").setAttribute("disabled", "");
    }
    // document.querySelector("#opt1").removeAttribute("disabled", "");
    // document.querySelector("#opt2").removeAttribute("disabled", "");
    // document.querySelector("#opt3").removeAttribute("disabled", "");
    // document.querySelector("#opt4").removeAttribute("disabled", "");
    // setExplainDisplayCSS('none');

    setCurrentExplanation("Answer the Question to View Explanation!");
    setoption1Style("#841584");
    setoption2Style("#841584");
    setoption3Style("#841584");
    setoption4Style("#841584");
    let currentCount = quesCount;
    let progresdDot = `progress${quesCount}`
    // document.getElementById(progresdDot).style.backgroundColor = "chartreuse";
    currentCount += 1;
    setQuesCount(currentCount);
    setCurrentQues(quesList[currentCount]);
  };

  // var timeleft = 120;
  // var timeleftstr = "";
  // function timer() {
  //   document.getElementById("startbtn").setAttribute("disabled", "");
  //   var timerid = setInterval(function () {
  //     if (timeleft <= 0) {
  //       clearInterval(timerid);
  //     } else {
  //       timeleft -= 1;
  //       var minutes = Math.floor(timeleft / 60);
  //       var seconds = timeleft % 60;
  //       var secondsstr = "";
  //       if (seconds < 10) {
  //         secondsstr = "0" + JSON.stringify(seconds);
  //       } else {
  //         secondsstr = JSON.stringify(seconds);
  //       }
  //       timeleftstr = JSON.stringify(minutes) + ":" + secondsstr;
  //     }
  //     console.log(timeleftstr);
  //     document.getElementById("timer").innerHTML = "Time Left-" + timeleftstr;
  //   }, 1000);
  // }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.h2}>Who's the economist</Text>
      </View>
      <View style={styles.quesbody}>
        <Text style={styles.h3}>{currentQues.ques_text}</Text>
        <View>
          <View style={[{ marginBottom: "5%" }]}>
            <Button
              onPress={handleClick1}
              style={styles.btn}
              title={currentQues.option1}
              color={option1BtnStyle}
            />
          </View>
          <View style={[{ marginBottom: "5%" }]}>
            <Button
              onPress={handleClick2}
              style={styles.btn}
              title={currentQues.option2}
              color={option2BtnStyle}
            />
          </View>
          <View style={[{ marginBottom: "5%" }]}>
            <Button
              onPress={handleClick3}
              style={styles.btn}
              title={currentQues.option3}
              color={option3BtnStyle}
            />
          </View>
          <View style={[{ marginBottom: "5%" }]}>
            <Button
              onPress={handleClick4}
              style={styles.btn}
              title={currentQues.option4}
              color={option4BtnStyle}
            />
          </View>
        </View>
      </View>
      <View style={[{ marginBottom: "5%" }]}>
        <Button
          onPress={changeNextQuestion}
          style={styles.btn}
          title="Next"
          color="#841354"
        />
      </View>
      <View>
        <Text style={styles.h4}>{currentExplanation}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
    // padding: '5%',
    marginTop: "10%",
  },

  h1: {
    fontSize: 30,
    textAlign: "center",
    color: "black",
  },

  h2: {
    fontSize: 25,
    textAlign: "center",
    marginTop: "4%",
    color: "black",
  },

  h3: {
    fontSize: 20,
    textAlign: "center",
    marginTop: "4%",
    color: "black",
    marginBottom: "4%",
  },

  h4: {
    fontSize: 15,
    textAlign: "center",
    marginTop: "4%",
    color: "black",
  },

  btn: {
    width: 20,
  },

  quesbody: {
    paddingTop: "6%",
    alignItems: "center",
  },
});

export default Multiplequiz;
