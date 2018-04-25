# 📖 Zadanie domowe 3

**Uwaga, tą pracą rozpoczynamy projekt, który będziecie dopracowywać podczas kolejnych zadań domowych**

## Opis projektu

Stworzona przez Was aplikacja będzie prezentować dane dostępne przez darmowe API ze startami rakiet kosmicznych firmy `SpaceX`.
Api jest w pełni darmowe, dokumentację znajdziecie tutaj: https://github.com/r-spacex/SpaceX-API.

Aplikacja składać się będzie z widoku listy startów oraz widoku szczegółów pojedynczego startu.

Projekt graficzny interface'u znajedziecie tutaj: https://scene.zeplin.io/project/5ae041721822ab88708c2660

Grafiki dostępne są tutaj: [./03_zadanie_domowe_assets/img](./03_zadanie_domowe_assets/img)

## Zadania do wykonania w ramach bieżącej pracy domowej

Na początek zrealizujecie **tylko część projektu** - komponent widoku szczegółów startu `<LaunchDetails />`. Nie będziecie jeszcze korzystać z API. Użyjecie przykładowych JSON'ów z danymi (dostępne tutaj: [./03_zadanie_domowe_assets/sample_json_data](./03_zadanie_domowe_assets/sample_json_data)).

To Do:
* Zrób porządek w repozytorium i nazwij je adekwatnie do projektu (wszystkie kolejne zadania będziesz realizować w tym samym repozytorium)
* Przenieś pliki z przykładowymi danymi do `/src/assets`
* Utwórz komponent `/src/view/LaunchDetails`, i użyj go w głównym komponencie `App`
  ```jsx
  /// ...
  import launch from './assets/launch.json';
  import launchSite from './assets/launch_site.json';
  import rocket from './assets/rocket.json';
  import LaunchDetails from 'view/LaunchDetails';
  /// ...
  class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
      return (
        <main>
          <LaunchDetails
            launch={launch}
            launchSite={launchSite}
            rocket={rocket}
          />
        </main>
      );
    }
  }
  ```
* Zaimplementuj komponent `<LaunchDetails />` zgodnie z projektem graficznym https://scene.zeplin.io/project/5ae041721822ab88708c2660/screen/5ae041b1f8cb95265e839555 (**Uwaga!** w projekcie są dwa widoki: listy i szczegółów. W tym zadaniu chodzi wyłącznie o ten drugi),
* Przy tworzeniu komponentu stwórz tyle mniejszych komponentów składowych ile uznasz za stosowne (umieść je w `src/components`),
* Do odliczania czasu do startu możesz wykorzystać odpowiednio zmodyfikowany licznik z poprzedniego zadania domowego,
* To które dokładnie dane wyciągniesz z JSON'ów zależy od Ciebie. Projekt graficzny jest tylko podpowiedzią,
* Przy formatowaniu dat pomocna może być bibliioteka https://github.com/date-fns/date-fns

## Co będzie oceniane

* Oddanie w terminie i działające GitHub Pages
* Nadanie elementom klas zgodnych z zasadami [BEM](https://en.bem.info/methodology/quick-start/)
* Poprawne użycie [Flex'a](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* Ostylowanie komponentu zgodne z projektem graficznym
* Logiczny podział na komponenty składowe
* Licznik odliczający czas do startu

## ⚠️ UWAGA!
- Pamiętaj o zbudowaniu projektu i deploy'u na GitHub Pages.
- Wszystkie prace domowe będą przez nas sprawdzane.
- Na wykonanie tego zadania masz czas do poniedziałku  **7 maja do 12:00** (południe).
- Do tego czasu uzupełnij ankietę z odpowiedziami: [https://goo.gl/forms/Ns5KWkF7AiwN27X42](https://goo.gl/forms/Ns5KWkF7AiwN27X42)


## ❓ Pytania

Jeśli masz jakieś pytanie, stwórz issue w naszym repo :)  https://github.com/daftcode/frontend_levelup_2018/issues

Jeśli umiesz odpowiedzieć na pytanie innego uczestnika - odpowiedz.

Zachęcamy do skonfigurowania powiadomień o nowych Issues.
