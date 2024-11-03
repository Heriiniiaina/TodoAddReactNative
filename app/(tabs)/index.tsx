import ButtonAdd from '@/components/ButtonAdd/ButtonAdd';
import Card from '@/components/Card/Card';
import Header from '@/components/Header';
import TabMenu from '@/components/TabMenu/TabMenu';
import { styles } from '@/constants/App.style';
import React, { useEffect, useState } from 'react';
import Dialog from "react-native-dialog"
import { Image, StyleSheet, Platform, View, Text, ScrollView, Alert } from 'react-native';
import uuid from "react-native-uuid"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import AsyncStorage from "@react-native-async-storage/async-storage"
let isFirstRender = true
export default function HomeScreen() {
  type Todo = {
    id: string ,
    title: string,
    isCompleted: boolean

  }
  const [selectMenu, setMenuSelect] = useState<string>("all")
  const [todoList, setTodoLIst] = useState<Todo[]>([])
  const [isAddTodo,setIsAddTodo] = useState<boolean>(false)
  const [todo,setTodo]=useState<string>("")
  
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
  useEffect(()=>{
      loadTodo()
      console.log("load")
  },[])
  useEffect(()=>{
    if(!isFirstRender){
      saveTodo()
      console.log("save")
    }

    else isFirstRender = false
  },[todoList])
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
  const ShowAddTodo = ()=>{
      setIsAddTodo(true)
  } 
  const AddTodo = ()=>{
      const newTodo = {
        id: uuid.v4() as string,
        title:todo,
        isCompleted:false
      }
      setTodoLIst([...todoList,newTodo])
      setIsAddTodo(false)
  }
  const saveTodo = async ()=>{
    try {
      await AsyncStorage.setItem("@todoList",JSON.stringify(todoList))
    } catch (error) {
        alert("Erreur " + error)
    }
  }
  const loadTodo = async ()=>{
    try {
        const data = await AsyncStorage.getItem("@todoList")
        if(data !== null){
          setTodoLIst(JSON.parse(data))
        }
    } catch (error) {
        alert("Erreur "  + error)
    }
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
          <ButtonAdd onPress={ShowAddTodo}/>

        </SafeAreaView>
      </SafeAreaProvider>
      <TabMenu onPress={setMenuSelect} selectMenu={selectMenu} todoList={todoList} />
      <Dialog.Container visible={isAddTodo} onBackdropPress={()=>setIsAddTodo(false)}>
          <Dialog.Title>Créer une tache</Dialog.Title>
          <Dialog.Description>Donner un nom à la nouvelle tache</Dialog.Description>
          <Dialog.Input  onChangeText={setTodo}/>
          <Dialog.Button label="Créer" onPress={AddTodo} />
      </Dialog.Container>
    </>
  );
}