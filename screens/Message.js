import * as WebBrowser from "expo-web-browser";
import React, { useEffect, useState } from "react";
import { Button, TextInput,Message } from "react-native";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { MonoText } from "../components/StyledText";
import db from "./db.js";
import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/database"
export default({message,handleEdit})=>
{
  const [from,setFrom]=useState(null)

  handleSet=async()=>{
      const info=db.collection('users').doc(message.from).get(snapShot=>{console.log("snapshot",snapShot.data());
    });
      console.log("message.from info",info)
  }
  useEffect(()=>{
      handleSet();
      },[])
   

//firebase.database().ref(`users/${message.from}`).once("value",data=>{
   // console.log("message ",data);
//})
 // },[]);
  
      const handleDelete = message => {
        db.collection("messages")
          .doc(message.id)
          .delete();
      };

    return<>
        <Text style={styles.getStartedText}>{message.text}</Text>
        <Button title="Delete" onPress={() => handleDelete(message)} />
        <Button title="Edit" onPress={() => handleEdit(message)} />
    </>
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    developmentModeText: {
      marginBottom: 20,
      color: "rgba(0,0,0,0.4)",
      fontSize: 14,
      lineHeight: 19,
      textAlign: "center"
    },
    contentContainer: {
      paddingTop: 30
    },
    welcomeContainer: {
      alignItems: "center",
      marginTop: 10,
      marginBottom: 20
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: "contain",
      marginTop: 3,
      marginLeft: -10
    },
    getStartedContainer: {
      alignItems: "center",
      marginHorizontal: 50
    },
    homeScreenFilename: {
      marginVertical: 7
    },
    codeHighlightText: {
      color: "rgba(96,100,109, 0.8)"
    },
    codeHighlightContainer: {
      backgroundColor: "rgba(0,0,0,0.05)",
      borderRadius: 3,
      paddingHorizontal: 4
    },
    getStartedText: {
      fontSize: 17,
      color: "rgba(96,100,109, 1)",
      lineHeight: 24,
      textAlign: "center"
    },
    tabBarInfoContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: "black",
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3
        },
        android: {
          elevation: 20
        }
      }),
      alignItems: "center",
      backgroundColor: "#fbfbfb",
      paddingVertical: 20
    },
    tabBarInfoText: {
      fontSize: 17,
      color: "rgba(96,100,109, 1)",
      textAlign: "center"
    },
    navigationFilename: {
      marginTop: 5
    },
    helpContainer: {
      marginTop: 15,
      alignItems: "center"
    },
    helpLink: {
      paddingVertical: 15
    },
    helpLinkText: {
      fontSize: 14,
      color: "#2e78b7"
    }
  });
  