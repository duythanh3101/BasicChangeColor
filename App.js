import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [color, setColor] = useState('white')
  const [undoList, setUndoList] = useState([])
  const [redoList, setRedoList] = useState([])

  const onPressChangeColor = (colorName) => {
    setUndoList([...undoList, color]);

    setColor(colorName);
  }

  const onUndoPress = () => {
    if (undoList.length < 1) return;
    const name = undoList.pop();

    if (name && undoList.length > -1){
      setRedoList([...redoList, color]);

      setColor(name);
    }
  }

  const onRedoPress = () => {
    if (redoList.length < 1) return;
    const name = redoList.pop();

    if (name && redoList.length > -1){
      setUndoList([...undoList, color]);

      setColor(name);
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.red} onPress={() => onPressChangeColor('red')}/>
        <TouchableOpacity style={styles.green} onPress={() => onPressChangeColor('green')}/>
        <TouchableOpacity style={styles.blue} onPress={() => onPressChangeColor('blue')}/>
        <TouchableOpacity style={styles.white} onPress={onUndoPress}>
          <Text style={styles.text}>Undo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.white} onPress={onRedoPress}>
          <Text style={styles.text}>Redo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.center}>
        <TouchableOpacity style={[styles.centerBox, {backgroundColor: color}]}/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  red: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
    margin: 5
  },
  green: {
    width: 40,
    height: 40,
    backgroundColor: 'green',
    margin: 5
  },
  blue: {
    width: 40,
    height: 40,
    backgroundColor: 'blue',
    margin: 5
  },
  white: {
    width: 40,
    height: 40,
    margin: 5,
    borderColor: 'black',
    borderWidth: 2,
    alignContent: 'center'
  },
  text: {
    flex: 1,
    textAlignVertical: 'center',
    alignSelf: 'center'
  },

  header: {
    flexDirection: 'row',
    margin: 10,
    marginTop: 40,
    marginLeft: 20
  },
  centerBox: {
    width: 120,
    height: 120,
    backgroundColor: 'white',
    margin: 5,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
   
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  }
});
