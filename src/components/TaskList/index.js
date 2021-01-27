import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function TaskList({data}){
    return (
        <Animatable.View 
        style={styles.container}
        animation="bounceIn"
        useNativeDriver
        >
            <TouchableOpacity>
                <Ionicons name="md-checkmark-circle" size={30} color="#121212"/>
            </TouchableOpacity>
            <View>
                <Text style={styles.task}>{data.task}</Text>
            </View>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      margin: 8,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderRadius: 5,
      padding: 7,
      elevation: 2,
      zIndex: 9,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: {
        width: 1,
        height: 3,
      }
    },
    task: {
        color: '#121212',
        fontSize: 20,
        padding: 8,
        paddingRight: 20,
    }
  });