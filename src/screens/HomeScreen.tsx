import { useEffect, useState } from "react";
import { FlatList, View, Text, Button, StyleSheet } from "react-native";
import CharacterCard from "../components/characterCard";
import { useCharacters } from "../store/useCharacter";

export default function HomeScreen() {
    const {characters, fetchCharacters, clearCharacters} = useCharacters();
    const [showList, setShowList] = useState(false)// inicalizado en false

    function loadCharacters () { //funcion para cargar personajes
       setShowList(true); //se establece el valor de mostar lista en true para mostar lista
       fetchCharacters();
    }

    return(
     
        <View style={styles.container}>
         <View style={styles.content}>
            { showList &&
                <FlatList
                    data={characters}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <CharacterCard character={item}/>}
                    ListEmptyComponent={<Text>Cargando...</Text>}
                />
            } 
          </View>
          
            <View style={styles.buttonContainer}>
                <Button  
                   title={showList ? "Ocultar personajes": "Mostrar personajes"}
                   onPress={() =>{
                      if(showList){
                        clearCharacters();
                        setShowList(false)
                      } else {
                        loadCharacters();
                        setShowList(true);
                      }
                   }}>

                </Button>
            </View>
         
            
          
        </View>
    )
        
}
const styles = StyleSheet.create({ 
    container : {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
    },
    buttonContainer :{
        alignItems: 'center',
        marginBottom: 20,
    },
    content: {
        flex: 1, // esto asegura que FlatList ocupe todo el espacio posible
      },
})