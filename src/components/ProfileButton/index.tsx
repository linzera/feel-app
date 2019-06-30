import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

import { Container, ProfileButton } from './styles';

import Avatar from '../../icons/Avatar';

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
        <ProfileButton>
            <Avatar />
        </ProfileButton>
    </Container>
    );
  }
}
