import { Text, View, StyleSheet } from "react-native"
import { Person } from "../models/person"

type SummaryScreenProps = {
  person: Person
}
export const SummaryScreen = ({ person }: SummaryScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumen</Text>
      <View style={styles.card}>
        <Text style={styles.row}>Nombre: {person.firstName}</Text>
        <Text style={styles.row}>Apellido: {person.lastName}</Text>
        <Text style={styles.row}>Correo: {person.email}</Text>
        <Text style={styles.row}>Telefono: {person.phone}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({ 
  container:{
    flex: 1,
  },
  title:{
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  card:{
    borderWidth:1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  row: {
    fontSize: 16,
    marginBottom: 8,
    color: 'black',
  }
})