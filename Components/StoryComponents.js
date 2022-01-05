import react from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import FakeImagesData from "../FakePictureData";

export default function StoryComponents(props) {

    const Story = (props) => {
        console.log('props', props.image);
        return (
            <TouchableOpacity style={styles.storyTouchable}>
                <View style={styles.storyContainer}>
                    <View style={styles.ImageCircle}></View>
                    <Image source={{ uri: props.image }} style={styles.storyImage} />
                    <Text style={styles.storyName}>{props.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    console.log(FakeImagesData[0].url);
    console.log(FakeImagesData[0].name);

    return (
        <View>
            <FlatList
                data={FakeImagesData}
                renderItem={({ item }) => <Story image={item.url} name={item.name}/>}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    storyImage: {
        width: 52,
        height: 52,
        borderRadius: 26,
        position: 'absolute',
        top: 4,
        left: 4,
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