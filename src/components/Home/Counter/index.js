import React from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import { CounterSection , Span , Desc } from './style.js'

const Counter = ({data}) => {
        return (
            <CounterSection className="section text-center">
                <Container>
                    <Row>
                        {data.map( (counterItem , index) => {
                            return(
                                <Col md={3} xs={12} key={index}>
                                    <Span className="border-r6" >{counterItem.count}</Span>
                                    <Desc>{counterItem.title}</Desc>
                                </Col>
                            )
                        })}
                    </Row>

                </Container>
            </CounterSection>
          );
}

export default Counter;
