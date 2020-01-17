# Common Problems

1. Prop drilling

   - redundant code
   - API changes are noisy
   - separation of concerns (prop-drilled components take props they themselves may not care about)

1. Render props

   - can't access props from above in the component tree
   - prevents optimization (https://reactjs.org/docs/render-props.html#be-careful-when-using-render-props-with-reactpurecomponent)

1. Redux (and other flux libraries)

   - when used in a component library, dictates the app's state solution
   - can be boilerplate-heavy
   - requires consumers to write state code

# Useful Patterns

1. Using refs to expose instance properties and methods

   - addresses CP2
   - useImperativeHandle
   - include reference to element (e.g. `ref.current.element`)
   - avoids component nesting to access context

   TODO: example

   ```jsx
useImperativeHandle(ref.current, () => ({
  
}))
   ```

1. Using context to communicate between compound components

   - can allow for more natural-feeling and concise API

     ```jsx
     // redundant
     <RadioButton name="color" value="red" checked={color === 'red'} />
     <RadioButton name="color" value="green" checked={color === 'green'} />
     <RadioButton name="color" value="blue" checked={color === 'blue'} />

     // concise
     <RadioGroup name="color" value={color}>
       <RadioButton value="red" />
       <RadioButton value="green" />
       <RadioButton value="blue" />
     </RadioGroup>

     // with a more generic name, can be re-used
     <SelectionGroup name="sizes" value={sizes}>
       <Checkbox value="small" />
       <Checkbox value="medium" />
       <Checkbox value="large" />
     </SelectionGroup>
     ```

1. Using context to share a `dispatch` function

   - addresses CP3

   TODO: example

   ```tsx
   type ActionType = 'foo' | 'bar';

   interface Action {
     type: ActionType;
     payload?: unknown;
   }

   type Dispatch = (action: Action) => void;

   const FluxContext = React.createContext<Dispatch>();
   ```
