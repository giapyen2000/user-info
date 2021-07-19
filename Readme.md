mô hình: MVC

M => model -> giống một tờ đơn
V => view -> giao diên
C => controller -> điều hướng

error code => {
    200: success
    201: create
    204: no content (delete)
    400: err
    401: auth fail
    403: forbidden
    404: not found
    500: error server
}
```javascript
    {
        "createdAt": "2021-07-19T14:34:26.339Z",
        "_id": "60f58d95b97e9b9084212346",
        "name": "khiem",
        "fullName": "vu trong khiem",
        "phone": "097456784567",
        "address": "thai binh",
        "email": "vukhiem@gmail.com",
        "__v": 0
    }
```

model -> controller -> router -> index