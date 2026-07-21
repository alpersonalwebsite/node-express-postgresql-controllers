# Node, Express and PostgreSQL with generic controllers

## Overview

This is an easy, basic and raw example of **HOW to** implement an API with Node, Express and PostgreSQL (with Sequelize ORM) **with generic controllers**.

This project is based on the template [`node-express-postgresql`](https://github.com/alpersonalwebsite/node-express-postgresql). Check out that repo's README for setup and development.

---

## CRUD Generic Controllers

### Using the Generic Controllers

The idea of `generic controllers` is to perform common `CRUD operations` for any model:
* Create a document in a collection (POST)
* Retrieve all the documents in a collection or one document by its ID (GET)
* Update a document in a collection by its ID (PUT)
* Delete a document in a collection by its ID (DELETE)

**This template ships only the read controller** — `getSomeOrAll`, wired to `GET /api/users` and `GET /api/applications`. The `createOne` / `getOne` / `updateOne` / `deleteOne` examples below show how you would extend the pattern; you'd implement those controllers in `/src/utils/crud.js` first.

If you need to create a custom controller for a particular resource, add it to `/src/resources/collection/controllers.js` and update the router with the route and the exported method (controller) `/src/resources/collection/router.js`

### Controllers and Side Effects

For operations involving `side effects`, or, everything outside the scope of retrieving (GET) you should definitely need authentication and authorization before executing the operation. You don't want random people creating, updating, deleting your resources. This should be obvious, however, if you are using this a template be extremely careful since we are not protecting endpoints (it is not the goal of this material).

Once you have the proper logic in place to allow certain entities to perform CRUD operations, and, if you are going to use `generic controllers`, just chain the method and pass the imported controller in your `/src/resources/collection/router.js`

So, as an example, if you want to support the creation of a new application in the applications collection your `/src/resources/applications/router.js` would look like:

```js
router.route('/').get(controllers.getSomeOrAll)
  .post(controllers.createOne)
```

If you want to allow, updating and deleting an application in the applications collection:

```js
router.route('/:id').get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.deleteOne)
```
