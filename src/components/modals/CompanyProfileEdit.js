import React, { useState, useContext } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Input } from 'react-native-elements'
import { List, Colors } from 'react-native-paper';
import { ScrollView } from 'react-navigation'
import { Context as DataContext } from "../../context/DataContext";

const CompanyProfileEdit= () => {

    const {state, editProfile} = useContext(DataContext)
    const profile = state.accountProfile

    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState(profile.name)
    const [location, setLocation] = useState(profile.location)
    const [sector, setSector] = useState(profile.sector)
    const [email, setEmail] = useState(profile.email)
    const [phone, setPhone] = useState(profile.phone)
    const [description, setDescription] = useState(profile.description)
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
            label="Name" 
            value={name} 
            onChangeText={setName}
            autoCorrect={false}
            />
        <Input 
            label="Description" 
            value={description} 
            onChangeText={setDescription}
            autoCorrect={false}
            />
        <Input 
            label="Sector" 
            value={sector} 
            onChangeText={setSector}
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
              onPress={() => {setModalVisible(!modalVisible); editProfile({email, name, phone, sector, description, location}) }}
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

export default CompanyProfileEdit;