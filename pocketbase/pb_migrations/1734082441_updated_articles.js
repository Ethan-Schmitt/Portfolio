/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b8wosoodi66n1il")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "832gclnv",
    "name": "note",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b8wosoodi66n1il")

  // remove
  collection.schema.removeField("832gclnv")

  return dao.saveCollection(collection)
})
