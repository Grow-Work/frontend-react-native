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

    const initialFormValues = {
      title: job.title,
      company: job.company,
      description: job.description,
      compensation: job.compensation,
      job_type: job.job_type,
      location: job.location,
      apply_link: job.apply_link,
      required_skills: job.required_skills,
      preferred_skills: job.preferred_skills
  }

    const [form, setForm] = useState(initialFormValues)
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
        <ScrollView>
        <View>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Edit Job Listing</Text>
            <Input 
            label="Job Title" 
            value={form.title} 
            onChangeText={text => setForm({...form, title: text})}
            />
            <Input 
            label="Company" 
            value={form.company} 
            onChangeText={text => setForm({...form, company: text})}
            autoCorrect={false}
            />
        <Input 
            label="Description" 
            value={form.description} 
            onChangeText={text => setForm({...form, description: text})}
            autoCorrect={false}
            />
            <Input 
            label="Compensation" 
            value={form.compensation} 
            onChangeText={text => setForm({...form, compensation: text})}
            autoCorrect={false}
            />
            <Input 
            label="Job Type" 
            value={form.job_type} 
            onChangeText={text => setForm({...form, job_type: text})}
            />
            <Input 
            label="Location" 
            value={form.location} 
            onChangeText={text => setForm({...form, location: text})}
            autoCorrect={false}
            />
            <Input 
            label="Apply Link" 
            value={form.apply_link} 
            onChangeText={text => setForm({...form, apply_link: text})}
            autoCapitalize="none"
            autoCorrect={false}
            />
            <Input 
            label="Required Skills" 
            value={form.required_skills} 
            onChangeText={text => setForm({...form, required_skills: text})} 
            autoCapitalize="none"
            />
            <Input 
            label="Preferred Skills" 
            value={form.preferred_skills} 
            onChangeText={text => setForm({...form, preferred_skills: text})} 
            autoCapitalize="none"
            />
            <View style={styles.flexRow} >
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible); editJobListing({form, _id}) }}
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
  flexRow: {
    display: 'flex',
    flexDirection: 'row'
  }
});

export default JobListingEdit;