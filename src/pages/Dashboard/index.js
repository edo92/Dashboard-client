import React, { Component } from 'react'
import Layout from '../../layouts/ipadview'
import styled from 'styled-components'
import { Col } from 'antd'
import ClimateDisplay from '../../components/climate'
import Graph from '../../components/graph'

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
    padding-left: 1rem
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

class Dashboard extends Component {
    render() {
        return (
            <Layout>
                <Container>
                    <Col span={5}>
                        <ControlPanel>
                            <div style={{ padding: '.5rem' }}>
                                <h2></h2>
                            </div>
                        </ControlPanel>
                    </Col>
                    <Col span={19}>
                        <DisplayPanel>
                            {[1, 2].map(room => (
                                <DataDisplay>
                                    <ClimateDisplay room={room} />
                                    <Graph />
                                </DataDisplay>
                            ))}
                        </DisplayPanel>
                    </Col>
                </Container>
            </Layout>
        )
    }
}

export default Dashboard