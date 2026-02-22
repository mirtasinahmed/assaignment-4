01.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:An element is retrieved using getElementById, because there is only one id.
getElementsByClassName can be used to retrieve multiple elements of the same class.
querySelector retrieves the first matching element using the CSS selector.
querySelectorAll retrieves all matching elements using the CSS selector.



02.How do you create and insert a new element into the DOM?

Ans:First, a new element is created with document.createElement.
Then, it is inserted into the HTML with appendChild or append.

03.What is Event Bubbling? And how does it work?

Ans:Event Bubbling means that when an event occurs on an element, it first acts on that element, then gradually moves up to its parent elements.

04.What is Event Delegation in JavaScript? Why is it useful?

Ans:Event Delegation means setting an event listener once on the parent element and handling the events of the child elements. This reduces the code and the event still works even if a new element is added later.

05.What is the difference between preventDefault() and stopPropagation() methods?

Ans: PreventDefault stops the element's own default behavior. StopPropagation stops the event from propagating to the parent element.