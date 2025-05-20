import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function HomeScreen({ navigation }) {
return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Home Screen</Text>
    <Button
      title="Ir para detalhes"
      onPress={() => navigation.navigate("Details")}
    ></Button>
  </View>
);
}


function DetailsScreen({ navigation }) {
return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Details Screen</Text>
    <Button
      title="Voltar para home"
      onPress={() => navigation.goBack()}
    ></Button>
  </View>
);
}

export default function App() {
return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
}
const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
