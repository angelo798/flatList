import { View, Image, FlatList, StyleSheet,Text } from "react-native";
import { Link } from "expo-router";
type Filme = {
        id: string;
        titulo: string;
        cor: string;
        imagem: string;};
      
        type Categoria = {
          id: string;
          titulo: string;
          filmes: Filme[];
        };
export  function FilmeCard({ item }: { item: Filme }) {
    return (
      <Link href={"/pagina"}>
      <View style={{ marginRight: 10 }}>
        
        <Image
          source={{ uri: item.imagem }}
          style={{
            width: 120,
            height: 170,
            borderRadius: 6,
          }}
        />
  
          <Text style={styles.filmeTitulo}>
            {item.titulo}
          </Text>
        
      </View>
      </Link>
    );
  }

export  function renderFilmeCard(item: Filme) {
    return <FilmeCard item={item} />;       
    
  }
export default function CategoriaRow({ item }: { item: Categoria }) {
    return (
        
      <View style={styles.categoriaContainer}>
        <Text style={styles.categoriaTitulo}>{item.titulo}</Text>
        {/* FlatList horizontal — renderiza os filmes de cada categoria */}
        <FlatList
          data={item.filmes}              
          keyExtractor={(filme) => filme.id} 
          renderItem={({ item: filme }) => renderFilmeCard(filme)} 
          horizontal={true}              
          showsHorizontalScrollIndicator={true} 
        />
      </View>
    );
    
  };
 
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#141414",
      },
       categoriaContainer: {
        marginBottom: 24,
        paddingLeft: 12,
      },
      categoriaTitulo: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        borderLeftWidth: 3,
        borderLeftColor: "#7904af",
        paddingLeft: 8,
        marginBottom: 10,
      },
      filmeTituloCentralizado: {
        textAlign: "center",
      },
      filmeTitulo: {
        color: "#fff",
        fontSize: 11,
        fontWeight: "600",
      },

  })