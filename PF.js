const gnbOpener = document.querySelector("#gnb-opener");
const gnbMenu = document.querySelector(".gnb-menu");
const menu = document.querySelector(".menu");

// 햄버거 메뉴 열고 닫기
gnbOpener.addEventListener("click", ()=> {
    gnbMenu.classList.toggle('show');
    menu.classList.toggle('show');
});

const searchOpener = document.querySelector("#search-opener");
const searchForm = document.querySelector(".search-form");

// 검색창 버튼 열고 닫기
searchOpener.addEventListener("click", ()=> {
    searchForm.classList.toggle('show');
    if (searchForm.classList.contains('show')) {
        searchOpener.src = "src/x-icon.png";
    } else {
        searchOpener.src = "src/search-icon.png";
    }
});

// Intersection Observer 사용해서 트렌디하게 만듬
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const elementTop = entry.target.getBoundingClientRect().top;
            
            if (elementTop < 0) {
                // 요소가 화면보다 위에 있을 때는 완전히 보이게 유지
                entry.target.style.opacity = 1;
                entry.target.classList.add('show');
            } else {
                // 요소가 화면 안이나 아래에 있을 때는 intersectionRatio에 따라 opacity 조절
                const opacity = Math.min(entry.intersectionRatio * 2, 1);
                entry.target.style.opacity = opacity;
                
                if (opacity > 0.5) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            }
        });
    }, {
        // 0부터 1까지 0.2 간격으로 threshold 설정
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0]
    });

    const introduceSection = document.querySelector('#introduce-section');
    if (introduceSection) {
        observer.observe(introduceSection);
    }
    const projectSection = document.querySelector('#project-section');
    if (projectSection) {
        observer.observe(projectSection);
    }
});