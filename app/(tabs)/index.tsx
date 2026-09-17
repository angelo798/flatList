import { FlatList, StyleSheet, Text, View  } from "react-native";
import DadosDoFilme from "../components/DadosDoFilme";
import CategoriaRow from "../components/CardCategorias";
import InputBusca from "../components/InputBusca";

const categorias=DadosDoFilme();


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



function FilmeCardDestaque({ item }: { item: Filme }) {
  return (
    <View style={[styles.filmeCardDestaque, { backgroundColor: item.cor }]}>
      <View style={styles.badge}>
        <Text style={styles.badgeTexto}>🔥 Destaque</Text>
      </View>
      <Text style={styles.filmeTitulo}>{item.titulo}</Text>
    </View>
  );
}

function FilmeCardBanner({ item }: { item: Filme }) {
  return (
    <View style={[styles.filmeCardBanner, { backgroundColor: item.cor }]}>
      <View style={styles.badge}>
        <Text style={styles.badgeTexto}>✨ Novo</Text>
      </View>
      <Text style={[styles.filmeTitulo, styles.filmeTituloCentralizado]}>
        {item.titulo}
      </Text>
    </View>
  );
}

export default function Netflix() {
  return (
    <View style={styles.container}>
      <InputBusca />
      <View style={styles.header}>
        <Text style={styles.logo}>N</Text>
      </View>
      {/* FlatList vertical — renderiza cada categoria */}
      <FlatList
        data={categorias}        
        keyExtractor={(cat) => cat.id}
        renderItem={({ item }) => <CategoriaRow item={item} />}
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingBottom: 80 }} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  logo: {
    color: "#E50914",
    fontSize: 32,
    fontWeight: "900",
    letterSpacing: 2,
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
  filmeCard: {
    width: 120,
    height: 170,
    borderRadius: 6,
    marginRight: 10,
    justifyContent: "flex-end",
    padding: 8,
    borderBottomWidth: 3,
    borderBottomColor: "#2a09e5",
  },
  filmeCardDestaque: {
    width: 120,
    height: 170,
    borderRadius: 50, 
    marginRight: 10,
    justifyContent: "flex-end",
    padding: 8,
    borderBottomWidth: 3,
    borderBottomColor: "#E50914",
  },
  filmeCardBanner: {
    width: 200,       
    height: 100,      
    borderRadius: 10,
    marginRight: 10,
    justifyContent: "center", 
    alignItems: "center",
    padding: 8,
    borderBottomWidth: 3,
    borderBottomColor: "#089186",
  },
  badge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#000000",
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  badgeTexto: {
    color: "#fff",
    fontSize: 9,
    fontWeight: "700",
  },
  filmeTituloCentralizado: {
    textAlign: "center",
  },
  filmeTitulo: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "600",
  },
});
