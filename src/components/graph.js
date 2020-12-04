import React from 'react'
import LineGraph from 'react-line-graph'
import styled from 'styled-components'


const Graph = props => {
    const Container = styled.div`
        display: flex;
        height: ${props.height || '75'}px
    `

    const data = [33, 32, 36, 31, 34, 35, 39, 38, 37];
    const opts = {
        data,
        smoothing: 0.7,
        accent: 'red',
        fillBelow: '#2c2d32',
        hover: false,
    };

    return (
        <Container>
            <LineGraph {...opts} />
        </Container>
    )
}

export default Graph