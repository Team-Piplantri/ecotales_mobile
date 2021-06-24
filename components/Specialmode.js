import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, Button, Image, ImageBackground, Modal, Pressable } from 'react-native';
import axiosInstance from '../axiosApi';
import Tabs from "react-native-tabs"
import ModalDropdown from 'react-native-modal-dropdown';
import UserContext from "../UserContext";
import Slider from "react-native-slider";

const Specialmode = () => {
    const prim_ind = ['Agriculture', 'Mining', 'Fishing', 'Logging', 'Oil Drilling']
    const sec_ind = ['FMCG', 'Crude Oil', 'Iron & Steel', 'Textiles', 'Energy Prod']
    const tert_ind = ['Health', 'Tourism', 'Banking', 'Transport', 'IT']
    const [secState, setSecState] = useState(prim_ind)
    const [page, setPage] = useState("1")
    const [activeIndustry, setActiveIndustry] = useState(1);
    const [activeSector, setActiveSector] = useState(1);
    const [currentScore, setCurrentScore] = useState(0);
    const [stars, setStars] = useState(0);

    const [button1, setButton1] = useState("Agriculture"); //Primary
    const [button2, setButton2] = useState("Mining");
    const [button3, setButton3] = useState("Fishing");
    const [button4, setButton4] = useState("Logging");
    const [button5, setButton5] = useState("Oil Drilling");

    const [slidebuttonName1, setSlideButtonName1] = useState("Raw Materials"); //Primary
    const [slidebuttonName2, setSlideButtonName2] = useState("Labour");
    const [slidebuttonName3, setSlideButtonName3] = useState("Transport");
    const [slidebuttonName4, setSlideButtonName4] = useState("Finance");

    const [slidebuttonValue1, setSlideButtonValue1] = useState(1); //Primary
    const [slidebuttonValue2, setSlideButtonValue2] = useState(1);
    const [slidebuttonValue3, setSlideButtonValue3] = useState(1);
    const [slidebuttonValue4, setSlideButtonValue4] = useState(1);

    const userLogValue = useContext(UserContext);


    useEffect(() => {
        const requestData = async () => {
            const response = await axiosInstance.get(`/modes/specialmode-industry/1/`);
            setSlideButtonValue1(response.data.slider1);
            setSlideButtonValue2(response.data.slider2);
            setSlideButtonValue3(response.data.slider3);
            setSlideButtonValue4(response.data.slider4);
            const responseScore = await axiosInstance.get("/modes/specialmode-params/");
            setCurrentScore(responseScore.data.value);
        }
        requestData();
    }, [])


    const setValSlider1 = async (value) => {
        let buttonNumber = 1;
        // console.log(buttonNumber);   
        // buttonNumber = buttonNumber[0];
        // console.log(buttonNumber);
        setSlideButtonValue1(value);
        const requestData = { 'option': buttonNumber, "value": Math.round(value), 'industry': activeIndustry, 'sector': page }
        const responseparams = await axiosInstance.post('/modes/specialmode-params/', requestData)
    };

    const setValSlider2 = async (value) => {
        let buttonNumber = 2;
        // console.log(buttonNumber);   
        // buttonNumber = buttonNumber[0];
        // console.log(buttonNumber);
        setSlideButtonValue2(value);
        const requestData = { 'option': buttonNumber, "value": Math.round(value), 'industry': activeIndustry, 'sector': page }
        const responseparams = await axiosInstance.post('/modes/specialmode-params/', requestData)
    };


    const setValSlider3 = async (value) => {
        let buttonNumber = 3;
        // console.log(buttonNumber);   
        // buttonNumber = buttonNumber[0];
        // console.log(buttonNumber);
        setSlideButtonValue3(value);
        const requestData = { 'option': buttonNumber, "value": Math.round(value), 'industry': activeIndustry, 'sector': page }
        const responseparams = await axiosInstance.post('/modes/specialmode-params/', requestData)
    };


    const setValSlider4 = async (value) => {
        let buttonNumber = 4;
        // console.log(buttonNumber);   
        // buttonNumber = buttonNumber[0];
        // console.log(buttonNumber);
        setSlideButtonValue4(value);
        const requestData = { 'option': buttonNumber, "value": Math.round(value), 'industry': activeIndustry, 'sector': page }
        const responseparams = await axiosInstance.post('/modes/specialmode-params/', requestData)
    };


    const handleButtonParam = async (industry) => {
        if (page == "2") {
            industry += 6
        } else if (page == "3") {
            industry += 11
        } else {
            industry += 1
        }
        console.log(industry)
        setActiveIndustry(industry)
        const response = await axiosInstance.get(`/modes/specialmode-industry/${industry}/`);
        setSlideButtonValue1(response.data.slider1);
        setSlideButtonValue2(response.data.slider2);
        setSlideButtonValue3(response.data.slider3);
        setSlideButtonValue4(response.data.slider4);
    }

    const handleViewScore = async () => {
        const responseScore = await axiosInstance.get("/modes/specialmode-params/");
        setCurrentScore(responseScore.data.value);
        setStars(responseScore.data.stars);
    }
    const changeState = (props) => {
        setPage(props)
        if (page == "1") {
            setSlideButtonName1("Raw Materials")
            setSlideButtonName2("Labour")
            setSlideButtonName3("Transport")
            setSlideButtonName4("Finance")
            setSecState(prim_ind)
        } else if (page == "2") {
            setSlideButtonName1("Raw Materials")
            setSlideButtonName2("Labour")
            setSlideButtonName3("Transport")
            setSlideButtonName4("Finance")
            setSecState(sec_ind)
        } else if (page == "3") {
            setSlideButtonName1("Govt. Policy")
            setSlideButtonName2("Labour")
            setSlideButtonName3("Technology")
            setSlideButtonName4("Marketing")
            setSecState(tert_ind)
        }
    }


    return (
        <View style={styles.container}>
            <Tabs selected={page} style={{ backgroundColor: 'white' }}
                selectedStyle={{ color: 'red' }} onSelect={el => changeState(el.props.name)}>
                <Text name="1" style={styles.tab} selectedIconStyle={{ borderTopWidth: 2, borderTopColor: 'red' }}>Primary</Text>
                <Text name="2" style={styles.tab} selectedIconStyle={{ borderTopWidth: 2, borderTopColor: 'red' }}>Secondary</Text>
                <Text name="3" style={styles.tab} selectedIconStyle={{ borderTopWidth: 2, borderTopColor: 'red' }}>Tertiary</Text>
            </Tabs>
            <View style={styles.dropdown}>
                <ModalDropdown options={secState} onSelect={value => handleButtonParam(value)} />
            </View>
            <View style={styles.sliders}>
                <Slider
                    value={slidebuttonValue1}
                    minimumValue="1"
                    maximumValue="100"
                    onValueChange={value => setValSlider1(value)}
                />
                <Text>
                    {slidebuttonName1}: {(Math.round(slidebuttonValue1))}
                </Text>
                <Slider
                    value={slidebuttonValue2}
                    minimumValue="1"
                    maximumValue="100"
                    onValueChange={value => setValSlider2(value)}
                />
                <Text>
                    {slidebuttonName2}: {(Math.round(slidebuttonValue2))}
                </Text>
                <Slider
                    value={slidebuttonValue3}
                    minimumValue="1"
                    maximumValue="100"
                    onValueChange={value => setValSlider3(value)}
                />
                <Text>
                    {slidebuttonName3}: {(Math.round(slidebuttonValue3))}
                </Text>
                <Slider
                    value={slidebuttonValue4}
                    minimumValue="1"
                    maximumValue="100"
                    onValueChange={value => setValSlider4(value)}
                />
                <Text>
                    {slidebuttonName4}: {(Math.round(slidebuttonValue4))}
                </Text>
                <View style={styles.score}>
                    <Text>
                        Score:{currentScore}
                        Stars:{stars}
                    </Text>
                    <View style={styles.btn}>
                        <Button
                            onPress={handleViewScore}
                            title="Refresh Score"
                            color="#841584"
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    tab: {
        color: "black",
    },
    sliders: {
        flex: 1,
        // alignItems: 'center',
        marginTop: "10%",
    },
    dropdown: {
        marginTop: "10%",
    },
    score: {
        marginTop: "10%",
    },
    btn: {
        marginTop: "10%"
    }
});

export default Specialmode;