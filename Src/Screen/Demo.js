import React, { useState, useRef } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Helper from './helper';

const Demo = ({ navigation }) => {

    const mapkey = "AIzaSyDp8kshAwl2VeZe4lSseBVFhYVNQpVXyt0"

    const [state, setstate] = useState({
        pickupcords: {
            latitude: 26.6450,
            longitude: 74.0309,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,


        },
        desticords: {
            latitude: 26.4499,
            longitude: 76.7794,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    })

    const { pickupcords, desticords } = state

    // const pickupcords = () => {
    //     Helper.getData('geodata').then((geodata)=>{
    //         latitude = geodata.details.geometry.location.lat,
    //         longitude = geodata.details.geometry.location.lng
    //         //  geodata.geometry.location.lat
    //         // geodata.geometry.location.lng
    //     })
    // }

    // const desticords = () => {
    //     Helper.getData('geodata').then((geodata)=>{
    //         latitude = geodata.details.geometry.location.lat,
    //         longitude = geodata.details.geometry.location.lng
    //     })
    // }


    const mapRef = useRef()


    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <MapView style={StyleSheet.absoluteFill}
                    ref={mapRef}
                    initialRegion={pickupcords}
                >
                    <Marker
                        coordinate={pickupcords} />

                    <Marker
                        coordinate={desticords} />

                    <MapViewDirections
                        origin={pickupcords}
                        destination={desticords}
                        apikey={mapkey}
                        strokeWidth={3}
                        strokeColor="#000"
                        optimizeWaypoints={true}
                        onReady={result => {
                            mapRef.current.fitToCoordinates(result.coordinates, {
                                edgePadding: {
                                    right: 30,
                                    bottom: 30,
                                    left: 30,
                                    top: 100
                                }
                            })

                        }}
                    />
                </MapView>
            </View>

            <View style={{ backgroundColor: 'white', paddingHorizontal: 30, paddingVertical: 10 }}>
                <Text style={{ fontSize: 16, color: 'blue' }}>where are you going</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Demo2') }}
                    style={{ borderWidth: 1, marginTop: 10, paddingVertical: 4, borderRadius: 3 }}>
                    <Text style={{ fontSize: 17, color: 'black', textAlign: 'center' }}>choose your location</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Demo;
