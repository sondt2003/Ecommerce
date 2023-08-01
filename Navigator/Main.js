import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/FontAwesome";
import HomeNavigator from "./HomeNavigation";
import { View } from "native-base";
import CartNavigator from "./CartNavigator";
import CartIcon from "../src/Shared/CartIcon";
const Tab = createBottomTabNavigator();
export default Main = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
        >
            <Tab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View>
                            <Icon name="shopping-cart" color={color} size={30} />
                            <CartIcon />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}