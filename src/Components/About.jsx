import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Animation from './Animation'
import AnimeFonts from './AnimeFonts'
import * as animationData from '../Assets/96993-hello.json'

const About = () => {
    const data = `Results-driven Software Engineer passionate about developing user-friendly software applications. Excellent
    problem-solving skills and ability to perform well in a team. Seeking to help the company develop their
    product as a software engineer, as well as grow and develop my own skills as a coder.`

    const data2 = ["2013-06 : Adarsh PU college",
        "2015-07 : GM Institute of Technology (B.E inInformation Science)"]

    const data3 = ["TechnoElevate ( Jun-2021 - Apr-2022 )",
        "Alethea Communications ( May-2022 - Present )",]

    const [info, setInfo] = useState("")
    const [edu, setEdu] = useState("")
    const [exp, setExp] = useState("")
    const [time, setTime] = useState(false)
    const [time1, setTime1] = useState(false)
    const [time2, setTime2] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setInfo(data)
        }, time)
    }, [])

    const changeTime = () => {
        setTime(() => {
            return true
        })
    }

    const changeTime1 = () => {
        setEdu(data2)
        setTime1(true)
    }

    const changeTime2 = () => {
        setExp(data3)
        setTime2(true)
    }
    return (
        <>
            <Row>
                <Row>
                    <Col xs={6}>
                        <Row className="justify-content-center">
                            <Col>
                                <AnimeFonts text="About Me" type="info" changeTime={changeTime} />
                            </Col>
                        </Row>
                        <Row className="justify-content-center ">
                            <Col className="pl-80">
                                <p className="sub" style={{ opacity: time ? 1 : 0 }}>{time && info}</p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            {time && <AnimeFonts text="Education" type="info" changeTime={changeTime1} />}
                        </Row>
                        <Row>
                            <ul className="sub pl-80" style={{ opacity: time1 ? 1 : 0 }}>{time1 && edu.map(item => <li className="sub py-3 pl-5">{item}</li>)}</ul>
                        </Row>
                        <Row>
                            {time1 && <AnimeFonts text="Experience" type="info" changeTime={changeTime2} />}
                        </Row>
                        <Row>
                            <ol className="sub pl-80" style={{ opacity: time2 ? 1 : 0 }}>{time2 && exp.map(item => <li className="sub py-3">{item}</li>)}</ol>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        <Animation animationData={animationData} />
                    </Col>
                </Row>



            </Row>

        </>
    )
}

export default About

