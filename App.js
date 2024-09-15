import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";



import { planetas } from "./planeta";


export default function App() {
  return (



    <View style={styles.container}>
      <View style={styles.row}>
        <StatusBar />

        <View style={styles.rowInfo}>
        <Text style={styles.title}>Vamos Explorar!</Text>
        <Image style={styles.imageTop} source={require("./assets/astronauta.png")} />
        </View >
          </View>

          <ScrollView>
       {
          planetas.map((planeta)=> (
            

            <View style={styles.viewSpace}>
    

              <Text style={styles.namePlanets} >{planeta.nome}</Text>

              <Image style={styles.image} source={{uri: planeta.img}} />
              
    
              <View style={styles.rowInfo}>
              <Text style={styles.question}>Average Orbital Speed</Text>
              <Text style={styles.response}>{planeta.velocidadeOrbitalMediaKmS} km/s</Text>
              </View>
    
    
              <View style={styles.rowInfo}>
              <Text style={styles.question}>Satellites</Text>
              <Text style={styles.response}>{planeta.quantidadeSatelites}</Text>
              </View>
    
    
              <View style={styles.rowInfo}>
              <Text style={styles.question}>Surface Area</Text>
              <Text style={styles.response}>{planeta.areaSuperficieKm2}</Text>
              </View>
    
    
              <View style={styles.rowInfo}> 
              <Text style={styles.question} >Rotation Period</Text>
              <Text style={styles.response}>{planeta.periodoRotacaoDias} d</Text>
              </View>
    
    
            
            </View>
          
          
          ))
        }
        

        </ScrollView>
    </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000043",
  },
  title: {
    color: "#FFF",
    fontSize: 30,
    alignSelf: "center",
    
  },
  row: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 5,
  },
  image:{
    width:200,
    height:200,
    alignSelf:'center',
  },
  viewSpace:{
    backgroundColor:'#000',
    width:350,
    margin:15,
    borderRadius:18
  },
  rowInfo:{
    justifyContent:'space-between',
    flexDirection:'row',
    padding:20
  },
  question:{
    fontWeight:'bold',
    color:'#CCC',
    fontSize:18
  },
  response:{
    color:'#FFF',
    fontWeight:'bold',
    fontSize: 18
  },
  namePlanets:{
    fontWeight:'bold',
    color:"#FFF",
    fontSize:40,
    alignSelf:'center',
    padding:5
  },
  imageTop:{
    width:60,
    height:60
  }

});
