import { createStackNavigator } from "@react-navigation/stack";
import ProductContainer from "../src/screens/Product/ProductContainer";
import SingleProduct from "../src/screens/Product/SingleProduct";


const Stack=createStackNavigator();
function MyStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Home"
            component={ProductContainer}
            options={{
                headerShown:false,
            }}/>
             <Stack.Screen 
            name="Product Detail"
            component={SingleProduct}
            options={{
                headerShown:true,
            }}/>
        </Stack.Navigator>
    )
}
export default  function HomeNavigator(){
   return <MyStack/>;
}