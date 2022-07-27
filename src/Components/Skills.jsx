import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Animation from './Animation'
import AnimeFonts from './AnimeFonts'
import * as animationData from '../Assets/40851-pentagram-skills-of-deth.json'

const Skills = props => {
    
    const data = ["HTML",
        "CSS3 with Bootstrap",
        "JavaScript(ES6)",
        "MongoDB Query Language",
        "React" , "React Native",
        "Node JS", "Express JS"]
    const [info, setInfo] = useState("")
    const [time, setTime] = useState(false)

    useEffect(() => {
        setInfo(data)
    }, [])

    const changeTime = () => {
        setTime(() => {
            return true
        })
    }
    return (
        <>
            <Row>
                <Col xs={5} className="justify-content-center d-flex">
                    <AnimeFonts text="My Skills" type="info" changeTime={changeTime} />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={6} className="d-flex justify-content-center ">
                    <ol className="sub" style={{ opacity: time ? 1 : 0 }}>{time && info.map(item => <li className="sub py-3">{item}</li>)}</ol>
                </Col>
                <Col xs={6}>
                <Animation animationData={animationData}/>
                </Col>
            </Row>
        </>
    )
}


export default Skills