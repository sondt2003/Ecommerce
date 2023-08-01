import React from "react"
import { StyleSheet, Image, SafeAreaView, View } from "react-native"

const HeaderShared = () => {
    return(
        <SafeAreaView style={styles.header}>
            <Image
                source={require("../../assets/Logo.png")}
                resizeMode="contain"
                style={{ height: 50 }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        padding: 20,
    }
})

export default HeaderShared;