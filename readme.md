# README Answers

## 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

- `getElementById`: Finds one element by its unique ID. Returns a single element or null.
- `getElementsByClassName`: Finds all elements with a specific class. Returns a live HTMLCollection.
- `querySelector`: Finds the first element matching a CSS selector. Returns one element or null.
- `querySelectorAll`: Finds all elements matching a CSS selector. Returns a static NodeList.
- Differences: `getElementById` is for unique IDs, others handle multiple elements. `getElementsByClassName` is class-specific, `querySelector`/`querySelectorAll` use any CSS selector. `getElementsByClassName` is live, `querySelectorAll` is static.

## 2. How do you create and insert a new element into the DOM?

Create an element with `document.createElement(tagName)`, set its properties like `textContent` or `className`, and insert it using `parent.appendChild(element)`, `parent.append(element)`, or `parent.insertBefore(newElement, referenceElement)`.

## 3. What is Event Bubbling and how does it work?

Event bubbling is when an event on an element triggers and then propagates up to its parent elements in the DOM hierarchy, triggering their event listeners if they exist.

## 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is attaching a single event listener to a parent element to handle events for its children, using event bubbling. It’s useful to save memory, handle dynamically added elements, and simplify code for repeated elements.

## 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?

- `preventDefault()`: Stops the default browser action for an event.
- `stopPropagation()`: Stops the event from bubbling up to parent elements or capturing down.
- Difference: `preventDefault()` stops default behavior, `stopPropagation()` stops event propagation.