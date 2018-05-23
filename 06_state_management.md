# Zarządzanie stanem
Flux, Redux, **MobX**, Vuex

---

## Flux

*Facebook*

> An application architecture for React utilizing a unidirectional data flow.


![](https://github.com/facebook/flux/raw/master/docs/img/flux-diagram-white-background.png)

---

## Redux

> Predictable state container for JavaScript apps

- `Actions`
  - simple objects with `type`
- `Action creators`
    ```js
    function addTodo(text) {
      return {
        type: ADD_TODO,
        text
      }
    }
    ```
---

## Redux

- `Reducers`
  `(previousState, action) => newState`

  ```js
  const todoApp = combineReducers({
    visibilityFilter,
    todos
  })
  ```

- `Store`
  - single store
    ```js
    import { createStore } from 'redux'
    import todoApp from './reducers'
    const store = createStore(todoApp)
    ```
  - dispatching actions
    ```js
    store.dispatch(addTodo('Hello'))
    ```
---

## Redux + React

```jsx
const mapStateToProps = state => ({
  todos: getVisibleTodos(
    state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => {
    dispatch(toggleTodo(id))
  }
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

//...

<Provider store={store}>
  <VisibleTodoList />
</Provider>
```
---

## Vuex

> Centralized State Management for Vue.js

![](https://vuex.vuejs.org/vuex.png)

---

## MobX
> Simple, scalable state management.

![](https://mobx.js.org/docs/flow.png)

---

# Dodanie MobX do projektu

- `mobx`, `mobx-react`
- `babel-plugin-transform-decorators-legacy`

< live coding >

---

# Stan aplikacji

- Duża dowolność
- `observables`

< live coding >

---

# MobX + React

- `observer`
- `DevTools`, `mobx-react-devtools`

< live coding >

---

# Modyfikacja stanu

- MobX strict mode
- `action`

< live coding >

---

# Reakcje

- `observer`
- `reaction`, `autorun`

< live coding >

---

Ciekawe materiały:
- https://youtu.be/ZGVwMkrL2n0
- https://youtu.be/3J9EJrvqOiM
- https://blog.cloudboost.io/3-reasons-why-i-stopped-using-react-setstate-ab73fc67a42e
- https://hackernoon.com/how-to-decouple-state-and-ui-a-k-a-you-dont-need-componentwillmount-cc90b787aa37
