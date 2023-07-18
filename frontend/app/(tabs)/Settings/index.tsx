import React from 'react';
import { View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { Link, useNavigation } from 'expo-router';
import { useLogoutMutation } from '../../../slices/usersApiSlice';
import { logout } from '../../../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const index = () => {
  const { userInfo } = useSelector((state: any) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const submitLogout = async () => {
    try {
      const garbage: any = '';
      await logoutApiCall(garbage).unwrap();
      dispatch(logout(userInfo));
    } catch (error) {
      console.log(error);
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={submitLogout} style={{paddingRight:'20px'}}>
          <Text>Logout</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>

      <Link href="Settings/About" style={styles.linkContainer}>
        <Text style={styles.linkText}>About</Text>
        <View style={styles.separator} />
      </Link>
      <Link href="Settings/one" style={styles.linkContainer}>
        <Text style={styles.linkText}>Contact</Text>
        <View style={styles.separator} />
      </Link>
      <Link href="Settings/two" style={styles.linkContainer}>
        <Text style={styles.linkText}>Download Program</Text>
        <View style={styles.separator} />
      </Link>
      <Link href="Settings/three" style={styles.linkContainer}>
        <Text style={styles.linkText}>Support Application</Text>
        <View style={styles.separator} />
      </Link>
      <Link href="Settings/UpdateProfile" style={styles.linkContainer}>
        <Text style={styles.linkText}>Update Profile</Text>
        <View style={styles.separator} />
      </Link>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: 'center'
  },
  linkText: {
    fontSize: 16,
    lineHeight: 21,
    color: 'black',
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'black',
    marginLeft: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});


export default index;
