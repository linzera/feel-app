import * as React from "react";
import * as Animatable from "react-native-animatable";
import { SafeAreaView, View, StyleSheet, FlatList, ScrollView } from "react-native";
import { Avatar, Card, List, DataTable } from "react-native-paper";
import { primaryColor } from "../../util/colors";
import { observer, inject } from "mobx-react";
import { IUserStore } from "../../store/UserStore";

export interface IProps {
  userStore: IUserStore;
}

export interface IState {
  text: string;
}

const imageLink =
  "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1";

@inject("userStore")
@observer
export default class Profile extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleLogout = () => {};

  public render() {
    console.log(this.props);

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <Animatable.View animation="bounceInLeft" easing="ease-out-cubic">
            <Card elevation={4} style={styles.card}>
              <Card.Title
                title="Italo Lino"
                subtitle="20 anos"
                left={(props) => <Avatar.Image source={{ uri: imageLink }} {...props} />}
              />
              <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            </Card>
          </Animatable.View>

          <Animatable.View animation="bounceInLeft" delay={250} easing="ease-out-cubic">
            <Card elevation={4} style={styles.card}>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>Doença</DataTable.Title>
                  <DataTable.Title numeric>Risco</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell>Diabetes</DataTable.Cell>
                  <DataTable.Cell numeric>Alto</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell>Cardiaco</DataTable.Cell>
                  <DataTable.Cell numeric>Alto</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Pagination
                  page={0}
                  numberOfPages={2}
                  onPageChange={(page) => {
                    console.log(page);
                  }}
                  label="1 of 2"
                />
              </DataTable>
            </Card>
          </Animatable.View>

          <Animatable.View animation="bounceInLeft" delay={500} easing="ease-out-cubic">
            <Card elevation={4} style={styles.card}>
              <List.Item
                onPress={this.handleLogout}
                title="Sair"
                right={() => <List.Icon color="red" icon="exit-to-app" />}
              />
            </Card>
          </Animatable.View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    justifyContent: "space-between",
    padding: 18,
  },
  card: {},
});
