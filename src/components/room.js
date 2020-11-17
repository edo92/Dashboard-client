import React from 'react'
import styled from 'styled-components'
import { Row, Col, Divider } from 'antd'
import LineGraph from 'react-line-graph'
import { FaTemperatureLow } from 'react-icons/fa'

const RoomInfo = styled.div`
    height: 200px;
    width:100%;
    margin-right: 1rem;
    background: #2c2d32;
    border-color: #383a3f;
    border-radius: 6px;
`
const SideMenu = styled.div`
    height: 95.5%;
    width: 100%;
    margin-right: 1rem;
    background: #2c2d32;
    border-color: #383a3f;
    border-radius: 6px;
    margin-top: 1rem;
    padding-left: 1rem
`
const InfoData = styled.h1`
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    color: #9f9f9f;
`
const Small = styled.small`
    font-size: 15px;
`

const Container = styled.div`
    display: flex;
    padding: 1rem;
    padding-right: 0
`
const Wrapper = styled.div`
    padding: 1rem;
    padding-right: 0.3rem;
`

const Room = () => {
    const data = [20, 10, 40, 100, 20, 10, 40, 100];
    const props = {
        data,
        smoothing: 0.3,
        accent: 'palevioletred',
        fillBelow: 'rgba(200,67,23,0.1)',
        hover: true,
    };

    return (
        <Wrapper>
            <Row>
                <Col span={5}>
                    <SideMenu>
                        <div style={{ padding: '.5rem' }}>
                            <h2></h2>
                        </div>
                    </SideMenu>
                </Col>
                <Col span={19}>
                    <Container>
                        {[1, 2].map(room => (
                            <RoomInfo>
                                <div style={{ padding: '.5rem' }}>
                                    <div style={{ display: 'flex' }}>
                                        <h3 style={{ paddingRight: '1rem' }}>{`Room ${room}`}</h3>
                                        <FaTemperatureLow />
                                        <InfoData>21 <Small>F</Small></InfoData>
                                        <Divider style={{ background: 'red', height: '20px', marginTop: '13px' }} type="vertical" />
                                        <InfoData>20 <Small>%</Small></InfoData>
                                        <Divider style={{ background: 'red', height: '20px', marginTop: '13px' }} type="vertical" />
                                        <InfoData>20 <Small>Ok</Small></InfoData>
                                    </div>
                                    <div style={{ height: '132px' }}>
                                        <LineGraph {...props} />
                                    </div>
                                </div>
                            </RoomInfo>
                        ))}
                    </Container>
                    <Container>
                        {[1, 2].map(room => (
                            <RoomInfo />
                        ))}
                    </Container>
                    <Container>
                        {[1, 2].map(room => (
                            <RoomInfo />
                        ))}
                    </Container>
                </Col>
            </Row>
        </Wrapper>
    )
}

export default Room