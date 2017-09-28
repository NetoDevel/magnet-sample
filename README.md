# magnet-sample
simple crud with mysql

# Before
create databases and tables, verify the file migrations.sql

# Resource categories

### POST
    url: http://0.0.0.0:3000/category
    body: 
        {
            "category": {
                "name": "new category"
            }
        }
    response:
        {
            "category": {
                "name": "asd category",
                "id": 10
            }
        }

### PUT
    url: http://0.0.0.0:3000/category
    body:
       {
            "category": {
                "id": 9,
                "name": "edit category"
            }
        }
    response:
        {
            "category": {
                "name": "edit category",
                "id": 9
            },
            "affectedRows": 1
        }

### GET
    url: http://0.0.0.0:3000/category
    response:
    {
        "categories": [
            {
                "id": 2,
                "name": "test"
            },
            {
                "id": 3,
                "name": "test"
            }
        ]
    }

### DELETE
    url:http://0.0.0.0:3000/category
    body:
        {
            "category": {
                "id": 9
            }
        }
    response:
        {
            "message": "Category removed successfully!",
            "affectedRows": 1
        }

## Tests
npm run test