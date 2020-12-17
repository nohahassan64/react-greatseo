import React, { Component } from 'react';
import axios from 'axios'
import { Container , Row , Col } from 'react-bootstrap';
import { CounterSection , Icon  , Span , Desc } from './style.js'


class Counter extends Component {
    state={
        counter: []
    }
    componentDidMount () {
        axios.get('js/data.json').then(res => {this.setState({ counter : res.data.counter})})
    }
    render(){
        const {counter} = this.state;
        const counterList = counter.map( (counterItem) => {
            return(
                <Col md={3} xs={12} key={counterItem.id}>
                    <Icon className={counterItem.icon} className="border-r6"></Icon>
                    <Span>{counterItem.count}</Span>
                    <Desc>{counterItem.title}</Desc>
                </Col>
            )
        })

        return (
            <CounterSection className="section text-center">
                <Container>
                    <Row>
                        {counterList}
                    </Row>

                </Container>
            </CounterSection>
          );
    }

}

export default Counter;
