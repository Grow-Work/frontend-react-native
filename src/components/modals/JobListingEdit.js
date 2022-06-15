import React, { useState, useContext } from "react";
import { Modal, StyleSheet, Text, Pressable, SafeAreaView, View } from "react-native";
import { Input } from 'react-native-elements'
import { List, Colors } from 'react-native-paper';
import { ScrollView } from 'react-navigation'
import { Context as DataContext } from "../../context/DataContext";

const JobListingEdit= (props) => {

    const {state, editJobListing, handleFormChanges} = useContext(DataContext)
    const _id = props.id

    const job = state.jobListings.find(t => t._id === _id)

    // const initialFormValues = {
    //   title: job.title,
    //   company: job.company,
    //   description: job.description,
    //   compensation: job.compensation,
    //   applyLink: job.applyLink,
    //   location: job.location 
    // }

    const [modalVisible, setModalVisible] = useState(false);
    // const [ formValues, setFormValues] = useState(initialFormValues)
    const [company, setCompany] = useState(job.company)
    const [description, setDescription] = useState(job.description)
    const [compensation, setCompensation] = useState(job.compensation)
    const [applyLink, setApplyLink] = useState(job.applyLink)
    const [location, setLocation] = useState(job.location)
    const [title, setTitle] = useState(job.title)
    const [jobType, setJobType] = useState(job.job_type)
    const [required_skills, setrequired_skills] = useState(job.required_skills)
    const [preferred_skills, setpreferred_skills] = useState(job.preferred_skills)

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
            <Input 
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
            label="Job Type" 
            value={jobType} 
            onChangeText={setJobType} 
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
              onPress={() => {setModalVisible(!modalVisible); editJobListing({title, company, description, compensation, applyLink, location, required_skills, preferred_skills, _id}) }}
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

export default JobListingEdit;