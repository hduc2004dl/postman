// ============================================================
// POSTMAN TEST SCRIPTS - Lab Postman
// API: https://jsonplaceholder.typicode.com
// Dán từng đoạn vào tab "Tests" của request tương ứng
// ============================================================


// ============================================================
// REQUEST 1: GET {{base_url}}/posts
// Dán vào tab Tests của "GET All Posts"
// ============================================================

pm.test("[GET All Posts] Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("[GET All Posts] Response time < 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

pm.test("[GET All Posts] Response is JSON array", function () {
    const json = pm.response.json();
    pm.expect(json).to.be.an("array");
});

pm.test("[GET All Posts] Array has 100 items", function () {
    const json = pm.response.json();
    pm.expect(json.length).to.eql(100);
});

pm.test("[GET All Posts] Each item has id, title, body, userId", function () {
    const json = pm.response.json();
    json.forEach(function (post) {
        pm.expect(post).to.have.property("id");
        pm.expect(post).to.have.property("title");
        pm.expect(post).to.have.property("body");
        pm.expect(post).to.have.property("userId");
    });
});


// ============================================================
// REQUEST 2: GET {{base_url}}/posts/1
// Dán vào tab Tests của "GET Post by ID"
// ============================================================

pm.test("[GET Post by ID] Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("[GET Post by ID] Response time < 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

pm.test("[GET Post by ID] Response is JSON", function () {
    pm.response.to.be.json;
});

pm.test("[GET Post by ID] Response has field: id", function () {
    const json = pm.response.json();
    pm.expect(json).to.have.property("id");
});

pm.test("[GET Post by ID] Response has field: title", function () {
    const json = pm.response.json();
    pm.expect(json).to.have.property("title");
});

pm.test("[GET Post by ID] Post id equals 1", function () {
    const json = pm.response.json();
    pm.expect(json.id).to.eql(1);
});

pm.test("[GET Post by ID] userId is a number", function () {
    const json = pm.response.json();
    pm.expect(json.userId).to.be.a("number");
});


// ============================================================
// REQUEST 3: POST {{base_url}}/posts
// Dán vào tab Tests của "POST Create Post"
// Body (raw JSON):
// {
//   "title": "Bai viet thu nghiem",
//   "body": "Day la noi dung bai viet duoc tao bang Postman",
//   "userId": 1
// }
// ============================================================

pm.test("[POST Create] Status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("[POST Create] Response time < 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

pm.test("[POST Create] Response has field: id", function () {
    const json = pm.response.json();
    pm.expect(json).to.have.property("id");
});

pm.test("[POST Create] Returned id is 101", function () {
    const json = pm.response.json();
    pm.expect(json.id).to.eql(101);
});

pm.test("[POST Create] Title matches request", function () {
    const json = pm.response.json();
    pm.expect(json.title).to.eql("Bai viet thu nghiem");
});

pm.test("[POST Create] userId equals 1", function () {
    const json = pm.response.json();
    pm.expect(json.userId).to.eql(1);
});

// Lưu id vào biến môi trường để dùng ở request sau
pm.environment.set("created_post_id", pm.response.json().id);


// ============================================================
// REQUEST 4: PUT {{base_url}}/posts/1
// Dán vào tab Tests của "PUT Update Post"
// Body (raw JSON):
// {
//   "id": 1,
//   "title": "Tieu de da cap nhat",
//   "body": "Noi dung moi sau khi cap nhat bang Postman",
//   "userId": 1
// }
// ============================================================

pm.test("[PUT Update] Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("[PUT Update] Response time < 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

pm.test("[PUT Update] Response is JSON", function () {
    pm.response.to.be.json;
});

pm.test("[PUT Update] id is still 1", function () {
    const json = pm.response.json();
    pm.expect(json.id).to.eql(1);
});

pm.test("[PUT Update] Title was updated", function () {
    const json = pm.response.json();
    pm.expect(json.title).to.eql("Tieu de da cap nhat");
});

pm.test("[PUT Update] Body was updated", function () {
    const json = pm.response.json();
    pm.expect(json.body).to.eql("Noi dung moi sau khi cap nhat bang Postman");
});


// ============================================================
// REQUEST 5: DELETE {{base_url}}/posts/1
// Dán vào tab Tests của "DELETE Post"
// ============================================================

pm.test("[DELETE] Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("[DELETE] Response time < 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

pm.test("[DELETE] Response body is empty object", function () {
    const json = pm.response.json();
    pm.expect(json).to.eql({});
});
