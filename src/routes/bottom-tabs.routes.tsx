import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../views/Home";
import Skills from "../views/Skills";
import { MaterialCommunityIcons } from '@expo/vector-icons'
const { Navigator, Screen } = createBottomTabNavigator()

export function BottomTabsRoutes() {
    return (
        <Navigator>
            <Screen
                name="home"
                component={Home}
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarActiveTintColor: '#000',
                    tabBarIcon: ({ size }) => (
                        <MaterialCommunityIcons
                            name='home-outline'
                            size={size}
                        />
                    )
                }}
            />
            <Screen
                name="skill"
                component={Skills}
                options={{
                    title: 'Skills',
                    headerShown: false,

                    tabBarActiveTintColor: '#000',
                    tabBarIcon: ({ size }) => (
                        <MaterialCommunityIcons
                            name='medal-outline'
                            size={size}
                        />
                    )
                }}
            />
        </Navigator>
    )
}