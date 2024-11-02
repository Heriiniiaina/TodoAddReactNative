import React from 'react'
import { style } from './Card.style'
import checkImage from "@/assets/images/check.png"
import { Text, TextInputProps, TouchableOpacity } from 'react-native'

type Todo = {
    id:number,
    title:string,
    isCompleted:boolean

  }
interface todoProps extends TextInputProps {
    todo:Todo
}
function Card({todo}:todoProps) {
  return (
    <TouchableOpacity>
        <Text>{todo.title}</Text>
    </TouchableOpacity>
  )
}

export default Card