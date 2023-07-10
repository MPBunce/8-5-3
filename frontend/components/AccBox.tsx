import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, Animated, PanResponder } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { useDeleteWorkoutMutation } from '../slices/workouts/workoutApiSlice';
import { useNavigation } from '@react-navigation/native';

const ItemBox = (props: any) => {

  const navigation = useNavigation<any>();
  
  const [deleteWorkout, { isLoading }] = useDeleteWorkoutMutation();
  const swipeableRef: any = useRef(null);
  const deleteButtonWidth = 80; // Width of the delete button in pixels
  const [isDeleteButtonOpen, setIsDeleteButtonOpen] = useState(false);

  const closeSwipeable = () => {
    swipeableRef.current?.close();
    setIsDeleteButtonOpen(false);
  };

  const handleDeletePress = async () => {
    // Perform delete action here
    closeSwipeable();
    console.log('delete');
    console.log(props.id);

    try {
      console.log('test');
      await deleteWorkout(props.id).unwrap();
    } catch (error) {
      console.log('error');
      console.log(error);
    }
  };

  const handleItemPress = () => {
    if (!isDeleteButtonOpen) {
      navigation.navigate('EditWorkout', { workout: props.workout } as any);
    }
  };

  const handleSwipeableWillOpen = () => {
    setIsDeleteButtonOpen(true);
    console.log(isDeleteButtonOpen);
  };

  const handleSwipeableWillClose = () => {
    setIsDeleteButtonOpen(false);
    console.log('handle close:');
    console.log(isDeleteButtonOpen);

  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: () => {
        return !isDeleteButtonOpen;
      },
      onMoveShouldSetPanResponderCapture: (_, gestureState) => {
        return (
          Math.abs(gestureState.dx) > Math.abs(gestureState.dy) &&
          Math.abs(gestureState.dx) > 5 &&
          !isDeleteButtonOpen
        );
      },
    })
  ).current;

  const renderRightActions = (progress: any, dragX: any) => {
    const trans = dragX.interpolate({
      inputRange: [-deleteButtonWidth, 0],
      outputRange: [-deleteButtonWidth + deleteButtonWidth / 2 + 40, 0],
      extrapolate: 'clamp',
    });
  
    const animateTrans = Animated.timing(trans, {
      toValue: 0,
      duration: 300, // Adjust the duration as needed
      useNativeDriver: true,
    });
  
    // Trigger the animation when the swipeable is open
    if (progress > 0) {
      animateTrans.start();
    }
  
    return (
      <TouchableOpacity
        onPress={handleDeletePress}
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
      onSwipeableWillOpen={handleSwipeableWillOpen}
      onSwipeableWillClose={handleSwipeableWillClose}
    >
      <TouchableOpacity
        onPress={handleItemPress}
        style={{
          height: 50,
          justifyContent: 'center',
          paddingHorizontal: 16,
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
        }}
        {...panResponder.panHandlers}
      >
        <Text>
          {props.workout.compoundName} {props.workout.repRange}
        </Text>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default ItemBox;
