import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PersonalInfoScreen } from './screens/PersonalinfoScreen';
import { ContactInfoScreen } from './screens/ContactInfoScreen';
import { SummaryScreen } from './screens/SummaryScreen';
import { TOTAL_STEPS, usePersonForm } from './state/usePersonForm';
import { SafeAreaView } from 'react-native';

export default function App() {

  const { person, updateField, step, nextStep } = usePersonForm();
  
  const renderScreen = () => {
    if (step === 0) {
      return <PersonalInfoScreen person={person} onChange={updateField} onNext={nextStep} />
    }
    if (step === 1) {
      return <ContactInfoScreen person={person} onChange={updateField} onNext={nextStep} />
    }
    return <SummaryScreen person={person} />
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.title}>Formulario de registro</Text>
        <Text style={styles.steps}>Paso {step + 1} de {TOTAL_STEPS}</Text>
        <View style={styles.card}>
          {renderScreen()}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    flex: 1,
    padding: 24,
    gap: 12
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
  },
  steps:{
    fontSize: 14,
    color: 'black',
  },
  card:{
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: 'white',
  }
});
