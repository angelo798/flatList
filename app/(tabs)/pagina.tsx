import {View, StyleSheet,Image,Text} from 'react-native';


export default function App() {
    return (

        <View>
          <Image source={{ uri: "https://tse3.mm.bing.net/th/id/OIP.KRPlsYGTtvCevwGRezsc5wHaKC?r=0&w=620&h=840&rs=1&pid=ImgDetMain&o=7&rm=3" }} style={{ width: 120, height: 170, borderRadius: 6 }} />
          <Text>
           Inspirado nos arquivos reais do Padre Gabriele Amorth, Chefe Exorcista do Vaticano. O padre realizou mais de 100.000 exorcismos em sua vida e faleceu em 2016 aos 91 anos. Amorth escreveu duas memórias – An Exorcist Tells His Story e An Exorcist: More Stories – e detalhou suas experiências lutando contra Satanás e demônios que agarraram e possuíram as pessoas com seu mal. O filme, sendo o retrato do personagem da vida real, acompanha Amorth (Russell Crowe) enquanto ele investiga a terrível possessão de um menino e acaba descobrindo uma conspiração secular que o Vaticano tentou desesperadamente proteger e manter no esquecimento.
          </Text>
        </View>
    );
}

const styles = StyleSheet.create({    
    badgeTexto: {
    color: "#ffffff",
    fontSize: 9,
    fontWeight: "700",
}});
