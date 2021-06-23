import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, Keyboard, ImageBackground } from 'react-native'
import FormInput from '../Components/FormInput';
import FormButton from '../Components/FormButton';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { AuthContext } from '../Navigation/AuthProvider';

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const {register} = useContext(AuthContext);

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('Keyboard dismissed')
        }}>
            <View style={styles.container}>
                <Text style={styles.text}>Create an account</Text>
                
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
                        buttonTitle="Sign Up"
                        onPress={() => register(email, password)}
                    />

                    {/* <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>
                  Don't have an acount? Create here
                </Text>
              </TouchableOpacity> */}
                
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
        position: 'relative'
    }
});



export default SignUp
