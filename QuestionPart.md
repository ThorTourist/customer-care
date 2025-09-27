
 # 1. What is JSX, and why is it used?
 =>Ans: It’s a syntax extension for JavaScript that looks similar to HTML, and it’s used in React to describe what the UI should look like.
 # 2. What is the difference between State and Props?
 =>Ans:Props are like inputs to a component — data passed from a parent that the child can only read, not change. State is data managed inside a component itself, which can change over time (like a counter or form value).
 # 3- What is the useState hook, and how does it work?
 => Ans:The useState hook in React lets functional components hold and manage data that can change over time. It returns the current state value and a function to update it. When the state is updated, React automatically re-renders the component with the new value, making it easy to create interactive UIs like counters, forms, or toggles. 

 # 4- How can you share state between components in React?
 =>Ans: In React, I can share state between components by lifting the state up to their closest common parent and passing it down as props, or by using the Context API to make state available to multiple components without prop drilling. 
# 5 - How is event handling done in React?

=>Ans: In React, I handle events by using camelCase event names directly in JSX and passing a function as the handler. For example, instead of HTML’s onclick, I use onClick. I can define the handler function inside the component and call it when the event occurs.

--