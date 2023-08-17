import React, { useState } from 'react';
import { Button, Text, View, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import axios from 'axios';
import UserCard from './src/components/UserCard/UserCard';


const URL = 'https://jsonplaceholder.typicode.com/users'

export default function App() {

  const [loading, setLoading] = useState(false)
  const [userList, setUserList] = useState([])

  async function fetchData(){
  //setLoading(true)
  //const response = await axios.get(URL)
  //setLoading(false)
  //setUserList(response.data)

  axios.get(URL).then(response => {
    setLoading(false)
    setUserList(response.data)
  })
  }


  const renderUser = ({item}) => <UserCard name={item.name} username={item.username} email={item.email} />

  return (
  <SafeAreaView>  
    <View>
      {
        loading ? (
        <ActivityIndicator size="large" color="orange" />
        )
        : (      <FlatList
          data={userList}
          renderItem={renderUser}
         /> )
      } 

      <Button title='Fetch Data' onPress={fetchData}/>
    </View>
  </SafeAreaView>  
  );
}


