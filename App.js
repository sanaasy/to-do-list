import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, KeyboardAvoidingView, ScrollView } from 'react-native';
import Task from './src/components/Task/Task'

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const addTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Today's to do list 📝</Text>
      
      <View style={styles.tasksWrapper}>
        <ScrollView
          // contentContainerStyle={{
          //   flexGrow: 1
          // }}
          style={styles.items}
          // keyboardShouldPersistTaps='handled'
        >
          {/* <View style={styles.items}> */}
            {
              taskItems.map((item, index) => {
                return (
                  <Task text={item} key={index} />
                )
              })
            }
          {/* </View> */}
        </ScrollView>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => addTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
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
    // paddingTop: 80,
    paddingHorizontal: 20,
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
  },
  writeTaskWrapper: {
    // position: 'absolute',
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
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#588157',
    borderWidth: 2,
  },
  addText: {},
});