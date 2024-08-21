import { View, Text, Image, Pressable, Linking } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { styles } from "./styles";
import MySelfie from "../../assets/images/eu.png"
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Home() {

    const handleOpenLinkedIn = () => {
        const url = 'https://www.linkedin.com/in/marcos-pacanhela-50840626b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app';
        Linking.openURL(url);
    };
    const handleOpenGitHub = () => {
        const url = 'https://github.com/MarcosPacanhela';
        Linking.openURL(url);
    };
    const handleOpenEmail = () => {
        const url = 'mailto:marcosalexandrepacanhela71@gmail.com';
        Linking.openURL(url);
    };

    return (
        <View style={styles.container}>
            <Image
                source={MySelfie}
                style={styles.image}
            />
            <Text style={styles.name}>Marcos Pacanhela</Text>
            <Pressable style={styles.button} onPress={handleOpenLinkedIn}>
                <MaterialCommunityIcons
                    name='linkedin'
                    size={30}
                    style={styles.icon}
                />
                <Text style={styles.text_button}>LinkedIn</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleOpenGitHub}>
                <MaterialCommunityIcons
                    name='github'
                    size={30}
                    style={styles.icon}
                />
                <Text style={styles.text_button}>GitHub</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleOpenEmail}>
                <MaterialCommunityIcons
                    name='gmail'
                    size={30}
                    style={styles.icon}
                />
                <Text style={styles.text_button}>E-mail</Text>
            </Pressable>
            <StatusBar style='auto' />
        </View>
    )
}