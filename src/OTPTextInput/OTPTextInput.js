import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {color} from '../utils/color';

const OTPTextInput = () => {
  const [otp, setOtp] = useState('');
  const [otp1, setOtp1] = useState('');
  const onNumberInput = text => {
    setOtp(text);
  };
  return (
    <View style={styles.container}>
      <OTPInputView
        style={styles.textInputContainer}
        pinCount={6}
        code={otp}
        autoFocusOnLoad
        onCodeChanged={onNumberInput}
        codeInputFieldStyle={styles.roundedTextInput}
        codeInputHighlightStyle={styles.roundedTextInput}
        onCodeFilled={code => {}}
      />
      <OTPInputView
        style={{width: '80%', height: 200}}
        pinCount={6}
        code={otp1}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeChanged={(txt)=>setOtp1(txt)}
        onCodeFilled={code => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
    </View>
  );
};

export default OTPTextInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.secondry,
    padding: 20,
  },
  textInputContainer: {
    width: '100%',
    height: 20,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: color.primary,
    color: color.primary,
    fontSize: 14,
    height: 40,
    width: 40,
  },
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: color.black,
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor:color.primary,
    color: color.primary,
  },

  underlineStyleHighLighted: {
    borderColor: color.black,
  },
});
