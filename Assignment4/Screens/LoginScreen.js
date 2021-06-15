import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, Keyboard, ImageBackground } from 'react-native'
import FormInput from '../Components/FormInput';
import FormButton from '../Components/FormButton';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { AuthContext } from '../Navigation/AuthProvider';

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { login } = useContext(AuthContext);

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('Keyboard dismissed')
    }}>
      <View style={styles.container}>
        <Text style={styles.home}>"LogInScreen"</Text>
        <View style={styles.content}>
          <ImageBackground
            source={require('../assets/mycareDoc.png')}
            style={styles.imgBackground}
            resizeMode='center'
          />
          <FormInput
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            placeholderText="Email"
            iconType="user"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <FormInput
            labelValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            placeholderText="Password"
            iconType="lock"
            secureTextEntry={true}
          />

          <FormButton
            buttonTitle="Sign In"
            onPress={() => login(email, password)}
          />

        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'skyblue'
  },
  content: {
    marginTop: 10,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  home: {
    fontStyle: 'italic'
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    marginTop: 10,
    position:'relative'
  }
});


export default LoginScreen;
