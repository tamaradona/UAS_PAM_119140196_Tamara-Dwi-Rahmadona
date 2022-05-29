import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const ProductDetail = ({navigation, route}) => {
  const {item} = route.params;
  React.useEffect(() => {
    navigation.setOptions({title: item.name});
  }, []);

  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: '#fff',

        flex: 1,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{uri: item.image_link}}
          style={{height: 300, width: '100%', marginTop: 20}}
        />
        <View style={{alignItems: 'baseline', marginTop: 20}}>
          <Text style={styles.price}>
            {item.price_sign} {item.price}
          </Text>
          <Text style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.brand}>{item.brand}</Text>
        </View>
        <View>
          <Text style={{marginVertical: 10}}>Warna</Text>
          <FlatList
            data={item.product_colors}
            ItemSeparatorComponent={() => <View style={{width: 10}} />}
            horizontal={true}
            renderItem={({item}) => (
              <View
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: item.hex_value,
                  borderRadius: 25,
                }}
              />
            )}
          />
        </View>
        <Text
          style={{
            marginTop: 10,
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 5,
          }}>
          Deskripsi
        </Text>
        <Text style={{marginBottom: 6}}>{item.description}</Text>
      </ScrollView>
      <View style={{marginHorizontal: -20}}>
        <Button title="Beli" />
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  price: {
    backgroundColor: 'orange',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 20,
    padding: 6,
    borderRadius: 5,
  },
  name: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: 15,
    color: '#bfb5b4',
  },
});
