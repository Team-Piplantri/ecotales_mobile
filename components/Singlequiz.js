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
    
      const [primaryBtnStyle, setPrimaryStyle] = useState("light");
      const [secondaryBtnStyle, setSecondaryStyle] = useState("light");
      const [tertiaryBtnStyle, setTertiaryStyle] = useState("light");
    
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
    
      // const handleClick = async (event) => {
      //   // Submitting Answer to db and Updating Explanation
      //   let answerSelected = event.target.name;
      //   const response = await axiosInstance.post('/modes/answer-sq/', {
      //     'questionID': currentQues.id,
      //     'answer': answerSelected,
      //   })
      //   if (answerSelected == currentQues.answer) {
      //     if (answerSelected == 1) {
      //       setPrimaryStyle("success");
      //     }
      //     else if (answerSelected == 2) {
      //       setSecondaryStyle("success");
      //     }
      //     else if (answerSelected == 3) {
      //       setTertiaryStyle("success");
      //     }
      //     setScore((prevScore) => prevScore + 10);
      //   }
      //   else {
      //     setScore((prevScore) => prevScore - 5);
      //     if (currentQues.answer == 1) {
      //       setPrimaryStyle("success");
      //     }
      //     else if (currentQues.answer == 2) {
      //       setSecondaryStyle("success");
      //     }
      //     else if (currentQues.answer == 3) {
      //       setTertiaryStyle("success");
      //     }
    
      //     if (answerSelected == 1) {
      //       setPrimaryStyle("danger");
      //     }
      //     else if (answerSelected == 2) {
      //       setSecondaryStyle("danger");
      //     }
      //     else if (answerSelected == 3) {
      //       setTertiaryStyle("danger");
      //     }
      //   }
      //   document.querySelector("#primarybtn").setAttribute("disabled", "");
      //   document.querySelector("#secondarybtn").setAttribute("disabled", "");
      //   document.querySelector("#tertiarybtn").setAttribute("disabled", "");
      //   setCurrentExplanation(currentQues.explanation);
      // }
    
      // const changeNextQuestion = (event) => {
      //   if (quesList.length - 2 == quesCount) { //last question disable button
      //     document.querySelector("#changeNextButton").setAttribute("disabled", "");
      //   }
      //   document.querySelector("#primarybtn").removeAttribute("disabled", "");
      //   document.querySelector("#secondarybtn").removeAttribute("disabled", "");
      //   document.querySelector("#tertiarybtn").removeAttribute("disabled", "");
    
      //   setCurrentExplanation("Answer the Question to View Explanation!");
      //   setPrimaryStyle("light");
      //   setSecondaryStyle("light");
      //   setTertiaryStyle("light");
      //   let currentCount = quesCount;
      //   currentCount += 1;
      //   setQuesCount(currentCount);
      //   setCurrentQues(quesList[currentCount]);
      // }
    
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
              style={{width: 200, height: 200, }}
              source={{
                uri: currentQues.ques_image,
              }}
            />
            <Text style={styles.h3}>{currentQues.ques_text}</Text>
            <View style={[{marginBottom: '5%', width: '50%'}]}>
            <Button
              style={styles.btn}
              onPress={() => navigation.navigate('Login')}
              title="Login"
              color="#841584"
              />
          </View>
          <View style={[{marginBottom: '5%', width: '50%'}]}>
            <Button
              style={styles.btn}
              onPress={() => navigation.navigate('Login')}
              title="Login"
              color="#841584"
              />
          </View>
          <View style={[{marginBottom: '5%', width: '50%'}]}>
            <Button
              style={styles.btn}
              onPress={() => navigation.navigate('Login')}
              title="Login"
              color="#841584"
              />
          </View>
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
      marginTop: '10%'
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
      color: 'black'
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
    },
  });
  
 
export default Singlequiz;