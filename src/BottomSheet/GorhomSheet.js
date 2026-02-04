import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetView,
  useBottomSheetSpringConfigs,
} from '@gorhom/bottom-sheet';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const data = [
  {
    _id: '00b84b9a-2fe6-473b-b20d-67f52e3317f5',
    name: 'Breaking Bread Ministries',
    address: {
      address: '1111 N Wells St., Chicago IL. 60610, Ste 500',
    },
    images: [],
    phoneNumber: '+13128050408',
    website: 'www.chicagosfoodbank.org/locations/breaking-bread-ministries/',
    services: [{ _key: '1', name: 'Hot meals' }],
  },
  {
    _id: '0f897a58-dc0a-4b5a-90f0-2ef80956493e',
    name: "Shepherd's HOPE",
    address: {
      address: '838 W Marquette Rd, Chicago, IL 60621',
    },
    images: [
      {
        url: 'https://cdn.sanity.io/images/t88anata/production/d97daf79dadfbba1028a3160e699347189d680dc-768x432.webp',
      },
    ],
    phoneNumber: '+17737563535',
    website: 'shepherdshopechicago.org/programs/food-pantry',
    services: [
      { _key: '1', name: 'Food Pantry' },
      { _key: '2', name: 'Hot meals' },
    ],
  },
  {
    _id: '0ff6e3ae-63d4-4e7f-a76a-7d5838aa5c06',
    name: 'Care for Real - Edgewater',
    address: {
      address: '5840 N Broadway, Chicago, IL 60660',
    },
    images: [
      {
        url: 'https://cdn.sanity.io/images/t88anata/production/14fc0ac58a56428e40420d5395c67cae47875c53-715x750.png',
      },
    ],
    phoneNumber: '+17737696182',
    website: 'careforreal.org/get-help/food-pantry-information/',
    services: [
      { _key: '1', name: 'Food Pantry' },
      { _key: '2', name: 'Baby Care Items' },
      { _key: '3', name: 'Pet Food' },
    ],
  },
];

export default function GorhomSheet() {
  const [listIndex, setListIndex] = React.useState(0);

  const bottomSheetRef = React.useRef(null);
  const snapPoints = React.useMemo(() => [225, '94%'], []);

  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
  });

  const renderItem = React.useCallback(({ item }) => {
    const imageUrl = item?.images?.[0]?.url;

    return (
      <View style={styles.card}>
        {/* Image */}
        {imageUrl && (
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        )}

        {/* Content */}
        <View style={styles.cardBody}>
          <Text style={styles.title}>{item.name}</Text>

          <Text style={styles.address}>{item.address?.address}</Text>

          {/* Services */}
          <View style={styles.servicesRow}>
            {item.services?.map(service => (
              <View key={service._key} style={styles.serviceChip}>
                <Text style={styles.serviceText}>{service.name}</Text>
              </View>
            ))}
          </View>

          {/* Contact */}
          {item.phoneNumber && (
            <Text style={styles.contact}>📞 {item.phoneNumber}</Text>
          )}

          {item.website && <Text style={styles.website}>{item.website}</Text>}
        </View>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BottomSheet</Text>
      <GestureHandlerRootView style={styles.gestureView}>
        <BottomSheet
          ref={bottomSheetRef}
          index={listIndex}
          snapPoints={snapPoints}
          animationConfigs={animationConfigs}
          backgroundStyle={[styles.topShadow, { borderRadius: 20 }]}
          handleIndicatorStyle={styles.handleIndicator}
          style={{ position: 'relative' }}
          onChange={index => setListIndex(index)}
        >
          <BottomSheetView style={{ position: 'relative', marginTop: -10 }}>
            <View style={styles.wrapper}>
              <Text>List header</Text>
            </View>
          </BottomSheetView>

          <BottomSheetFlatList
            data={data}
            keyExtractor={(i, index) => index}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainer}
          />
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  gestureView: {
    flex: 0.8,
  },
  contentContainer: {
    rowGap: 20,
    paddingTop: 20,
    paddingBottom: 36,
    marginLeft: 4,
  },
  button: {
    position: 'absolute',
    bottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#2C3241',
    padding: 12,
    borderRadius: 100,
    alignSelf: 'center',
  },
  handleIndicator: {
    backgroundColor: '#EFEEF2',
    width: 74,
    height: 6,
  },
  wrapper: {
    gap: 12,
    marginVertical: 12,
    marginHorizontal: 20,
    position: 'relative',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    overflow: 'hidden',
    marginHorizontal: 12,
    elevation: 3,
  },

  imageWrapper: {
    height: 160,
    width: '100%',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  cardBody: {
    padding: 12,
    gap: 6,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },

  address: {
    fontSize: 13,
    color: '#666',
  },

  hours: {
    fontSize: 13,
    color: '#333',
  },

  servicesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 4,
  },

  serviceChip: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  serviceText: {
    fontSize: 12,
    color: '#3F51B5',
  },

  contact: {
    fontSize: 13,
    color: '#222',
    marginTop: 4,
  },

  website: {
    fontSize: 13,
    color: '#2F6BFF',
  },
  topShadow: {
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: -1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  bottomSheetTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});
