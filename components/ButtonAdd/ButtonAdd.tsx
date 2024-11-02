import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { s } from './ButtonAdd.stye'

type Props = {
    onPress:()=>void
}

const ButtonAdd = ({onPress}:Props) => {
  return (
   <TouchableOpacity onPress={onPress} style={s.btn}>
        <Text style={s.txt}>+ Add new todo</Text>
   </TouchableOpacity>
  )
}

export default ButtonAdd