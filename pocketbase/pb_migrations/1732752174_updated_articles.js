/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b8wosoodi66n1il")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jzo7s5c0",
    "name": "category",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "tous",
        "développement",
        "communication",
        "design"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b8wosoodi66n1il")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jzo7s5c0",
    "name": "category",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Tous",
        "Développement",
        "Communication",
        "Design"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
