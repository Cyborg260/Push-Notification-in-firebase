import React from "react";
import { Text, View,  StyleSheet, TouchableOpacity } from "react-native";
import { SimpleNoti } from "../screens/SimpleNoti";
import Tokencontroller from "../screens/TokenController";

const App = () => {
  const handleButton = () => {
    SimpleNoti();
  }

  return (
    <View style={styles.container}>
      <Text style={{
        color: "seagreen",
        fontWeight: "bold",
      }}>Notification</Text>
      <View style={{
        marginTop: 10,
        width: "40%",
        height: "5%"
      }}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleButton}
          activeOpacity={0.85}
        >
          <Text style={{
            color: "#fff",
          }}>Press me</Text>
        </TouchableOpacity>
      </View>
      <Tokencontroller />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: "seagreen",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,

  }
})

export default App;