import React, { useState, useContext } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { List, Colors } from 'react-native-paper';
import { Context as DataContext } from "../../context/DataContext";

const JobListingDelete= (props) => {

    const {state, deleteJobListing} = useContext(DataContext)
    const _id = props.id
    const job = state.jobListings.find(t => t._id === _id)
    const [modalVisible, setModalVisible] = useState(false);

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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to delete job listing: {job.title}</Text>
            <View style={styles.listing} >
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible); deleteJobListing({_id}) }}
              >
              <Text style={styles.textStyle}>Delete</Text>
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
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}
      >
        <List.Icon color={Colors.green600} icon="trash-can-outline" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15
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