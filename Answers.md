1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- map, reduce, filter do not produce side-effects

- Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Redux helps to manage large amount of data in a growing app. Redux creates a single store object where all the data resides, (hence the 'single source of truth' statement), and be accessed from anywhere in the app.

- Actions, created by action creators, are the info that contain an action type and some data that get passed to reducers.

- Reducers are pure functions that update the state in the store - they take the previous state and action type, and returns the next state

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is global. Component state is local only to the one component and not accessible to other components. App state is needed when the state needs to be shared across the whole application.


1.  What is middleware?

- Middleware is a programming tool to intercept some process via a function, so as to do something else before continuing with the original process 


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- It is a type of middleware that enable action-creators to be asynchronous

1.  Which `react-redux` method links up our `components` with our `redux store`?

- connect()
