import { Text, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native-web';
export default function App(){
  return (
    <View>
    <Text style={styles.log}> cignifi </Text>
    <Text>Login to Your Account</Text>

    <View style= {styles.formContent}>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.inputs}/>
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.inputs}/>
      
      <TouchableOpacity style={styles.botaoEntrar}>
        <Text style={styles.textoBotao}>Sing In</Text>
      </TouchableOpacity>
      <View style={styles.entrarEsqueceu}>
        <TouchableOpacity>
          <Text style={styles.botaoEntrarEsqueceu}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
}



