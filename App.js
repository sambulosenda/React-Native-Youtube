import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Image
            source={require("./images/logo.png")}
            style={{ width: 98, height: 22 }}
          />
          <View style={styles.rightnav}>
            <TouchableOpacity>
              <Icon style={styles.navitem} name="search" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.navitem} name="account-circle" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body} />
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="home" size={25} />
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name="whatshot" size={25} />
            <Text style={styles.tabTitle}>Trending</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name="subscriptions" size={25} />
            <Text style={styles.tabTitle}>Subscriptions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name="folder" size={25} />
            <Text style={styles.tabTitle}>Library</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  //css for the navbar.
  navbar: {
    height: 55,
    backgroundColor: "white",
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  rightnav: {
    flexDirection: "row"
  },

  navitem: {
    marginLeft: 26
  },

  body: {
    flex: 2
  },

  tabBar: {
    backgroundColor: "white",
    height: 60,
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5",
    flexDirection: "row",
    justifyContent: "space-around"
  },

  tabItem: {
    alignItems: "center",
    justifyContent: "center"
  },

  tabTitle: {
    fontSize: 11,
    color: "#3c3c3c"
  }
});
