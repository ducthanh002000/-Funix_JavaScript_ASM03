"use strict";
// tạo biến data để lấy tổng số bài viết để những dòng lệnh bên dưới sẽ sử dụng
let data;
// tạo hàm hiện tin tức
const news = async function (country, category, pageSize, page, apiKey) {
    try {
        const res = await fetch(
            `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${api}`
        );
        // res sẽ trả về một promise
        //.json() để lấy nội dung của promise đó
        // nội dung đó có dạng 1 object như sau
        // {status: 'ok', totalResults: 38, articles: Array(20)}
        // gán data bằng object đó
        data = await res.json();

        for (let i = (page - 1) * pageSize; i < (page - 1) * pageSize + pageSize; i++) {
            newsEl.insertAdjacentHTML(
                "beforeend",
                `<div class="col-lg-12"  style="border: 2px solid gray; padding-left: 0px; padding-right: 0px;margin-bottom: 12px;">
                    <div class="row">
                    <div class="col-lg-4">
                    <img src="${data.articles[i].urlToImage}">
                    </div>
                    <div class="col-lg-8">
                    <h2>${data.articles[i].title}</h2>
                    <h6>${data.articles[i].description}</h6>
                    <button type="button"><a href="${data.articles[i].url}" >View</a></button>
                    </div>                        
                </div>
                </div>`
            );
        }
    } catch (err) {
        console.log(err);
    }
};
// api key lấy ở trên mạng
const api = "27892062764147f5896bc15c4e88103a";
// khởi tạo trạng thái page ban đầu bằng 1, cho hiện tin tức và ẩn đi nút previous
let page = 1;
news("us", user.category, Number(user.pageSize), page, api);
// class hidden đã được thêm vào file css ở cuối cùng
prevBtn.classList.add("hidden");
// thêm sự kiện cho nút next
nextBtn.addEventListener("click", function () {
    // mỗi lần click thì sẽ tăng biến page lên 1
    page += 1;
    // sau đó xóa bảng tin tức đi
    newsEl.innerHTML = "";
    // để trạng thái của page tương ứng
    pageEl.textContent = page;
    // hiện lại tin tức với tham số mới ( cụ thể là page)
    news("us", user.category, Number(user.pageSize), page, api);
    // và hiện lên nút previous
    prevBtn.classList.remove("hidden");
    // kiểm tra nếu số trang nhân với số bài mỗi trang
    // lớn hơn bằng tổng số bài viết
    // thì sẽ ẩn đi nút next
    if (page * user.pageSize >= data.articles.length) {
        nextBtn.classList.add("hidden");
    }
});
prevBtn.addEventListener("click", function () {
    if (nextBtn.classList.contains("hidden")) {
        nextBtn.classList.remove("hidden");
    }
    page -= 1;
    newsEl.innerHTML = "";
    pageEl.textContent = page;
    news("us", user.category, Number(user.pageSize), page, api);
    prevBtn.classList.remove("hidden");
    if (page == 1) {
        prevBtn.classList.add("hidden");
    }
});
