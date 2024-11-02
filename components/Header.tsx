import { View, Text, Image } from 'react-native'
import React from 'react'
import { style } from './Header.style'
import logo from "@/assets/images/logo.png"
export default function Header() {
  return (
    <View style={style.logo}>
        <Image style={style.img} source={logo} resizeMode='contain'/>
      <Text style={style.title}>Tu as des trucs à faire</Text>
    </View>
  )
}