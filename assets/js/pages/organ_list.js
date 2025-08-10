    // 메뉴 데이터 정의
    const menuData = {
        '국가행정조직': [
            { name: '중앙행정기관', link: '#central-admin', children: {
                '부': ['기획재정부(3,329)', '교육부(1,456)', '과학기술정보통신부(892)'],
                '처': ['국무조정실(567)', '법제처(234)', '국가보훈처(789)'],
                '청': ['국세청(2,145)', '관세청(445)', '통계청(123)', '조달청(334)'],
                '외국': ['재외공관(89)', '영사관(45)'],
                '원': ['감사원(456)'],
                '위원회': ['공정거래위원회(234)', '방송통신위원회(123)'],
                '대통령직속(위원회)': ['국가과학기술자문회의(67)', '국가교육회의(34)'],
                '대통령직속(기타)': ['국가정보원(789)', '대통령경호처(456)'],
                '국무총리직속(위원회)': ['국민권익위원회(234)', '개인정보보호위원회(123)'],
                '국무총리직속(기타)': ['국정홍보처(89)', '국가보훈처(123)']
            }},
            { name: '보조기관', link: '#support-org', children: {
                '부기관장': ['차관(12)', '차차관(8)'],
                '본부': ['정책기획본부(45)', '운영지원본부(34)'],
                '실': ['기획조정실(123)', '정책기획실(89)', '감사실(45)'],
                '국': ['기획예산국(67)', '총무국(54)', '정책국(78)'],
                '부': ['정책부(34)', '기획부(23)'],
                '과': ['기획과(45)', '총무과(34)', '예산과(23)', '인사과(56)'],
                '단1': ['정책기획단(12)', '예산분석단(8)'],
                '팀1': ['정책팀(23)', '기획팀(18)'],
                '센터': ['정책연구센터(15)', '데이터센터(12)']
            }},
            { name: '보좌기관', link: '#assistant-org', children: {
                '담당관': [],
                '팀2': [],
                '센터2': [],
            }},
            { name: '합의제행정기관', link: '#collegial-admin' , children: {
                '행정위원회': [],
                '기타 합의제행정기관': [],
            }},
            { name: '부속기관', link: '#affiliated-org' , children: {
                '시험연구기관': [],
                '교육훈련기관': [],
                '문화기관': [],
                '의료기관': [],
                '자문기관': [],
                '기타기관': [],
            }},
            { name: '특별지방행정기관', link: '#special-local-admin', children: {
                '일반행정(병무)': [],
                '보훈': [],
                '국토': [],
                '건설': [],
                '조세행정(국세)': [],
                '관세': [],
            }},
            { name: '대통령자문위원회', link: '#presidential-advisory', organs: [
                '국가과학기술자문회의(45)',
                '국가교육회의(32)', 
                '저출산고령사회위원회(28)',
                '국가균형발전위원회(41)',
                '국가지식재산위원회(25)'
            ]},
            { name: '한시기구', link: '#temporary-org', organs: [
                '코로나19백신도입TF(15)',
                '한국판뉴딜추진단(22)',
                '디지털정부혁신추진단(18)',
                '탄소중립녹색성장위원회(30)'
            ]},
            { name: '제외기구', link: '#excluded-org', organs: [
                '국가정보원(1200)',
                '대통령경호처(450)',
                '국군기무사령부(800)',
                '국가보안기술연구소(120)'
            ]}
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

$(document).ready(function() {

    
    // 페이지 로딩 시 화면 크기에 따라 첫 번째 메뉴 설정 및 내용 표시
    function initializeFirstMenu() {
        // 모든 li에서 active 클래스 제거
        $('.detail_search_section aside nav ul > li').removeClass('active');
        
        // 첫 번째 li(국가행정조직)에 active 클래스 추가
        const $firstLi = $('.detail_search_section aside nav ul > li:first-child');
        $firstLi.addClass('active');
        
        const firstMenuTitle = $firstLi.find('button').text().trim();
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
    
    // 초기 로딩
    initializeFirstMenu();
    
    // 화면 크기 변경 시 모바일 진입 시 active 상태 재설정
    $(window).on('resize', function() {
        if (window.innerWidth < 768) {
            // 모바일로 진입 시 첫 번째 메뉴(국가행정조직) active 상태로 설정
            $('.detail_search_section aside nav ul > li').removeClass('active');
            $('.detail_search_section aside nav ul > li:first-child').addClass('active');
        }
    });
    
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

    // 모바일 2depth 버튼 클릭 이벤트 (동적으로 생성된 요소에 대한 이벤트 위임)
    $(document).on('click', '.mobile_submenu_btn', function(e) {
        e.preventDefault();
        
        const itemName = $(this).data('name');
        appendContent(itemName);
    });

    // 모바일 상세페이지에서 strong 다음 ul 토글 (메인 네비게이션과 동일한 방식)
    $(document).on('click', '.organ_list_section.mobile .organ_list strong', function(e) {
        e.preventDefault();
        
        const $targetUl = $(this).siblings('ul');
        const isOpened = $(this).hasClass('active');
        
        // 모든 ul 닫기 + active 클래스 제거
        $('.organ_list_section.mobile .organ_list strong').each(function() {
            $(this).siblings('ul').removeClass('show').hide();
            $(this).removeClass('active');
        });
        
        // 만약 본인 리스트가 이미 열려있었다면 닫기만 하고 종료
        if (isOpened) {
            $targetUl.removeClass('show').hide();
            $(this).removeClass('active');
        } else {
            // 아니면 본인 리스트만 열기
            $targetUl.addClass('show').show();
            $(this).addClass('active');
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
        
        const htmlParts = [];
        
        // children가 있는 아이템과 없는 아이템 분리
        const itemsWithChildren = menuItems.filter(item => item.children && Object.keys(item.children).length > 0);
        const itemsWithoutChildren = menuItems.filter(item => !item.children || Object.keys(item.children).length === 0);
        
        // children가 있는 아이템들 처리 - 각각 별도의 organ_list_content_wrap
        itemsWithChildren.forEach(function(item, itemIndex) {
            htmlParts.push(`
                <div class="organ_list_content_wrap">
                    <ul class="organ_list_content">
                        <li>
                            <div class="item">
                                <h4>${item.name}</h4>
                                <ul class="organ_list">`);
            
            // 각 카테고리별로 기관들 나열 (빈 배열이라도 strong 태그는 표시)
            Object.keys(item.children).forEach(function(category, categoryIndex) {
                const organs = item.children[category];
                const uniqueId = `pc-organ-${itemIndex}-${categoryIndex}-${category.replace(/\s+/g, '-')}`;
                htmlParts.push(`
                    <li>
                        <strong role="button" 
                                tabindex="0" 
                                aria-label="${category} 하위 메뉴 토글" 
                                aria-expanded="false" 
                                aria-controls="${uniqueId}">${category}</strong>
                        <ul id="${uniqueId}">`);
                
                if (organs.length > 0) {
                    const organItems = organs.map(organ => {
                        // 기관명에서 개수 분리
                        const match = organ.match(/^(.+)\((\d+(?:,\d+)*)\)$/);
                        return `
                            <li>
                                <a href="#" aria-label="${match ? match[1] : organ} 기관 상세보기">
                                    <span class="org_name">${match ? match[1] : organ}</span>
                                    <span class="org_cnt" aria-label="기관 수">(${match ? match[2] : '0'})</span>
                                </a>
                            </li>`;
                    });
                    htmlParts.push(...organItems);
                }
                
                htmlParts.push(`
                                    </ul>
                                </li>`);
            });
            
            htmlParts.push(`
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>`);
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
                htmlParts.push(`
                    <div class="organ_list_content_wrap inline-items">
                        <ul class="organ_list_content">`);
                
                const specialItemsHtml = currentCategorySpecialItems.map(item => `
                            <li>
                                <div class="item">
                                    <h4>${item.name}</h4>
                                    <ul class="organ_list">
                                        <!-- children가 없으므로 빈 리스트 -->
                                    </ul>
                                </div>
                            </li>`);
                
                htmlParts.push(...specialItemsHtml);
                htmlParts.push(`
                        </ul>
                    </div>`);
            }
            
            // 나머지 일반 아이템들은 개별 블록으로
            normalItems.forEach(function(item) {
                let appendHtml = '';
                
                appendHtml += `
                    <div class="organ_list_content_wrap">
                        <ul class="organ_list_content">
                            <li>
                                <div class="item">
                                    <h4>${item.name}</h4>
                                    <ul class="organ_list">
                                        <li>
                                            <strong>${item.name}</strong>
                                            <ul>`;
                
                // title(item.name)과 매칭되는 실제 데이터 찾기
                let organData = [];
                
                // menuData에서 현재 활성화된 1depth 메뉴 찾기
                const activeMenuTitle = $('.detail_search_section aside nav ul > li.active button').text().trim();
                const activeMenuData = menuData[activeMenuTitle];
                
                if (activeMenuData) {
                    // item.name과 매칭되는 데이터 찾기
                    const matchedItem = activeMenuData.find(menuItem => menuItem.name === item.name);
                    if (matchedItem && matchedItem.organs) {
                        organData = matchedItem.organs;
                    }
                }
                
                // 데이터가 없으면 더미 데이터 사용
                if (organData.length === 0) {
                    organData = [
                        `${item.name} 샘플기관 1(100)`,
                        `${item.name} 샘플기관 2(200)`,
                        `${item.name} 샘플기관 3(300)`
                    ];
                }
                
                organData.forEach(function(organ) {
                    // 기관명에서 개수 분리
                    const match = organ.match(/^(.+)\((\d+(?:,\d+)*)\)$/);
                    if (match) {
                        const orgName = match[1];
                        const orgCount = match[2];
                        appendHtml += `
                                                <li>
                                                    <a href="#;">
                                                        <span class="org_name">${orgName}</span>
                                                        <span class="org_cnt">(${orgCount})</span>
                                                    </a>
                                                </li>`;
                    } else {
                        appendHtml += `
                                                <li>
                                                    <a href="#;">
                                                        <span class="org_name">${organ}</span>
                                                        <span class="org_cnt">(0)</span>
                                                    </a>
                                                </li>`;
                    }
                });
                
                appendHtml += `
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>`;
                
                htmlParts.push(appendHtml);
            });
        }
        
        $pcSection.html(htmlParts.join(''));
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
                listHtml += `<li>
                    <button type="button" class="mobile_submenu_btn" data-name="${item.name}" 
                            aria-label="${item.name} 메뉴 열기" 
                            aria-expanded="false" 
                            aria-controls="organ-list-content">
                        ${item.name}
                    </button>
                </li>`;
            });
            
            listHtml += '</ul>';
        } else {
            listHtml = '<p>하위 메뉴가 없습니다.</p>';
        }
        
        // 우측 모바일 영역에 표시 (타이틀 제외하고 리스트만)
        $rightContentMobile.html(listHtml);
    }
});

const appendContent = (title) => {
    $('.organ_layout_container').hide();
    $('.organ_list_section.mobile').show();
    // 2뎁스로 넘어가면 search_result_info 숨기기
    $('.search_result_info').hide();

    let listHtml = '';  // let으로 변경
    const targetDiv = $('.organ_list_body_content');
    
    // organ-list-title에 클릭한 타이틀 설정
    $('#organ-list-title').text(title);

    const activeMenuTitle = $('.detail_search_section aside nav ul > li.active button').text().trim();
    const targetData = menuData[activeMenuTitle];

    for(let i = 0; i < targetData.length; i++) {
        if(targetData[i].name === title) {
            listHtml += `
                <div class="organ_list_content_wrap">
                    <ul class="organ_list_content">
                        <li>
                            <div class="item">
                                <ul class="organ_list">`;
            
            // organs 배열이 있으면 반복문으로 처리 (children가 없는 경우)
            if(targetData[i].organs && targetData[i].organs.length > 0) {
                listHtml += `
                                    <li>
                                        <strong role="button" 
                                                tabindex="0" 
                                                aria-label="${targetData[i].name} 하위 메뉴 토글" 
                                                aria-expanded="false" 
                                                aria-controls="mobile-organ-info-${i}">${targetData[i].name}</strong>
                                        <ul class="organ_info_list" id="mobile-organ-info-${i}">`;
                targetData[i].organs.forEach(function(organ) {
                    // 기관명에서 개수 분리
                    const match = organ.match(/^(.+)\((\d+(?:,\d+)*)\)$/);
                    if (match) {
                        const orgName = match[1];
                        const orgCount = match[2];
                        listHtml += `
                                            <li>
                                                <a href="#" aria-label="${orgName} 기관 상세보기">
                                                    <span class="org_name">${orgName}</span>
                                                    <span class="org_cnt" aria-label="기관 수">(${orgCount})</span>
                                                </a>
                                            </li>`;
                    } else {
                        listHtml += `
                                            <li>
                                                <a href="#;">
                                                    <span class="org_name">${organ}</span>
                                                    <span class="org_cnt">(0)</span>
                                                </a>
                                            </li>`;
                    }
                });
                
                listHtml += `
                                        </ul>
                                    </li>`;
            }
            // children 객체가 있으면 카테고리별로 처리 (중앙행정기관, 보조기관 등)
            else if(targetData[i].children) {
                Object.keys(targetData[i].children).forEach(function(category, categoryIndex) {
                    const organs = targetData[i].children[category];
                    const uniqueId = `mobile-organ-${i}-${categoryIndex}-${category.replace(/\s+/g, '-')}`;
                    
                    listHtml += `
                                            <li>
                                                <strong role="button" 
                                                        tabindex="0" 
                                                        aria-label="${category} 하위 메뉴 토글" 
                                                        aria-expanded="false" 
                                                        aria-controls="${uniqueId}">${category}</strong>
                                                <ul id="${uniqueId}">`;
                    
                    if (organs.length > 0) {
                        organs.forEach(function(organ) {
                            // 기관명에서 개수 분리
                            const match = organ.match(/^(.+)\((\d+(?:,\d+)*)\)$/);
                            if (match) {
                                const orgName = match[1];
                                const orgCount = match[2];
                                listHtml += `
                                                    <li>
                                                        <a href="#" aria-label="${orgName} 기관 상세보기">
                                                            <span class="org_name">${orgName}</span>
                                                            <span class="org_cnt" aria-label="기관 수">(${orgCount})</span>
                                                        </a>
                                                    </li>`;
                            } else {
                                listHtml += `
                                                    <li>
                                                        <a href="#" aria-label="${organ} 기관 상세보기">
                                                            <span class="org_name">${organ}</span>
                                                            <span class="org_cnt" aria-label="기관 수">(0)</span>
                                                        </a>
                                                    </li>`;
                            }
                        });
                    }
                    
                    listHtml += `
                                                </ul>
                                            </li>`;
                });
            }
            
            listHtml += `
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            `;
            break; // 찾았으면 반복문 종료
        }
    }

    targetDiv.html(listHtml);
}

const backBtnClick = () => {
    $('.organ_layout_container').show();
    $('.organ_list_section.mobile').hide();
    // 뒤로가기로 돌아오면 search_result_info 다시 보이기
    $('.search_result_info').show();
}