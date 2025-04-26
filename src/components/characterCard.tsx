import { View, Text, Image, StyleSheet } from "react-native";
import { Character } from "../types/character";

export default function CharacterCard({character}: {character: Character}){ // Propiedad de tipo Character, 
    return (
        <View style={styles.card}>
             <Image source={{ uri: character.image}} style={styles.image}/>
             <Text style={styles.name}>{character.name}</Text>
             <Text>{character.species} - {character.status}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
      padding: 10,
      margin: 10,
      borderRadius: 10,
      backgroundColor: '#eee',
      alignItems: 'center',
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });