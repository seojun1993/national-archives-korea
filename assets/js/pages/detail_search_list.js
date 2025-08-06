// 아코디언 슬라이드 기능
document.addEventListener('DOMContentLoaded', function() {
    // 아코디언 토글 버튼들
    const accordionToggles = document.querySelectorAll('.filter-group-toggle');
    
    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const targetId = this.getAttribute('aria-controls');
            const targetElement = document.getElementById(targetId);
            
            // 현재 버튼의 상태 변경
            this.setAttribute('aria-expanded', !isExpanded);
            
            // 타겟 요소 토글
            if (isExpanded) {
                targetElement.classList.remove('active');
            } else {
                targetElement.classList.add('active');
            }
        });
    });


});

const detailInfoClick = (e) => {
    const target = e;
    const targetClass = target.classList;
    const targetParent = target.closest('.item');
    const detailInfo = targetParent.nextElementSibling;
    const listTable = targetParent.nextElementSibling.nextElementSibling;
    
    // 같은 아이템 내의 다른 버튼들 찾기
    const sameItemButtons = targetParent.querySelectorAll('button');
    
    if (targetClass.contains('active')) {
        target.classList.remove('active');
        if (detailInfo && detailInfo.classList.contains('detail_info')) {
            detailInfo.style.display = 'none';
        }ㅁ
    } else {
        // 같은 아이템 내의 다른 버튼들 비활성화
        sameItemButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        // 다른 테이블들 숨기기
        if (listTable && listTable.classList.contains('list_table')) {
            listTable.style.display = 'none';
        }
        
        // 현재 버튼 활성화
        target.classList.add('active');
        if (detailInfo && detailInfo.classList.contains('detail_info')) {
            detailInfo.style.display = 'block';
        }
    }
}

const listInfoClick = (e) => {
    const target = e;
    const targetClass = target.classList;
    const targetParent = target.closest('.item');
    const detailInfo = targetParent.nextElementSibling;
    const listTable = targetParent.nextElementSibling.nextElementSibling;
    
    // 같은 아이템 내의 다른 버튼들 찾기
    const sameItemButtons = targetParent.querySelectorAll('button');
    
    if (targetClass.contains('active')) {
        target.classList.remove('active');
        if (listTable && listTable.classList.contains('list_table')) {
            listTable.style.display = 'none';
        }
    } else {
        // 같은 아이템 내의 다른 버튼들 비활성화
        sameItemButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        // 다른 테이블들 숨기기
        if (detailInfo && detailInfo.classList.contains('detail_info')) {
            detailInfo.style.display = 'none';
        }
        
        // 현재 버튼 활성화
        target.classList.add('active');
        if (listTable && listTable.classList.contains('list_table')) {
            listTable.style.display = 'block';
        }
    }
}