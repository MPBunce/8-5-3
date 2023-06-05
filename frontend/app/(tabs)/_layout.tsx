import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

export default () => {
    return(
        <Tabs>
            <Tabs.Screen
                name="Home"
                options={{
                    tabBarLabel: 'List',
                    headerTitle: 'Home Screen',
                    tabBarIcon: ({color, size}) => <FontAwesome5 name="list" size={size} color={color}/>
                }}
            />
            <Tabs.Screen
                name="Progress"
                options={{
                    tabBarLabel: 'Progress',
                    headerTitle: 'Progress',
                    tabBarIcon: ({color, size}) => <FontAwesome5 name="user" size={size} color={color}/>
                }}
            />
            <Tabs.Screen
                name="list"
                options={{
                    tabBarLabel: 'Settings',
                    headerTitle: 'Progress',
                    headerShown: false,
                    tabBarIcon: ({color, size}) => <FontAwesome5 name="user-cog" size={size} color={color}/>
                }}
            />
        </Tabs>
    )
}