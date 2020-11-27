/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, TextInput, KeyboardAvoidingView, Button, TouchableOpacity, Text} from 'react-native';

class MyTextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }
  handleEmail = (email) => {
    this.setState({email: email});
  };

  handlePassword = (password) => {
    this.setState({password: password});
  };

  handleLogin = () => {
    // eslint-disable-next-line no-alert
    alert(`email: ${this.state.email}\npassword: ${this.state.password}`);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' enabled>
        <TextInput
          style={style.textInput}
          placeholder={'Email'}
          value={this.state.email}
          onChangeText={this.handleEmail}
        />
        <TextInput
          style={style.textInput}
          placeholder={'Password'}
          value={this.state.password}
          onChangeText={this.handlePassword}
          secureTextEntry
        />
        {/* <Button title="Submit" onPress={this.handleLogin} /> */}
        {/* react-native는 모바일이라 onclick이 없고 onPress가 있음 */}
        {/* 버튼을 쓰면 안드로이드, ios 버튼 형태가 다르게 나옴 그래서 
            TouchableOpacity를 사용 */}
        <TouchableOpacity style={style.submitButton} onPress={this.handleLogin}>
          <Text children="Submit" style={style.submitText}/>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  submitText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  submitButton: {
    margin: 15,
    height: 40,
    padding: 10,
    backgroundColor: '#7a42f4',
  },
  textInput: {
    margin: 20,
    height: 40,
    borderColor: 'blue',
    borderBottomWidth: 1,
  },
});

export default MyTextInput;
