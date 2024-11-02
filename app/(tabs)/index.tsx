import Card from '@/components/Card/Card';
import Header from '@/components/Header';
import { styles } from '@/constants/App.style';
import React from 'react';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
  type Todo = {
    id:number,
    title:string,
    isCompleted:boolean

  }
  const todoList:Todo[] = [
    { id:1,title:"Mangery",isCompleted:false  }
  ]
  return (
    <>
      <SafeAreaProvider >

        <SafeAreaView style={styles.app}>
          <View style={styles.header}>
              <Header/>
          </View>
          <View style={styles.body}>
              <Card todo={todoList[0]}/>
          </View>
          
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={styles.footer}>
            <Text>Footer</Text>
          </View>
    </>
  );
}