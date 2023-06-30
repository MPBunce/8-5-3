import { PanGestureHandler, State, Swipeable } from 'react-native-gesture-handler';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { useRef, useState } from 'react';


const ItemBox = (props: any) => {
  const swipeableRef: any = useRef(null);
  const deleteButtonWidth = 80; // Width of the delete button in pixels

  const closeSwipeable = () => {
    swipeableRef.current?.close();
  };

  const renderRightActions = (progress: any, dragX: any) => {
    const trans = dragX.interpolate({
      inputRange: [-deleteButtonWidth, 0],
      outputRange: [-deleteButtonWidth + deleteButtonWidth / 2 + 40, 0],
      extrapolate: 'clamp',
    });
  
    return (
      <TouchableOpacity
        onPress={() => {
          // Perform delete action here
          closeSwipeable();
          console.log("delete")
        }}
        style={{
          width: deleteButtonWidth,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Animated.View
          style={{
            transform: [{ translateX: trans }],
          }}
        >
          <Text
            style={{
              color: 'white',
            }}
          >
            Delete
          </Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };
  
  
  

  return (
    <Swipeable
      ref={swipeableRef}
      friction={2}
      rightThreshold={40}
      renderRightActions={renderRightActions}
    >
      <View
        style={{
          height: 50,
          justifyContent: 'center',
          paddingHorizontal: 16,
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
        }}
      >
        <Text>{props.testItem}</Text>
      </View>
    </Swipeable>
  );
};


export default ItemBox;