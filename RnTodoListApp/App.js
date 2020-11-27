/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar, View} from 'react-native';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

const App = () => {
  // todos: {id: 1, textValue: 'todoitem', checked: true/false}
  const [todos, setTodos] = useState([]);

  //할일 목록 추가  / ...todos 는 이전에 있던 값들 뒤에 todos배열을 붙힘
  //addTodo는 function
  const addTodo = (text) => {
    setTodos([
      ...todos,
      {id: todos.length + 1, textValue: text, checked: false},
    ]);
    // Axios DB처리 // INSERT API 호출
  };
  
  const onRemove = (id) =>{
    //alert(id);
    console.log(`App / delete id => ${id}`);
    setTodos(todos.filter(todo => todo.id !== id));
    // Axios DB처리 // DELETE API 호출
  };
  
  const onToggle = (id) => {
    console.log(`App / Toggle id => ${id}`);
    setTodos(
      todos.map((todo) =>
      todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
    console.log('App onToggle after => ', todos);
      // Axios DB처리 // UPDATE API 호출
  };

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Text children="할일 목록" style={styles.appTitle} />
          <View style={styles.card}>
            <TodoInsert onAddTodo={addTodo}/>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
          </View>
        </SafeAreaView>
      </>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7fffd4',
  },
  appTitle: {
    color: '#000000',
    fontSize: 37,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#ffffff',
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#9e9e9e',
    borderBottomWidth: 1,
    fontSize: 24,
    margin: 20,
  },
});

export default App;
