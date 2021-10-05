
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
                console.log(event.target.parentElement.parentElement);
            }
        })
    })
}) ();