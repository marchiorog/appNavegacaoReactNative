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
      <Button
        title="Listar filmes"
        onPress={() => navigation.navigate("Movies")}
      ></Button>
    </View>
  );
}
function MoviesScreen({ navigation }) {
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          {data.map((item) => (
            <Text key={item.id}>{item.title} - {item.releaseYear}</Text>
          ))}
        </View>
      )}
      <Button
        title="Voltar para Details"
        onPress={() => navigation.goBack()}
      ></Button>
    </View>
  );
}

const [isLoading, setLoading] = useState(true);
const [data, setData] = useState([]);

const getMovies = async () => {
  try {
    const response = await fetch("https://reactnative.dev/movies.json");
    const json = await response.json();
    setData(json.movies);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Movies" component={MoviesScreen} />
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
