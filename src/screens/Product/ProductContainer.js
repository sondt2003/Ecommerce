import { FlatList, StyleSheet, TextInput, View, Button, Text, ScrollView } from "react-native";
import data from "../../../assets/data/product.json";
import dataCtg from "../../../assets/data/category.json";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import SearchedProduct from "./SearchedProducts";
import Banner from "../../Shared/Banner";
import CategoryFilter from "./CategoryFilter";

export default function ProductContainer(props) {
    const [Product, setProduct] = useState([]);
    const [categories, setCategories] = useState([]);
    const [ProductsFilter, setProductsFilter] = useState([]);
    const [focus, setFocus] = useState();
    const [productsCtg, setProductsCtg] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState([]);
    const [loading, setLoading] = useState(true)
    const [Search, setSearch] = useState();
    useEffect(() => {
        setProduct(data);
        setProductsFilter(data);
        setFocus(false);
        setCategories(dataCtg);
        return () => {
            setProduct([]);
            setCategories([]);
        }
    }, [])

    // Product Methods
    const searchProduct = (text) => {
        console.log("Search:" + text);
        if (text == "") {
            setProductsFilter(data);
            return;
        }
        setProductsFilter(
            Product.filter((i) => i.name === text)
        );
    };
    const openList = () => {
        setFocus(true);
    };

    const onBlur = () => {
        setFocus(false);
    };
    const changeCtg = (ctg) => {
        {
            ctg === "all"
                ? [setProductsCtg(initialState), setActive(true)]
                : [
                    setProductsCtg(
                        Product.filter((i) => i.category._id === ctg),
                        setActive(true)
                    ),
                ];
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ marginTop: 40 }}></View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => searchProduct(text)}
                        value={Search}
                        placeholder="Search"
                        onFocus={() => openList()}
                        onBlur={() => onBlur()}
                    />
                    <Button title="Close" style={styles.close} onPress={() => onBlur()} />
                </View>
                <View style={{ marginTop: 20 }}></View>
                <View>


                    {focus == true ? (<ScrollView><SearchedProduct productsFiltered={ProductsFilter} /></ScrollView>) :
                        (<View>
                            <Banner></Banner>
                            <CategoryFilter
                                categories={categories}
                                categoryFilter={changeCtg}
                                productsCtg={productsCtg}
                                active={active}
                                setActive={setActive}
                            />
                            {Product.length > 0 ?
                                <FlatList
                                    horizontal={false}
                                    data={Product}
                                    numColumns={2}
                                    renderItem={({ item }) => <ProductList navigation={props.navigation}
                                        key={item.name} item={item} />}
                                    keyExtractor={item => item.name}
                                /> : <Text>Not Found Product</Text>}

                        </View>)}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    input: {
        width: '75%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    close: {
        width: '10%',
        height: 30,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});
