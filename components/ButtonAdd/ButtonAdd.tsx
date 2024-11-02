import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { s } from './ButtonAdd.stye'



const ButtonAdd = () => {
  return (
   <TouchableOpacity style={s.btn}>
        <Text style={s.txt}>+ Add new todo</Text>
   </TouchableOpacity>
  )
}

export default ButtonAdd