import React from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import axios from 'axios'

class Demo3 extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.getapidata()
    }
    async getapidata() {
        let resp = await axios.get('https://facebook.github.io/react-native/movies.json')
        console.log(resp.data.movies)
        this.setState({ data: resp.data.movies })

    }
    render() {
        return (
            <View>
                {this.state.data ?
                    <View>
                        {this.state.data.map((item) =>
                            <View><Text>{item.title}</Text></View>
                        )}
                    </View> : <Text>loading</Text>}
            </View>
        )
    }
}

export default Demo3;