import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  useEffect(() => {
  },[count])

  return (
    <>
      <SafeAreaView>
        <Text style={{ fontSize: 30 }}>
          LifeCycle With useEffect {count}
        </Text>
        <Button title='Update Counter' onPress={() => setCount(count + 1)} />
      </SafeAreaView>
      <View>
        <Text style={{ fontSize: 30 }}>
          useEffect as componentDidUpdate
        </Text>
        {/* <Text style={{ fontSize: 30, color: 'green' }}>
          Count: {count}
        </Text>
        <Text style={{ fontSize: 30, color: 'green' }}>
          Data: {data}
        </Text> */}
        <Button title='Update Data' onPress={() => setData(data + 1)} />
      </View>
      <User info={{count,data}}/>
    </>
  );
}

const User = (props) =>{
  return(
    <View>
       <Text style={{ fontSize: 30, color: 'green' }}>
          Count: {props.info.count}
        </Text>
        <Text style={{ fontSize: 30, color: 'green' }}>
          Data: {props.info.data}
        </Text>
    </View>
  )
  }

export default App