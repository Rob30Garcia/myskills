import React from 'react';

import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput,
  TouchableOpacity 
} from 'react-native';

export function Home() {


  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title} >Welcome, Robert</Text>

        <TextInput 
          style={styles.input} 
          placeholder="New skill"
          placeholderTextColor='#555'
        />

        <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <Text style={[styles.title, { marginVertical: 50}]}>My Skills</Text>

        <TouchableOpacity style={styles.buttonSkill}>
          <Text style={styles.textSkill}>
            Test
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#FFF',
    fontSize:24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: 10,
    marginTop: 30,
    borderRadius: 8
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center'
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  }
})