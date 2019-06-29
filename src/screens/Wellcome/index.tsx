import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

import { Container, Descript, Line } from './styles';

import NameIntro from '../../components/NameIntro';

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
            <NameIntro />
      </Container>
    );
  }
}
