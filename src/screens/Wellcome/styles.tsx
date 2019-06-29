import styled from 'styled-components/native';

interface Props {
    bolder?: boolean 
}

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Line = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: baseline;
`;

export const Descript = styled.Text<Props>`
    font-size: ${props => props.bolder ? '20' : '18'}px;
    color: #222;
    font-weight: ${props => props.bolder ? 'bold' : 'normal'};
`;