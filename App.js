import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList, SafeAreaView } from 'react-native';

const DATA = [
  { id: '1', title: 'Ajay Tiwari' },
  { id: '2', title: 'Prince Tiwari' },
  { id: '3', title: 'Ragini Pandey' },
];

const Item = ({ title }) => (
  <View style={{ padding: 10 }}>
    <Text>{title}</Text>
  </View>
);

export default function App() {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{padding:10, fontWeight:'bold',color:'tomato', fontSize:20}}>Hey This is first expo build</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:55

  },
});
