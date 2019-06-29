import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

import { Container, Descript, Title } from './styles';

import Intro from '../../icons/Intro';

export interface IProps {}

export interface IState {}

export default class Wellcome extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
    <Container>
        <Intro />
        <Descript>
            Bem Vido ao <Title>FEED</Title> !
        </Descript>

        <Descript body>
            Aqui, estamos sempre buscando seu bem estar, tentando fazer você se sentir melhor, mas para fazer isso precisamos te conhecer um pouco mais, pode nos dizer seu nome?
        </Descript>
    </Container>
    );
  }
}
