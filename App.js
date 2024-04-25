import { Text, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native-web';
export default function App(){
  return (
    <View style={styles.body}>
    <Text style={styles.log}> cignifi </Text>
    <Text>Login to Your Account</Text>
   
    <View style= {styles.formContent}>
      <Text style={styles.label} > Email </Text>
      <TextInput style={styles.inputs}/>
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.inputs}/>
      
      <TouchableOpacity style={styles.botao}>
        <Text >Sing In</Text>
      </TouchableOpacity>
      <View style={styles.entrarEsqueceu}>
       
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({

  body:{
    flex:1,
    justifyContent:'center',
    marginLeft:625 ,
  },

    log:{
        fontSize: 20,
        color:"blue",
        marginBottom:25,
      
    },
    
    botao:{
      backgroundColor:'blue',
      width: 200,
      color:'white',
      justifyContent:"center",
      alingItems:'center',
      marginTop:10,
      borderRadius:10
    },
    label:{
      marginTop:10
    }
 
})

