import { Alert, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { UserType } from './Main'

interface BodyProps {
  onUpdateInfor: (user: UserType) => void;
  onClickChangeBgFooter: () => void;
}
const Body: React.FC<BodyProps> = ({ onUpdateInfor, onClickChangeBgFooter }) => {

  const [name, setname] = useState('')
  const [linkImage, setlinkImage] = useState('')

  const handleChangeInfor = () => {
    if (name.length > 0 && linkImage.length > 0) {
      onUpdateInfor({ name, avatar: linkImage })
    } else {
      Alert.alert('Không được để trống')
    }
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Nhập tên mới' onChangeText={(txt) => {
        setname(txt)
      }} />

      <TextInput style={styles.input} placeholder='Dán link ảnh' onChangeText={(txt) => {
        setlinkImage(txt)
      }} />

      <View style = {{alignItems: 'center', gap: 15, marginTop:20}}>
      <TouchableOpacity style = {styles.btn} onPress={() => handleChangeInfor()}>
        <Text>Cập nhật thông tin</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.btn} onPress={() => onClickChangeBgFooter()}>
        <Text>Đổi Background Footer</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Body

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '80%',
    backgroundColor: 'white',
  },
  input: {
    padding: 20, 
    borderWidth: 1, 
    borderRadius: 10,
    margin: 8,
  },
  btn: {
    padding: 6,
    backgroundColor: 'pink',
    borderRadius: 10
  }
})