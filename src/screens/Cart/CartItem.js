import { View, Image, Text } from "native-base";
import React, { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";

const CartItem = (props) => {
  const data = props.item.item.product;
  return (
    <View style={styles.listItem} key={Math.random()} avatar>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: data.image ?
            data.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
        }}
      />
      <View style={styles.body}>
        <Text>{data.name}</Text>
        <Text>$ {data.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  image: {
    width: Dimensions.get('window').width *0.1,
  },
  body: {
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row'
  }
})

export default CartItem;