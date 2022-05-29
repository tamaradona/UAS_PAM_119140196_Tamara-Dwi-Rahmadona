import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CardProduct = props => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: props.data.image_link}}
        style={{width: 100, height: 100}}
      />
      <View style={{alignItems: 'baseline', marginLeft: 15, flex: 1}}>
        <Text style={styles.name} numberOfLines={1}>
          {props.data.name}
        </Text>
        <Text style={styles.brand}>{props.data.brand}</Text>
        <Text style={styles.price}>
          {props.data.price_sign} {props.data.price}
        </Text>
      </View>
    </View>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    backgroundColor: '#fff',
  },
  price: {
    backgroundColor: 'orange',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 20,
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
