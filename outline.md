# Cross Component Communication

> In this talk, I’ll go over the various options we have for communicating between React components and outline their pros and cons. Then we’ll dive into how to avoid some of the pitfalls by leveraging patterns we’ve found useful in some of our most complicated components here at Namely.

- focus on the problems and how we use context and hooks to solve them

## context

- intro to context
- context is everywhere
- Namely use cases
- core component intercommunication
  - "private api"
  - allows data to be set at root level for compound comps
- Form state

## refs

- "customizing" refs
  - allow usage of instance methods outside of context (if rendered in same comp)
  - don't need to use render props
  - no component nesting

## useReducer/context (shared dispatch)

- react docs "how to avoid passing callbacks down"
