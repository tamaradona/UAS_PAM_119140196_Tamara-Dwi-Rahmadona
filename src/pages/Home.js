import {
  ActivityIndicator,
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addProductList} from '../actions/product';
import CardProduct from '../components/CardProduct';
const url =
  'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick&price_greater_than=3';
const Home = ({navigation}) => {
  const product = useSelector(state => state.products.data);
  const dispatch = useDispatch();
  React.useEffect(() => {
    let fetchData = getData();
    return () => fetchData;
  }, []);
  const getData = async () => {
    let response = await fetch(url);
    if (response.ok) {
      let json = await response.json();
      let data = json.slice(0, 20);
      dispatch(addProductList(data));
    } else {
      Alert.alert('Server Error');
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#f4f5f9'}}>
      <FlatList
        style={{
          backgroundColor: '#f4f5f9',
          paddingTop: 10,
          paddingHorizontal: 20,
        }}
        contentContainerStyle={{paddingBottom: 20}}
        data={product}
        keyExtractor={(i, key) => key.toString()}
        ListEmptyComponent={() => (
          <ActivityIndicator size={'large'} color="red" />
        )}
        renderItem={({item}) => (
          <Pressable
            onPress={() =>
              navigation.navigate('ProductDetail', {
                item,
              })
            }>
            <CardProduct data={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
