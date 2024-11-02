import Card from '@/components/Card/Card';
import Header from '@/components/Header';
import TabMenu from '@/components/TabMenu/TabMenu';
import { styles } from '@/constants/App.style';
import React, { useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
  type Todo = {
    id: number,
    title: string,
    isCompleted: boolean

  }
  const [selectMenu, setMenuSelect] = useState<string>("all")

  const [todoList, setTodoLIst] = useState<Todo[]>([
    { id: 1, title: "Mangery", isCompleted: true },
    { id: 2, title: "Mamany", isCompleted: false },
    { id: 3, title: "Misasa", isCompleted: true },
    { id: 4, title: "Micode", isCompleted: true },
    { id: 5, title: "Manakorotana", isCompleted: false },
    { id: 6, title: "Migafy", isCompleted: false },
    { id: 7, title: "Mijery boruto", isCompleted: true },
    { id: 8, title: "Misakafo", isCompleted: true },
  ])

  const getFilteredList =()=>{
      switch(selectMenu){
        case"all":
          return todoList
        case "inProgress":
          return todoList.filter(todo=> !todo.isCompleted)
        case "done":
          return todoList.filter(todo=> todo.isCompleted)
        default :return []
      }
  }

  const updateTodo = (todo: Todo) => {
    const updatedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted
    }
    const todoIndex = todoList.findIndex((elm) => elm.id == updatedTodo.id)
    const updatedList = [...todoList]
    updatedList[todoIndex] = updatedTodo
    setTodoLIst(updatedList)
  }
  const renderTodo = () => {
    return getFilteredList().map((todo) => <View key={todo.id} style={styles.cardTodo}><Card onPress={updateTodo} todo={todo} /></View>)
  }
  return (
    <>
      <SafeAreaProvider >

        <SafeAreaView style={styles.app}>
          <View style={styles.header}>
            <Header />
          </View>
          <View style={styles.body}>
            <ScrollView>

              {renderTodo()}
            </ScrollView>
          </View>

        </SafeAreaView>
      </SafeAreaProvider>
      <View style={styles.footer}>
        <TabMenu onPress={setMenuSelect} selectMenu={selectMenu} todoList={todoList} />
      </View>
    </>
  );
}