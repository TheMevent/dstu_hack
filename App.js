import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Home from './src/components/home/home';

export default function App() {
  return (
    <NativeRouter>
      <Link to="/login" underlayColor="#f0f4f7" style={{marginTop: 100}}>
        <Text>Home</Text>
      </Link>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <Route exact path="/" render={() => <Text>sdfsfsd</Text>} />
      <Route exact path="/login" component={Home} />
    </NativeRouter>
  );
}
