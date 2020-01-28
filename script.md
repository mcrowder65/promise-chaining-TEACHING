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
The function we want to add is going to look through our list of dog strings, and it's going to determine if
a breed we supply into the function is actually there, if it's not there, then it will just return the string: "Not Found"

Let's go ahead and delete the other .thens we added.

We're back to the array of strings.

```js
function getDog(breed, names) {
  return names.find(name => name === breed) || "Not Found"
}
```

OK, looking at this function, we can see we'll input a breed, and then it'll look through the names of the breeds, and return
the breed or just `Not Found`. Let's plug this function into our chain here.

```js
utilities
  .getDogBreeds()
  .then(getDogNames)
  .then(names => {
    return getDog("Golden Retriever", names)
  })
  .then(console.log)
```

OK cool, it looks like when we input `Golden Retriever`, it outputs Golden Retriever into the terminal.

Now what if we put in Golden asdf?

And Not Found is printed.

OK great.

Do you think there could be a way we could actually write this better?

**\*\*\*** PAUSE FOR 5 SECONDS \***\*\*\*\***

So we could actually make `getDog` be a function that returns a function.

The first function accepts the breed, and the second function accepts names.

Let's make this change.

```js
function getDog(breed) {
  return function(names) {
    return names.find(name => name === breed) || "Not Found"
  }
}

utilities
  .getDogBreeds()
  .then(getDogNames)
  .then(names => {
    return getDog("Golden Retriever")(names)
  })
  .then(console.log)
```

OK great, Golden Retriever is now being printed.

And instead of returning this function that we have to invoke twice. We can actually just invoke it once in the chain, and it'll automatically
accept the names

```js
utilities
  .getDogBreeds()
  .then(getDogNames)
  .then(getDog("Golden Retriever"))
  .then(console.log)
```

Great!

Now we have a clean promise chain resolution happening here, I'll see you in the next video, where we'll introduce some more animals into the mix!
