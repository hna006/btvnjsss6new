let libraries = ["Toán", "Văn", "Anh"];
function login() {
    let username = "admin";
    let password = "12345";
    let attempts = 0;
    while (attempts < 3) {
        let user = prompt("Nhập tên đăng nhập:");
        let pass = prompt("Nhập mật khẩu:");
        if (user === username && pass === password) {
            alert("Đăng nhập thành công!");
            return true;
        } else {
            attempts++;
            alert("Sai thông tin! Lần thử: " + attempts);
        }
    }
    alert("Tài khoản đã bị khóa!");
    return false;
}
function showMenu() {
    return prompt(
        "=== QUẢN LÝ THƯ VIỆN ===\n" +
        "1. Nhập thêm sách\n" +
        "2. Hiển thị danh sách\n" +
        "3. Tìm kiếm sách\n" +
        "4. Cập nhật sách\n" +
        "5. Đảo ngược danh sách\n" +
        "6. Gộp kho sách\n" +
        "7. Thoát\n" +
        "Mời bạn chọn (1-7):"
    );
}
function addBooks() {
    let input = prompt("Nhập tên sách, cách nhau bằng dấu phẩy:");
    let newBooks = input.split(",");
    for (let book of newBooks) {
        libraries.push(book.trim());
    }
    alert("Đã thêm " + newBooks.length + " sách vào kho!");
}
function showBooks() {
    console.log("Danh sách sách:");
    for (let i = 0; i < libraries.length; i++) {
        console.log((i + 1) + ". " + libraries[i]);
    }
}
function searchBook() {
    let name = prompt("Nhập tên sách cần tìm:");
    let index = libraries.indexOf(name);
    if (index !== -1) {
        alert("Tìm thấy tại vị trí: " + index);
    } else {
        alert("Không tìm thấy sách!");
    }
}
function updateBook() {
    let oldName = prompt("Nhập tên sách cần sửa:");
    let index = libraries.indexOf(oldName);
    if (index !== -1) {
        let newName = prompt("Nhập tên mới:");
        libraries[index] = newName;
        alert("Đã cập nhật thành công!");
    } else {
        alert("Không tìm thấy sách!");
    }
}
function reverseBooks() {
    libraries.reverse();
    alert("Đã đảo ngược danh sách!");
}
function mergeBooks() {
    let input = prompt("Nhập thêm sách để gộp, cách nhau bằng dấu phẩy:");
    let newBooks = input.split(",");
    libraries = libraries.concat(newBooks.map(b => b.trim()));
    alert("Đã gộp thêm sách vào kho!");
}
function main() {
    if (!login()) return;
    let choice;
    do {
        choice = showMenu();
        switch (choice) {
            case "1": addBooks(); break;
            case "2": showBooks(); break;
            case "3": searchBook(); break;
            case "4": updateBook(); break;
            case "5": reverseBooks(); break;
            case "6": mergeBooks(); break;
            case "7": alert("Thoát chương trình!"); break;
            default: alert("Lựa chọn không hợp lệ!");
        }
    } while (choice !== "7");
}
main();