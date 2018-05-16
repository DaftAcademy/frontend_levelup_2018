# 📖 Zadanie domowe 5

**Uwaga, ta praca jest kontynuacją poprzedniej**. Jeśli jej nie wykonałeś/łaś, to nic nie jest stracone. Możesz w ramach tej pracy wykonać zadania z pracy 3, 4 i  **otrzymać wtedy maksymalnie połowę punktów** plus normalną ocenę z zakresu pracy 5. Analogicznie, jeśli praca będzie zawierać licznik z zadania 2., to również otrzymasz maksymalnie połowę punktów z tamtego zadania.

Oczywiście możesz zdecydować się na realizację zadań tylko z aktualnej pracy. Zostanie ona normalnie oceniona.

## Zadania do wykonania w ramach bieżącej pracy domowej

Zadaniem na ten tydzień jest skorzystanie z ogólno dostępnego API SpaceX i wykorzystanie pobranych danych do zasilenia listy startów.   Pliki JSON z listą lotów z poprzedniego zadania już nie będą nam potrzebne.

Dokumentacja API pod adresem:
https://github.com/r-spacex/SpaceX-API/wiki/Launches

API daje nam mozliwosc pobierania tylko lotów spełniających konkretne wymagania.
Przykładowo, żeby pobrac liste lotów, które odbyły się w 2017 należy odwołac się do:

```GET https://api.spacexdata.com/v2/launches?launch_year=2017```

Wykorzystujac powyzsze tzw. "query strings" obsłuż filtrowanie po nazwie rakiety *All Rockets | Falcon 1 | Falcon 9 | Falcon 10 | Falcon Heavy*, pobierajac jedynie te ktore spelniaja podany warunek
W przypadku braku wyników wyświetl na stronie informacje "Sorry, no launches found".
Warto jeszcze obsluzyc przypadek kiedy nie uda się połączyc z API i dostaniemy error (HTTP status:4xx).

Dodatkowo należy zaimplementowac komponent tzw. Loading Bar / Spinner , który będzie pokazywał, że oczekujemy na odpowiedź z serwera.

**Przykłady:**
- React:
- http://www.davidhu.io/react-spinners/
- https://github.com/KyleAMathews/react-spinkit
- JS/CSS/SVG:
- https://spin.js.org
- https://loading.io  

Do komunikacji klient ↔ serwer skorzystaj z Fetch API.
Wybór pomiedzy Promise a async/await pozostawiamy Tobie.

## Co będzie oceniane

* Oddanie w terminie i działające GitHub Pages
* Pobranie listy lotów z API
* Dzialajace pobieranie listy lotow uwzgledniajac filtry
* Stworzenie i ostylowanie komponentu Loading/Spinner
* Obsluzenie pustej listy wyników oraz optencjalnego bledu komunikacji

## ⚠️ UWAGA!
- Pamiętaj o zbudowaniu projektu i deploy'u na GitHub Pages.
- Na wykonanie tego zadania masz czas do:
  - wtorku **22 maja do 12:00** (południe) - 100% punktów.
  - przy okazji kolejnej pracy domowej - 50% punktów
- **Do tego czasu uzupełnij ankietę z odpowiedziami**: [comming soon]

## ❓ Pytania

Jeśli masz jakieś pytanie, stwórz issue w naszym repo :)  https://github.com/daftcode/frontend_levelup_2018/issues

Jeśli umiesz odpowiedzieć na pytanie innego uczestnika - odpowiedz.

Zachęcamy do skonfigurowania powiadomień o nowych Issues.


