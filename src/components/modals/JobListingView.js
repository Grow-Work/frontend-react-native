import React, { useState, useContext } from "react";
import { Modal, StyleSheet, Text, Pressable, SafeAreaView, View } from "react-native";
import { Input } from 'react-native-elements'
import { List, Colors } from 'react-native-paper';
import { ScrollView } from 'react-navigation'
import { Context as DataContext } from "../../context/DataContext";

const JobListingView= (props) => {

    const {state} = useContext(DataContext)
    const _id = props.id

    const job = state.jobListings.find(t => t._id === _id)

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
        <View style={styles.centeredView2}>
          <View style={styles.modalView}>
            <Text style={styles.header}>{job.title}</Text>
            <Text style={styles.modalText}>
                Company: {job.company}
                {'\n'}{'\n'}
                Description: {job.description}
                {'\n'}{'\n'}
                Compensation: {job.compensation}
                {'\n'}{'\n'}
                Required Skills: {job.required_skills}
                {'\n'}{'\n'}
                Preferred Skills: {job.preferred_skills}
                {'\n'}{'\n'}
                Location: {job.location}
                {'\n'}{'\n'}
                {job.job_type}
             </Text>
            <View style={styles.apply_link} >
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
              >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}
      >
        <List.Icon color={Colors.green600} icon="eye" />
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
    justifyContent: "center",
    alignContent: "center",
    marginTop: 22
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
    fontSize: 20
  },
  listing: {
    display: 'flex',
    flexDirection: 'row'
  },
  header: {
    fontSize: 30,
    marginBottom: 15
}
});

export default JobListingView;