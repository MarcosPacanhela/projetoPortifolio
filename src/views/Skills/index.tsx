import { View, Text, Image, Pressable, Linking, ScrollView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { styles } from "./styles";
import MySelfie from "../../assets/images/eu.png"
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Skills() {
    const fourStarts = 4;
    const threeStars = 3;
    const twoStars = 2;

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image
                    source={MySelfie}
                    style={styles.image}
                />
                <Text style={styles.name}>Marcos Pacanhela</Text>
                <View style={styles.containerText}>
                    <Text style={styles.title}>Minhas Habilidades</Text>
                    <View style={styles.textStar}>
                        <Text style={styles.textHab}>HTML</Text>
                        {[...Array(fourStarts)].map((_, index) => (
                            <MaterialCommunityIcons
                                key={index}
                                name='star'
                                size={30}
                            />
                        ))}
                        <MaterialCommunityIcons
                            name='star-outline'
                            size={30}
                        />
                    </View>
                    <View style={styles.textStar}>
                        <Text style={styles.textHab}>CSS</Text>
                        {[...Array(threeStars)].map((_, index) => (
                            <MaterialCommunityIcons
                                key={index}
                                name='star'
                                size={30}
                            />
                        ))}
                        <MaterialCommunityIcons
                            name='star-half-full'
                            size={30}
                        />
                        <MaterialCommunityIcons
                            name='star-outline'
                            size={30}
                        />
                    </View>
                    <View style={styles.textStar}>
                        <Text style={styles.textHab}>JavaScript</Text>
                        {[...Array(fourStarts)].map((_, index) => (
                            <MaterialCommunityIcons
                                key={index}
                                name='star'
                                size={30}
                            />
                        ))}
                        <MaterialCommunityIcons
                            name='star-outline'
                            size={30}
                        />
                    </View>
                    <View style={styles.textStar}>
                        <Text style={styles.textHab}>TypeScript</Text>
                        {[...Array(threeStars)].map((_, index) => (
                            <MaterialCommunityIcons
                                key={index}
                                name='star'
                                size={30}
                            />
                        ))}
                        {[...Array(twoStars)].map((_, index) => (
                            <MaterialCommunityIcons
                                key={index}
                                name='star-outline'
                                size={30}
                            />
                        ))}
                    </View>
                    <View style={styles.textStar}>
                        <Text style={styles.textHab}>React Dom</Text>
                        {[...Array(fourStarts)].map((_, index) => (
                            <MaterialCommunityIcons
                                key={index}
                                name='star'
                                size={30}
                            />
                        ))}
                        <MaterialCommunityIcons
                            name='star-outline'
                            size={30}
                        />
                    </View>
                    <View style={styles.textStar}>
                        <Text style={styles.textHab}>React Native</Text>
                        {[...Array(threeStars)].map((_, index) => (
                            <MaterialCommunityIcons
                                key={index}
                                name='star'
                                size={30}
                            />
                        ))}
                        <MaterialCommunityIcons
                            name='star-half-full'
                            size={30}
                        />
                        <MaterialCommunityIcons
                            name='star-outline'
                            size={30}
                        />
                    </View>
                    <View style={styles.textStar}>
                        <Text style={styles.textHab}>Java</Text>
                        <MaterialCommunityIcons
                            name='star'
                            size={30}
                        />
                        <MaterialCommunityIcons
                            name='star-half-full'
                            size={30}
                        />
                        {[...Array(threeStars)].map((_, index) => (
                            <MaterialCommunityIcons
                                key={index}
                                name='star-outline'
                                size={30}
                            />
                        ))}
                    </View>
                </View>
                <StatusBar style='auto' />
            </ScrollView >
        </View >
    )
}