import react from "react";
import { Text, View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import UserPctureAndFollowes from "../Components/userPictureAndFollows";
import { useSelector } from "react-redux";
import UserInfo from "../Components/UserInfo";
import ButtonComponents from "../Components/ButtonComponent";
import StoryComponents from "../Components/StoryComponents";
import UserPostProfile from "../Components/UserPostProfile";

export default function Homescreen() {

  const user = useSelector(state => state.user);
  
  return (
    <ScrollView style={styles.container}>
      <UserPctureAndFollowes user={user}/>
      <UserInfo user={user}/>
      <ButtonComponents buttonName={'Edit Profile'}/>
      <StoryComponents/>
      <UserPostProfile/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: 'column',
  }
});