Todo:

✅ draw wireframe
✅lay out html document and add HTML elements: shells, buttons, text, divs, spans, and balls under each shell 
✅style the css to reveal the ball under each shell using a 'reveal class'
-add WIGGLES to app.js
-validate and test 
-add extra styling 

Grab Dom Elements: 
Shell 1, 2, 3, button 1, 2, 3, wins, losses 

Add Event Listener and Let State: 
-add event listener on click to perform this function 
-add needed functions added to each shell click
  -if shell is clicked: 
    -reset 'reveal class' in case this is not users first round
    -add function: generate random number in between 1-3 using mat.random and math.Ceil and multiplying by 3
    -if the random number matches shell #: enable the 'reveal' class and increment wins by 1 using ++ operator 
    -else: random shell 2 reveals and increments 1 on losses
    -else random shell 3 increments 1 on losses
    -update the text.content of win, loss, and total spans (derived from total of wins, and losses) for the state to match the view 


W I G G L E
grab dom elements 
-shell 1, 2, and 3 
-buttons 1, 2, and 3
-wins total number
-losses total number
-totals total number 




















## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
