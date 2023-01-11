import React, { useState } from 'react';
import {  Text, View, TextInput, TouchableOpacity, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import Task from './components/Task/Task'

export default function App() {
  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    Keyboard.dismiss();
    setTaskList([...taskList, task])
    setTask(null);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Today's to do list 📝</Text>
      
      <View style={styles.tasksWrapper}>
        <ScrollView
          style={styles.items}
        >
            {
              taskList.map((item, index) => {
                return (
                  <Task text={item} key={index} />
                )
              })
            }
        </ScrollView>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputTask}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => addTask()}>
          <View style={styles.addButton}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a3b18a',
  },
  tasksWrapper: {
    height: '80%'
  },
  sectionTitle: {
    marginTop: 70,
    paddingHorizontal: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  items: {
    marginTop: 10,
    marginBottom: 10,
    maxHeight: '87%',
    paddingHorizontal: 20,
  },
  inputTask: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#588157',
    borderWidth: 2,
    width: 250,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#588157',
    borderWidth: 2,
  }
});