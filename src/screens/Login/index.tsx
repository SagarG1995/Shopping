import { View, Text } from 'react-native'
import React, { FC, useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthParamsList } from '../../navigation/AuthStack';

// interface LoginProps {
//   navigation: undefined,
//   route: undefined,
//   param: undefined
// }

type Props = NativeStackScreenProps<AuthParamsList,"Profile">;

const Login: FC<{}> = (Props) => {
    useEffect(() => {
      console.log('props ===> ',Props);
    },[])
    
  return (
    <View>
      <Text>Login</Text>
      <Text>title: {JSON.stringify(Props)}</Text>
    </View>
  )
}

export default Login