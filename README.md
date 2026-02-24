1.What is the difference between getElementById, getElementsByClassName, and
querySelector / querySelectorAll?

==> getElementById() mainly selects one single element using its unique ID,
return one element or null if not found.

then getElementByClassName() select multiple element with same class name.

by querySelector() select the first matching element using css selector

and querySelectorAll() Selects all matching elements.

2.How do you create and insert a new element into the DOM?

==> o create and insert a new element into the DOM, first I need to select the
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
