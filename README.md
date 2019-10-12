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
### GET Request
```bash
- "/api/product" => get all products data from database. Query params:
 - "Search" -> search by products name,
 - "Sort" -> sorting data based on ascending or descending,
 - "Limit" -> limitation data per page,
 - "Page" -> redirect to specific page.
```
### POST Request
```bash
- "/api/product" => create new data
```

### PATCH Request
```bash
- "/api/product/reduce/:id" => reduce quantity of the product
- "/api/product/addcount/:id" => add quantity of the product
```

### PUT Request
```bash
"/api/product/:id" => Update data products
```

### DELETE Request
```bash
 "/api/product/:id" => Delete a products in database with specific id
```
## Categories Routes

### GET Request
```bash
"/api/category" => get all category data from database.
```

### POST Request
```bash
"/api/category" => create new data to category database
```

### PUT Request
```bash
"/api/category/:id" => Update data category
```

### DELETE Request
```bash
"/api/category/:id" => Deleting data category in database.
```
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
