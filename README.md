# cs319-projecy

## backend instruction
```
cd backend
```
```
npm install express mongoose dotenv cors body-parser jsonwebtoken bcryptjs
```
```
npm install --save-dev nodemon
```
jwt token generate
```
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
place jwt token in .env file
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/
JWT_SECRET=your_jwt_token
```

## frontend instruction
```
npm install
```
```
npm install mongoose@latest
```
```
npm install mongodb@latest
```

## mongoDB compass
import connections![image](https://github.com/user-attachments/assets/07a80f99-3b98-4854-ad40-341e8ebe002a)
choose "compass-connections.json"
