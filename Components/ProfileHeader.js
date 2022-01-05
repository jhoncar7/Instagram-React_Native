import react from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

export default function ProfileHeader() {

    const user = useSelector(state => state.user);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{user.username}</Text>
            <View style={styles.iconRigth}>
                <TouchableOpacity>
                    <MaterialIcons name="add-box" size={30} color="#000" style={styles.iconRigth} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="menu" size={30} color="black" />
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    iconRigth: {
        marginRight: 10,
        flexDirection: "row",
    },
    iconAdBox: {
        marginRight: 10,
    }
});