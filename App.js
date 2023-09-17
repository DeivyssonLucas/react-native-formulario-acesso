import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  username: yup.string().required("Informe seu username"),
  email: yup.string().email('E-mail inválido!').required("Informe seu e-mail"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 dígitos").required("Informe sua senha")
})



export default function App() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  function handleSignIn(data){
    console.log(data);
  }


return (
  <View style={styles.container}>
  
  <Text style={styles.title}>Bem-vindo(a)</Text>

    <Controller control={control}
    name="username" 
    render={({ field: { onChange, onBlur, value} }) => (
      <TextInput 
      style={styles.input} 
      onChangeText={onChange} 
      onBlur={onBlur}
      value={value} placeholder="Seu username" />
    )}/>
    {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>}
    
    <Controller control={control}
    name="email" 
    render={({ field: { onChange, onBlur, value} }) => (
      <TextInput 
      style={styles.input} 
      onChangeText={onChange} 
      onBlur={onBlur}
      value={value} placeholder="Digite seu E-mail" />
    )}/>
        {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}

    <Controller control={control}
    name="password" 
    render={({ field: { onChange, onBlur, value} }) => (
      <TextInput 
      style={styles.input} 
      onChangeText={onChange} 
      onBlur={onBlur}
      value={value} placeholder="Digite sua senha" secureTextEntry={true}/>
    )}/>
    {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}

  
  <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
    <Text style={styles.buttonText}>Acessar</Text>
  </TouchableOpacity>
  </View>
  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f4ff',
      paddingHorizontal: 18
    },
    title: {
      fontSize: 34,
      marginBottom: 34,
      color: '#121212'
    },
    input: {
      width: '100%',
      height: 40,
      backgroundColor: '#ffffff',
      paddingHorizontal: 8,
      marginBottom: 8,
      borderRadius: 4,
      color: '#121212'
    },
    button: {
      width: '100%',
      height: 40,
      backgroundColor: '#45d800',
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: "center",
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
    },
    labelError: {
      alignSelf: 'flex-start',
      color: '#ff375b',
      marginBottom: 8,
    }
  })