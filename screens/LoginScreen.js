import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, Image } from 'react-native';

import WhiteArrow from "../assets/Icons/WhiteArrow.png";
import WhiteSignUp from "../assets/Icons/WhiteSignUp.png";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.titleText}>Kirjaudu sisään</Text>
      
      <Text style={styles.labelText}>Nimi</Text>
      <TextInput
        style={styles.input}
      />
      
      <Text style={styles.labelText}>Salasana</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
      />
      <Text style={styles.forgotPasswordText}>Unohditko salasanasi?</Text>
      
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Kirjaudu sisään</Text>
          <Image source={WhiteArrow} style={styles.icon} />
        </View>
      </TouchableOpacity>
      
      <Text style={styles.orText}>tai</Text>
      
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Luo tili</Text>
          <Image source={WhiteSignUp} style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 20,
    marginBottom: 24,
    color: '#646464',
  },
  labelText: {
    alignSelf: 'flex-start',
    color: '#0077b6',
    fontSize: 22,
    marginBottom: 8,
    marginLeft: 50,
  },
  input: {
    height: 50,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 25,
    padding: 15,
    fontSize: 16,
    width: '75%',
  },
  forgotPasswordText: {
    textAlign: 'center',
    color: '#646464',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#0077b6',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
    marginTop: 20,
    width: '75%',
    alignItems: 'center',
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    color: '#000',
    fontSize: 16,
    marginVertical: 20,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 25,
    width: 24,
    height: 24,
  },
});

export default LoginScreen;
