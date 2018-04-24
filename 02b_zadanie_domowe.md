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
 * 🤡 kaźda inna radosna twórczośc mile widziana

### ⚠️ UWAGA!
Wszystkie prace domowe będą przez nas sprawdzane.
Na wykonanie tego zadania masz czas do poniedziałku **23 kwietnia do 12:00** (południe).
Do tego czasu uzupełnij ankietę z odpowiedziami: [https://goo.gl/forms/3w2axY36bpAzDrX43](https://goo.gl/forms/3w2axY36bpAzDrX43)


### Pytania?
Jeśli masz jakieś pytanie, stwórz issue w naszym repo :)  https://github.com/daftcode/frontend_levelup_2018/issues

### Przykladowe rozwiazanie
```javascript
/**
 * Counter
 * Component used to displaying time in format mm:ss
 *
 * sample use:
 * <Counter from={4} to={1} onSuccess={() => alert("success!")}/>
 * */
 
import * as React from "react"
import PropTypes from "prop-types"
import format from "date-fns/format"

/**
 * Util function to display diff time in seconds between two parameters
 */
function getTimeDiff({ to, from }) {
  return Math.abs(to - from)
}

class Counter extends React.PureComponent {
  counterInterval

  state = {
    secondsLeft: getTimeDiff(this.props),
    active: false,
  }

  componentDidMount() {
    this.togglePlay()
  }

  componentDidUpdate() {
    this.validateSuccess();
  }

  /**
   * Run onSuccess callback if defined after counter is finished
   */
  validateSuccess = () => {
    const { secondsLeft } = this.state
    const { onSuccess } = this.props
    if (secondsLeft === 0 && onSuccess) {
      onSuccess()
    }
  }

  /**
   * Run counter
   */
  start = () => {
    this.counterInterval = setInterval(this.tick, 1000) //1000ms -> 1sec
  }

  tick = () => {
    const { secondsLeft } = this.state
    const newState = {
      secondsLeft: secondsLeft - 1,
    }

    if (newState.secondsLeft === 0) {
      newState.active = false
      this.stop()
    }
    this.setState(newState)
  }

  /**
   * Clear timer used by counter
   */
  stop = () => {
    clearInterval(this.counterInterval)
  }

  /**
   * Pause or play depending on active status
   */
  togglePlay = () => {
    const { active, secondsLeft } = this.state
    if(secondsLeft !== 0){
      this.setState({ active: !active })
      if (active) {
        this.stop()
      } else {
        this.start()
      }
    }
  }

  /**
   * Render formatted remaining time within button
   */
  renderTimeLabel = () => {
    const { active, secondsLeft } = this.state

    const inlineStyle = {
      fontSize: "2rem",
      background: active ? "green" : "red",
      borderRadius: "0.5rem",
      padding: 10,
    }

    const date = new Date(0)
    date.setSeconds(secondsLeft)

    return <button style={inlineStyle}>{format(date, "mm:ss")}</button>
  }

  render() {
    return <span onClick={this.togglePlay}>{this.renderTimeLabel()}</span>
  }
}

Counter.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
  onSuccess: PropTypes.func,
}

export default Counter
```
