import styled from 'styled-components/native';
import { primaryColor } from "../../util/colors";

interface Props {
    bolder?: boolean 
}

export const Container = styled.SafeAreaView`
    flex: 1;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: ${primaryColor};
`;