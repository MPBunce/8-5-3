import {Tabs} from "expo-router";

export default () => {
    return(
        <Tabs>
            <Tabs.Screen name="Login"/>
            <Tabs.Screen name="Register"/> 
            <Tabs.Screen name="About"/>
            <Tabs.Screen name="Settings"/> 
        </Tabs>
    )
}