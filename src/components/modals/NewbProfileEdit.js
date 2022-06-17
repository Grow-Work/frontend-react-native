import React, { useState, useContext, useEffect } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Input } from 'react-native-elements'
import { List, Colors } from 'react-native-paper';
import { ScrollView } from 'react-navigation'
import { Context as DataContext } from "../../context/DataContext";

const NewbProfileEdit= () => {

    const {state, editProfile} = useContext(DataContext)
    const profile = state.accountProfile

    const initialFormValues = {
      first_name: profile.first_name,
      last_name: profile.last_name,
      location: profile.location,
      email: profile.email,
      phone: profile.phone,
      bio: profile.bio,
      skills: profile.skills
  }

    const [form, setForm] = useState(initialFormValues)
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        
    }, [state.accountProfile])

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
            value={form.first_name} 
            onChangeText={text => setForm({...form, first_name: text})}
            autoCorrect={false}
            />
            <Input 
            label="Last Name" 
            value={form.last_name} 
            onChangeText={text => setForm({...form, last_name: text})}
            autoCorrect={false}
            />
        <Input 
            label="Bio" 
            value={form.bio} 
            onChangeText={text => setForm({...form, bio: text})}
            autoCorrect={false}
            />
        <Input 
            label="Skills" 
            value={form.skills} 
            onChangeText={text => setForm({...form, skills: text})}
            />
        <Input 
            label="Email" 
            value={form.email} 
            onChangeText={text => setForm({...form, email: text})}
            autoCapitalize="none"
            autoCorrect={false}
            />
        <Input 
            label="Phone" 
            value={form.phone} 
            onChangeText={text => setForm({...form, phone: text})}
            autoCorrect={false}
            />
        <Input 
            label="Location" 
            value={form.location} 
            onChangeText={text => setForm({...form, location: text})}
            autoCorrect={false}
            />
            <View style={styles.listing} >
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible); editProfile(form) }}
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