import React from 'react'
import styled from 'styled-components'

import { Row, Badge } from 'antd'
import { IoMdCloudy } from 'react-icons/io'
import { RiTempColdLine } from 'react-icons/ri'
import { WiHumidity } from 'react-icons/wi'

const Container = styled.div`
    display: flex;
    padding-top: .5rem;
`

const InfoData = styled.h1`
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    color: #9f9f9f;
    padding-left: 32px;
    font-size: 25px;
`
const Small = styled.small`
    font-size: 13px;
`
const DataPanel = styled.div`
`
const DataIcon = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4px;
    font-size: 17px;
    color: #8a8a8a
`
const Divider = styled.div`
    background: red;
    height: 20px;
    position: relative;
    top: -0.06em;
    display: inline-block;
    margin: 0 8px;
    margin-top: 13px;
    vertical-align: middle;
    border-top: 0;
    border-left: 1px solid rgba(0, 0, 0, 0.06);
`
const Title = styled.h4`
    padding-right: 1rem;
    color: #9f9f9f;
    text-shadow: 1;
`

const Climate = ({ climate }) => {
    console.log('testing2', climate);
    return (
        <div style={{ padding: '0.5rem' }}>
            <Title>Room 1{'\t'}<Badge status="success" /></Title>
            <Container>
                <DataPanel>
                    <DataIcon>
                        <RiTempColdLine />
                    </DataIcon>
                    <Row>
                        <InfoData>{climate.temperature && Math.round(climate.temperature.data)} <Small>F</Small></InfoData>
                        <Divider />
                    </Row>
                </DataPanel>
                <DataPanel>
                    <DataIcon>
                        <WiHumidity />
                    </DataIcon>
                    <Row>
                        <InfoData>{climate.humidity && Math.round(climate.humidity.data)} <Small>F</Small></InfoData>
                        <Divider />
                    </Row>
                </DataPanel>
                <DataPanel>
                    <DataIcon>
                        <IoMdCloudy />
                    </DataIcon>
                    <Row>
                        <InfoData>21 <Small>F</Small></InfoData>
                    </Row>
                </DataPanel>
            </Container>
        </div>
    )
}

export default Climate