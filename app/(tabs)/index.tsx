import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { SafeAreaProvider,SafeAreaView} from "react-native-safe-area-context"

export default function HomeScreen() {
  return (
    <SafeAreaProvider style={styles.container}>

        <SafeAreaView>
            <Text style={styles.text}>Hello world</Text>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
    container:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"black"
    },
    text:{
      color:"white",
      fontSize:40
    }

})