1.What is the difference between getElementById, getElementsByClassName, and
querySelector / querySelectorAll?

==> getElementById() mainly selects one single element using its unique ID,
return one element or null if not found.

then getElementByClassName() select multiple element with same class name.

by querySelector() select the first matching element using css selector

and querySelectorAll() Selects all matching elements.

2.How do you create and insert a new element into the DOM?

==> To create and insert a new element into the DOM, first I need to select the
parent element where I want to add the new element. For this, I can use methods
like getElementById, getElementsByClassName, or querySelector /
querySelectorAll. If I want to select one specific element, I can use
getElementById or querySelector. If I want to select multiple elements, I can
use getElementsByClassName or querySelectorAll and loop through them.

After selecting the parent element, I will create a new element using
document.createElement(). Then I can add content to the new element using
innerText or innerHTML. If I want, I can also add styles or classes using
classList or style.

Finally, I will insert the new element into the DOM using methods like
appendChild(), prepend(), or insertBefore(). For example, I can select a
container using getElementById, create a new paragraph element, add text to it,
and then use appendChild() to add it to the container so it becomes visible on
the webpage. In simple words, I first select where I want to add something, then
create it, and then insert it into the page.

3.What is Event Bubbling? And how does it work?

==>Event bubbling is a way events move in the DOM when an event happens on an
element. When I click on an element, the event first runs on the target element
where I clicked, and then it moves upward to its parent elements. For example,
if I click a button inside a div, first the button event will run, then the div
event, and then the body event will run. This happens automatically unless I
stop it using event.stopPropagation(). In simple words, event bubbling means the
event goes from child to parent.

4.What is Event Delegation in JavaScript? Why is it useful?

==>Event delegation is a technique in JavaScript where I add one event listener
to a parent element instead of adding event listeners to each child element.
When an event happens on a child element, the event bubbles up to the parent,
and I can check which child element was clicked using event.target.

It is useful because it improves performance, especially when there are many
child elements or when elements are dynamically added to the DOM. Instead of
attaching multiple event listeners, I can just use one on the parent. In simple
words, event delegation helps me manage events more efficiently using bubbling.

5. What is the difference between preventDefault() and stopPropagation()
   methods?

==>preventDefault() is used to stop the default behavior of an element. For
example, it can stop a link from opening another page or stop a form from
submitting. On the other hand, stopPropagation() is used to stop the event from
bubbling up to parent elements. In simple words, preventDefault() stops default
browser actions, while stopPropagation() stops the event from moving to parent
elements.
