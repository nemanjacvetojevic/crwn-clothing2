import React from 'react';
import './App.css';
import HomePage from './pages/Homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import { Switch, Route } from 'react-router-dom';
import SignInAndSignUpPage from './pages/sing-in-and-sing-up/sing-in-and-sing-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() { 
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ ShopPage } />
          <Route path='/signin' component={ SignInAndSignUpPage } />
        </Switch>
      </div>
    );
  }
}

export default App;


//"Route" je komponenta react-router-dom biblioteke koja sluzi kako bi smo odredili
// rute nasoj SPA ukoliko zelimo da imamo vise od jedne stranice.
//Route ima vise propsa koje moze da prihvati a neki od najbitnijih su:
// component - koju ce komponentu (u nasem slucaju stranicu da prikaze)
// path - putanja koju ce imati u urlu nasa komponenta
// exact - true/false prop koji odredjuje da li putanja ka toj komponenti mora biti
// specificno definisana i pristupljena putem "path" propa ili ce biti ukljucena i u
// druge rute

// Pored toga ono sto je bitno napomenuti, da bilo koja komponenta koja je renderovana
// od strane "Route" komponente dobija tri propa: "hystory" "location" i "match" 
// i prvo cemo se osvrnuti na "match" 
// match ima 4 propa: isExact, params, path, url. 
// url sadrzi vrednost do koje Route komponenta prati uslov da li ispunjava da bi
// bila prikazana  
// path sadrzi string koji Route koristi kako bi prikazao odredjenu komponentu kad se
// unese url putanja
// isExact ima boolean vrednosti i vezano je za to da li je putanja url-a ista kao
// kod komponente koju je react-router-dom renderovo
// Ono sto je najbitnije kod "match" propa je da se koristi kod dinamickog kreiranja ruta
// ili nestovanog buildovanja. Primera radi:
// Recimo da se nasa stranica "HatsPage" nalazi na nekoj lokaciji koji ima duzi url: root/mensware/head/hats
// i da unutar te stranice imamo listu kapa ciji link zelimo da nas odvede do specificne stranice koja 
// prikazuje detalje o samom proizvodu. Da bi smo pristupili tim stranicama dovoljno je da iskoristimo pogodnosti
// match propa koji u sebi sadrzi "url" promenljivu koja prati putanju do stranice "HatsPage" evo i kako
// <Link to={`${props.match.url}`/nikeHat} />
// <Link to={`${props.match.url}`/addidasHat} />
// <Link to={`${props.match.url}`/paciotihat} />
// na ovaj nacin smo osigurani da ne vodimo racuna koji je url na kome se stranica "HatsPage"
// nalazi vec nas samo zanima da odemo do odredjenih stranica koje prikazuju detalje 
// "Link" komponenta sluzi slicno kao "a" tag u html-u stim sto umesto "href" atributa
// koristimo prop "to" cija je vrednost string url-a do kojeg hocemo da nas react-router-dom
// odvede
// Drugi nacin da renderujemo komponentu ne koristeci "Link" komponentu je preko history
// propa koji koristi funkciju "push()" kako bi prikazao odredjenu rutu, primera radi
// <button onClick={() => props.history.push("/hats")}> Hats page </button>
// location prop, ima par promenljivih od kojih je bitnija "pathname" koja vraca vrednost
// stringa gde se trenutno nalazimo (ili trenutno ukucan url nakon root-a)

//"Switch" komponenta je takodje deo react-router-dom biblioteke i sluzi da 
// obuhvati chidren komponente i onda na osnovu patha donosi odluku kako ce 
// prikazati (renderovati) komponente (u nasem slucaju stranice). Switch ce 
// gledati u Route komponente i traziti prvi "path" koji se uklapa sa zatrazenim
// urlom i onda ce renderovati tu komponentu. Primera radi: Recimo da Route
// komponenta sa component={HomePage} ima path='/' i ukoliko je exact={false}
// kad unesemo url: sajt.com/hats izrenderovace HomePage. Zato se mora voditi 
// racuna o koriscenju "exact" prop-a. Razlog tome je sto Sitch gleda prvo dete
// koje ispunjava uslov i prikazuje, a u nasem slucaju uslov path-a je ispunjen