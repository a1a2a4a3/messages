import React,{useState,useEffect} from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Button, TextInput } from "react-native";

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import firebase from 'firebase/app';
import "firebase/auth"
import db from './db';


export default function SettingsScreen() {
  const [displayName,setDisplayName]=useState("")
  const [photoURL,setphotoURL]=useState("")


const handleSet=async()=>{
  const info=await db.collection('users').doc(firebase.auth().currentUser.uid).get()
  setDisplayName(info.displayName)
  setphotoURL(info.photoURL)
}


  useEffect(()=>{
    //setDisplayName(firebase.auth().currentUser.displayName)
    handleSet()
  },[])


  
  const handleSave=()=>{
    //firebase.auth().currentUser.updateProfile({displayName,photoURL})
    db.collection('users').doc(firebase.auth().currentUser.uid).update({displayName,photoURL})
  }
  return (
    <View style={styles.container}>
      
      <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={setDisplayName}
          value={displayName}
          placeholder="DisplayName"
        />

<TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={setphotoURL}
          value={photoURL}
          placeholder="photo URL"
        />
                            <Button title="Save" onPress={() => handleSave()} />

    </View>
  )
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
};
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
