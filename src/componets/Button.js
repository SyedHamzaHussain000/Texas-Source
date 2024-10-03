import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';

export const Button = ({color, title, onPress, loading, style ,fontSize}) => {
  console.log("🚀 ~ Button ~ fontSize:", fontSize)
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 60,
          backgroundColor: color,
          borderRadius: 10,
        },
        style,
      ]}>
      {loading ? (
        <ActivityIndicator size={'large'} color={'white'} />
      ) : (
        <Text style={{color: 'white', fontSize: fontSize ?fontSize : 16 ,fontWeight:'600',}}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
