import { test } from '@playwright/test';
test('Open Registration page', async ({ page }) => {
    await test.step('Truy cập trang chủ', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step('Truy cập Todo page', async () => {
        await page.locator('//a[text()="Bài học 4: Personal notes"]').click();
    });
    const notes = [
        {
            title: "VNPT đề xuất phát triển ba sản phẩm công nghệ chiến lược về AI",
            content: "VNPT đề xuất với Chính phủ tham gia ba dự án AI có tầm ảnh hưởng quốc gia, nhằm tiên phong dẫn dắt chuyển đổi số. "
        },
        {
            title: "Cơ chế giúp thợ lặn Croatia nín thở hơn 29 phút",
            content: "Vận động viên lặn tự do Vitomir Maričić có thể nín thở 29 phút 3 giây nhờ tập luyện làm tăng lượng oxy dự trữ và trì hoãn phản xạ hít thở không tự chủ của cơ thể."
        },
        {
            title: "Trăng máu trên bầu trời thế giới",
            content: "Gần 6 tỷ người được chiêm ngưỡng Mặt Trăng chuyển sang màu đỏ trong hiện tượng nguyệt thực kéo dài hơn một giờ vào đêm 7/9, rạng sáng 8/9."
        },
        {
            title: "Máy tính bảng Galaxy Tab S11 có giá từ 21 triệu đồng",
            content: "Bộ đôi tablet cao cấp Galaxy Tab S11 và Tab S11 Ultra được cải tiến thiết kế, đi kèm bút S Pen mới và Galaxy AI thế hệ mới."
        },
        {
            title: "Nhà máy điện hạt nhân đóng cửa lò phản ứng do sứa",
            content: "Nhà máy điện hạt nhân Paluel tuần trước phải đóng cửa một trong bốn lò phản ứng khi đàn sứa lớn xâm nhập bộ lọc của trạm bơm nước."
        },
    ]
    await test.step("Thêm notes", async () => {
        for (const note of notes) {
            await page.locator('//input[@id="note-title"]').fill(note.title);
            await page.locator('//textarea[@id="note-content"]').fill(note.content);
            await page.locator('//button[@id="add-note"]').click();
        }
    });
    await test.step(`Search theo tiêu đề:`, async () => {
        await page.locator('//input[@id="search"]').fill(notes[3].title);
    });
});