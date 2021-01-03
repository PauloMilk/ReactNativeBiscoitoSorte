import React, { Component } from 'react';
var SoundPlayer = require('react-native-sound');
var song = null;
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),
      biscoitoQuebrado: false
    }

    this.frases = ["Faça sempre o seu melhor!", "E acredite que o melhor possa ser feito!", "Não espere, ponha em prática!", "Mesmo que pareça difícil, não pare!", "Só trabalhando é possível trilhar o caminho!", "Tenha coragem!", "Descubra quem você realmente é…", "E se aceite!", "Não espere que as respostas caiam do céu!", "Aprenda a lidar com as situações do melhor jeito!", "Veja sempre o que há de positivo nas coisas!", "Não seja vítima das dificuldades, tente ultrapassá-las!", "Nunca perca a esperança!", "Você não precisa de muito para construir um mundo melhor!", "Nunca esqueça que a sua felicidade não depende de mais ninguém!", "Desistir à primeira é para os fracos, tente sempre mais uma vez!", "Enxergue outros pontos de vista, e tenha sempre presente o objetivo final!", "Se motive com as conquistas pessoais e não em bater os outros", "Busque inspiração nas pequenas coisas e gestos", "A receita para o sucesso está no equilíbrio!", "Sempre há tempo para mudar!", "Não se esqueça de cuidar de você mesmo!", "A força está em você!", "Respire fundo e encontre sua paz interior!", "Pense bem: o que é defeito e o que é uma parte importante de você?", "Cada dia tem seu lugar e sua função!", "Para boas recompensas, não há atalhos!", "Tenha segurança de si e do seu potencial!", "A imaginação e a inspiração são fundamentais na nossa constante mutação!", "No lugar de sentir inveja, fique feliz pelos outros!", "E novos dias sempre chegam, mesmo sem serem chamados!", "Ser simples é uma boa qualidade!", "Diga a verdade e poupe justificativas do porquê mentir!", "Os dias tristes ajudam a apreciarmos os bons!", "Às vezes, voltar ao antigo local nos faz perceber o quanto estamos diferentes!", "Existe um longo alfabeto até chegar no “realizar”!", "Quem é sábio reconhece que não sabe tudo!", "Quando vemos que o esforço foi a melhor parte do caminho!", "Sinta e veja as coisas boas que estão diante de você!", "Contar com outras pessoas é muito importante!", "Persista, recomece e insista!"]

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);

  }

  somQuebrarBiscoito() {
    song = new SoundPlayer('sound.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Error', error);
      } else {
        song.play((success) => {
          if (!success) {
            console.log('Error Play', success);
          }
        })
      }
    })
  }

  quebrarBiscoito() {

    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.somQuebrarBiscoito()
    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./src/biscoitoAberto.png'),
      biscoitoQuebrado: true
    })
    setTimeout(() => {
      this.setState({
        img: require('./src/biscoito.png'),
        biscoitoQuebrado: false
      })
    }, 1500)
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={this.state.img}
          style={styles.img}
        />
        <Text style={styles.texto}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebrarBiscoito} disabled={this.state.biscoitoQuebrado}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar o biscoito!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 200,
    height: 200
  },
  texto: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#dd7b22',
    margin: 30,
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

export default App;
