import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

const userInterface = () => {
    return(
        <Tabs>
            <Tabs.Screen
                name="Progress"
                options={{
                    tabBarLabel: 'Progress',
                    headerTitle: 'Progress',
                    tabBarIcon: ({color, size}) => <FontAwesome5 name="chart-line" size={size} color={color}/>
                }}
            />
            <Tabs.Screen
                name="Workouts"
                options={{
                    tabBarLabel: 'Workouts',
                    headerTitle: 'Workouts',
                    tabBarIcon: ({color, size}) => <FontAwesome5 name="dumbbell" size={size} color={color}/>
                }}
            />
            <Tabs.Screen
                name="list"
                options={{
                    tabBarLabel: 'Settings',
                    headerTitle: 'Settings',
                    headerShown: false,
                    tabBarIcon: ({color, size}) => <FontAwesome5 name="user-cog" size={size} color={color}/>
                }}
            />
        </Tabs>
    )
}

export default userInterface;