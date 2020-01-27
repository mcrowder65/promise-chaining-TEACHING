Welcome back! I hope you enjoyed the exercise and you were able to solve it.

Let's solve the exercise

```js
utilities
  .getDogBreeds()
  .then(getDogNames)
  .then(console.log)
```

Now if you look at the terminal, you can that it's just an array of dog breeds, rather than an array of objects
with dog breeds in them

If you noticed here, we actually have `.then` called twice here. This is called promise chaining.

Since getDogNames is returned in a promise resolution callback, in order to get the resulting value of that result,
we have to call .then on that result in order to log it properly.

We'll go more into depth about promise chaining in the next video, I'll see you there
