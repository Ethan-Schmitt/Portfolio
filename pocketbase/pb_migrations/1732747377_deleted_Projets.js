/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("m72giuwm3ljlnxi");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "m72giuwm3ljlnxi",
    "created": "2024-10-14 08:49:02.154Z",
    "updated": "2024-10-14 08:49:02.154Z",
    "name": "Projets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "udnlpyaw",
        "name": "Nom",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
