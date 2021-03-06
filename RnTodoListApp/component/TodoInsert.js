/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';


const TodoInsert = ({onAddTodo}) => {
    const [newTodoItem, setNewTodoItem] = useState('');

    const handleTodoInput = (newTodo) => {
        setNewTodoItem(newTodo);
    };

    const handleAddTodo = () => {
        if (newTodoItem === ''){
            return;
        }
        //alert(newTodoItem);
        //debugger; cjd
        //console.log(`newTodoItem =>  ${newTodoItem}`);
        onAddTodo(newTodoItem.replace('\n', '')); // 값을 보냄 
        setNewTodoItem('');
    };

    // const handleKeyPress = (e) => {
    //     if (e.nativeEvent.key === 'Enter') {
    //         handleAddTodo();
    //     }
    // };

    return(
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder={'할일을 입력하세요'}
                autoCorrect={false}
                value={newTodoItem}
                onChangeText={handleTodoInput}
                //onKeyPress={handleKeyPress}
            />
            <View style={styles.button}>
                <Button
                    title={'ADD'}
                    onPress={handleAddTodo}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        padding: 20,
        borderBottomColor: '#9e9e9e',
        borderBottomWidth: 1,
        fontSize: 24,
        marginLeft: 20,
        width: '75%',
        
      },
    button: {
        marginRight: 20,
    },
});

export default TodoInsert;
