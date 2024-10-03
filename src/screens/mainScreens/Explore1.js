import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Images} from '../../assets/Images/Index';
import {Header} from '../../componets/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Explore1 = ({navigation}) => {
  const data = [
    {
      id: 1,
      pic: Images.image1,
      title: 'Company Name',
      text: 'It is a long established fact that a reader will be distracted.',
    },
    {
      id: 2,
      pic: Images.image1,
      title: 'Company Name',
      text: 'It is a long established fact that a reader will be distracted.',
    },
    {
      id: 3,
      pic: Images.image2,
      title: 'Company Name',
      text: 'It is a long established fact that a reader will be distracted.',
    },
    {
      id: 4,
      pic: Images.image3,
      title: 'Company Name',
      text: 'It is a long established fact that a reader will be distracted.',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate('explore2')}
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          alignSelf: 'center',
          width: '98%',
        }}>
        <View style={{borderRadius: 10}}>
          <Image
            source={item.pic}
            style={{
              width: '100%',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
        </View>
        <View style={{padding: 10}}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <View style={{width: '88%'}}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
                {item.title}
              </Text>
              <Text style={{color: 'black'}}>{item.text}</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#29CF6E',
                borderRadius: 15,
                padding: 2,
                right: 1,
              }}>
              <MaterialCommunityIcons
                name="greater-than"
                color={'white'}
                size={25}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ImageBackground style={{flex: 1}} source={Images.background}>
      <ImageBackground style={{flex: 1}} source={Images.layer2}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20, flexGrow: 1}}>
          <Header />
          <View style={{paddingHorizontal: 25}}>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 30,
                  marginTop: 20,
                  color: 'white',
                  textAlign: 'center',
                }}>
                <Text style={{fontWeight: 'bold'}}>Proceed</Text> With The{' '}
                <Text>
                  {'\n'}
                  <Text style={{fontWeight: 'bold'}}>Company</Text> you{' '}
                  <Text style={{fontWeight: 'bold'}}>Want</Text>!
                </Text>
              </Text>

              <View style={{marginTop: 20}}>
                <FlatList
                  data={data}
                  contentContainerStyle={{gap: 20}}
                  renderItem={renderItem}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </ImageBackground>
  );
};

export default Explore1;
