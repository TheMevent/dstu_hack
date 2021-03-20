import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

export default function Footer(){
    return( 
    <NativeRouter>
        <View style={styles.menu}>
            <Link to="/home">
                <View>
                    <Text style={styles.buttonSize}>Home</Text>
                </View>
            </Link>
            <Link to="/stonks">
                <View>
                    <Text>Stonks</Text>
                </View>
            </Link>
            <Link to="/analytics">
                <View>
                    <Text>Analytics</Text>
                </View>
            </Link>
        </View>
    </NativeRouter>
    )
}

const styles = StyleSheet.create({
    menu: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        height: "7.5%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
        width: "100%",
        borderTopColor: "gray",
        borderTopWidth: 0.6
    }
})