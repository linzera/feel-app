import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

import { Container, FrontView } from './styles';

import ProfileButton from '../../components/ProfileButton';

export interface IProps {}

export interface IState {}

export default class Home extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <Container behavior="padding">
            <ProfileButton />
            <FrontView>
              
            </FrontView>
      </Container>
    );
  }
}
