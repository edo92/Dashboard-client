import React, { Component } from 'react'
import Layout from '../../layouts/ipadview'
import styled from 'styled-components'
import ClimateDisplay from '../../components/climate'
import Graph from '../../components/graph'
import { Col, Switch, Divider } from 'antd'
import ProbDisplay from '../../components/prob';

import axios from 'axios'

const Container = styled.div`
    padding: 1rem;
    padding-right: 0.3rem;
    display: flex
`
const ControlPanel = styled.div`
    height: 95.5%;
    width: 100%;
    margin-right: 1rem;
    background: #2c2d32;
    border-color: #383a3f;
    border-radius: 6px;
    margin-top: 1rem;
    padding: 1rem
`
const DisplayPanel = styled.div`
    display: flex;
    padding: 1rem;
    padding-right: 0
`
const DataDisplay = styled.div`
    height: 200px;
    width:100%;
    margin-right: 1rem;
    background: #2c2d32;
    border-color: #383a3f;
    border-radius: 6px;
`

const Small = styled.small`
    padding: .7px;
    font-size: 13px;
    color: #9f9f9f;
`

const Wrapper = styled.div`
    padding-left: 1.5rem;
`

const Item = styled.li`
    list-style: none;
    display: flex;
    padding: 10px;
    margin-bottom: 10px;
`


class Dashboard extends Component {
    state = {
        climate: {
            temperature: {},
            humidity: {}
        }
    }

    componentDidMount() {
        this.getClimateData();
    }

    getClimateData() {
        setInterval(async () => {
            const res = await axios.get('/get-data');
            this.setState(res.data);
            console.log('data-->', res.data);
        }, 3000);
    }

    render() {
        return (
            <Layout>
                <Container>
                    <Col span={5}>
                        <ControlPanel>
                            <div style={{ padding: '.5rem' }}>
                                <Item>
                                    <Small>Main Pump</Small>
                                    <Wrapper >
                                        <Switch size='small' defaultChecked />
                                    </Wrapper>
                                </Item>
                                <Item>
                                    <Small>Main Pump</Small>
                                    <Wrapper>
                                        <Switch defaultChecked size='small' />
                                    </Wrapper>
                                </Item>
                            </div>
                            <div style={{ padding: '.5rem' }}>
                                <div style={{ background: 'white' }}><Divider /></div>
                                <Item>
                                    <Small>Main Pump</Small>
                                    <Wrapper >
                                        <Switch size='small' defaultChecked />
                                    </Wrapper>
                                </Item>
                                <Item>
                                    <Small>Main Pump</Small>
                                    <Wrapper>
                                        <Switch defaultChecked size='small' />
                                    </Wrapper>
                                </Item>
                            </div>
                            <div style={{ padding: '.5rem' }}>
                                <div style={{ background: 'white' }}><Divider /></div>
                                <Item>
                                    <Small>Main Pump</Small>
                                    <Wrapper >
                                        <Switch size='small' defaultChecked />
                                    </Wrapper>
                                </Item>
                                <Item>
                                    <Small>Main Pump</Small>
                                    <Wrapper>
                                        <Switch defaultChecked size='small' />
                                    </Wrapper>
                                </Item>
                            </div>
                            <div style={{ padding: '.5rem' }}>
                                <div style={{ background: 'white' }}><Divider /></div>
                                <Item>
                                    <Small>Main Pump</Small>
                                    <Wrapper >
                                        <Switch size='small' defaultChecked />
                                    </Wrapper>
                                </Item>
                                <Item>
                                    <Small>Main Pump</Small>
                                    <Wrapper>
                                        <Switch defaultChecked size='small' />
                                    </Wrapper>
                                </Item>
                            </div>
                        </ControlPanel>
                    </Col>
                    <Col span={19}>
                        <DisplayPanel>
                            {[1, 2].map(room => (
                                <DataDisplay key={room}>
                                    <ClimateDisplay
                                        climate={this.state.climate}
                                        room={room}
                                    />
                                    <Graph />
                                </DataDisplay>
                            ))}
                        </DisplayPanel>
                        <DisplayPanel>
                            <ProbDisplay />
                        </DisplayPanel>
                    </Col>
                </Container>
            </Layout>
        )
    }
}

export default Dashboard