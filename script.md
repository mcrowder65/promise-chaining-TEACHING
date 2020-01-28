Alright friends, welcome back!

In the last exercise, we were first introduced to the concept of promise chaining.

In this little example we have here, you get see we get dogBreeds, then we map over the list of those dogBreeds to just an array
of strings, and then we just console.log that list immediately.

So, everytime you use `.then` to resolve a promise, you actually are essentially returning another promise.
Whether or not that promise has a value inside of it is another thing.

So what do you think would happen if I did added another `.then` after the last `.then(console.log)`

**\*\*\*** PAUSE FOR 5 SECONDS \***\*\*\*\***

It just outputs undefined.

Why?

Well, let's declare these functions here. instead of just doing console.log

```js
utilities
  .getDogBreeds()
  .then(getDogNames)
  .then(value => {
    console.log(value)
  })
  .then(value => {
    console.log(value)
  })
```

First, we console.log(value), which is the dog breed array,
then we return nothing, which in javascript, is actually returning undefined.

So then, since you can chain another `.then` infinitely, we are just outputting undefined since that's what we returned.

What if we changed that first console.log() to return, `Thinkster rules!`

```js
utilities
  .getDogBreeds()
  .then(getDogNames)
  .then(value => {
    console.log(value)
    return "Thinkster rules!"
  })
  .then(value => {
    console.log(value)
  })
```

What do you think this is going to output?
**\*\*\*** PAUSE FOR 5 SECONDS \***\*\*\*\***

Let's see...

It outputs the dog breed string array, and thinkster rules!

Now that we know how promise chaining works, we're going to add another function into our chain of promises here.
