import { FlatList, StyleSheet, Text, View , Image} from "react-native";

type Filme = { id: string; titulo: string; cor: string };
type Categoria = { id: string; titulo: string; filmes: Filme[] };

const categorias: Categoria[] = [
  {
    id: "1",
    titulo: "Em Alta",
    filmes: [
      { id: "1a", titulo: "Oppenheimer", cor: "#be0d92", imagem:"https://tse2.mm.bing.net/th/id/OIP.Yt4m4UqVpVzdrfCW5zsgdAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"},
      { id: "1b", titulo: "Duna 2", cor: "#23920d", imagem:"https://tse1.mm.bing.net/th/id/OIP.iyQy2GNDScQrF5UEiFFoTwHaKz?r=0&w=1280&h=1867&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: "1c", titulo: "Barbie", cor: "#0f3460", imagem:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/09e20adc-4256-4c77-8465-3fe5c2e09840/dg38waa-235c952f-df9e-4500-914e-fdbeed748128.png/v1/fill/w_1280,h_2023,q_80,strp/barbie_movie_poster__2023__by_dreamerdesignoficial_dg38waa-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjAyMyIsInBhdGgiOiJcL2ZcLzA5ZTIwYWRjLTQyNTYtNGM3Ny04NDY1LTNmZTVjMmUwOTg0MFwvZGczOHdhYS0yMzVjOTUyZi1kZjllLTQ1MDAtOTE0ZS1mZGJlZWQ3NDgxMjgucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.228nfaEt0CV458AtgcTYLX2c7lW-w46yKjsm1LU8awE" },
      { id: "1d", titulo: "Poor Things", cor: "#533483", imagem:"https://assets.gadgets360cdn.com/pricee/assets/product/202305/PoorThings_1684234726.jpg" },
      { id: "1e", titulo: "Saltburn", cor: "#968701", imagem:"https://www.cinemadebuteco.com.br/wp-content/uploads/2024/01/poster-saltburn.jpeg" },
    ],
  },
  {
    id: "2",
    titulo: "Ação",
    filmes: [
      { id: "2a", titulo: "John Wick 4", cor: "#06886c", imagem:"https://m.media-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9.jpg" },
      { id: "2b", titulo: "Missão Impossível", cor: "#162447", imagem:"https://www.papodecinema.com.br/wp-content/uploads/2022/12/20230705-missao-impossivel-contas-papo-de-cinema-cartaz.webp" },
      { id: "2c", titulo: "Top Gun", cor: "#4e1d7c", imagem:"https://th.bing.com/th/id/R.39bb945892b93806279d9a32b0655a12?rik=%2fb8P40iPozGPrQ&pid=ImgRaw&r=0" },
      { id: "2d", titulo: "Mad Max", cor: "#120941", imagem:"https://image.tmdb.org/t/p/original/hA2ple9q4qnwxp3hKVNhroipsir.jpg" },
    ],
  },
  {
    id: "3",
    titulo: "Comédia",
    filmes: [
      { id: "3a", titulo: "Superbad", cor: "#0c056b", imagem:"https://m.media-amazon.com/images/M/MV5BY2VkMDg4ZTYtN2M3Yy00NWZiLWE2ODEtZjU5MjZkYWNkNGIzXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_.jpg" },
      { id: "3b", titulo: "The Grand Budapest", cor: "#089186", imagem:"https://tse1.mm.bing.net/th/id/OIP.Y4nRkEUFfjNPF22S66MJPgHaKo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: "3c", titulo: "Knives Out", cor: "#3e72c0", imagem:"https://image.tmdb.org/t/p/original/5zMiji6nLQPW0N6rocXYVbQuJXo.jpg" },
    ],
  },
  {
    id: "4",
    titulo: "Documentários",
    filmes: [
      { id: "4a", titulo: "Free Solo", cor: "#849e0f", imagem:"https://m.media-amazon.com/images/M/MV5BMjE2MDIwMDU5Ml5BMl5BanBnXkFtZTgwMTkxNTgzNjM@._V1_.jpg" },
      { id: "4b", titulo: "The Social Dilemma", cor: "red", imagem:"https://tse3.mm.bing.net/th/id/OIP.pjeVtjG3kQSJJdXgWHfmPwHaIp?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: "4c", titulo: "My Octopus Teacher", cor: "green", imagem:"https://tse2.mm.bing.net/th/id/OIP.dgK4RFMAYVCiiu-6DUwkIwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    ],
  },
  {
    id: "5",
    titulo: "Terror",
    filmes: [
      { id: "5a", titulo: "Hereditary", cor: "#83098b", imagem:"https://tse2.mm.bing.net/th/id/OIP.IcHZjdSUKSJokl4zmAlyPQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: "5b", titulo: "Midsommar", cor: "#bd380c", imagem:"https://tse1.mm.bing.net/th/id/OIP.n9yFDGdCN2AdJwmaq7rVcwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: "5c", titulo: "Get Out", cor: "#97083f", imagem:"https://images.moviesanywhere.com/1eac8b1747c905f18fbc228725204309/1406b595-0ac4-4bd7-90c4-65113b6b157a.jpg" },
      { id: "5d", titulo: "O Exorcista do Papa", cor: "#97083f", imagem:"https://tse3.mm.bing.net/th/id/OIP.KRPlsYGTtvCevwGRezsc5wHaKC?r=0&w=620&h=840&rs=1&pid=ImgDetMain&o=7&rm=3" },
    ],
  },
];

function FilmeCard({ item }: { item: Filme }) {
  return (
    <View >
      <Image source={{ uri: item.imagem }} style={{ width: 120, height: 170, borderRadius: 6 }} />
      <Text style={styles.filmeTitulo}>{item.titulo}</Text>
    </View>
  );
}

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


function renderFilmeCard(item: Filme) {
  return <FilmeCard item={item} />;       
  
}

function CategoriaRow({ item }: { item: Categoria }) {
  return (
    <View style={styles.categoriaContainer}>
      <Text style={styles.categoriaTitulo}>{item.titulo}</Text>
      {/* FlatList horizontal — renderiza os filmes de cada categoria */}
      <FlatList
        data={item.filmes}              
        keyExtractor={(filme) => filme.id} 
        renderItem={({ item: filme }) => renderFilmeCard(filme)} 
        horizontal={true}              
        showsHorizontalScrollIndicator={false} 
      />
    </View>
  );
}

export default function Netflix() {
  return (
    <View style={styles.container}>
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
    backgroundColor: "#141414",
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
    backgroundColor: "rgba(0,0,0,0.6)",
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
