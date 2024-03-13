import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { UserType } from './Main'

interface HeaderProps {
    user : UserType,
}

const Header: React.FC<HeaderProps> = ({user}) => {
  return (
    <View style={styles.container}>
        <Image source={{
          uri: user?.avatar
        }}
         style={{width:40, height: 40, borderRadius: 20}}/>
      <Text style={{fontSize: 12}}>Chào ngày mới {'\n'}
      <Text style={styles.text}>{user?.name}</Text></Text>
      <View/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 70,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 12,
    },
    text:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    }
})