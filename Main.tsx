import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const colors = ['white', 'gray', 'red', 'yellow', 'pink', 'orange'];

export type UserType = {
  name: string;
  avatar: string;
}

const Main = () => {

  const [user, setuser] = useState<UserType>({
    name: 'Chưa có tên',
    avatar: 'https://i.pinimg.com/564x/6b/67/54/6b6754cec42a69384d59a2644a714e9c.jpg'
  })

  const [LastTimeUpdate, setLastTimeUpdate] = useState('Bạn chưa nhập thông tin');

  const [FooterColor, setFooterColor] = useState(colors[0]);

  const handleUpdateInfor = useCallback((_user: UserType) => {
    setuser(_user);
  }, []);

  const handleRandomColor = useCallback(() => {
    const numberRan = Math.floor(Math.random() * colors.length);
    setFooterColor(colors[numberRan]);
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const datetime =
      currentDate.getDate() +
      '/' + 
      (currentDate.getMonth() + 1) +
      '/' +
      currentDate.getFullYear() +
      ' ' +
      currentDate.getHours() +
      ':' +
      currentDate.getMinutes() +
      ':' +
      currentDate.getSeconds();
    
    setLastTimeUpdate(datetime);
  }, [user]);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0.2)'}/>
      <Header user={user} />
      <Body onUpdateInfor={handleUpdateInfor} onClickChangeBgFooter={handleRandomColor}/>
      <Footer timeUpdate = {LastTimeUpdate} 
      backgroundColor = {FooterColor}/>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    gap: 10,
    padding:1
    
  }
})