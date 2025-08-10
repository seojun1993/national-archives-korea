$(document).ready(function() {
    // 메뉴 데이터 정의
    const menuData = {
        '국가행정조직': [
            { name: '중앙행정기관', link: '#central-admin', children: 
                {
                    '부': {},
                    '처': {},
                    '청': {},
                    '외국': {},
                    '원': {},
                    '위원회': {},
                    '대통령직속(위원회)': {},
                    '대통령직속(기타)': {},
                    '국무총리직속(위원회)': {},
                    '국무총리직속(기타)': {}
                }
             },
            { name: '보조기관', link: '#support-org', children: 
                {
                    '부': {},
                    '처': {},
                    '청': {},
                    '외국': {},
                    '원': {},
                    '위원회': {},
                    '대통령직속(위원회)': {},
                    '대통령직속(기타)': {}
                }
             },
            { name: '보좌기관', link: '#assistant-org' },
            { name: '합의제행정기관', link: '#collegial-admin' },
            { name: '부속기관', link: '#affiliated-org' },
            { name: '특별지방행정기관', link: '#special-local-admin' },
            { name: '대통령자문위원회', link: '#presidential-advisory' },
            { name: '한시기구', link: '#temporary-org' },
            { name: '제외기구', link: '#excluded-org' }
        ],
        '자치행정조직': [
            { name: '광역자치단체', link: '#metropolitan-gov' },
            { name: '기초자치단체', link: '#basic-local-gov' },
            { name: '하부행정기구', link: '#sub-admin-org' },
            { name: '의회사무기구', link: '#assembly-secretariat' },
            { name: '직속기관', link: '#direct-org' },
            { name: '사업소', link: '#business-office' },
            { name: '출장소', link: '#branch-office' },
            { name: '보조기관', link: '#local-support-org' },
            { name: '보좌기관', link: '#local-assistant-org' }
        ],
        '교육행정조직': [
            { name: '시.도 교육청', link: '#provincial-edu-office' },
            { name: '시도교육청 직속기관', link: '#edu-direct-org' },
            { name: '교육위원회 의사국', link: '#edu-committee-secretariat' },
            { name: '지역교육청', link: '#regional-edu-office' },
            { name: '지역교육청 소속기관', link: '#regional-edu-affiliated' }
        ],
        '입법조직': [
            { name: '보조기관', link: '#legislative-support' }
        ],
        '정부투자기관 및 기타': [
            { name: '정부투자기관', link: '#gov-investment-org' },
            { name: '정부출연단체', link: '#gov-funded-org' },
            { name: '공적단체', link: '#public-org' },
            { name: '보조단체', link: '#subsidiary-org' },
            { name: '재투자단체', link: '#reinvestment-org' },
            { name: '재출연단체', link: '#re-funded-org' },
            { name: '기금출연.보조단체', link: '#fund-supported-org' },
            { name: '행정사무대행단체', link: '#admin-agency-org' },
            { name: '기타', link: '#other-org' }
        ],
        '산하기관': [
            { name: '정부출연기관', link: '#gov-research-org' },
            { name: '정부투자기관', link: '#gov-invest-org' },
            { name: '정부재투자기관', link: '#gov-reinvest-org' },
            { name: '정부출자기관', link: '#gov-equity-org' },
            { name: '기금관리기관', link: '#fund-management-org' },
            { name: '정부보조기관', link: '#gov-subsidy-org' },
            { name: '출연,투자,출자기관의 자회사', link: '#subsidiary-companies' },
            { name: '기타', link: '#other-sub-org' }
        ],
        '위원회': [
            { name: '행정', link: '#admin-committee' },
            { name: '의결', link: '#decision-committee' },
            { name: '자문', link: '#advisory-committee' },
            { name: '심의', link: '#deliberation-committee' }
        ],
        '초등학교': [
            { name: '초등학교(본교)', link: '#elementary-main' }
        ],
        '중학교': [
            { name: '중학교(본교)', link: '#middle-main' }
        ],
        '고등학교': [
            { name: '일반계 고등학교', link: '#general-high' },
            { name: '전문계 고등학교', link: '#vocational-high' },
            { name: '기타 고등학교 과정', link: '#other-high' }
        ],
        '고등교육기관': [
            { name: '4년제 정규대학', link: '#university-4year' },
            { name: '산업대학', link: '#industrial-university' },
            { name: '교육대학', link: '#education-university' },
            { name: '전문대학', link: '#technical-college' },
            { name: '방송통신대학', link: '#distance-university' },
            { name: '대학원 대학', link: '#graduate-school' },
            { name: '각종학교', link: '#misc-schools' }
        ],
        '사법기관': [
            { name: '사법조직', link: '#judicial-org' }
        ],
        '헌법기관': [
            { name: '헌법조직', link: '#constitutional-org' }
        ],
        '미분류': []
    };
    
    // 페이지 로딩 시 첫 번째 메뉴(active 상태)의 내용을 모바일 우측에 표시
    const $firstActiveMenu = $('.detail_search_section aside nav ul > li.active');
    if ($firstActiveMenu.length > 0) {
        const firstMenuTitle = $firstActiveMenu.find('button').text().trim();
        const firstMenuData = menuData[firstMenuTitle];
        
        if (firstMenuData) {
            updateMobileRightContent(firstMenuTitle, firstMenuData);
        }
    }
    
    // 버튼 클릭 이벤트
    $('.detail_search_section aside nav ul > li > button').on('click', function(e) {
        e.preventDefault();
        
        const $clickedLi = $(this).closest('li');
        const menuTitle = $(this).text().trim();
        
        // active 상태 변경
        $clickedLi.addClass('active').siblings().removeClass('active');
        
        // 해당 메뉴의 데이터가 있는 경우만 우측에 리스트 표시
        if (menuData[menuTitle] && menuData[menuTitle].length > 0) {
            updateMobileRightContent(menuTitle, menuData[menuTitle]);
        } else {
            // 데이터가 없는 경우 (미분류 등)
            updateMobileRightContent(menuTitle, []);
        }
    });
    
    /**
     * 모바일용 우측 콘텐츠 영역 업데이트 함수
     * @param {string} title - 메뉴 제목
     * @param {Array} menuItems - 메뉴 아이템 배열
     */
    function updateMobileRightContent(title, menuItems) {
        const $rightContentMobile = $('.organ_submenu_list.mobile');
        
        let listHtml = '';
        
        if (menuItems.length > 0) {
            listHtml = '<ul class="mobile_submenu_list">';
            
            menuItems.forEach(function(item) {
                listHtml += `<li><a href="${item.link}">${item.name}</a></li>`;
            });
            
            listHtml += '</ul>';
        } else {
            listHtml = '<p>하위 메뉴가 없습니다.</p>';
        }
        
        // 우측 모바일 영역에 표시 (타이틀 제외하고 리스트만)
        $rightContentMobile.html(listHtml);
    }
    
});