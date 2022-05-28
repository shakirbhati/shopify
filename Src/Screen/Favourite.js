import React from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import ImagePath from '../Assets/ImagePath';

const Favourite = ({ navigation }) => {

  const images = [
    "https://cdn.shopify.com/s/files/1/0876/1046/products/dapper-boi-bottoms-black-db-joggers-29754046939309.png?v=1628023562",
    "https://cdn.shopify.com/s/files/1/0243/3004/3455/products/20210917-RefineryEComm_03_011_1200x1200.jpg?v=1636036277",
    "https://selectshop.eu/modpub/_rselectshop/product/medium/032020/243447-bf54fa.jpg"

  ]

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "white" }}>

        <View style={{ marginTop: -80 }}>
          <SliderBox
            autoplay
            circleLoop
            images={images}
            sliderBoxHeight={460}
            onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            dotStyle={{
              width: 5,
              height: 5,
              borderRadius: 15,
              marginHorizontal: 0,
              padding: 0,
              margin: 0
            }}
            ImageComponentStyle={{ borderRadius: 8, width: '100%', marginTop: 5 }}
            imageLoadingColor="#2196F3"
          />
        </View>

        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }} style={{ position: 'absolute', top: 20, left: 20 }}>
          <Image style={{ height: 20, width: 20 }} source={ImagePath.BackIcon} />
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignSelf: 'flex-end', paddingHorizontal: 20, marginTop: -20 }}>
          <TouchableOpacity style={{ backgroundColor: 'white', padding: 8, borderRadius: 30, elevation: 10, marginRight: 10 }}>
            <Image style={{ height: 25, width: 25 }} source={ImagePath.HeartActive} />
          </TouchableOpacity>

          <TouchableOpacity style={{ padding: 8, borderRadius: 30, elevation: 10, backgroundColor: 'white' }}>
            <Image style={{ height: 25, width: 25 }} source={ImagePath.Share} />
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 18, color: 'red', fontWeight: 'bold' }}>
            $250 USD
          </Text>

          <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>
            Adidas Men's Soccer Tiro
          </Text>

          <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>
            17 Training Pants
          </Text>

          <Text style={{ marginTop: 10 }}>
            By: Adidas
          </Text>

          <Text style={{ marginTop: 10 }}>
            It is a long established fact
            that a reader will be distracted by
            the readable content of a page when
            looking at its layout. The point of using
          </Text>

          <Text style={{ marginTop: 10 }}>
            Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed.
          </Text>
        </View>

        <View style={{ paddingHorizontal: 20, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <TouchableOpacity style={{ backgroundColor: 'gold', padding: 8, borderRadius: 50, width: 40, height: 40 }}>
            <Image style={{ alignSelf: 'flex-end', tintColor: 'white', resizeMode: 'contain', height: 25, width: 25 }} source={ImagePath.Cart} />
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: '#453c55', paddingHorizontal: 20, height: 200, flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: 20 }}>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <View style={{ flex: 1, marginHorizontal: 5 }}>
              <Text style={{ fontSize: 20, color: 'white' }}>
                Quality
              </Text>

              <View style={{ flexDirection: 'row', borderWidth: 1, paddingHorizontal: 10, borderColor: 'white', borderRadius: 5, width: '100%', marginTop: 10 }}>
                <Text style={{ fontSize: 20, color: 'white', flex: 1 }}>
                  1
                </Text>
                <Text style={{ fontSize: 25, color: 'white', marginRight: 10 }}>
                  -
                </Text>
                <Text style={{ fontSize: 25, color: 'white' }}>
                  +
                </Text>

              </View>
            </View>

            <View style={{ flex: 1, marginHorizontal: 5 }}>
              <Text style={{ fontSize: 20, color: 'white' }}>
                Color
              </Text>

              <View style={{ flexDirection: 'row', borderWidth: 1, paddingHorizontal: 10, borderColor: 'white', borderRadius: 5, width: '100%', marginTop: 10 }}>
                <Text style={{ fontSize: 20, color: 'white', flex: 1 }}>
                  1
                </Text>
                <Text style={{ fontSize: 25, color: 'white', marginRight: 10 }}>
                  -
                </Text>
                <Text style={{ fontSize: 25, color: 'white' }}>
                  +
                </Text>

              </View>
            </View>
          </View>

        </View>

      </View>
    </ScrollView>
  );
}

export default Favourite;