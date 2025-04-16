/**
 * JSON vs XML
 * 
 * JSON (JavaScript Object Notation) và XML (eXtensible Markup Language) đều là các định dạng được sử dụng để lưu trữ và trao đổi dữ liệu.
 * Dưới đây là sự so sánh giữa hai định dạng này:
 */

// Ví dụ về JSON
const jsonData = {
    "name": "John",
    "age": 30,
    "city": "New York",
    "hobbies": ["đọc sách", "du lịch", "bơi lội"]
};

console.log("Dữ liệu JSON:", JSON.stringify(jsonData, null, 2));

// Ví dụ về XML
const xmlData = `
<person>
    <name>John</name>
    <age>30</age>
    <city>New York</city>
    <hobbies>
        <hobby>đọc sách</hobby>
        <hobby>du lịch</hobby>
        <hobby>bơi lội</hobby>
    </hobbies>
</person>
`;

console.log("Dữ liệu XML:", xmlData);

/**
 * Sự khác biệt chính:
 * 
 * 1. Cú pháp:
 *    - JSON sử dụng cặp key-value và mảng.
 *    - XML sử dụng cấu trúc cây với các thẻ mở và thẻ đóng.
 * 
 * 2. Khả năng đọc:
 *    - JSON gọn gàng hơn và dễ đọc hơn.
 *    - XML dài dòng và có thể khó đọc hơn.
 * 
 * 3. Kiểu dữ liệu:
 *    - JSON hỗ trợ chuỗi, số, mảng, boolean và null.
 *    - XML coi mọi thứ là văn bản và cần phân tích thêm để xác định kiểu dữ liệu.
 * 
 * 4. Sử dụng:
 *    - JSON được sử dụng rộng rãi trong các API web và ứng dụng hiện đại.
 *    - XML thường được sử dụng trong các hệ thống cũ và quy trình làm việc dựa trên tài liệu.
 */