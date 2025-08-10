$(document).ready(function() {
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
                listHtml += `<li>
                    <button type="button" class="mobile_submenu_btn" aria-expanded="false" aria-controls="mobile_submenu_content" onclick="appendContent('${item.name}')">
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

    const targetDiv = $('.organ_list_body_content');

    targetDiv.html(`
        <div class="organ_list_content_wrap">
            <div class="publication_body" role="rowgroup">
                <div class="publication_item" role="row">
                    <div class="item_type" role="cell" aria-colindex="1">
                        <span>연감</span>
                    </div>
                    <div class="item_content" role="cell" aria-colindex="2">
                        <p>공공기관이 수행한 업무와 관련하여, 한 해 동안 일어난 경과, 사건, 통계 등을 수록·발간한 간행물</p>
                    </div>
                    <div class="item_example" role="cell" aria-colindex="3">
                        <span>연감 연차보고서</span>
                    </div>
                </div>

                <div class="publication_item" role="row">
                    <div class="item_type" role="cell" aria-colindex="1">
                        <span>백서</span>
                    </div>
                    <div class="item_content" role="cell" aria-colindex="2">
                        <p>정부 정책이나 업무 수행에 대한 현상을 분석하고, 미래를 전망하여 그 내용을 국민에게 알리기 위해 발간한 간행물</p>
                    </div>
                    <div class="item_example" role="cell" aria-colindex="3">
                        <span>백서 총람</span>
                    </div>
                </div>

                <div class="publication_item" role="row">
                    <div class="item_type" role="cell" aria-colindex="1">
                        <span>통계집</span>
                    </div>
                    <div class="item_content" role="cell" aria-colindex="2">
                        <p>공공기관이 소관 업무 분야의 통계·결산·전망 등을 대외발표 또는 대외 보고를 위해 발간한 간행물</p>
                    </div>
                    <div class="item_example" role="cell" aria-colindex="3">
                        <span>총조사 통계연보 통계지표</span>
                    </div>
                </div>

                <div class="publication_item" role="row">
                    <div class="item_type" role="cell" aria-colindex="1">
                        <span>업무안내 질의서</span>
                    </div>
                    <div class="item_content" role="cell" aria-colindex="2">
                        <p>공공기관이 소관 업무와 관련하여 일반 국민이 해당 업무를 이해하고 활용할 수 있도록 업무 내용, 절차 및 질의 등 주요 사항을 간추려 발간한 간행물</p>
                    </div>
                    <div class="item_example" role="cell" aria-colindex="3">
                        <span>업무안내서, 업무질의</span>
                    </div>
                </div>

                <div class="publication_item" role="row">
                    <div class="item_type" role="cell" aria-colindex="1">
                        <span>사업보고서</span>
                    </div>
                    <div class="item_content" role="cell" aria-colindex="2">
                        <p>공공기관에서 사업수행 과정 또는 업무수행 결과 및 성과 등을 정리하여 발간한 간행물</p>
                    </div>
                    <div class="item_example" role="cell" aria-colindex="3">
                        <span>업무계획 사업계획 심사보고 평가보고서</span>
                    </div>
                </div>

                <div class="publication_item" role="row">
                    <div class="item_type" role="cell" aria-colindex="1">
                        <span>연구조사보고서</span>
                    </div>
                    <div class="item_content" role="cell" aria-colindex="2">
                        <p>공공기관에서 수행한 연구 및 조사 결과를 체계적으로 정리하여 발간한 간행물</p>
                    </div>
                    <div class="item_example" role="cell" aria-colindex="3">
                        <span>연구보고서 조사보고서 용역보고서</span>
                    </div>
                </div>

                <div class="publication_item" role="row">
                    <div class="item_type" role="cell" aria-colindex="1">
                        <span>법규집</span>
                    </div>
                    <div class="item_content" role="cell" aria-colindex="2">
                        <p>공공기관이 법령(법률, 명령, 조례, 규칙 등)과 관련한 내용을 바탕으로 발간한 간행물</p>
                    </div>
                    <div class="item_example" role="cell" aria-colindex="3">
                        <span>법령집 법규집 판례집</span>
                    </div>
                </div>

                <div class="publication_item" role="row">
                    <div class="item_type" role="cell" aria-colindex="1">
                        <span>회의자료</span>
                    </div>
                    <div class="item_content" role="cell" aria-colindex="2">
                        <p>공공기관이 회의 목적 또는 회의의 진행 과정 및 내용 등을 바탕으로 발간한 간행물(중요수집) 외국 정부기관 또는 국제기구와의 교류·협력, 협상, 교류활동 내용, 국회와 중앙행정기관 간 또는 지방의회와 지방자치단체 간 주고받은 공식 내용 등</p>
                    </div>
                    <div class="item_example" role="cell" aria-colindex="3">
                        <span>회의록 회의보고서 의정보고서 세미나 공청회 심포지엄 포럼</span>
                    </div>
                </div>

                <div class="publication_item" role="row">
                    <div class="item_type" role="cell" aria-colindex="1">
                        <span>연설 강연집</span>
                    </div>
                    <div class="item_content" role="cell" aria-colindex="2">
                        <p>공공기관이 연설이나 강연 원고를 모아 발간한 간행물(중요수집) 장·차관급 중앙행정기관장 또는 광역자치단체장의 공식적인 연설문, 기고문, 인터뷰 자료 및 해당 기관의 공식적인 브리핑 등</p>
                    </div>
                    <div class="item_example" role="cell" aria-colindex="3">
                        <span>연설문집 취임사 어록 담화문</span>
                    </div>
                </div>

                <div class="publication_item" role="row">
                    <div class="item_type" role="cell" aria-colindex="1">
                        <span>사료집</span>
                    </div>
                    <div class="item_content" role="cell" aria-colindex="2">
                        <p>공공기관이 연구 목적으로 문헌이나 기록, 문서 등을 편집하여 발간한 간행물</p>
                    </div>
                    <div class="item_example" role="cell" aria-colindex="3">
                        <span>사료집 사료총서</span>
                    </div>
                </div>

                <div class="publication_item" role="row">
                    <div class="item_type" role="cell" aria-colindex="1">
                        <span>연혁집</span>
                    </div>
                    <div class="item_content" role="cell" aria-colindex="2">
                        <p>공공기관의 연혁 및 사건 등을 규명하고 변천 과정을 기술하여 발간한 간행물</p>
                    </div>
                    <div class="item_example" role="cell" aria-colindex="3">
                        <span>연혁집 조직변천사</span>
                    </div>
                </div>

                <div class="publication_item" role="row">
                    <div class="item_type" role="cell" aria-colindex="1">
                        <span>목록류</span>
                    </div>
                    <div class="item_content" role="cell" aria-colindex="2">
                        <p>공공기관이 특정 주제, 분야 등과 관련한 기록, 문헌, 문서의 목록을 정리하여 발간한 간행물</p>
                    </div>
                    <div class="item_example" role="cell" aria-colindex="3">
                        <span>회의안건목록집 분류집</span>
                    </div>
                </div>

                <div class="publication_item" role="row">
                    <div class="item_type" role="cell" aria-colindex="1">
                        <span>전시 도감 화보집</span>
                    </div>
                    <div class="item_content" role="cell" aria-colindex="2">
                        <p>공공기관이 그림, 사진 등을 모아 발간한 간행물</p>
                    </div>
                    <div class="item_example" role="cell" aria-colindex="3">
                        <span>도감 도록</span>
                    </div>
                </div>

                <div class="publication_item" role="row">
                    <div class="item_type" role="cell" aria-colindex="1">
                        <span>업무편람</span>
                    </div>
                    <div class="item_content" role="cell" aria-colindex="2">
                        <p>공공기관이 소관 업무와 관련하여 업무 담당자가 해당 업무를 이해하고 활용할 수 있도록 업무 내용, 절차 등의 주요 사항을 간추려 발간한 간행물</p>
                    </div>
                    <div class="item_example" role="cell" aria-colindex="3">
                        <span>정보공개업무편람</span>
                    </div>
                </div>

                <div class="publication_item" role="row">
                    <div class="item_type" role="cell" aria-colindex="1">
                        <span>기관지</span>
                    </div>
                    <div class="item_content" role="cell" aria-colindex="2">
                        <p>공공기관이 기관의 동향, 행사, 소식 등을 알리기 위해 발간한 간행물</p>
                    </div>
                    <div class="item_example" role="cell" aria-colindex="3">
                        <span>월간지 주간지 소식지</span>
                    </div>
                </div>
            </div>
        </div>
    `);
}

const backBtnClick = () => {
    $('.organ_layout_container').show();
    $('.organ_list_section.mobile').hide();
}