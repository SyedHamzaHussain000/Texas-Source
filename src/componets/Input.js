import { useState } from 'react';
import {TextInput} from 'react-native';

export const Input = ({placeHolder, onChangeText, value, style}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={'#949494'}
      placeholder={placeHolder}
      style={[
        {
          width: '100%',
       
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#FFFFFF',
          padding: 20,
          color: 'white',
        },
        style,
      ]}
    />
  );
};
