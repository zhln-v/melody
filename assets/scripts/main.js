all_elems = [];

let is_open_filter = false;
let filter_form = document.getElementById("filter");

let elems = document.getElementsByClassName('item__add-to-cart');
// console.log(elems)

for (let i = 0; i < elems.length; i++) {
    elems[i].querySelector('.text').addEventListener('click', add_product);
}

function add_product(e) {
    e = e.target.parentElement;
    console.log(e);
    let minus = e.querySelector('.product-minus-btn');
    let count = e.querySelector('.count');
    let plus = e.querySelector('.product-plus-btn');

    count.value = 1;

    e.classList.add('active');

    minus.addEventListener('click', minus_count);
    count.addEventListener('change', check_value);
    plus.addEventListener('click', plus_count);
}

function remove_product(e) {
    e = e.target.parentElement.parentElement;
    
    let minus = e.querySelector('.product-minus-btn');
    let count = e.querySelector('.count');
    let plus = e.querySelector('.product-plus-btn');

    e.classList.remove('active');

    minus.removeEventListener('click', minus_count);
    plus.removeEventListener('click', plus_count);
}

function check_value(e) {
    tmp = e;
    e = e.target;
    if (e.value <= 0) {
        remove_product(tmp);
        e.parentElement
        .parentElement
        .parentElement
        .parentElement
        .querySelector('.wrap-img')
        .querySelector('.product-end')
        .classList.remove('active');
    }

    if (e.value >= 10) {
        e.value = 10;
        e.parentElement
        .parentElement
        .parentElement
        .parentElement
        .querySelector('.wrap-img')
        .querySelector('.product-end')
        .classList.add('active');
    }
}

function minus_count(e) {
    tmp = e;
    e = e.target.parentElement;

    let count = e.querySelector('.count');
    
    if (count.value <= 1) {
        remove_product(tmp);
    } else {
        e.parentElement
        .parentElement
        .parentElement
        .querySelector('.wrap-img')
        .querySelector('.product-end')
        .classList.remove('active');
        count.value = parseInt(count.value) - 1;
    }
}

function plus_count(e) {
    e = e.target.parentElement;

    let count = e.querySelector('.count');
    
    if (count.value <= 9) {
        count.value = parseInt(count.value) + 1;
    }
    if (count.value == 10) {
        e.parentElement
        .parentElement
        .parentElement
        .querySelector('.wrap-img')
        .querySelector('.product-end')
        .classList.add('active');
    }

    console.log()
}

let back_btn = document.getElementById('back_btn');
back_btn.addEventListener('click', e => {
    e.preventDefault();
    window.history.back();
    console.log(window.history)
})

function open_filter() {
    let btn = document.getElementById("open_filter_btn");
    if (!is_open_filter) {
        btn.innerHTML = "Закрыть";
        btn.style.background = "#c33";
        filter_form.style.height = "auto";
        filter_form.style.overflow = "unset";
    } else {
        btn.innerHTML = "Все параметры";
        btn.style.background = "#fff";
        filter_form.style.height = "30px";
        filter_form.style.overflow = "hidden";
    }

    is_open_filter = !is_open_filter;
}
