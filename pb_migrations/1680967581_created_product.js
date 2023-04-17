migrate((db) => {
  const collection = new Collection({
    "id": "qwlzezqs13h8bul",
    "created": "2023-04-08 15:26:21.849Z",
    "updated": "2023-04-08 15:26:21.849Z",
    "name": "product",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "j2w9s5as",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "av9d0ahz",
        "name": "body",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "palw7iwy",
        "name": "tag",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qwlzezqs13h8bul");

  return dao.deleteCollection(collection);
})
