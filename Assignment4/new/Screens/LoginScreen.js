import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, Keyboard, ImageBackground, TouchableOpacity } from 'react-native'
import FormInput from '../Components/FormInput';
import FormButton from '../Components/FormButton';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { AuthContext } from '../Navigation/AuthProvider';
import Icon from 'react-native-vector-icons/Entypo';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  const { login } = useContext(AuthContext);

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('Keyboard dismissed')
    }}>
      <View style={styles.container}>
        <Text style={styles.text}>Doctor Consultation</Text>

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
            secureTextEntry={visible}
          />

          <TouchableOpacity style={styles.eyeBtn} onPress={()=>{
            setVisible(!visible)
            setShow(!show)
            }}>
            <Icon 
              name={show === false ? "eye-with-line" : "eye"}
              size={20} 
              color="#111"
            />
          </TouchableOpacity>

          <FormButton
            buttonTitle="Sign In"
            onPress={() => login(email, password)}
          />

          <TouchableOpacity
            style={styles.forgotButton}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.navButtonText}>
              Don't have an acount? Create here
            </Text>
          </TouchableOpacity>
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
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
    fontWeight:'bold',
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  content: {
    marginTop: 10,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  home: {
    fontSize: 30,
    color: "#764",
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
    position: 'relative'
  },
  eyeBtn : {
    position: "absolute",
    right: 35,
    bottom: 193,
  }
});


export default LoginScreen;
