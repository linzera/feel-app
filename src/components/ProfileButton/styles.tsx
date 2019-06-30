import styled from 'styled-components/native';

interface Props {
    body?: boolean 
}

export const Container = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 35px 15px;
`;

export const ProfileButton = styled.TouchableOpacity`
    height: 30px;
    width: 30px;
`;


