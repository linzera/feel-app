import styled from 'styled-components/native';
import { StyleSheet } from "react-native";

interface Props {
    active?: boolean
}


export const Container = styled.TouchableOpacity<Props>`
    padding: 4px 6px;
    background-color: ${props => props.active ? '#222' : '#fff'};
    border-radius: 4px;
    elevation: 2;
`;

export const Content = styled.Text<Props>`
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.active ? '#fff' : '#222'};
`;