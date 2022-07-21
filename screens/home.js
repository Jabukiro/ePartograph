import * as React from 'react';
import { FlatList, View } from 'react-native';
import { Clock, MainContainer, PatientHomeCard } from '../components';
import Patients from '../protoData.json';

export default function Home() {
  const renderItem = ({ item }) => {
    return <PatientHomeCard patient={item} />;
  }
  return (
    <MainContainer>
      <Clock />
      <FlatList
        data={Patients}
        renderItem={renderItem}
        keyExtractor={patient => patient.id}
      />
    </MainContainer>
  )
}