import axios from "axios";
import react, { useEffect } from "react";
import { Text, View, Image, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import StoryComponents from "../Components/StoryComponents";
import PostListHome from "../Components/PostListHome";
import { YellowBox } from 'react-native'

export default function HomeScreen() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const res = await axios.get('https://randomuser.me/api/');
    const newUser = {
      username: res.data.results[0].login.username,
      profilePicture: res.data.results[0].picture.large
    }
    console.log(newUser);
    dispatch(setUser(newUser));
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StoryComponents />
        <PostListHome />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: 'column',
  }
});