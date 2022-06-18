import React, { useState, useContext, useEffect } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Input } from 'react-native-elements'
import { List, Colors } from 'react-native-paper';
import { ScrollView } from 'react-navigation'
import { Context as DataContext } from "../../context/DataContext";

const CompanyProfileEdit= () => {

    const {state, editProfile} = useContext(DataContext)
    const profile = state.accountProfile

    const initialFormValues = {
      name: profile.name,
      description: profile.description,
      location: profile.location,
      sector: profile.sector,
      phone: profile.phone,
      email: profile.email
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
            label="Name" 
            value={form.name} 
            onChangeText={text => setForm({...form, name: text})}
            autoCorrect={false}
            />
            <Input 
                label="Description" 
                value={form.description} 
                onChangeText={text => setForm({...form, description: text})}
                autoCorrect={false}
            />
            <Input 
                label="Sector" 
                value={form.sector} 
                onChangeText={text => setForm({...form, sector: text})}
            />
            <Input 
                label="Location" 
                value={form.location} 
                onChangeText={text => setForm({...form, location: text})}
                autoCorrect={false}
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

export default CompanyProfileEdit;