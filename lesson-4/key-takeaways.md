**Hàm forEach:**
Cú pháp:
array.forEach(function(element, index, array) {
    // code xử lý mỗi phần tử
});
Trong đó: element: giá trị của phần tử hiện tại, index là chỉ số của phần từ đó, array mảng gốc đang được duyệt.

**Hàm for...of**
Cú pháp:
for (let element of iterable) {
    // code xử lý mỗi phần tử
}
iterable = một đối tượng có thể lặp (mảng, chuỗi, Set, Map, …).
element = giá trị của từng phần tử trong iterable (không phải index như for...in).
