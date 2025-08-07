
// 전체 체크박스 기능
document.addEventListener('DOMContentLoaded', function() {
    const allCheckbox = document.getElementById('styleCd00');
    const individualCheckboxes = document.querySelectorAll('input[name="styleCdArr"]');
    
    // 전체 체크박스 클릭 이벤트
    allCheckbox.addEventListener('change', function() {
        const isChecked = this.checked;
        
        // 개별 체크박스들을 전체 체크박스와 동일하게 설정
        individualCheckboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
        });
    });
    
    // 개별 체크박스 클릭 이벤트
    individualCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // 모든 개별 체크박스가 선택되었는지 확인
            const allChecked = Array.from(individualCheckboxes).every(cb => cb.checked);
            
            // 전체 체크박스 상태 업데이트
            if (allChecked) {
                allCheckbox.checked = true;
            } else {
                allCheckbox.checked = false;
            }
        });
    });
});



const openTypeDetail = () => {
    document.body.style.overflow = 'hidden';
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false'); // 접근성 보완
  }
  
  const closeTypeDetail = () => {
    document.body.style.overflow = 'auto';
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true'); // 접근성 보완
  }
