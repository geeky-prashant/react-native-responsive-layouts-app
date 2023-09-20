import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>

        {/* Header  */}
        <View style={styles.header}>
          <Text style={styles.text}>{"<header>"}</Text>
        </View>

        {/* Nav  */}
        <View style={styles.nav}>
          <Text style={styles.text}>{"<nav>"}</Text>
        </View>

        {/* Main  */}
        <View style={styles.main}>
          <View style={styles.section1}>
            <Text style={styles.text}>{"<aside>"}</Text>
          </View>
          <View style={styles.section2}>
            <Text style={styles.text}>{"<main>"}</Text>
          </View>
        </View>

        {/* Footer  */}
        <View style={styles.footer}>
          <Text style={styles.text}>{"<footer>"}</Text>
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(100)
  },
  header: {
    height: hp(15),
    backgroundColor: "#FF788F",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  nav: {
    height: hp(10),
    backgroundColor: "#45E0A8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  main: {
    height: hp(60),
    display: "flex",
    flexDirection: "row",
  },
  section1: {
    width: wp(40),
    backgroundColor: "#e8b4bd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  section2: {
    width: wp(60),
    backgroundColor: "#6EDBFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  footer: {
    height: hp(15),
    backgroundColor: "#B880FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontWeight: "bold",
    fontSize: hp(3.5),
    color: "#3f3e3e"
  }
});
