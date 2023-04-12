import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

const Features = () => {
    const [fontLoaded, setFontLoaded] = React.useState(false);

    React.useEffect(() => {
        const loadFont = async () => {
            await Font.loadAsync({
                'Robo_Girls_Italic': require('../assets/fonts/Robo_Girls_Italic.otf'),
            });
            setFontLoaded(true);
        };
        loadFont();
    }, []);

    return (
        <View style={styles.MainContainer}>
            {fontLoaded && (
                <Text style={styles.TitleStyle}>FONCTIONNALITÉS</Text>
            )}
            <Text style={styles.FirstText}>Bienvenue dans notre application de sport !</Text>
            <Text style={styles.SecondText}>Notre application est conçue pour vous aider à suivre vos progrès tout en vous motivant à atteindre vos objectifs de forme physique.</Text>
            <Text style={styles.SecondText}>Pour commencer, vous pouvez choisir l'activité que vous souhaitez pratiquer parmi une sélection de sports populaires. Une fois que vous avez sélectionné votre activité, vous pouvez démarrer votre séance d'entraînement.</Text>
            <Text style={styles.SecondText}>L'application vous permet ensuite de renseigner vos performances et de les enregistrer. Vous pouvez ainsi suivre votre progression au fil du temps grâce à une courbe de performance personnalisée. Cette courbe évolutive vous permet de voir comment vous vous améliorez au fil du temps et de rester motivé à atteindre vos objectifs.</Text>
            <Text style={styles.SecondText}>Si vous avez des objectifs spécifiques en termes de forme physique, vous pouvez également paramétrer l'application en fonction de ces objectifs. Vous pouvez choisir de suivre des programmes d'entraînement spécifiques ou de définir des objectifs de temps ou de distance à atteindre.</Text>
            <Text style={styles.SecondText}>En utilisant notre application régulièrement, vous pouvez vous assurer que vous êtes sur la bonne voie pour atteindre vos objectifs de forme physique. Alors, qu'attendez-vous pour vous mettre en forme ? Téléchargez dès maintenant notre application de sport et commencez à suivre vos progrès !</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    MainContainer: {
        width: '80%',
        height: 'auto',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#2CEAA3',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 6,
        alignItems: 'center',
        padding: 15,
    },
    TitleStyle: {
        color: '#5D5D81',
        fontSize: 20,
        marginBottom: 20,
        fontFamily: 'Robo_Girls_Italic',
    },
    FirstText: {
        color: '#5D5D81',
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    SecondText: {
        color: '#5D5D81',
        marginBottom: 20,
        alignSelf: 'flex-start',
    },
});

export default Features;
