import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Surface, Text, useTheme } from 'react-native-paper';
import { MainContainer, MyTextInput, MyButton } from '../components';
import { addActivePatient, toRFC3339 } from '../api';
export default function RegisterPatient() {
  const theme = useTheme();
  const [patient, setPatient] = React.useState({
    first_name: "Daniel",
    surname: "Barihuta",
    dob: "11/12/1997",
    marital_status: "single",
    country: "Zambia",
    province: "Lusaka",
    district: "Lusaka",
    suburb: "Ibex Meanwood",
    literacy: "A9",
    religion: "Christian",
  });
  const handlePatientChange = (value, name) => {
    setPatient((patient) => (
      {
        ...patient,
        [name]: value
      }
    ));
  }
  const addPatient = () => {
    const newPatient = {
      demographics: patient,
      status: "unknown",
      data: {
        fhr: newDataPoint("FHR", "...", toRFC3339()),
        dilation: newDataPoint("FHR", "...", toRFC3339()),
        count: newDataPoint("FHR", "...", toRFC3339())
      }
    }
    console.log("New Patient: ", newPatient)
    addActivePatient(newPatient);
  }
  return (
    <ScrollView contentContainerStyle={{ minHeight: "100%" }}>
      <MainContainer>
        <View>
          <Text variant="headlineMedium">Add New Patient</Text>
        </View>
        <View style={{ marginVertical: theme.spacing.m_2 }}>
          <View>
            <MyTextInput value={patient.first_name} label="First Name"
              onChangeText={text => handlePatientChange(text, 'first_name')} />
            <MyTextInput value={patient.surname} label="Surname"
              onChangeText={text => handlePatientChange(text, 'surname')} />
          </View>
          <MyTextInput value={patient.dob} label="Birth Date"
            onChangeText={text => handlePatientChange(text, 'dob')} />
          <MyTextInput value={patient.marital_status} label="Marital Status"
            onChangeText={text => handlePatientChange(text, 'marital_status')} />
          <MyTextInput value={patient.country} label="Country"
            onChangeText={text => handlePatientChange(text, 'country')} />
          <MyTextInput value={patient.province} label="Province"
            onChangeText={text => handlePatientChange(text, 'province')} />
          <MyTextInput value={patient.district} label="District"
            onChangeText={text => handlePatientChange(text, 'district')} />
          <MyTextInput value={patient.suburb} label="Suburb"
            onChangeText={text => handlePatientChange(text, 'suburb')} />
          <MyTextInput value={patient.literacy} label="Literacy Levels"
            onChangeText={text => handlePatientChange(text, 'literacy')} />
          <MyTextInput value={patient.religion} label="Religion"
            onChangeText={text => handlePatientChange(text, 'religion')} />
        </View>
        <MyButton mode="contained"
          onPress={addPatient}
        >
          Add Patient
        </MyButton>
      </MainContainer>
    </ScrollView>
  )
}
function newDataPoint(display_name, reading = "...", next_reading) {
  return {
    display_name,
    reading,
    next_reading
  }
}