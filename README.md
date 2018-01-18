# Meow-todo
We've got our new meow app todo list, 
it's going to be number 1 in the app store and make us lots of cash! 
But some features aren't working, oh noes!!! Adding todo's is working, 
but we also need the following features:
1. Marking a todo completed
2. Deleting a todo
3. And Editing a todo
We should **only need** to Edit the todos.js reducers file to get everything implimented. 

# Marking a todo complete
1. There is an 'onChange' event on the TodoItem.js Component. 
```js
           <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}
          />
```
2. We just dont have anything under our reducer, 'COMPLETED_TODO' is just returning state! d'oh
3. So instead of just returning state, we need to get the index of the todo, return the items in state into a new array, but mark the todo with that particular index as completed. 

# Deleting a todo
1. There is a button on the TodoItem.js Component.
```js
<button className="destroy" onClick={() => deleteTodo(todo.id)} />
```
2. But someone hasn't filled out the reduer yet, or deleted it, that jerk!
3.  When we delete a todo, we want to return everything in our collection of todo's 
    but the todo id that we have, so that would be our conditional, the todo id.

# Editing a todo
1. We can double click on our todo's to turn it into edit mode, rad right. 
```js
<label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
```
2. But when we edit the text, the reducer just returns the existing state without making changes. ugh
3. When editing the text of a todo, we want to return a collection of todo's that is the
      same size, but we want to edit the todo text if it matches the todo id passed by the action, 
      if it doesn't match, we want to just return the todo item untouched. 
