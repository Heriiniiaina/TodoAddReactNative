import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { s } from './TabMenu.style'

type Todo = {
    id: number,
    title: string,
    isCompleted: boolean
}

interface SelectProps {
    selectMenu: string,
    onPress: (menu: string) => void,
    todoList: Todo[]
}

const TabMenu = ({ selectMenu, onPress, todoList }: SelectProps) => {
    const countByStatus = (Array.isArray(todoList) ? todoList : []).reduce((acc, todo) => {
        todo.isCompleted ? acc.done++ : acc.inProgress++
        return acc
    }, { all: todoList.length , inProgress: 0, done: 0 })
    const getStyle = (tabName: string) => {
        return {
            fontWeight: 'bold' as "bold",
            color: tabName === selectMenu ? '#2F76E5' : 'black',
        };
    };
    console.log(countByStatus)
    return (
        <View style={s.container}>
            <TouchableOpacity onPress={() => onPress("all")}><Text style={getStyle("all")}>All ({countByStatus.all})</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => onPress("inProgress")}><Text style={getStyle("inProgress")}>In progress ({countByStatus.inProgress})</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => onPress("done")}><Text style={getStyle("done")}>Done ({countByStatus.done})</Text></TouchableOpacity>
        </View>
    )
}

export default TabMenu