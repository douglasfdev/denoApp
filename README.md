# Api DenoJS vanilla

#### Rotas Usuário
<details><summary><b>Mostrar instruções</b></summary>

As rotas ficam no endereço **localhost:5555**

```http
POST http://localhost:5000/createUser
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. nome para cadastro do usuário|
| `age` | `number` | **Obrigatório**. idade para cadastro do usuário |
| `sex` | `string` | **Obrigatório**. sexo para cadastro do usuário|

**Resposta**
```json
{
  "id": "c7784a1a-1441-4ab4-97f4-e8fab00753cd",
  "name": "XPTO",
  "age": "32",
  "sex": "M"
}
```
---
```http
GET http://localhost:5000/getUsers
```
**Resposta**
```json
[
  {
    "name": "XPTO",
    "age": "32",
    "sex": "M"
  }
]
```
---
```http
GET http://localhost:5000/findUser?id=a4a4185a-3b11-4224-90de-41fde8a7aeb3
```
**Resposta**
```json
{
  "id": "a4a4185a-3b11-4224-90de-41fde8a7aeb3",
  "name": "XPTO",
  "age": "32",
  "sex": "M"
}
```
---
```http
PUT http://localhost:5000/updateUser?id=a4a4185a-3b11-4224-90de-41fde8a7aeb3
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. nome para cadastro do usuário|
| `age` | `number` | **Obrigatório**. idade para cadastro do usuário |
| `sex` | `string` | **Obrigatório**. sexo para cadastro do usuário|

**Resposta**
```json
{
  "id": "a4a4185a-3b11-4224-90de-41fde8a7aeb3",
  "name": "XPTO Updated",
  "age": "22",
  "sex": "F"
}
```
---
```http
DELETE http://localhost:5000/deleteUser?id=f99cf58a-a3f2-4706-9a24-b35e48e4b416
```

**Resposta**
```json

```
</details>
