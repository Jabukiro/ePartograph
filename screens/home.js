import * as React from 'react';
import { Button, FlatList, View } from 'react-native';
import { Clock, MainContainer, PatientHomeCard } from '../components';
import { __clear, retrieveActivePatients } from '../api';
import Patients from '../protoData.json';

export default function Home() {
  const [activePatients, setActivePatients] = React.useState();
  React.useEffect(() => {
    retrieveActivePatients().then(value => { setActivePatients(value); });
  }, [retrieveActivePatients]);
  const renderItem = ({ item, key }) => {
    return <PatientHomeCard patient={item} key={key} />;
  }
  return (
    <MainContainer>
      <Clock />
      <Button
      title='Clear'
      onPress={() => __clear()}
      />
      <FlatList
        data={activePatients}
        renderItem={renderItem}
        keyExtractor={(_, index) => index}
      />
    </MainContainer>
  )
}