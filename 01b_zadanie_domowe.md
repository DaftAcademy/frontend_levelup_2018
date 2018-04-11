# Zadanie domowe 1

* Skonfiguruj GIT'a tak aby móc korzystać z protokołu `ssh` 
  https://help.github.com/articles/connecting-to-github-with-ssh/
* Stwórz fork'a (jeśli nie zrobiłeś tego na zajęciach) naszego *boilerplate'u*
  https://github.com/mkaczkowski/daftcode-react-starter
* Pobierz repozytorium na swój komputer (jeśli wcześniej korzystałeś z protokołu `https`, zmień `remote` na `ssh`
   ```bash
   git remote set-url origin <your-repo-ssh-url>
   ```
* Uruchom boilerplate w trybie deweloperskim i zobacz czy wszystko działa
  ```bash
  npm install
  npm start
  ```
* Zbuduj aplikację w trybie produkcyjnym `npm run build`
* Wrzuć zbudowaną aplikację na swoje `GitHub Pages`.
  Możesz wzorować się na naszym repo kursowym: https://github.com/daftcode/frontend_levelup_2018
  W skrócie: 
  - zbuduj aplikację
  - stwórz branch o nazwie `gh-pages`
  - na tym branchu przepisz całą zawartość folderu `dist` do głównego katalogu. Możesz wykasować wszystkie inne pliki projektu.
  - zrób `commit` oraz `push -u origin gh-pages`

  Szczegóły znajdziesz na: https://pages.github.com
  
* ### UWAGA!
  Wszystkie prace domowe będą przez nas sprawdzane. Na wykonanie tego zadania masz czas do poniedziałku **16 kwietnia do 12:00** (południe).  
  Do tego czasu uzupełnij ankietę z odpowiedziami: https://goo.gl/forms/7Q8ZjQMHz2W13XQa2