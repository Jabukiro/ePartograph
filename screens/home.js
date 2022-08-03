import * as React from 'react';
import { FlatList, View } from 'react-native';
import { Clock, MainContainer, PatientHomeCard } from '../components';
import { retrieveActivePatients } from '../api';
import Patients from '../protoData.json';

export default function Home() {
  const [activePatients, setActivePatients] = React.useState();
  React.useEffect(() => {
    retrieveActivePatients().then(value => { console.log("Active Patients List: ", value); setActivePatients(value); });
  }, [retrieveActivePatients]);
  const renderItem = ({ item, key }) => {
    return <PatientHomeCard patient={item} key={key} />;
  }
  return (
    <MainContainer>
      <Clock />
      <FlatList
        data={activePatients}
        renderItem={renderItem}
        keyExtractor={(_, index) => index}
      />
    </MainContainer>
  )
}