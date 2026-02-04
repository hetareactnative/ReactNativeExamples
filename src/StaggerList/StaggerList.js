import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { color } from '../utils/color';
const StaggerList = () => {
  const options = [
    {
      label: 'Hedsldlsk',
    },
    {
      label: 'He',
    },
    {
      label: 'Hegffg',
    },
    {
      label: 'He',
    },
    {
      label: 'Hegfgf',
    },
    {
      label: 'Hedsldlsk',
    },
    {
      label: 'He',
    },
    {
      label: 'Hegffgdfdfdfmndmflddjgf',
    },
    {
      label: 'He',
    },
    {
      label: 'Hegfgf',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.staggerView}>
        {options?.map?.((item, index) => (
          <TouchableOpacity key={index} onPress={() => {}}>
            <View style={[styles.itemContainer]}>
              <Text style={[styles.itemTxt]}>{item?.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default StaggerList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.secondry,
  },
  staggerView: {
    flexDirection: 'row',
    flexWrap: 'wrap', //to shift in next line
    marginVertical: 8,
  },
  itemContainer: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: color.white,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    padding: 6,
    backgroundColor: color.primary,
  },
  itemTxt: {
    fontSize: 12,
    textAlign: 'center',
    color: color.white,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
