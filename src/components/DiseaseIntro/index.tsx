import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import * as Animatable from "react-native-animatable";

import DiseaseList from '../DiseaseList';

import { 
  Container,
  Descript, 
  Title, 
  TextContainer,
  BtnContinue, 
  TextBtnContinue,
  BtnContinueContainer,
  MainContainer, 
} from './styles';

import Sick from '../../icons/Sick';

export interface IProps {
  handleAnimation(currentStep,nextStep): {
    name: string
    duration: number
    delay: number
    visible: boolean
  },
  handleChangeStep(step): void,
  steps: {},
}

export interface IState {}

export default class DiseaseIntro extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
    <Container active={this.props.handleAnimation('step3', 'step4').visible}>
      <MainContainer>
        <Animatable.View 
          animation={this.props.handleAnimation('step3', 'step4').name} 
          easing="ease-out-cubic"
        >
          <Sick />
        </Animatable.View>
        <TextContainer>
          <Animatable.View 
            animation={this.props.handleAnimation('step3', 'step4').name} 
            easing="ease-out-cubic" 
            duration={this.props.handleAnimation('step3', 'step4').duration + 200} 
            delay={this.props.handleAnimation('step3', 'step4').delay}
          >
            <Descript>
                Oi <Title>Pedro</Title> !
            </Descript>
          </Animatable.View>

          <Animatable.View 
            animation={this.props.handleAnimation('step3', 'step4').name} 
            easing="ease-out-cubic" 
            duration={this.props.handleAnimation('step3', 'step4').duration + 400} 
            delay={this.props.handleAnimation('step3', 'step4').delay * 2}
          >
            <Descript body>
                Fala pra gente agora um pouco mais da saude, afinal nossa preucupação aqui é ver você sair bem daqui!
            </Descript>
          </Animatable.View>

        </TextContainer>
        <Animatable.View 
          animation={this.props.handleAnimation('step3', 'step4').name} 
          easing="ease-out-cubic" 
          duration={this.props.handleAnimation('step3', 'step4').duration + 600} 
          delay={this.props.handleAnimation('step3', 'step4').delay * 3}
        >
          <DiseaseList />
        </Animatable.View>

        <Animatable.View 
          animation={this.props.handleAnimation('step3', 'step4').name} 
          easing="ease-out-cubic" 
          duration={this.props.handleAnimation('step3', 'step4').duration + 800} 
          delay={this.props.handleAnimation('step3', 'step4').delay * 4}
        >
          <BtnContinueContainer>
            <BtnContinue onPress={()=>{  }}>
              <TextBtnContinue>
                Continuar
              </TextBtnContinue>
            </BtnContinue>
          </BtnContinueContainer>
        </Animatable.View>
      </MainContainer>
    </Container>
    );
  }
}
