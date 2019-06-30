import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

import { 
  Container,
  Content,
} from './styles';

export interface IProps {
  name: string
}

export interface IState {
  active: boolean
}

export default class DiseaseItem extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      active: false,
    };
  }

  handleClick = ()=> {
    this.setState({
      active: !this.state.active
    });
  }

  public render() {
    return (
    <Container active={this.state.active} onPress={()=>{this.handleClick}}>
      <Content active={this.state.active}>{this.props.name}</Content>
    </Container>
    );
  }
}
