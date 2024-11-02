import ButtonAdd from '@/components/ButtonAdd/ButtonAdd';
import Card from '@/components/Card/Card';
import Header from '@/components/Header';
import TabMenu from '@/components/TabMenu/TabMenu';
import { styles } from '@/constants/App.style';
import React, { useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, ScrollView, Alert } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
  type Todo = {
    id: number,
    title: string,
    isCompleted: boolean

  }
  const [selectMenu, setMenuSelect] = useState<string>("all")

  const [todoList, setTodoLIst] = useState<Todo[]>([])

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
  const deleteTodo = (todo:Todo)=>{
      Alert.alert("Suppression", "Supprimer cette tâche ?",[
        {
          text:"Supprimer",
          style:"destructive",
          onPress:()=>{
              setTodoLIst(todoList.filter(elm=>elm.id !== todo.id))
          }
        },{
          text:"Annuler",
          style:"cancel"
        }
      ])
  }
  const renderTodo = () => {
    return getFilteredList().map((todo) => <View key={todo.id} style={styles.cardTodo}><Card onLongPress={deleteTodo} onPress={updateTodo} todo={todo} /></View>)
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
          <ButtonAdd/>

        </SafeAreaView>
      </SafeAreaProvider>
      <View style={styles.footer}>
        <TabMenu onPress={setMenuSelect} selectMenu={selectMenu} todoList={todoList} />
      </View>
    </>
  );
}