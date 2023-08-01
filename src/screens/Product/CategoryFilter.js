import { FlatList, StyleSheet, TextInput, View, Button, ScrollView,TouchableOpacity,Text } from "react-native";
import React from 'react';

const CategoryFilter = (props) => {

    return (
        <ScrollView
            bounces={true}
            horizontal={true}
            style={{ backgroundColor: "#f2f2f2" }}
        >
            <View style={{ margin: 0, padding: 0, borderRadius: 0 ,flex:1,flexDirection:'row'}}>
                <TouchableOpacity
                    key={1}
                    onPress={() => {
                        props.categoryFilter('all'), props.setActive(-1)
                    }}
                >
                    <View
                        style={[styles.center, {margin: 5},styles.item,
                            props.active == -1 ? styles.active : styles.inactive
                        ]}
                    >
                        <Text style={{ color: 'white' }}>All</Text>
                    </View>
                </TouchableOpacity>
                {props.categories.map((item) => (
                      <TouchableOpacity
                      key={item._id.$oid}
                      onPress={() => {
                          props.categoryFilter(item._id), 
                          props.setActive(props.categories.indexOf(item))
                      }}
                  >
                      <View
                          style={[styles.center, 
                            {margin: 5},
                            styles.item,
                            props.active == props.categories.indexOf(item) ? styles.active : styles.inactive
                          ]}
                      >
                          <Text style={{ color: 'white' }}>{item.name}</Text>
                      </View>
                  </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    active: {
        backgroundColor: '#03bafc'
    },
    inactive: {
        backgroundColor: '#a0e1eb'
    },
    item:{
        padding:10,
        borderWidth:2
    }
})

export default CategoryFilter;