import { styles } from '@/constants/App.style';
import React from 'react';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
  return (
    <>
      <SafeAreaProvider >

        <SafeAreaView style={styles.app}>
          <View style={styles.header}>
            <Text>Header</Text>
          </View>
          <View style={styles.body}>
            <Text>Body</Text>
          </View>
          
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={styles.footer}>
            <Text>Footer</Text>
          </View>
    </>
  );
}