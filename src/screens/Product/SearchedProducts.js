import React from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native'
import { Pressable } from 'react-native';

var { width } = Dimensions.get("window")

const SearchedProduct = (props) => {
    const { productsFiltered } = props;
    return (
        <View style={{ width: width }}>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item) => (
                    <Pressable
                        onPress={() => {
                            // props.navigation.navigate("Product Detail", {item: item})
                        }}
                        key={item._id.$oid}
                        style={styles.item}
                    >
                        <View style={styles.horizontal}>
                            <Image
                                style={styles.image}
                                resizeMode="contain"
                                source={{
                                    uri: item.image ?
                                        item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                                }}
                            />
                            <View>
                                <Text>{item.name}</Text>
                                <Text note>{item.description}</Text>
                            </View>
                        </View>
                    </Pressable>
                ))
            ) : (
                <View style={styles.center}>
                    <Text style={{ alignSelf: 'center' }}>
                        No products match the selected criteria
                    </Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        width: width,
        height: 150,
        backgroundColor: '#b4adad',
        paddingLeft: 40,
        paddingTop: 50,
        margin: 10,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        top: -45,
        left:-30
    },
    horizontal:{
        flex:1,
        flexDirection:'row'
    }
})

export default SearchedProduct;