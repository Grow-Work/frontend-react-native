import React, { useState, useContext } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Input } from 'react-native-elements'
import { List, Colors } from 'react-native-paper';
import { ScrollView } from 'react-navigation'
import { Context as DataContext } from "../../context/DataContext";

const NewbProfileEdit= () => {

    const {state, editProfile} = useContext(DataContext)
    const profile = state.accountProfile

    const [modalVisible, setModalVisible] = useState(false);
    const [first_name, setFirst_Name] = useState(profile.first_name)
    const [last_name, setLast_Name] = useState(profile.last_name)
    const [location, setLocation] = useState(profile.location)
    const [email, setEmail] = useState(profile.email)
    const [phone, setPhone] = useState(profile.phone)
    const [bio, setBio] = useState(profile.bio)
    const [skills, setSkills] = useState(profile.skills)
    const [links, setLinks] = useState([profile.links])

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ScrollView>
        <View>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Edit Profile</Text>
            <Input 
            label="First Name" 
            value={first_name} 
            onChangeText={setFirst_Name}
            autoCorrect={false}
            />
            <Input 
            label="Last Name" 
            value={last_name} 
            onChangeText={setLast_Name}
            autoCorrect={false}
            />
        <Input 
            label="Bio" 
            value={bio} 
            onChangeText={setBio}
            autoCorrect={false}
            />
        <Input 
            label="Skills" 
            value={skills} 
            onChangeText={setSkills}
            />
        <Input 
            label="Email" 
            value={email} 
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            />
        <Input 
            label="Phone" 
            value={phone} 
            onChangeText={setPhone}
            autoCorrect={false}
            />
        <Input 
            label="Location" 
            value={location} 
            onChangeText={setLocation}
            autoCorrect={false}
            />
            <View style={styles.listing} >
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible); editProfile({email, first_name, last_name, phone, skills, bio, location}) }}
              >
              <Text style={styles.textStyle}>Save</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
              >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}
      >
        <List.Icon color={Colors.green600} icon="pencil-outline" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    margin: 5,
    paddingHorizontal: 10
  },
  buttonClose: {
    backgroundColor: "green",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: "center"
  },
  listing: {
    display: 'flex',
    flexDirection: 'row'
  }
});

export default NewbProfileEdit;