import React from "react";
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const UserSearchMainScreen = () => {
    return(
        <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
        latitude: 33.4484,
        longitude: -112.0740,
        latitudeDelta: 1,
        longitudeDelta: 1
      }}/>
    </View>
    );
};

export default UserSearchMainScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});