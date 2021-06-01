import React, { useState } from 'react';
import {
  StyleSheet, View, FlatList, TextInput, Text, Button, Alert,
  TouchableWithoutFeedback, Keyboard
} from 'react-native';
import AppHeader from './Components/header';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';
import { AlertPrompt } from 'react-native-alert-prompt';

function App() {

  const [todo, setTodo] = useState([
    { text: '', key: '' },
  ]);

  const [visible, setVisible] = useState('false')

  const pressHandler = ({ item }) => {
    console.log("edit= " + item.text);
    console.log("id= " + item.key);
    return item  
  // if (editTask === null) {
    //     return;
    // }s
    // console.log(editTask);
    // const newtask = [...newItem];
    // console.log(newtask);
    // newtask[id] = editTask;
    // console.log(newtask);
    // setNewItem(newtask);
  };

  const additem = (text) => {
    if (text !== "") {
      setTodo((prevTodo) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodo
        ]
      });
    } else {
      Alert.alert("OOOPSS!!", "Enter Something to add.", [
        { text: 'Understood', onPress: () => console.log('Alert CLosed') }
      ])
    }
  }

  const delItem = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter(item => item.key != key);
    })
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('Keyboard dismissed')
    }}>
      <View style={styles.container}>
        <AppHeader />
        <View style={styles.content}>
          <AddTodo additem={additem} />
          <View style={styles.list1}>
            <FlatList
              data={todo}
              keyExtractor={item => item.id}
              renderItem={({ item, index }) => (
                <TodoList
                  item={item}
                  pressHandler={pressHandler}
                  index={index}
                  delItem={delItem} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
    padding: 10,
  },
  content: {
    padding: 40,
  },
  list1: {
    marginTop: 20,
  },
});

export default App;


