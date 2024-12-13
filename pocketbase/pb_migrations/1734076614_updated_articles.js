/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b8wosoodi66n1il")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lugtv25l",
    "name": "URL",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b8wosoodi66n1il")

  // remove
  collection.schema.removeField("lugtv25l")

  return dao.saveCollection(collection)
})
