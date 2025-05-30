# Pokemon Dex

https://ktc-assignment2-pokemon-dex.vercel.app/

## 필수 기능

### Git 브랜치 전략

- [x] `prop-drilling` 브랜치를 생성하여 props만으로 상태 전달 구현
- [x] `context` 브랜치를 새로 만들어 Context API를 활용해 상태 전역 관리 구현

### 페이지 라우팅 구현

- [x] `Home` 페이지 구성 및 "포켓몬 도감 시작하기" 버튼 구현
- [x] 버튼 클릭 시 `Dex` 페이지로 이동
- [x] `Dex` 페이지에서 포켓몬 카드 클릭 시 디테일 페이지로 이동
- [x] `useNavigate` 또는 `Link`를 이용한 라우팅 구현

### 도감 페이지 구성

- [x] `Dashboard`, `PokemonList`, `PokemonCard` 컴포넌트 분리
- [x] `PokemonCard`에 이름, 이미지, 타입, 추가 버튼 포함
- [x] `추가` 클릭 시 `Dashboard`에 포켓몬 추가
- [x] `Dashboard`에서 포켓몬 목록과 `삭제` 버튼 구현
- [x] 포켓몬 선택 최대 6마리로 제한

### 디테일 페이지 구현

- [x] URL queryString으로 포켓몬 ID를 받아 처리
- [x] 해당 포켓몬의 이미지, 이름, 타입, 설명 표시
- [x] "뒤로 가기" 버튼 구현

### 알림 기능

- [x] 중복 선택 시 alert: "이미 선택된 포켓몬입니다."
- [x] 6마리 초과 시 alert: "더 이상 선택할 수 없습니다."

### styled-components 스타일링

- [x] `PokemonCard`, `Dashboard`에 `styled-components` 적용
- [x] 카드 및 대시보드에 적절한 여백, 색상, 시각적 일관성 유지
- [x] 모바일 및 데스크탑 대응을 고려한 반응형 레이아웃 설계

## 도전 기능

### Redux Toolkit으로 상태 리팩터링

- [x] `redux-toolkits` 브랜치 생성
- [x] Redux Toolkit 설치 및 store 구성
- [x] 선택 상태를 Redux state로 관리
- [x] `useSelector`, `useDispatch`를 통해 상태 조회 및 변경 구현
- [x] 기존 Context 기반 구조를 Redux로 대체

### 디테일 페이지에서 포켓몬 추가/삭제 기능

- [x] `PokemonDetail` 페이지에 `추가` 버튼 구현
- [x] 추가된 포켓몬이면 `삭제` 버튼으로 전환
- [x] 클릭 시 `Dashboard`에 포켓몬 추가/삭제 반영

### 선택 상태 유지 기능

- [x] 디테일 페이지에서 돌아와도 리스트의 선택 상태 유지

### UI 라이브러리로 알림 개선

- [x] alert 대신 Modal 또는 toast로 알림 제공
- [x] `react-toastify`, `sweetalert2`, `sonner` 중 하나 이상 사용
