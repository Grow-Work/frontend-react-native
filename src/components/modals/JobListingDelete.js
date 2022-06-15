import React, { useState, useContext } from "react";
import { Modal, StyleSheet, Text, Pressable, SafeAreaView, View } from "react-native";
import { Input } from 'react-native-elements'
import { List, Colors } from 'react-native-paper';
import { ScrollView } from 'react-navigation'
import { Context as DataContext } from "../../context/DataContext";

const JobListingDelete= (props) => {

    const {state, deleteJobListing} = useContext(DataContext)
    const jobId = props.id

    const [modalVisible, setModalVisible] = useState(false);

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
            <Text style={styles.modalText}>Are you sure you want to delete ${state.jobListing.title}</Text>
            <View style={styles.listing} >
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible); deleteJobListing({title, company, jobId}) }}
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
    margin: 5,
    paddingHorizontal: 10
  },
  buttonOpen: {

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

export default JobListingDelete;