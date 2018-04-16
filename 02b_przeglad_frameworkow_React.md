# 📖 Zadanie domowe 2

Należy stworzyc komponent **Counter**  w React ⚛️, który w swoim działaniu będzie zbliżony do minutnika.
* Powinien wyświetlac w czasie rzeczywistym, co 1 sekunde, akutalny stan licznika.

* Komponent przyjmuje następujące wartości:
    - wymagane:
        - ```from```: number [sec]
        - ```to```: number [sec]
    - opcjonalne:
        - ```onSuccess```: function

 * Rozpoczęcie odliczania nastepuje automatycznie.
 Odliczanie od liczby podanej w ```from```  do momentu osiągnięcia liczby ```to```.
 * W momencie osiągnięcia wartości ```to``` należy wywołac funkcje/callback podaną w ```onSuccess``` o ile ta istnieje.

 * Dodatkowo  po kliknięciu w komponent nastąpi zresetowanie licznika i ponowny start zaczynając od wartosci ```from```.

Dla Asów  programowania:
 * ℹ️ dodanie odpowiednich ```PropTypes```
 * ⏳ format minutnika: ```mm:ss``` -> ```00:59```
 * ⏱ jeżeli timer nie doszedł do końca to kliknięcie w komponent wstrzymuje timer, a kolejne kliknięcie wznawia odliczanie.
 * 💅 dodanie dowolnych styli inline
 
### ⚠️ UWAGA!
Wszystkie prace domowe będą przez nas sprawdzane. 
<br>Na wykonanie tego zadania masz czas do poniedziałku **23 kwietnia do 12:00** (południe).  
Do tego czasu uzupełnij ankietę z odpowiedziami: https://goo.gl/forms/????