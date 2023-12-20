import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
        inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png',
    },
    {
      name: 'Reels',
      active: 'https://img.icons8.com/ios-filled/500/ffffff/instagram-reel.png',
      inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel.png',
  },
    {
        name: 'Notification',
        active: 'https://img.icons8.com/fluency-systems-filled/60/ffffff/like--v1.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
    },
    {
        name: 'Profile',
        active: 'https://img.mensxp.com/media/content/2019/Jan/lessons-to-learn-from-celebrity-profile-pictures-to-score-more-right-swipes-on-tinder-1400x653-1547028070.jpg?w=1375&h=698&cc=1.png',
        inactive: 'https://img.mensxp.com/media/content/2019/Jan/lessons-to-learn-from-celebrity-profile-pictures-to-score-more-right-swipes-on-tinder-1400x653-1547028070.jpg?w=1375&h=698&cc=1.png',
    },
]
const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home');
  
    const Icon = ({ icon }) => (
      <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
        <Image
          source={{
            uri: activeTab === icon.name ? icon.active : icon.inactive,
          }}
          style={[
            styles.icon,
            icon.name === 'Profile' ? styles.profilePic(activeTab) : null,
          ]}
        />
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.wrapper}>
        <Divider width={1} orientation="vertical" />
        <View style={styles.container}>
          {icons.map((icon, index) => (
            <Icon key={index} icon={icon} />
          ))}
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    wrapper: {
      position: 'relative',
      width: '100%',
      paddingBottom: 3,
      zIndex: 999,
      backgroundColor: '#000',
    //   marginTop: 900,
    //   bottom: 0,
    },
  
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: 50,
      paddingTop: 10,
    },
  
    icon: {
      width: 30,
      height: 30,
    },
  
    profilePic: (activeTab) => ({
      borderRadius: 50,
      borderWidth: activeTab === 'Profile' ? 2 : 0,
      borderColor: '#fff',
    }),
  });
  
  export default BottomTabs;
  