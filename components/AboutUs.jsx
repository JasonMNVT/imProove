import { StyleSheet, Text, View } from "react-native"

const AboutUs = () => {
    return (
        <View style={styles.MainContainer}>
            <Text style={styles.TitleStyle}>À propos de nous</Text>
            <Text style={styles.FirstText}>Guillaume, Jason et Stéphane sont trois développeurs passionnés qui suivent actuellement une formation de Concepteur développeur d'applications chez AP Formation. Après avoir appris les bases de Java, JS, Vue.JS, Android, PHP et Symfony, ils sont désormais prêts à affronter leur premier vrai défi en entreprise.</Text>
            <Text style={styles.SecondText}>Pour leur stage de deux mois et demi, ils vont développer une application mobile en utilisant React Native, Express.JS ainsi que MongoDB.</Text>
            <Text style={styles.ThirdText}>Ce projet représente un réel challenge pour les trois développeurs, mais ils sont déterminés à le réussir. Guillaume est un expert en React Native, Jason est un spécialiste d'Express.JS et Stéphane est incollable sur MongoDB. Ensemble, ils forment une équipe complémentaire et parfaitement équipée pour relever ce défi.</Text>
            <Text style={styles.FourthText}>Pendant les deux mois et demi à venir, Guillaume, Jason et Stéphane vont travailler sans relâche pour concevoir, développer et tester leur application. Ils sont conscients que le stage sera exigeant, mais ils sont déterminés à en tirer le meilleur parti pour acquérir de nouvelles compétences et renforcer leur expérience professionnelle.</Text>
            <Text style={styles.FifthText}>Leur motivation, leur passion et leur détermination sont des atouts précieux pour la start-up qui leur a fait confiance. Avec leur expertise technique et leur créativité, ils sont bien partis pour réaliser un projet de qualité qui répondra aux besoins et aux attentes de leur client.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        width: '80%',
        height: "auto",
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: '#2CEAA3',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 6,
        alignItems: 'center',
        padding: 15
    },
    TitleStyle: {
        color: '#5D5D81',
        fontSize: 20,
        marginBottom: 20,
    },
    FirstText: {
        color: '#5D5D81',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    SecondText: {
        color: '#5D5D81',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    ThirdText: {
        color: '#5D5D81',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    FourthText: {
        color: '#5D5D81',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    FifthText: {
        color: '#5D5D81',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
})

export default AboutUs