import React from 'react'
import { View, ScrollView, StyleSheet, TextInput } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Helper from './helper';



const Addresspickup = (props, fetchaAddress) => {
    const mapkey = "AIzaSyDp8kshAwl2VeZe4lSseBVFhYVNQpVXyt0"

    const ondone = (data, details) => {
        console.log("details=>", details)
        Helper.setData('geodata',details)
        // const lat = details.geometry.location.lat
        // const lng = details.geometry.location.lng
        // fetchaAddress(lat, lng)
    }

    return (
        <View style={{ flex: 1 }}>
            <GooglePlacesAutocomplete
                placeholder={props.title}
                onPress={ondone}
                fetchDetails={true}
                query={{
                    key: mapkey,
                    language: 'en',
                }}
                styles={{
                    textInputContainer: styles.textInputContainer,
                    textInput: styles.textInputstyle
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textInputContainer: { backgroundColor: 'white' },
    textInputstyle: { height: 48, color: 'black', fontSize: 16, backgroundColor: '#F3F3F3' }
})

export default Addresspickup;