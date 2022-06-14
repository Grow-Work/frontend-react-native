//this file is for playing around with and testing various things - component, libraries, etc.
import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, SafeAreaView, View } from "react-native";
import { Input } from 'react-native-elements'
import { List, Colors } from 'react-native-paper';
import { ScrollView } from 'react-navigation'
import JobListingForm from '../components/JobListingForm'

const TestScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [company, setCompany] = useState('')
    const [description, setDescription] = useState('')
    const [compensation, setCompensation] = useState('')
    const [applyLink, setApplyLink] = useState('')
    const [location, setLocation] = useState('')
    const [title, setTitle] = useState("")

  return (
    <SafeAreaView style={styles.centeredView} forceInset={{top: 'always'}}>
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
            <Text style={styles.modalText}>Edit Job Listing</Text>
            {/* <Input 
            label="Job Title" 
            value={title} 
            onChangeText={setTitle}
            autoCorrect={false}
            />
            <Input 
            label="Company" 
            value={company} 
            onChangeText={setCompany}
            autoCorrect={false}
            />
        <Input 
            label="Description" 
            value={description} 
            onChangeText={setDescription} 
            autoCapitalize="none"
            autoCorrect={false}
            />
            <Input 
            label="Compensation" 
            value={compensation} 
            onChangeText={setCompensation} 
            autoCapitalize="none"
            autoCorrect={false}
            />
            <Input 
            label="Location" 
            value={location} 
            onChangeText={setLocation} 
            autoCapitalize="none"
            autoCorrect={false}
            />
            <Input 
            label="Apply Link" 
            value={applyLink} 
            onChangeText={setApplyLink} 
            autoCapitalize="none"
            autoCorrect={false}
            /> */}
            <JobListingForm />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
              >
              <Text style={styles.textStyle}>Save</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      </Modal>
      <Pressable
        // style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <List.Icon color={Colors.green600} icon="pencil-outline" />
        {/* <Text style={styles.textStyle}>Edit</Text> */}
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    alignItems: "center",
    marginBottom: 15
  },
  centeredView2: {
    flex: 1,
    // justifyContent: "center",
    // alignContent: "center",
    // marginTop: 22
  },
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
    paddingHorizontal: 10
  },
  buttonOpen: {

  },
  buttonClose: {
    backgroundColor: "#2196F3",
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
  }
});

export default TestScreen;