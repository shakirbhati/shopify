import React, { useState } from 'react'
import { View, ScrollView, TouchableOpacity, Text, TextInput } from 'react-native'
import Addresspickup from './Addresspikcup';
import { showError } from './helper';

const Demo2 = ({ navigation }) => {
    return (

        <View style={{ flex: 1, padding: 23, backgroundColor: 'white' }}>
            <ScrollView
                keyboardShouldPersistTaps="handled" style={{ flex: 1, backgroundColor: 'white' }}>
                <Addresspickup
                    title='Enter Pickup location'
                />

                <View style={{ marginTop: 20 }}>
                    <Addresspickup
                        title='Enter Destination location'
                    />
                </View>

                <TouchableOpacity onPress={() => { navigation.navigate('Demo')}}
                    style={{ borderWidth: 1, paddingVertical: 6, marginTop: 20 }}>
                    <Text style={{ fontSize: 17, textAlign: 'center' }}>
                        Done
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
export default Demo2;