import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Surface, Text } from 'react-native-paper';
import { useTimer } from 'react-timer-hook';

export default function PatientHomeCard({ patient }) {
  console.log("Patient details: ", patient);
  const patientStatus = React.useState(patient.status)
  const nextDueReading = getNextDueReading(patient);
  const duetime = new Date(patient.data[nextDueReading].next_reading) - new Date();
  const {
    minutes,
  } = useTimer({ expiryTimestamp: new Date(patient.data[nextDueReading].next_reading), onExpire: () => console.warn('onExpire called') });
  return (
    <>
      <Surface elevation={1} style={styles.item}>
        <Text variant="titleLarge">{`${patient.demographics.first_name} ${patient.demographics.surname}`}</Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 3, flexDirection: "row" }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text>Status</Text>
              <Button compact mode="contained">{patient.status}</Button>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text>FHR</Text>
              <Button compact mode="outlined">{duetime > 0 ? `DUE in ${minutes}` : 'OVERDUE'}</Button>
            </View>
          </View>
          <View style={{ flex: 2, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 10 }}>{patient.data[nextDueReading].display_name}</Text>
              <Text>{patient.data.fhr.reading}</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 10 }}>Dilation</Text>
              <Text>{patient.data.dilation.reading}</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 10 }}>Count</Text>
              <Text>{patient.data.count.reading}</Text>
            </View>
          </View>
        </View>
      </Surface>
    </>
  )
}

const getNextDueReading = (patient) => {
  return Object.keys(patient.data).reduce((prev, curr) => {
    if (new Date(patient.data[prev].next_reading) - new Date(patient.data[curr].next_reading) > 0) return curr;
    return prev;
  })
}
const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 10
  },
});