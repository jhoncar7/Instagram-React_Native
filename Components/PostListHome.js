import react from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions, SafeAreaView } from "react-native";
import FakePostData from "../FakePostData";
import { Feather, AntDesign, Fontisto } from "@expo/vector-icons";

export default function PostListHome(props) {

    const Story = (props) => {
        console.log('props', props);
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={{ uri: props.image }} style={{ width: 30, height: 30, borderRadius: 30 }} />
                        <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>{props.username}</Text>
                    </View>
                    <Feather name="more-horizontal" size={24} color="black" />
                </View>

                <View>
                    <Image source={{ uri: props.image }} style={styles.storyImage} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AntDesign name="hearto" size={24} color="black" style={{ marginLeft: 10 }} />
                        <Feather name="message-circle" size={24} color="black" style={{ marginLeft: 10 }} />
                        <Feather name="send" size={24} color="black" style={{ marginLeft: 10 }} />
                    </View>
                    <View>
                        <Fontisto name="favorite" size={28} color="black" style={{ marginRight: 10 }} />
                    </View>
                </View>
                <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>{props.likes} Likes</Text>
                <Text style={{ marginLeft: 10, marginBottom: 15 }}>{props.title}</Text>
            </View>
        );
    }

    return (
        <SafeAreaView >
            <FlatList
                data={FakePostData}
                renderItem={({ item }) => <Story image={item.image} title={item.title} likes={item.likes} username={item.user.username} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView >
    )
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    storyImage: {
        width: width,
        height: 400,
    },
    storyName: {
        textAlign: 'center',
    },
    storyTouchable: {
        width: 60,
        height: 76,
        marginLeft: 15,
        marginVertical: 15,
    },
    ImageCircle: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#00000050',
    }
});