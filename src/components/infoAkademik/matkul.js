import React, { Component } from 'react'

import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Carousel from 'react-bootstrap/Carousel'

import data from '../../data/akademik-matkul.json'

export default class matkul extends Component {
    state = { term: 1 }

    matkulCard = (name, prodi, sks, desc) => {
        return (
            <Card key={name} className="subcard">
                <div className="header">
                    <h3>{name}</h3>
                    <div className="badgewrapper">
                        <Badge variant={prodi === "IK/SI" ? "success" : (prodi === "IK" ? "primary" : "secondary")}>{prodi}</Badge>
                        <Badge variant="success">{sks} SKS</Badge>
                    </div>                    
                </div>
                <p>{desc}</p>
            </Card>
        )
    }

    displayCarousel = (term) => {
        return (
            <div>
                <Carousel controls indicators className="carousel-xl">
                    <Carousel.Item>
                        <CardDeck className="my-3">
                            { term.slice(0,3).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardDeck className="my-3">
                            { term.slice(3,6).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                    <Carousel.Item className={`term${this.state.term}`}>
                        <CardDeck className="my-3">
                            { term.slice(6).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                </Carousel>
                <Carousel controls indicators className="carousel-lg">
                    <Carousel.Item>
                        <CardDeck className="my-3">
                            { term.slice(0,2).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardDeck className="my-3">
                            { term.slice(2,4).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardDeck className="my-3">
                            { term.slice(4,6).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                    <Carousel.Item className={`term${this.state.term}`}>
                        <CardDeck className="my-3">
                            { term.slice(6).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                </Carousel>
                <Carousel controls={false} indicators className="carousel-md">
                    <Carousel.Item>
                        <CardDeck className="my-3">
                            { term.slice(0,2).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardDeck className="my-3">
                            { term.slice(2,4).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardDeck className="my-3">
                            { term.slice(4,6).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                    <Carousel.Item className={`term${this.state.term}`}>
                        <CardDeck className="my-3">
                            { term.slice(6).map( item => this.matkulCard(item.name, item.prodi, item.sks, item.desc))}
                        </CardDeck>
                    </Carousel.Item>
                </Carousel>
                <Carousel controls={false} indicators className="carousel-sm">
                    { term.map( item => (
                        <Carousel.Item key={item.name}>
                            <CardDeck className="my-3">
                                {this.matkulCard(item.name, item.prodi, item.sks, item.desc)}
                            </CardDeck>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        )
    }

    displayTerm = () => {
        const { term1, term2 } = data
        if (this.state.term === 1) {
            return this.displayCarousel(term1)
        } else {
            return this.displayCarousel(term2)
        }
    }

    render() {
        return (
            <Card id="matkul" className="mb-4 text-center">
                <h2>Mata Kuliah Tahun Pertama</h2>
                <div className="btnwrapper">
                    <Button active={this.state.term === 1} onClick={() => this.setState({term:1})}>Term 1</Button>
                    <Button active={this.state.term === 2} onClick={() => this.setState({term:2})}>Term 2</Button>
                </div>
                {this.displayTerm()}
            </Card>
        )
    }
}
