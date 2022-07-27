import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AnimeFonts from './AnimeFonts'
import CustomCard from './CustomCard'
import * as animationData from '../Assets/22469-campus-library-school-building-office-mocca-animation.json'
import * as animationData1 from '../Assets/103925-router-blue-wifi.json'

const Projects = () => {
  return (
    <>
      <Row className='justify-content-center p-5'>
        <Col xs={12}>
          <AnimeFonts text="My Projects" />
        </Col>
      </Row>
      <Row><CustomCard title="1. School Expert System" anime={animationData} />
        <CustomCard title="2. Agent Test Framework" anime={animationData1} /></Row>

    </>
  )
}

export default Projects