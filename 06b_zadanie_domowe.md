# 📖 Zadanie domowe 6

**Uwaga, ta praca jest kontynuacją poprzedniej**. Jeśli jej nie wykonałeś/łaś, to nic nie jest stracone. Możesz w ramach tej pracy wykonać zadania z pracy 5, 4, 3, oraz 2 i  **otrzymać wtedy maksymalnie połowę punktów** plus normalną ocenę z zakresu pracy 6.

Oczywiście możesz zdecydować się na realizację zadań tylko z aktualnej pracy. Zostanie ona normalnie oceniona.

## Zadania do wykonania w ramach bieżącej pracy domowej

Zadaniem na ten tydzień jest przeniesienie zarzadziania stanem aplikacji oraz fetchowania danych do `store` stworzonego z uyżyciem `MobX`.

Poniżej znajduje się przykład, od którego można zacząć budowanie `store` aplikacji.
```js
class MainStore {
    @observable currentViewName = '';  // 'list' / 'details'

    @observable listState = {
        rocketFilter: null,

        isLoading: false,
        // ...

        lauchesData: [], // fetched data
    }

    constructor() {
        // autorun fetching data
        // depends on currentViewName and rocketFilter
    }

    @action
    switchView(viewName){

    }

    @action
    setFilter(viewName){

    }
}
```

Tutaj znajdziecie przykład, który powstał podczas zajęć:
- [./sample_app/src/App.js](./sample_app/src/App.js)
- [./sample_app/src/stores/todoStore.js](./sample_app/src/stores/todoStore.js)
- [./sample_app/src/view/Todos.js](./sample_app/src/view/Todos.js)

## Co będzie oceniane

* Oddanie w terminie i działające GitHub Pages
* Poprawne dołączenie MobX'a do projektu
* Mechanizm przełączania pomiędzy widokami działający przy użyciu `store`
* Mechanizm fetchowania listy lotów z odpowiednim filterem poprzez `store` (z użyciem `autorun`)
* Componenty będące `observer`, nieposiadające wewnętrzego statnu i wyświetlające dane ze `store`

## ⚠️ UWAGA!
- Pamiętaj o zbudowaniu projektu i deploy'u na GitHub Pages.
- Na wykonanie tego zadania masz czas do:
  - poniedziałku **28 maja do 12:00** (południe)

- **Do tego czasu uzupełnij ankietę z odpowiedziami**: https://goo.gl/forms/9t7iB7xi3RVdU3MZ2
- **Pamiętaj o ankiecie dotyczącej tematu ostanich zajęć** (Na Wasze odpowiedzi czekamy do piątku 25 maja, do godziny 12:00): https://goo.gl/forms/sCCtZSFeApc5JSco1

## ❓ Pytania

Jeśli masz jakieś pytanie, stwórz issue w naszym repo :)  https://github.com/daftcode/frontend_levelup_2018/issues

Jeśli umiesz odpowiedzieć na pytanie innego uczestnika - odpowiedz.

Zachęcamy do skonfigurowania powiadomień o nowych Issues.


