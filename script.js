const ulTag = document.querySelector('ul');
let totalPages = 20;

const element = (totalPages, page) => {
    let liTag = '';
    let activeLi;
    let beforePages = page - 1; // 5 - 1 = 4
    let afterPages = page + 1; // 5 + 1 = 6
    if(page > 1){
        liTag += `<li class="btn prev" onclick="element(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
    }

    if(page > 2){
        liTag += `<li class="numb" onclick="element(totalPages, 1)"><span>1</span></li>`;
        if(page > 3){
            liTag += `<li class="dots"><span>...</span></li>`;
        }
    }

    if(page == totalPages){
        beforePages = beforePages - 2;
    }else if(page == totalPages - 1){
        beforePages = beforePages - 1;
    }

    if(page == 1){
        afterPages = afterPages + 2;
    }else if(page == 2){
        afterPages = afterPages + 1;
    }

    // ID - Pengulangan untuk mendapatkan 3 "pagination". Logikanya adalah, halaman sekarang - 1, maka indexnya akan menjadi halaman sekarang -1, lalu ditambah 1 untuk for loopnya untuk membuat 3 index pengulangan.
    // EN - Loops to get 3 "paginations". The logic is, the current page is -1, then the index will be the current page -1, then add 1 for the for loop to create 3 indexes.
    for(let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
        if(pageLength > totalPages){
            continue;
        } 
        if(pageLength == 0){
            pageLength = pageLength + 1;
        }
        if(page == pageLength){
            activeLi = 'active';
        } else {
            activeLi = '';
        }
        liTag += `<li class="numb ${activeLi}" onclick="element(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
    }

    if(page < totalPages - 1){
        if(page < totalPages - 2){
            liTag += `<li class="dots"><span>...</span></li>`;
        }
        liTag += `<li class="numb" onclick="element(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
    }
    
    if(page < totalPages){
        liTag += `<li class="btn next" onclick="element(totalPages, ${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
    }
    ulTag.innerHTML = liTag;
}

element(totalPages, 5);