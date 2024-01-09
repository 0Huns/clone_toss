# CLONE_CODING_TOSS

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white) ![JAVASCRIPT](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)

### 🎈PAGE

- 원본 : https://toss.im/
- 배포 링크 : https://0huns.github.io/clone_toss/

### 📑UI / UX

전체적인 웹 페이지의 구조는 HTML의 Semantic 태그와 CSS의 Flex와 Grid를 활용하여 구현되었습니다. 또한, CSS의 Hover와 @keyframe을 이용하여 애니메이션 효과를 추가했습니다.

### 🛠️주요 기능

✅ 스크롤 액션:

- `innerHeight`와 `getBoundingClientRect()`를 활용하여 기준값을 설정했습니다.
- `setTimeout`과 `classList.add` / `toggle`을 이용하여 스크롤 액션을 구현했습니다.

✅ 중복된 클래스를 가진 요소에 대한 개별 액션:

- `forEach`와 `style.opacity`를 사용하여 중복된 클래스를 가진 요소 배열에 대해 개별 액션을 구현했습니다.
