import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import * as Animatable from "react-native-animatable";

import DiseaseItem from '../DiseaseItem';

import { 
  Container, 
} from './styles';

export interface IProps {}

export interface IState {}

export default class DiseaseList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  diseases = ['Câncer','Diabetes','Colesterol','Pressão Alta','Alergia','Rinite','AIDS'];

  public render() {
    return (
    <Container>
      {this.diseases.map((item,index) => <DiseaseItem name={item} key={index}/>)}
    </Container>
    );
  }
}
