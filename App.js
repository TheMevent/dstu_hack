import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Footer from "./src/components/Footer"
import Home from './src/components/home/Home';
import Analytic from "./src/components/analytics/Analytic"
import Stonks from "./src/components/stonks/Stonks"

export default function App() {
  return (
    <NativeRouter>
        <Route exact path="/home" component={Home} />
        <Route exact path="/analytics" component={Analytic}/>
        <Route exact path="/stonks" component={Stonks}/>
        <Footer/>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
})
