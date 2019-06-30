import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import * as Animatable from "react-native-animatable";

import { 
  Container,
  Descript, 
  Title, 
  TextContainer,
  BtnContinue, 
  TextBtnContinue,
  NameInput,
  BtnContinueContainer,
  MainContainer, 
} from './styles';


import Intro from '../../icons/Intro';

export interface IProps {
  handleAnimation(currentStep,nextStep): {
    name: string
    duration: number
    delay: number
    visible: boolean
  },
  handleChangeStep(step): void,
  steps: {}  
}

export interface IState {
  name: string
}

export default class Wellcome extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleInputType = (text)=> {
    this.setState({
      name: text
    });
  }

  public render() {
    return (
    <Container behavior="padding" active={this.props.handleAnimation('step1', 'step2').visible}>
      <MainContainer>
        <Animatable.View 
          animation={this.props.handleAnimation('step1', 'step2').name} 
          easing="ease-out-cubic"
        >
          <Intro />
        </Animatable.View>
        <TextContainer>
          <Animatable.View 
            animation={this.props.handleAnimation('step1', 'step2').name} 
            easing="ease-out-cubic" 
            duration={this.props.handleAnimation('step1', 'step2').duration + 200} 
            delay={this.props.handleAnimation('step1', 'step2').delay}
          >
            <Descript>
                Oi <Title>Pedro</Title> !
            </Descript>
          </Animatable.View>

          <Animatable.View 
            animation={this.props.handleAnimation('step1', 'step2').name} 
            easing="ease-out-cubic" 
            duration={this.props.handleAnimation('step1', 'step2').duration + 400} 
            delay={this.props.handleAnimation('step1', 'step2').delay * 2}
          >
            <Descript body>
                Mal te conheço e já te considero pakas, diz ai quando você nasceu pra eu poder te ajudar ainda mais?
            </Descript>
          </Animatable.View>

        </TextContainer>
        <Animatable.View 
          animation={this.props.handleAnimation('step1', 'step2').name} 
          easing="ease-out-cubic" 
          duration={this.props.handleAnimation('step1', 'step2').duration + 600} 
          delay={this.props.handleAnimation('step1', 'step2').delay * 3}
        >
        
        </Animatable.View>

          <NameInput
            onChangeText={(text) => this.handleInputType(text)}
            value={this.state.name}
            placeholderTextColor="rgba(255,255,255,.6)"
            placeholder="Ex. John Smith"
          /> 

        <Animatable.View 
          animation={this.props.handleAnimation('step1', 'step2').name} 
          easing="ease-out-cubic" 
          duration={this.props.handleAnimation('step1', 'step2').duration + 800} 
          delay={this.props.handleAnimation('step1', 'step2').delay * 4}
        >
          <BtnContinueContainer>
            <BtnContinue onPress={()=>{ this.props.handleChangeStep(2) }}>
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
