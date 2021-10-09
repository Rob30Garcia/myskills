import React, { useState } from 'react';

import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput,
  FlatList
} from 'react-native';
import { Button } from '../components/Button';
import { SkillButton } from '../components/SkillButton';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(old => [...old, data]);
    setNewSkill('')
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title} >Welcome, Robert</Text>

        <TextInput 
          style={styles.input} 
          placeholder="New skill"
          placeholderTextColor='#555'
          onChangeText={setNewSkill}
          value={newSkill}
        />

        <Button onPress={handleAddNewSkill}/>

        <Text style={[styles.title, { marginVertical: 50}]}>My Skills</Text>

        <FlatList 
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SkillButton skill={item.name}/>
          )}
        />
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
  }
})