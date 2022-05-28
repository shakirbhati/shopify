import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, FlatList, ActivityIndicator, Image, TextInput } from 'react-native'


const Demo4 = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [query, setQuery] = useState('');
    const [masterdata, setmasterdata] = useState([]);
    const [filterdata, setfilterdata] = useState([]);

    useEffect(() => {
        CallApi()
    }, [])

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource and update FilteredDataSource
            const newData = masterdata.filter(function (item) {
                // Applying filter for the inserted text in search bar
                const itemData = item.name.last
                    ? item.name.last.toLowerCase()
                    : ''.toLowerCase();
                const textData = text.toLowerCase();
                return itemData.indexOf(textData) > -1;
            });
            setfilterdata(newData);
            setQuery(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setfilterdata(masterdata);
            setQuery(text);
        }
    };


    const CallApi = () => {
        setIsLoading(true);
        fetch('https://randomuser.me/api/?seed=1&page=1&results=40', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("====>json:", JSON.stringify(json))
                setmasterdata(json.results);
                setfilterdata(json.results)
                setIsLoading(false)

            })
            .catch((error) => {
                console.log('error:', error)
            });
    }
    const renderItem = ({ item }) => {
        return (
            <View style={{
                marginTop: 10,
                paddingVertical: 20,
                paddingHorizontal: 20,
                backgroundColor: '#fff',
                flexDirection: 'row',
                alignSelf: 'center',
                width: '90%',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                {/* <Text style={{}}>
                    {item.id}
                </Text> */}

                <Image
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 8
                    }}
                    source={{ uri: item.picture.thumbnail }}

                />
                <Text style={{}}>
                    {item.name.last.toLowerCase()}
                </Text>


            </View>
        )
    }

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#5500dc" />
            </View>
        );
    }
    return (
        <View>
            <View
                style={{
                    backgroundColor: '#fff',
                    padding: 5,
                    marginVertical: 20,
                    marginHorizontal: 20,
                    borderRadius: 20
                }}
            >
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    value={query}
                    onChangeText={(text) => searchFilterFunction(text)}
                    placeholder="Search"
                    style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
                />
            </View>

            <FlatList
                data={filterdata}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );

}
export default Demo4
