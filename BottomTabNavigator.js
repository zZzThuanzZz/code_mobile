// import React, { useEffect, useRef } from 'react';
// import { View, Image, StyleSheet, Animated, Easing, Dimensions } from 'react-native';

// const VerticalImages = () => {
//   const rotation = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     startRotation();
//   }, []);

//   const startRotation = () => {
//     Animated.loop(
//       Animated.timing(rotation, {
//         toValue: 1,
//         duration: 3000,
//         easing: Easing.linear,
//         useNativeDriver: true,
//       })
//     ).start();
//   };

//   const rotateStyle = {
//     transform: [
//       {
//         rotate: rotation.interpolate({
//           inputRange: [0, 1],
//           outputRange: ['0deg', '360deg'],
//         }),
//       },
//     ],
//   };

//   return (
//     <View style={styles.container}>
//       <Animated.Image source={require('./images/react-native-logo1.png')} style={[styles.image, rotateStyle]} />
//       <Image source={require('./images/react-native-logo2.png')} style={styles1.image1}  resizeMode="contain" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginVertical: 10,
//   },
// });

// const styles1 = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image1: {
//     width: Dimensions.get('window').width,
//     height: 125,
//     marginVertical: 10,
//   },
// });

// export default VerticalImages;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Tintuc from './screens/tin_tuc'; // Thay thế bằng tên màn hình thực tế
import Trochuyen from './screens/tro_chuyen'; // Thay thế bằng tên màn hình thực tế
import Danhba from './screens/danh_ba'; // Thay thế bằng tên màn hình thực tế
import Thuvien from './screens/thu_vien'; // Thay thế bằng tên màn hình thực tế

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tin tức" 
      component={Tintuc}
      // options={{
      //   tabBarLabel: 'News',
      //   tabBarIcon: ({ color, size }) => (
      //     <Icon name="news" color={color} size={size} />
      //   ),
      // }}
       />
      <Tab.Screen name="Trò chuyện" component={Trochuyen} />
      <Tab.Screen name="Danh bạ" component={Danhba} />
      <Tab.Screen name="Thư viện" component={Thuvien} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
