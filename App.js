import { StyleSheet, Text, View } from 'react-native';
import react from 'react';
import Article from './components/Article';



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.ArticleWraper} >
        <Text style={styles.sectionTitle}>Guelph Paramedic Integrated Health App</Text>

        {/* this is an example of search results */}
        <View style={styles.items}>
        <Article Text={'article 1'}/> {/*prop is going to be article title, on click change page to view that articles page*/}
        <Article Text={'article 2'}/>
        <Article Text={'article 3'}/>
        <Article Text={'article 4'}/>
        <Article Text={'article 5'}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ArticleWraper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize:24,
    fontWeight: 'bold'
  },
});
