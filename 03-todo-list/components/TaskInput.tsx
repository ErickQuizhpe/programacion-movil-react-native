import React, { useState } from 'react'
import { TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

type Props ={
    onAdd: (title: string) => void;
}

export default function TaskInput({onAdd}: Props) {

  const [text, setText] = useState("");
  const handleAdd = () => {
    onAdd(text);
    setText("");
  }

  return (
    <View style={styles.container}>
        <TextInput 
          placeholder="Escribe una tarea..."
          placeholderTextColor="gray"
          value={text}
          onChangeText={setText}
          style={styles.input}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
            <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal:16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  addButton: {
    backgroundColor: '#10B981',
    marginLeft: 10,
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText:{
    color: 'white',
    fontSize: 28,
    fontWeight: '700',
  }
});
