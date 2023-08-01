import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// Screens
import Payment from '../src/Screens/Cart/Checkout/Payment'
import Confirm from '../src/Screens/Cart/Checkout/Confirm';
import Checkout from '../src/Screens/Cart/Checkout/Checkout';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Shipping" component={Checkout} />
            <Tab.Screen name="Payment" component={Payment} />
            <Tab.Screen name="Confirm" component={Confirm} />
        </Tab.Navigator>
    );
}

export default function CheckoutNavigator() {
    return <MyTabs />
}