# 📖 Zadanie domowe 4

**Uwaga, ta praca jest kontynuacją poprzedniej**. Jeśli jej nie wykonałeś/łaś, to nic nie jest stracone. Możesz w ramach tej pracy wykonać zadania z pracy 3. i **otrzymać wtedy maksymalnie połowę punktów** plus normalną ocenę z zakresu pracy 4. Analogicznie, jeśli praca będzie zawierać licznik z zadania 2., to również otrzymasz maksymalnie połowę punktów z tamtego zadania.

Oczywiście możesz zdecydować się na realizację zadań tylko z aktualnej pracy. Zostanie ona normalnie oceniona.



## Zadania do wykonania w ramach bieżącej pracy domowej

Zadaniem na ten tydzień jest zrealizowanie drugiego widoku z projektu graficznego - widoku listy lotów.
https://scene.zeplin.io/project/5ae041721822ab88708c2660/screen/5ae041b0dc0d2c770b8a4b1f

Plik JSON z listą lotów do wyrenderowania dostępny jest tutaj: [./zadania_domowe_assets/sample_json_data/launches.json](./zadania_domowe_assets/sample_json_data/launches.json)

Dodatkowo należy zrobić mechanizm prostego przełączania pomiędzy widokami (propozycja poniżej). Jak na razie (celowo) nie chcemy korzystać z żadnego routera np. `React Router`.

Na tym etapie widok szczegółów cały czas będzie pokazywać te same dane, niezależnie od tego na jaki element listy kliknie użytkownik.

Przyciski filtrowania listy powinny zawierać wszystkie nazwy rakiet, jakie pojawiają się w `lounchesItem.rocket.rocket_name` i odpowiednio filtrować listę (nie należy się sugerować napisami w projekcie graficznym).

To Do:
* Przenieś plik `launches.json` do `/src/assets`
* Utwórz komponent `/src/view/LaunchesList`, i użyj go w głównym komponencie `App`. Poniżej przykład.
  ```jsx
  /// ...
  import launch from './assets/launch.json';
  import launchSite from './assets/launch_site.json';
  import rocket from './assets/rocket.json';
  import LaunchDetails from 'view/LaunchDetails';

  import launches from './assets/launches.json';
  import LaunchesList from 'view/LaunchesList';
  /// ...

  class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
      super(props);
      this.state = {
        viewName: 'list',
      };

      this.handleLaunchClick = this.handleLaunchClick.bind(this);
      this.handleBackClick = this.handleBackClick.bind(this);
    }

    get activeViewComponent() {
      const { viewName } = this.state;

      switch (viewName) {
        case 'list':
          return (
            <LaunchesList
              launches={launches}
              onLaunchClick={this.handleLaunchClick}
            />
          );

        case 'details':
          return (
            <LaunchDetails
              launch={launch}
              launchSite={launchSite}
              rocket={rocket}
              onBackClick={this.handleBackClick}
            />
          );

        default: return null;
      }
    }

    handleLaunchClick() {
      this.setState({ viewName: 'details' });
    }

    handleBackClick() {
      this.setState({ viewName: 'list' });
    }

    render() {
      return (
        <main>
          {this.activeViewComponent}
        </main>
      );
    }
  }
  ```
* Zaimplementuj komponent `<LaunchesList />` zgodnie z [projektem graficznym](https://scene.zeplin.io/project/5ae041721822ab88708c2660/screen/5ae041b0dc0d2c770b8a4b1f)
* Przy tworzeniu komponentu stwórz tyle mniejszych komponentów składowych, ile uznasz za stosowne (umieść je w `src/components`),
* Przy formatowaniu dat pomocna może być bibliioteka https://github.com/date-fns/date-fns
* Przyciski filtrów powinny być osobnym komponentem użytym w widoku listy. Poniżej pseudokod (nie jest to kompletny - działający kod), który może być podpowiedzią jak sobie z tym zadaniem poradzić.

  ```jsx
  class LaunchesList extends React.Component { // eslint-disable-line react/prefer-stateless-function
    get availableRocketNames() {
      const {launches} = this.props;

      const rocketNames = [];
      // get all names from launches

      return rocketNames;
    }

    get filteredLaunches(){
      const {rocketNameFilter} = this.state;
      const {launches} = this.props;

      if(!rocketNameFilter) return launches;

      return launches.filter( launch => launch.rocket.rocket_name === rocketNameFilter );
    }

    handleFilterChange(value) {
      this.setState({ rocketNameFilter: value });
    }

    render() {
      return (
        <div>
          <FilterButtons
            options={this.availableRocketNames}
            onChange={this.handleFilterChange}
          />

          { /* render list */ }
        </div>
      );
    }
  }
  ```

## Co będzie oceniane

* Oddanie w terminie i działające GitHub Pages
* Ostylowanie komponentu zgodne z projektem graficznym
* Działające przełączanie pomiędzy widokami (jeśli nie masz realizowanego widoku szczegółów zrób placeholder)
* Logiczny podział na komponenty składowe
* Działające filtrowanie listy


## ⚠️ UWAGA!
- Pamiętaj o zbudowaniu projektu i deploy'u na GitHub Pages.
- Na wykonanie tego zadania masz czas do:
  - wtorku **15 maja do 12:00** (południe) - 100% punktów.
  - przy okazji kolejnej pracy domowej - 50% punktów
- **Do tego czasu uzupełnij ankietę z odpowiedziami**: [https://goo.gl/forms/TQvRoBo008QTvW8r1](https://goo.gl/forms/TQvRoBo008QTvW8r1)


## ❓ Pytania

Jeśli masz jakieś pytanie, stwórz issue w naszym repo :)  https://github.com/daftcode/frontend_levelup_2018/issues

Jeśli umiesz odpowiedzieć na pytanie innego uczestnika - odpowiedz.

Zachęcamy do skonfigurowania powiadomień o nowych Issues.


