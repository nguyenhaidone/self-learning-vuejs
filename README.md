**VueJS Practice**

1. **Communication between state and related component**

a. **Props**

- Cơ chế cho phép Parent Component truyền data xuống cho Child Component thông qua các attr.

b. **Custom Event**

- Sử dụng $emit để phát ra sự kiện và truyền tải thông tin và dữ liệu từ component con lên component cha và ngược lại.

2. **Communitcation between state and non-related component**

a. **EventBus**

- Là một đối tượng được sử dụng để giao tiếp giữa các component không liên quan đến nhau bằng cách phát ra ($emit) và lắng nghe ($on) các sự kiện .

b. **VueX, Pinia,..**

- Sử dụng một số thư viện quản lý trạng thái như VueX, Pinia. Nó cung cấp một store để lưu trữ và quản lý trạng thái của các component trong ứng dụng.
