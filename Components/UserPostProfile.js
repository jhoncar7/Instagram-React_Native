import react from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import FakeImagesData from "../FakePictureData";

export default function UserPostProfile(props) {

    const Story = (props) => {

        return (
            <TouchableOpacity>
                <Image source={{ uri: props.image }} style={styles.storyImage} />
            </TouchableOpacity>
        );
    }
    console.log(FakeImagesData[0].url);
    console.log(FakeImagesData[0].name);

    return (
        <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
            <FlatList
                data={FakeImagesData}
                renderItem={({ item }) => <Story image={item.url} name={item.name} />}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    storyImage: {
        width: 120,
        height: 120,
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