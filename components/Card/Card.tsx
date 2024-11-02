import React from 'react'
import { style } from './Card.style'
import checkImage from "@/assets/images/check.png"
import { Image, Text, TextInputProps, TouchableOpacity } from 'react-native'

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
    <TouchableOpacity style={style.card}>
        <Text style={style.text}>{todo.title}</Text>
        <Image style={style.img} source={checkImage}/>
    </TouchableOpacity>
  )
}

export default Card