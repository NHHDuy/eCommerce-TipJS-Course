# Cấu trúc dự án: 
src \
|_configs:\
|_controllers:\
|_models:\
|_services:\
|_utils:

# Tạo file app, server riêng.

# export module.


# Các package không thể thiếu: 
- __Express__: npm i express
- __nodemon__: từ 19 trở đi thì không cần, node hỗ trợ luôn.
- __morgan__: In log khi chạy. Thông tin ra vào, request response.
  - __dev__: đầu ra ngắn gọn vừa đủ. 
    - _GET / 200 5.801 ms - 29_
  - __combined__: Đầy đủ theo tiêu chuẩn apache. __Nên dùng trong product__
    - _::1 - - [03/Apr/2024:14:41:57 +0000] "GET / HTTP/1.1" 200 29 "-" "Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) WindowsPowerShell/5.1.19041.2364"_
  - __common__: Giống combined, không có resource.
  - _::1 - - [03/Apr/2024:14:44:06 +0000] "GET / HTTP/1.1" 200 29_
  - __short__: Ngắn hơn common.
    - _::1 - GET / HTTP/1.1 304 - - 8.942 ms_
  - __tiny__: Ngắn gọn nhất 
    - _GET / 304 - - 3.933 ms_ 
- __helmet__: Ngăn chặn người ta đọc được thông tin máy chủ.
  - Câu lệnh xem thông tin: _curl localhost:3300 __--include___
- __compression__: Nén dữ liệu, giảm lượng thông tin truyền tải. Nhẹ nhàng hơn. 


- ### Tham số error trong 1 router tồn tại trong function handle error.