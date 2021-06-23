import React,{useState,useEffect,useContext} from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';

import UserContext from '../UserContext';
import axiosInstance from "../axiosApi";

const Singlequiz = ({navigation}) => {
    const initialQuesObj = {
        answer: 0,
        explanation: "",
        id: 0,
        ques_image: "",
        ques_text: ""
      }
      const [score, setScore] = useState(0);
      const [quesList, setQuesList] = useState([]);
      const [quesCount, setQuesCount] = useState(0);
      const [currentQues, setCurrentQues] = useState(initialQuesObj);
      const [currentExplanation, setCurrentExplanation] = useState("Answer the Question to View Explanation!");
    
      const [primaryBtnStyle, setPrimaryStyle] = useState("#841584");
      const [secondaryBtnStyle, setSecondaryStyle] = useState("#841584");
      const [tertiaryBtnStyle, setTertiaryStyle] = useState("#841584");
    
      const userLogValue = useContext(UserContext);
    
      useEffect(() => {
        if (!userLogValue.value) {
          // return <Redirect to='/login/' />;
        }
        const requestData = async () => {
          const response = await axiosInstance.get('/modes/list-sq/')
          setQuesList(response.data);
          setCurrentQues(response.data[quesCount]);
        }
        requestData();
      }, []);
    
      const handleClick1 = async () => {
        // Submitting Answer to db and Updating Explanation
        let answerSelected = 1;
        const response = await axiosInstance.post('/modes/answer-sq/', {
          'questionID': currentQues.id,
          'answer': answerSelected,
        })
        if (answerSelected == currentQues.answer) {
          setPrimaryStyle("green");
          setScore((prevScore) => prevScore + 10);
        }
        else {
          setScore((prevScore) => prevScore - 5);
          if (currentQues.answer == 2) {
            setSecondaryStyle("green");
          }
          else if (currentQues.answer == 3) {
            setTertiaryStyle("green");
          }
            setPrimaryStyle("red");
        }
        // document.querySelector("#primarybtn").setAttribute("disabled", "");
        // document.querySelector("#secondarybtn").setAttribute("disabled", "");
        // document.querySelector("#tertiarybtn").setAttribute("disabled", "");
        setCurrentExplanation(currentQues.explanation);
      }

      const handleClick2 = async () => {
        // Submitting Answer to db and Updating Explanation
        let answerSelected = 2;
        const response = await axiosInstance.post('/modes/answer-sq/', {
          'questionID': currentQues.id,
          'answer': answerSelected,
        })
        if (answerSelected == currentQues.answer) {
          setSecondaryStyle("green");
          setScore((prevScore) => prevScore + 10);
        }
        else {
          setScore((prevScore) => prevScore - 5);
          if (currentQues.answer == 1) {
            setPrimaryStyle("green");
          }
          else if (currentQues.answer == 3) {
            setTertiaryStyle("green");
          }
            setSecondaryStyle("red");
        }
        // document.querySelector("#primarybtn").setAttribute("disabled", "");
        // document.querySelector("#secondarybtn").setAttribute("disabled", "");
        // document.querySelector("#tertiarybtn").setAttribute("disabled", "");
        setCurrentExplanation(currentQues.explanation);
      }

      const handleClick3 = async () => {
        // Submitting Answer to db and Updating Explanation
        let answerSelected = 3;
        const response = await axiosInstance.post('/modes/answer-sq/', {
          'questionID': currentQues.id,
          'answer': answerSelected,
        })
        if (answerSelected == currentQues.answer) {
          setTertiaryStyle("green");
          setScore((prevScore) => prevScore + 10);
        }
        else {
          setScore((prevScore) => prevScore - 5);
          if (currentQues.answer == 2) {
            setSecondaryStyle("green");
          }
          else if (currentQues.answer == 1) {
            setPrimaryStyle("green");
          }
            setTertiaryStyle("red");
        }
        // document.querySelector("#primarybtn").setAttribute("disabled", "");
        // document.querySelector("#secondarybtn").setAttribute("disabled", "");
        // document.querySelector("#tertiarybtn").setAttribute("disabled", "");
        setCurrentExplanation(currentQues.explanation);
      }
    
      const changeNextQuestion = () => {
        if (quesList.length - 2 == quesCount) { //last question disable button
          // document.querySelector("#changeNextButton").setAttribute("disabled", "");
        }
        // document.querySelector("#primarybtn").removeAttribute("disabled", "");
        // document.querySelector("#secondarybtn").removeAttribute("disabled", "");
        // document.querySelector("#tertiarybtn").removeAttribute("disabled", "");
    
        setCurrentExplanation("Answer the Question to View Explanation!");
        setPrimaryStyle("#841584");
        setSecondaryStyle("#841584");
        setTertiaryStyle("#841584");
        let currentCount = quesCount;
        currentCount += 1;
        setQuesCount(currentCount);
        setCurrentQues(quesList[currentCount]);
      }
    
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
            <Text style={styles.h2}>Guess The Sector</Text>
          </View>
          <View style={styles.quesbody}>
            <Image
              style={{width: 200, height: 200, resizeMode: 'contain'}}
              source={{
                uri: currentQues.ques_image,
              }}
            />
            <Text style={styles.h3}>{currentQues.ques_text}</Text>
            <View>
              <View style={[{marginBottom: '5%'}]}>
                <Button
                onPress={handleClick1}
                  style={styles.btn}
                  title="Primary"
                  color={primaryBtnStyle}
                  />
              </View>
              <View style={[{marginBottom: '5%'}]}>
                <Button
                onPress={handleClick2}
                  style={styles.btn}
                  title="Secondary"
                  color={secondaryBtnStyle}
                  />
              </View>
              <View style={[{marginBottom: '5%'}]}>
                <Button
                onPress={handleClick3}
                  style={styles.btn}
                  title="Tertiary"
                  color={tertiaryBtnStyle}
                  />
              </View>
            </View>
          </View>
          <View style={[{marginBottom: '5%'}]}>
            <Button
              onPress={changeNextQuestion}
              style={styles.btn}
              title="Next"
              color='#841354'
              />
          </View>
          <View>
            <Text style={styles.h4}>
              {currentExplanation}
            </Text>
          </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      // justifyContent: 'center',
      // padding: '5%',
      // marginTop: '10%'
    },
  
    h1: {
      fontSize: 30,
      textAlign: 'center',
      color: 'black'
    },
  
    h2: {
      fontSize: 25,
      textAlign: 'center',
      marginTop: '4%',
      color: 'black'
    },
  
    h3: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: '4%',
      color: 'black',
      marginBottom: '4%'
    },
  
    h4: {
      fontSize: 15,
      textAlign: 'center',
      marginTop: '4%',
      color: 'black'
    },
  
    btn: {
      width: 20,
    },

    quesbody: {
      paddingTop: '6%',
      alignItems: 'center'
    },
  });
  
 
export default Singlequiz;