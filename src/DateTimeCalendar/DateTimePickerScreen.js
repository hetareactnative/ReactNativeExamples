import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import Button from '../components/Button';
import { color } from '../utils/color';

const DateTimePickerScreen = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [birthDate, setBirthDate] = useState(null);

  const setDate = date => {
    setBirthDate(date);
    setShowDatePicker(false);
  };
  return (
    <View style={styles.container}>
      <Button title={'Press Me'} onPress={() => setShowDatePicker(true)} />
      {showDatePicker ? (
        <CalendarPicker
          todayBackgroundColor={color.primary}
          maxDate={new Date()}
          scrollable
          onDateChange={setDate}
          horizontal
          selectedDayColor={color.primary}
        />
      ) : null}
    </View>
  );
};

export default DateTimePickerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: color.secondry,
  },
});
