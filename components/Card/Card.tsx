import React from 'react'
import { style } from './Card.style'
import checkImage from "@/assets/images/check.png"
import { Image, Text, TextInputProps, TouchableOpacity } from 'react-native'

type Todo = {
    id:number,
    title:string,
    isCompleted:boolean

  }
interface todoProps {
    todo:Todo,
    onPress:(todo:Todo) => void,
    onLongPress:(todo:Todo)=>void
}
function Card({todo,onPress,onLongPress}:todoProps) {
  return (
    <TouchableOpacity style={style.card} onLongPress={()=>onLongPress(todo)} onPress={()=>onPress(todo)}>
        <Text style={[style.text,todo.isCompleted && {textDecorationLine:"line-through"}]}>{todo.title}</Text>
        {todo.isCompleted && <Image style={style.img} source={checkImage}/>}
    </TouchableOpacity>
  )
}

export default Card