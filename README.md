# Backend Point Of Sales

RESTful API for Point of Sales App

### Task
```bash
- CRUD Products
- CRUD Categories
- Add/reduce Products (quantity)
- Search product by name
- Sort product by name, category, date update
- Pagination
- Cannot reduce order below 0(-1, -5, etc)
- Allowed CORS
- Login/register with JWT
```

### Stack

```python
- Node JS
- ExpressJS
- MySQL
- Cors
- Body-Parser
- JWT
```

### Build Setup
```bash
1. Clone repository
2. Install depedencies
3. Setup your environment variable in .env files (if not exists, create your own).
4. Import Database
5. Start server
```
## Product Routes
| Method |Endpoint  |Descsription  |Request Param  | Request Query  | Request Body  |
| --- | --- | --- | --- | --- | --- |
| GET | /api/product  | Get Product |   |Search: STRING, Limit: NUMBER, Page: NUMBER, Sort:STRING  |  |
| POST | /api/product | Add Product |  |  | Name: STRING, description: STRING, category: NUMBER, price: NUMBER, count: NUMBER, image |
| PATCH | /api/product/reduce/:id | Reduce Quantity Of The Product  | id:NUMBER |  |  |
| PATCH  | /api/product/addcount/:id | Add Quantity Of The Product | id:NUMBER |  |  |
| PUT |/api/product/:id  | Update Product |  |  | name: STRING, description: STRING, category: NUMBER, price: NUMBER, count: NUMBER, image |
|DELETE|  /api/product/:id | Delete Product | id: NUMBER |
## Categories Routes

| Method |Endpoint  |Descsription  |Request Param  | Request Query  | Request Body  |
| --- | --- | --- | --- | --- | --- |
| GET | /api/category  | Get Category |   |  |  |
| POST |/api/category | Add Category |  |  | name_category: STRING|
| PUT |/api/category/:id  | Update Category |  |  | name_category: STRING |
|DELETE|  /api/category/:id | Delete Category | id: NUMBER |

## Users Routes

### GET Request
```bash
"/api/user" => get all users data from database (Login required)
```

### POST Request
```bash
"/api/user/register" => Register/add new user to database
"/api/user/login" => Login new user to database (You will get a token)
```
