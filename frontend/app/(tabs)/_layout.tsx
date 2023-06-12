import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from 'react-redux'
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const userInterface = () => {

    const navigation = useNavigation();
    const {userInfo} = useSelector((state: any) => state.auth);
    const myRoute: any = [{ name: 'index' }];
  
    useFocusEffect(() => {
      if (userInfo === null) {
        navigation.reset({
          index: 0,
          routes:  myRoute,
        });
      }
    });

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
                name="Settings"
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