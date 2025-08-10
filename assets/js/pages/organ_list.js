$(document).ready(function() {
    // 메뉴 데이터 정의 (국가기록원 발행기관별 검색 사이트 기준)
    const menuData = {
        '국가행정조직': [
            { name: '중앙행정기관', link: '#central-admin', children: {
                '부': [],
                '처': [],
                '청': [],
                '외국': [],
                '원': [],
                '위원회': [],
                '대통령직속(위원회)': [],
                '대통령직속(기타)': [],
                '국무총리직속(위원회)': [],
                '국무총리직속(기타)': []
            }},
            { name: '보조기관', link: '#support-org', children: {
                '부기관장': [],
                '본부': [],
                '실': [],
                '국': [],
                '부': [],
                '과': [],
                '단1': [],
                '팀1': [],
                '센터': []
            }},
            { name: '보좌기관', link: '#assistant-org', children: {
                '담당관': [],
                '팀2': [],
                '센터2': []
            }},
            { name: '합의제행정기관', link: '#collegial-admin', children: {
                '행정위원회': [],
                '기타 합의제행정기관': [],
            }},
            { name: '부속기관', link: '#affiliated-org', children: {
                '시험연구기관': [],
                '교육훈련기관': [],
                '문화기관': [],
                '의료기관': [],
                '자문기관': [],
                '기타기관': []
            }},
            { name: '특별지방행정기관', link: '#special-local-admin', children: {
                '일반행정(병무)': [],
                '보훈': [],
                '국토': [],
                '건설': [],
                '조세행정(국세)': [],
                '관세': [],
            }},
            { name: '대통령자문위원회', link: ''},
            { name: '한시기구', link: ''},
            { name: '제외기구', link: ''}
        ],
        '자치행정조직': [
            { name: '광역자치단체', link: '#metropolitan-gov', children: {
                '특별시': [],
                '도': [],
                '광역시': [],
                '특별자치도': []
            }},
            { name: '기초자치단체', link: '#basic-local-gov', children: {
                '일반시': [],
                '도농복합시': [],
                '군': [],
                '자치구': [],
            }},
            { name: '하부행정기구', link: '#sub-admin-org', children: {
                '자치구가 아닌구': [],
                '읍': [],
                '면': [],
                '동': []
            }},
            { name: '의회사무기구', link: '#assembly-secretariat', children: {
                '의회사무처': [],
                '의회사무국': [],
                '의회사무과': []
            }},
            { name: '직속기관', link: '#direct-org', children: {
                '지방농촌신흥기구': [],
                '지방공무원교육원': [],
                '보건환경연구원': [],
                '보건소': [],
                '지방소방학교': [],
                '소방서': [],
                '시립대학': [],
                '전문대학': [],
            }},
            { name: '사업소', link: '#business-office', children: {
                '사업소': [],
                '본부': [],
                '과': [],
                '지역사업소': []
            }},
            { name: '출장소', link: '#business-office', children: {
                '도 출장소': [],
                '시 출장소': [],
            }},
            { name: '보조기관', link: '#business-office', children: {
                '실': [],
                '국': [],
                '본부': [],
                '과': [],
                '과단위 실': [],
            }},
            { name: '보좌기관', link: '#business-office', children: {
                '관': [],
                '담당관': [],
            }},
        ],
        '교육행정조직': [
            { name: '시·도 교육청', link: '#provincial-edu-office'},
            { name: '시도교육청 직속기관', link: '#edu-direct-org'},
            { name: '교육위원회 의사국', link: '#edu-direct-org'},
            { name: '지역교육청', link: '#regional-edu-office'},
            { name: '지역교육청 소속기관', link: '#regional-edu-office'},
        ],
        '입법조직': [
            { name: '보조기관', link: '#national-assembly', children: {
                '처': [],
                '국': [],
                '과': []
            }}
        ],
        '정부투자기관및기타': [
            { name: '정부투자기관', link: '#gov-investment-org'},
            { name: '정부출연단체', link: '#gov-research-org'},
            { name: '공적단체', link: '#gov-research-org'},
            { name: '보조단체', link: '#gov-research-org'},
            { name: '재투자단체', link: '#gov-research-org'},
            { name: '재출연단체', link: '#gov-research-org'},
            { name: '기금출연, 보조단체', link: '#gov-research-org'},
            { name: '행정사무대행단체체', link: '#gov-research-org'},
            { name: '기타체', link: '#gov-research-org'},
        ],
        '산하기관': [
            { name: '정부출연연구기관', link: '#gov-research-institutes'},
            { name: '정부투자기관', link: '#gov-research-institutes'},
            { name: '정부재투자기관', link: '#gov-research-institutes'},
            { name: '정부출자기관', link: '#gov-research-institutes'},
            { name: '기금관리기관', link: '#gov-research-institutes'},
            { name: '정부보조기관', link: '#gov-research-institutes'},
            { name: '출연,투자,출자기관의 자회사', link: '#gov-research-institutes'},
            { name: '기타', link: '#gov-research-institutes'},
        ],
        '위원회': [
            { name: '행정', link: '#central-admin-committee'},
            { name: '의결', link: '#central-admin-committee'},
            { name: '자문', link: '#central-admin-committee'},
            { name: '심의', link: '#central-admin-committee'},
        ],
        '초등학교': [
            { name: '초등학교(본교)', link: '#elementary-schools', children: {
                '공립': [],
            }},
        ],
        '중학교': [
            { name: '중학교(본교)', link: '#middle-schools', children: {
                '공립': [],
            }},
        ],
        '고등학교': [
            { name: '일반계 고등학교', link: '#general-high-schools', children: {
                '국립': [],
                '공립': [],
            }},
            { name: '전문계 고등학교', link: '#specialized-high-schools', children: {
                '공립': [],
            }},
            { name: '기타 고등학교과정', link: '#specialized-high-schools', children: {
                '사립': [],
            }}
        ],
        '고등교육기관': [
            { name: '4년제 정규대학', link: '#universities', children: {
                '국립': [],
                '사립': []
            }},
            { name: '산업대학', link: '#colleges', children: {
                '국립': [],
            }},
            { name: '교육대학', link: '#colleges', children: {
                '국립': [],
            }},
            { name: '전문대학', link: '#colleges', children: {
                '국립': [],
                '공립': [],
                '사립': [],
            }},
            { name: '방송통신대학', link: '#colleges', children: {
                '국립': [],
            }},
            { name: '대학원 대학', link: '#colleges', children: {
                '공립': [],
            }},
            { name: '각종학교', link: '#colleges', children: {
                '사립': [],
            }}
        ],
        '사법기관': [
            { name: '사법조직', link: '#courts'},
        ],
        '헌법기관': [
            { name: '헌법조직', link: '#constitutional-organs'},
        ],
        '미분류': []
    };
    
    // 페이지 로딩 시 첫 번째 메뉴(active 상태)의 내용 표시
    const $firstActiveMenu = $('.detail_search_section aside nav ul > li.active');
    if ($firstActiveMenu.length > 0) {
        const firstMenuTitle = $firstActiveMenu.find('button').text().trim();
        const firstMenuData = menuData[firstMenuTitle];
        
        if (firstMenuData) {
            // PC/모바일 구분해서 초기 로딩
            if (window.innerWidth >= 768) {
                updatePCContent(firstMenuTitle, firstMenuData);
            } else {
                updateMobileRightContent(firstMenuTitle, firstMenuData);
            }
        }
    }
    
    // 1depth 버튼 클릭 이벤트
    $('.detail_search_section aside nav ul > li > button').on('click', function(e) {
        e.preventDefault();
        
        const $clickedLi = $(this).closest('li');
        const menuTitle = $(this).text().trim();
        
        // active 상태 변경
        $clickedLi.addClass('active').siblings().removeClass('active');
        
        // 해당 메뉴의 데이터가 있는 경우만 표시
        if (menuData[menuTitle] && menuData[menuTitle].length > 0) {
            // PC/모바일 구분해서 렌더링
            if (window.innerWidth >= 768) {
                updatePCContent(menuTitle, menuData[menuTitle]);
            } else {
                updateMobileRightContent(menuTitle, menuData[menuTitle]);
            }
        } else {
            // 데이터가 없는 경우 (미분류 등)
            if (window.innerWidth >= 768) {
                updatePCContent(menuTitle, []);
            } else {
                updateMobileRightContent(menuTitle, []);
            }
        }
    });

    // 모바일 2depth 클릭 이벤트 (동적 바인딩)
    $(document).on('click', '.mobile_submenu_list a', function(e) {
        e.preventDefault();
        
        const $clickedItem = $(this);
        const itemName = $clickedItem.text().trim();
        
        // 현재 1depth 메뉴 찾기
        const $activeMenu = $('.detail_search_section aside nav ul > li.active');
        const activeMenuTitle = $activeMenu.find('button').text().trim();
        const activeMenuData = menuData[activeMenuTitle];
        
        // 클릭된 2depth 아이템의 상세 정보 찾기
        const clickedItemData = activeMenuData.find(item => item.name === itemName);
        
        if (clickedItemData && clickedItemData.children) {
            updateMobile3DepthContent(itemName, clickedItemData.children);
        }
    });
    
    /**
     * PC용 전체 콘텐츠 영역 업데이트 함수
     * @param {string} title - 메뉴 제목
     * @param {Array} menuItems - 메뉴 아이템 배열
     */
    function updatePCContent(title, menuItems) {
        const $pcSectionTitle = $('.organ_list_section.pc .organ_list_header h3');
        const $pcSection = $('.organ_list_section.pc .organ_list_body');
        
        if (menuItems.length === 0) {
            $pcSection.html('<p class="no-content">해당 카테고리의 데이터가 없습니다.</p>');
            return;
        }
        
        let contentHtml = '';
        
        // children가 있는 아이템과 없는 아이템 분리
        const itemsWithChildren = menuItems.filter(item => item.children);
        const itemsWithoutChildren = menuItems.filter(item => !item.children);
        
        // 디버깅용 로그 제거
        
        // children가 있는 아이템들 처리 - 각각 별도의 organ_list_content_wrap
        itemsWithChildren.forEach(function(item) {
            contentHtml += `
                <div class="organ_list_content_wrap">
                    <ul class="organ_list_content">
                        <li>
                            <div class="item">
                                <h4>${item.name}</h4>
                                <ul class="organ_list">`;
            
            // 각 카테고리별로 기관들 나열 (빈 배열이라도 strong 태그는 표시)
            Object.keys(item.children).forEach(function(category) {
                const organs = item.children[category];
                contentHtml += `
                                <li>
                                    <strong>${category}</strong>
                                    <ul>`;
                
                if (organs.length > 0) {
                    organs.forEach(function(organ) {
                        // 기관명에서 개수 분리
                        const match = organ.match(/^(.+)\((\d+(?:,\d+)*)\)$/);
                        if (match) {
                            const orgName = match[1];
                            const orgCount = match[2];
                            contentHtml += `
                                        <li>
                                            <a href="#;">
                                                <span class="org_name">${orgName}</span>
                                                <span class="org_cnt">(${orgCount})</span>
                                            </a>
                                        </li>`;
                        } else {
                            contentHtml += `
                                        <li>
                                            <a href="#;">
                                                <span class="org_name">${organ}</span>
                                                <span class="org_cnt">(0)</span>
                                            </a>
                                        </li>`;
                        }
                    });
                }
                
                contentHtml += `
                                    </ul>
                                </li>`;
            });
            
            contentHtml += `
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>`;
        });
        
        // children가 없는 아이템들 처리 - 국가행정조직의 특정 아이템들만 한줄 배치
        if (itemsWithoutChildren.length > 0) {
            // 국가행정조직의 특정 아이템들 (대통령자문위원회, 한시기구, 제외기구)
            const specialItems = ['대통령자문위원회', '한시기구', '제외기구'];
            const currentCategorySpecialItems = itemsWithoutChildren.filter(item => 
                title === '국가행정조직' && specialItems.includes(item.name)
            );
            const normalItems = itemsWithoutChildren.filter(item => 
                !(title === '국가행정조직' && specialItems.includes(item.name))
            );
            
            // 국가행정조직의 특정 아이템들을 한줄로 배치
            if (currentCategorySpecialItems.length > 0) {
                contentHtml += `
                    <div class="organ_list_content_wrap inline-items">
                        <ul class="organ_list_content">`;
                
                currentCategorySpecialItems.forEach(function(item) {
                    contentHtml += `
                            <li>
                                <div class="item">
                                    <h4>${item.name}</h4>
                                    <ul class="organ_list">
                                        <!-- children가 없으므로 빈 리스트 -->
                                    </ul>
                                </div>
                            </li>`;
                });
                
                contentHtml += `
                        </ul>
                    </div>`;
            }
            
            // 나머지 일반 아이템들은 개별 블록으로
            normalItems.forEach(function(item) {
                contentHtml += `
                    <div class="organ_list_content_wrap">
                        <ul class="organ_list_content">
                            <li>
                                <div class="item">
                                    <h4>${item.name}</h4>
                                    <ul class="organ_list">
                                        <!-- children가 없으므로 빈 리스트 -->
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>`;
            });
        }
        
        $pcSection.html(contentHtml);
        $pcSectionTitle.text(title);
    }
    
    /**
     * 모바일용 2depth 콘텐츠 영역 업데이트 함수
     * @param {string} title - 메뉴 제목
     * @param {Array} menuItems - 메뉴 아이템 배열
     */
    function updateMobileRightContent(title, menuItems) {
        const $rightContentMobile = $('.organ_submenu_list.mobile');
        
        let listHtml = '';
        
        if (menuItems.length > 0) {
            listHtml = '<ul class="mobile_submenu_list">';
            
            menuItems.forEach(function(item) {
                listHtml += `<li><a href="${item.link}" data-name="${item.name}">${item.name}</a></li>`;
            });
            
            listHtml += '</ul>';
        } else {
            listHtml = '<p>하위 메뉴가 없습니다.</p>';
        }
        
        $rightContentMobile.html(listHtml);
    }
    
    /**
     * 모바일용 3depth 콘텐츠 영역 업데이트 함수
     * @param {string} itemName - 2depth 아이템명
     * @param {Object} childrenData - 3depth 데이터
     */
    function updateMobile3DepthContent(itemName, childrenData) {
        const $rightContentMobile = $('.organ_submenu_list.mobile');
        
        let listHtml = `
            <div class="mobile_3depth_content">
                <div class="mobile_3depth_header">
                    <button type="button" class="back_btn">← 뒤로</button>
                    <h4>${itemName}</h4>
                </div>
                <div class="mobile_3depth_body">`;
        
        if (Object.keys(childrenData).length > 0) {
            Object.keys(childrenData).forEach(function(category) {
                const organs = childrenData[category];
                if (organs.length > 0) {
                    listHtml += `
                        <div class="category_group">
                            <h5>${category}</h5>
                            <ul class="organ_detail_list">`;
                    
                    organs.forEach(function(organ) {
                        listHtml += `<li><a href="#;">${organ}</a></li>`;
                    });
                    
                    listHtml += `
                            </ul>
                        </div>`;
                }
            });
        } else {
            listHtml += '<p>상세 정보가 없습니다.</p>';
        }
        
        listHtml += `
                </div>
            </div>`;
        
        $rightContentMobile.html(listHtml);
    }
    
    // 모바일 3depth 뒤로가기 버튼 클릭 이벤트
    $(document).on('click', '.back_btn', function(e) {
        e.preventDefault();
        
        // 현재 1depth 메뉴로 돌아가기
        const $activeMenu = $('.detail_search_section aside nav ul > li.active');
        const activeMenuTitle = $activeMenu.find('button').text().trim();
        const activeMenuData = menuData[activeMenuTitle];
        
        if (activeMenuData) {
            updateMobileRightContent(activeMenuTitle, activeMenuData);
        }
    });
    
});