
## Thông tin sinh viên

Nguyễn hoàng đức

---

## 1. Giới thiệu

**Postman** là công cụ kiểm thử API phổ biến, cho phép:
- Gửi HTTP request (GET, POST, PUT, DELETE…) đến server
- Xem và phân tích response (status code, body, headers, thời gian)
- Viết test script tự động kiểm tra kết quả
- Quản lý nhiều request theo Collection và Environment

Bài thực hành sử dụng API mẫu miễn phí: [JSONPlaceholder](https://jsonplaceholder.typicode.com)

---

## 2. Cài đặt

- Tải Postman tại: https://www.postman.com/downloads/
- Cài đặt và đăng nhập tài khoản miễn phí

---

## 3. Tạo Collection và Environment

### Collection
Tạo Collection tên **`Lab Postman`** để nhóm tất cả request lại.

### Environment
Tạo Environment tên **`JSONPlaceholder`** với biến:

| Variable | Initial Value |
|----------|--------------|
| `base_url` | `https://jsonplaceholder.typicode.com` |

> Sử dụng `{{base_url}}` trong URL thay vì gõ cứng địa chỉ, giúp dễ dàng thay đổi server sau này.

![Collection và Environment](images/01_collection_environment.png)

---

## 4. Thực hành các HTTP Method

### 4.1 GET — Lấy tất cả bài post

| Trường | Giá trị |
|--------|---------|
| Method | `GET` |
| URL | `{{base_url}}/posts` |

**Kết quả:** Trả về mảng 100 object JSON, status `200 OK`

![GET All Posts](images/02_get_all_posts.png)

---

### 4.2 GET — Lấy 1 bài post theo ID

| Trường | Giá trị |
|--------|---------|
| Method | `GET` |
| URL | `{{base_url}}/posts/1` |

**Kết quả:** Trả về 1 object post, status `200 OK`

![GET Post by ID](images/03_get_post_by_id.png)

---

### 4.3 POST — Tạo bài post mới

| Trường | Giá trị |
|--------|---------|
| Method | `POST` |
| URL | `{{base_url}}/posts` |
| Body | raw / JSON |

**Request Body:**
```json
{
  "title": "Bai viet thu nghiem",
  "body": "Day la noi dung bai viet duoc tao bang Postman",
  "userId": 1
}
```

**Kết quả:** Trả về object mới với `id: 101`, status `201 Created`

![POST Create Post](images/04_post_create.png)

---

### 4.4 PUT — Cập nhật bài post

| Trường | Giá trị |
|--------|---------|
| Method | `PUT` |
| URL | `{{base_url}}/posts/1` |
| Body | raw / JSON |

**Request Body:**
```json
{
  "id": 1,
  "title": "Tieu de da cap nhat",
  "body": "Noi dung moi sau khi cap nhat bang Postman",
  "userId": 1
}
```

**Kết quả:** Trả về object đã cập nhật, status `200 OK`

![PUT Update Post](images/05_put_update.png)

---

### 4.5 DELETE — Xoá bài post

| Trường | Giá trị |
|--------|---------|
| Method | `DELETE` |
| URL | `{{base_url}}/posts/1` |

**Kết quả:** Trả về `{}`, status `200 OK`

![DELETE Post](images/06_delete.png)

---

## 5. Test Script tự động

Viết test script trong tab **Tests** của request **GET Post by ID** để tự động kiểm tra response sau mỗi lần gửi request.

```javascript
// Test 1: Kiểm tra status code
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Test 2: Kiểm tra thời gian phản hồi
pm.test("Response time < 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

// Test 3: Kiểm tra kiểu dữ liệu trả về là JSON
pm.test("Response is JSON", function () {
    pm.response.to.be.json;
});

// Test 4: Kiểm tra response có trường 'id'
pm.test("Response has field: id", function () {
    const json = pm.response.json();
    pm.expect(json).to.have.property("id");
});

// Test 5: Kiểm tra response có trường 'title'
pm.test("Response has field: title", function () {
    const json = pm.response.json();
    pm.expect(json).to.have.property("title");
});

// Test 6: Kiểm tra id đúng bằng 1
pm.test("Post id equals 1", function () {
    const json = pm.response.json();
    pm.expect(json.id).to.eql(1);
});

// Test 7: Kiểm tra userId là số
pm.test("userId is a number", function () {
    const json = pm.response.json();
    pm.expect(json.userId).to.be.a("number");
});
```

**Kết quả:** 7/7 tests PASS

![Test Results](images/07_test_results.png)

---

## 6. Collection Runner

Chạy toàn bộ Collection để kiểm thử tự động tất cả request cùng lúc:

1. Click vào tên Collection **`Lab Postman`**
2. Chọn **Run collection**
3. Chọn Environment **`JSONPlaceholder`**
4. Click **Run Lab Postman**

![Collection Runner](images/08_collection_runner.png)

---

## 7. Kết luận

| Nội dung | Kết quả |
|----------|---------|
| Cài đặt và cấu hình Postman | ✅ Hoàn thành |
| Tạo Collection và Environment | ✅ Hoàn thành |
| Thực hiện GET request | ✅ Hoàn thành |
| Thực hiện POST request | ✅ Hoàn thành |
| Thực hiện PUT request | ✅ Hoàn thành |
| Thực hiện DELETE request | ✅ Hoàn thành |
| Viết Test Script tự động | ✅ Hoàn thành |
| Chạy Collection Runner | ✅ Hoàn thành |

Qua bài thực hành, đã nắm được cách sử dụng Postman để kiểm thử RESTful API, bao gồm gửi các loại HTTP request, quản lý biến môi trường, và viết test script tự động kiểm tra response.
