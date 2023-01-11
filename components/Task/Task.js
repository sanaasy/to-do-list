import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

const Task = (props) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
          <Checkbox
            value={isSelected}
            onValueChange={setSelection}
            color='#3a5a40'
            style={styles.checkbox}
          />
        <Text style={{ ...styles.itemText, textDecorationLine: isSelected ? "line-through" : "none" }}>{props.text}</Text>
      </View>
      {isSelected ? 
        <Text>🥳</Text> 
        : 
        <View style={styles.circular} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  checkbox: {
    width: 24,
    height: 24,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#3a5a40',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;