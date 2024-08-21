import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        padding: 40,
    },
    containerText: {
        flex: 1,
        padding: 20,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 18,
        gap: 15
    },
    image: {
        width: 180,
        height: 180,
        alignSelf: 'center'
    },
    name: {
        marginTop: 30,
        marginBottom: 30,
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    title: {
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 'bold',
    },
    textHab: {
        width: 100,
        fontSize: 15,
        paddingRight: 15
    },
    textStar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    starsContainer: {
        flexDirection: 'row',
        gap: 4,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        padding: 15,
        marginBottom: 25,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 18,
        borderColor: '#000'
    },
    text_button: {
        marginStart: 10
    }
});