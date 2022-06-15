import React, { useState, useContext } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Input } from 'react-native-elements'
import { List, Colors } from 'react-native-paper';
import { ScrollView } from 'react-navigation'
import { Context as DataContext } from "../../context/DataContext";

const JobListingEdit= (props) => {

    const {state, editJobListing} = useContext(DataContext)
    const _id = props.id
    const job = state.jobListings.find(t => t._id === _id)

    const [modalVisible, setModalVisible] = useState(false);
    const [company, setCompany] = useState(job.company)
    const [description, setDescription] = useState(job.description)
    const [compensation, setCompensation] = useState(job.compensation)
    const [apply_link, setapply_link] = useState(job.apply_link)
    const [location, setLocation] = useState(job.location)
    const [title, setTitle] = useState(job.title)
    const [job_type, setjob_type] = useState(job.job_type)
    const [required_skills, setrequired_skills] = useState(job.required_skills)
    const [preferred_skills, setpreferred_skills] = useState(job.preferred_skills)

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
            <Text style={styles.modalText}>Edit Job Listing</Text>
            <Input 
            label="Job Title" 
            value={title} 
            onChangeText={setTitle}
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
            autoCorrect={false}
            />
            <Input 
            label="Compensation" 
            value={compensation} 
            onChangeText={setCompensation}
            autoCorrect={false}
            />
            <Input 
            label="Job Type" 
            value={job_type} 
            onChangeText={setjob_type}
            />
            <Input 
            label="Location" 
            value={location} 
            onChangeText={setLocation}
            autoCorrect={false}
            />
            <Input 
            label="Apply Link" 
            value={apply_link} 
            onChangeText={setapply_link} 
            autoCapitalize="none"
            autoCorrect={false}
            />
            <Input 
            label="Required Skills" 
            value={required_skills} 
            onChangeText={setrequired_skills} 
            autoCapitalize="none"
            autoCorrect={false}
            />
            <Input 
            label="Preferred Skills" 
            value={preferred_skills} 
            onChangeText={setpreferred_skills} 
            autoCapitalize="none"
            autoCorrect={false}
            />
            <View style={styles.listing} >
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible); editJobListing({title, company, description, compensation, apply_link, job_type, location, required_skills, preferred_skills, _id}) }}
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

export default JobListingEdit;