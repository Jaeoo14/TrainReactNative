/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({todos, onRemove, onToggle}) => {


    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
            {todos.map(todo => (
                <TodoItem key={todo.id} {...todo} onRemove={onRemove} onToggle={onToggle}/>
            //app.js에서 List로 todo를 보냄
            // ...todo로 하면 id, checked, Value 전부다 넘어감 
            //id={todo.id} textValue={todo.textValue}... 와 {...todo} 는 동일
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
      alignItems: 'center',
    },
});

export default TodoList;
