
// IIFE NÚT BẬT TẮT CART
(function(){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    //Khi nhấn vào nút cart thêm show cart
    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-cart');
    });
}) ();

// THÊM ITEM VÀO CART 
(function(){
    //Lấy ra hết các nút mua hàng
    const cartBtn = document.querySelectorAll('.store-item-icon');
    
    //Bắt sự kiện khi click vào nút mua hàng
    cartBtn.forEach(function(btn){
        btn.addEventListener('click', function(event){
        
            // điều kiện khi click vào nút mua hàng
            if(event.target.parentElement.classList.contains('store-item-icon')){

                // lấy ra địa chỉ ảnh ở đối tượng gần đó
                let fullPath = event.target.parentElement.previousElementSibling.src;
                // lấy vị trí của img 
                let pos = fullPath.indexOf("img") + 3;
                // cắt địa chỉ ảnh tại fullPath đến đoạn img 
                let partPath = fullPath.slice(pos);

                // tạo ra một object là item chứa tên sản phẩm (name) ảnh (img) và giá (price)
                const item = {};
                // đổi đường dẫn ảnh sang img-cart (để lấy ảnh nhỏ | hơn lưu ý là tên ảnh phải giống nhau chỉ khác tên thư mục)
                item.img = `img-cart${partPath}`;

                // lấy tên sản phẩm 
                let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                //đưa tên sản phẩm vào trong item
                item.name = name;

                // lấy giá sản phẩm 
                let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
                let finalPrice = price.slice(1).trim();

                //đưa giá sản phầm vào trong item
                item.price = finalPrice;

                // tạo ra một div (cartItem) để thêm vào cart
                const cartItem = document.createElement('div');
                cartItem.classList.add(
                    "cart-item",
                    "d-flex",
                    "justify-content-between",
                    "text-capitalize",
                    "my-3"
                );
                cartItem.innerHTML =
                `
                    <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                    <div class="item-text">
                        <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                        <span>$</span>
                        <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                    </div>
                    <a href="#" id='cart-item-remove' class="cart-item-remove">
                        <i class="fas fa-trash"></i>
                    </a>
                </div>
                `;

                // lấy cart ra 
                const cart = document.getElementById('cart');
                // lấy tổng giá tiền 
                const total = document.querySelector('.cart-total-container');
                // thêm cart item, total vào trong cart (insertBefore)
                cart.insertBefore(cartItem, total);
                alert('Bạn Đã Thêm Thành Công')
                showTotal();
            }
        })
    })

    //tạo function tính tổng tiền
    function showTotal(){
        //tạo một mảng total chứa tất cả giá tiền của item
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');

        //lấy tất cả cách giá tiền của item
        items.forEach(function(item){
            //đẩy hết vào mảng total
            total.push(parseFloat(item.textContent));
        });

        // tính tổng tiền 
        const totalMoney = total.reduce((total, item) =>{
            total += item;
            return total;
        }, 0);
        
        // làm tròn giá tiền 
        const finalMoney = totalMoney.toFixed(2);

        // đưa giá trị tiền hiển thị lên ô cart
        document.getElementById('cart-total').textContent = finalMoney;
        document.querySelector('.item-total').textContent = finalMoney;
        // hiện thị độ dài của mảng total cũng là hiển thị số item đã đưa vào
        document.getElementById('item-count').textContent = total.length;

        
    }
}) ();