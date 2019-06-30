import * as React from "react";
import * as Animatable from "react-native-animatable";
import { StyleSheet, KeyboardAvoidingView, View, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-elements";
import { Card, TextInput, Title } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { DangerZone } from "expo";
import { NavigationScreenProp } from "react-navigation";
const { Lottie } = DangerZone;

export interface IProps {
  navigation: NavigationScreenProp<{}>;
}

export interface IState {}

export default class Login extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <LinearGradient colors={["#56ab2f", "#a8e063"]} style={styles.container}>
          <SafeAreaView style={styles.container}>
            <View style={styles.container}>
              <View style={{ flex: 3, justifyContent: "center" }}>
                <Animatable.View
                  animation="bounceIn"
                  easing="ease-in-cubic"
                  style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                >
                  <Lottie
                    style={{
                      flex: 1,
                    }}
                    source={require("../../animations/feel.json")}
                    autoPlay
                    loop
                  />
                </Animatable.View>
              </View>
              <Animatable.View
                animation="fadeInUp"
                style={{ flex: 1, justifyContent: "flex-end", padding: 12 }}
              >
                <Card
                  style={{
                    padding: 16,
                    justifyContent: "center",
                  }}
                  elevation={4}
                >
                  <Button
                    buttonStyle={{ backgroundColor: "#dd4b39" }}
                    style={{ height: 40, marginBottom: 12 }}
                    titleStyle={{ marginLeft: 12 }}
                    title="Entrar com Google"
                    onPress={() => this.props.navigation.navigate("App")}
                    icon={<Ionicons name="logo-google" color="white" size={24} />}
                  />
                  <Button
                    style={{ height: 40, marginBottom: 4 }}
                    titleStyle={{ marginLeft: 12 }}
                    title="Entrar com Facebook"
                    onPress={() => this.props.navigation.navigate("App")}
                    icon={<Ionicons name="logo-facebook" color="white" size={24} />}
                  />
                </Card>
              </Animatable.View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  formContent: {
    maxWidth: 304,
  },
});
