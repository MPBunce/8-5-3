import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";
import { LineChart} from "react-native-chart-kit"


const ChartBox = (props: any) => {
    const screenWidth = Dimensions.get("window").width;

    var title: any;
    var weightArray: any[] = []; 
    var dateArray: any[] = []; 

    props.workouts.forEach(( workoutArray: any) => {
        //console.log(workoutArray);
        title = workoutArray[0]
        weightArray.push(workoutArray[1]); 
        dateArray.push(workoutArray[2]); 
        //console.log(title, weightArray, dateArray)
    })

    const data = {
        labels: dateArray,
        datasets: [
          {
            data: weightArray,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional

          }
        ],
        legend: [title]
    };

    return (

        <View>
            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={{
                    backgroundColor: "#FFF",
                    backgroundGradientFrom: "#FFF",
                    backgroundGradientTo: "#FFF",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                      borderRadius: 2
                    },
                    propsForDots: {
                      r: "2",
                      strokeWidth: "2",
                      stroke: "#0f0f0f"
                    }
                }}
                
            />

            {/* <Pressable onPress={() => console.log(title, weightArray, dateArray)}>
                <Text>press</Text>
            </Pressable>      */}
        </View>        


    )
}

export default ChartBox