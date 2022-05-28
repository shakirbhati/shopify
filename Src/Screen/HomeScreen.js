import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, StatusBar, FlatList } from 'react-native'
import ImagePath from '../Assets/ImagePath';
import { SliderBox } from "react-native-image-slider-box";

const HomeScreen = () => {

  const DATA = [
    {
      Product: ImagePath.Shoes,
      title: 'Mens Shoes',
      bgcolor: 'white',
      Price: '$120',
      Off: '$10'
    },
    {
      Product: ImagePath.FemalePurse,
      title: 'Leather Bag',
      bgcolor: 'pink',
      Price: '$280',
      Off: '$10'
    },
    {
      Product: ImagePath.MalePurse,
      title: 'Wallet for men',
      bgcolor: 'blue',
      Price: '$60',
      Off: '$10'
    },
    {
      Product: ImagePath.Shoes,
      title: 'Mens Shoes',
      bgcolor: 'white',
      Price: '$120',
      Off: '$10'
    },
    {
      Product: ImagePath.FemalePurse,
      title: 'Leather Bag',
      bgcolor: 'pink',
      Price: '$280',
      Off: '$10'
    },
    {
      Product: ImagePath.MalePurse,
      title: 'Wallet for men',
      bgcolor: 'blue',
      Price: '$60',
      Off: '$10'
    },

  ];

  const renderItem = ({ item }) => {
    return (
      <View >
        <Image style={{ height: 100, width: 110, resizeMode: 'contain', marginLeft: 10, backgroundColor: item.bgcolor, borderRadius: 10 }} source={item.Product} />
        <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 5 }}>
          <Text style={{ color: 'red', fontWeight: 'bold', marginLeft: 10 }}>{item.Price}</Text>
          <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 10, fontSize: 12, textDecorationLine: 'line-through' }}>{item.Off}</Text>
        </View>
        <Text style={{ color: 'black', fontWeight: '500', fontSize: 13, marginLeft: 8 }}> {item.title}</Text>
      </View>
    )
  }



  const images = [
    "https://blog.healyconsultants.com/wp-content/uploads/2013/11/zara-1024x731.jpg",
    "https://businessconnectindia.in/wp-content/uploads/2020/12/How-ZARA-Become-World%E2%80%99s-Largest-Fashion-Retailer-1.jpg",
    "https://content.fortune.com/wp-content/uploads/2018/06/zara-fashion-controversies.jpg?resize=1200,600",
    "https://cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/ZH5U77EBQJHKRNE6GAXEX4SNAI.jpg"
  ]

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar
        animated={true}
        backgroundColor="#453c55"
      />

      <View style={{ height: 150, backgroundColor: '#453c55' }}>
        <View style={{ flexDirection: 'row', marginTop: 20, paddingHorizontal: 20, justifyContent: 'space-between', alignItems: 'center' }} >

          <TextInput placeholder='iMac' placeholderTextColor={'black'}
            style={{ backgroundColor: 'white', width: '85%', borderRadius: 10, paddingHorizontal: 35, height: 40 }} />
          <Image style={{ tintColor: 'black', height: 20, width: 20, position: 'absolute', bottom: 10, left: 30 }} source={ImagePath.Search} />

          <TouchableOpacity>
            <Image style={{ tintColor: 'white', height: 30, width: 30 }} source={ImagePath.Cart} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop: -80 }}>
        <SliderBox
          autoplay
          circleLoop
          images={images}
          sliderBoxHeight={170}
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
          ImageComponentStyle={{ borderRadius: 8, width: '90%', marginTop: 5, }}
          imageLoadingColor="#2196F3"
        />
      </View>

      <View style={{ paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold' }}>
          Hot deals
        </Text>

        <TouchableOpacity>
          <Text style={{ fontSize: 14, color: 'red', fontWeight: 'bold' }}>
            View all
          </Text>
        </TouchableOpacity>

      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <FlatList
          horizontal
          data={DATA}
          renderItem={renderItem}
        />
      </View>


      <View style={{ paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold' }}>
          Weekly top
        </Text>

        <TouchableOpacity>
          <Text style={{ fontSize: 14, color: 'red', fontWeight: 'bold' }}>
            View all
          </Text>
        </TouchableOpacity>

      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <FlatList
          horizontal
          data={DATA}
          renderItem={renderItem}
        />
      </View>


    </View>
  );
}

export default HomeScreen;