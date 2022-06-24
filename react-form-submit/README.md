# React form submit

## When to validate?

- when form is submitted
  Allows the user to enter a valid value before warning
  Avoid unnecessary warning but maybe present feedback 'too late'

- when a input is losing focus
  Allows the user to enter a valid value before warning
  Very useful for untouched forms

- On every key stroke
  Warns user before had a chance of entering valid values
  if applied only on invalid inputs, has the potential of providing more direct feedback

How do you decide which one to use?

### Listen every key strokes

instent validation, reset the input

### use ref to fetch the inputs

only interested in it once when it submitted
