import React from 'react'

import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import data from '../../data/kampus-landmark.json'

export default function landmark() {
    const landmarks = data.landmarks
    return (
        <Card id="landmark" className="mb-4">
            <h2 className="text-center">Landmark UI</h2>
            <Carousel controls indicators>
                { landmarks.map( landmark => (
                    <Carousel.Item key={landmark.name}>
                        <Row className="d-flex justify-content-center">
                            <Col lg={6}>
                                <img alt="" src={ require(`../../assets/infoKampus/landmark/${landmark.name}.jpg`)} style={{width:"100%"}} />
                            </Col>
                            <Col lg={4}>
                                <div className="subcard">
                                    <h3>{landmark.title}</h3>
                                    <p>{landmark.desc}<br /> <br /><i>{landmark.credits}</i> </p>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                ))}                
            </Carousel>
        </Card>
    )
}
