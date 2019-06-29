import styled from 'styled-components/native';

interface Props {
    body?: boolean 
}

export const Container = styled.KeyboardAvoidingView`
    width: 85%;
`;

export const Descript = styled.Text<Props>`
    font-size: ${props => props.body ? '15' : '18'}px;
    color: #222;
`;

export const Title = styled(Descript)`
    font-size: 20px;
    font-weight: bold;
`;