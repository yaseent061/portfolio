import React from 'react'
import { Row,Col } from 'react-bootstrap'
import AnimeFonts from './AnimeFonts'
import Animation from './Animation'
import Title from './Title'
import * as animationData from '../Assets/93699-coding.json'


const Home = () => {
  return (
    <>
    <Row>
          <Col xs={12}>
            <Title />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <AnimeFonts text="Hello I'm Yaseen, web developer" type="main"/>
          </Col>
          <Col xs={6}>
            <Animation  animationData={animationData}/>
          </Col>
        </Row>
    </>
  )
}

export default Home