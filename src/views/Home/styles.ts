import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
        padding: 40,
    },
    image: {
        width: 180,
        height: 180
    },
    name: {
        marginTop: 30,
        marginBottom: 30,
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        padding: 15,
        marginBottom: 25,
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 18,
        borderColor: '#000'
    },
    icon: {
        marginRight: 10,
    },
    text_button: {
        textAlign: 'center',
    }
});