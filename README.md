# SOUNDGYM

## Getting started

```
npm install
npm start
```

## 디렉토리 구조

- 디렉토리 기본 구성은 아래와 같으며, 아토믹 디자인 기반으로 구성되어 있습니다

```
- src/
--- assets/
--- components/
----- atoms/
----- molecules/
----- organisms/
----- pages/
--- hocs/
--- routers/
--- utils/
```

- atoms (가장 작은 단위의 커스텀 요소(모듈화&재사용 가능)들이 포함되어 있습니다)

  - follow-button

- molecules

  - footer
  - header
  - popup
  - : 페이지에 재사용되는 모듈로 상단,하단 컴포넌트와 팝업이 포함되어 있습니다

- organisms

  - magazine
  - magazine-detail
  - my-page
  - popular
  - popular-detail
  - recommend
  - recommend-detail
  - : 메인페이지에서 연결되는 서브페이지들을 포함하고 있습니다

- pages

  - community-page
  - : 페이지 단위의 컴포넌트를 포함하고 있습니다

## 기본 구조

- component.tsx : 비즈니스 로직
- components.presenter.tsx : style 로직

## 페이지 이동

- routers 폴더 내부에 router관련 코드 포함되어 있습니다

## 그 외

- 가능한 범위의 더미데이타 임시로 구성하여 연결해두었습니다.
- 각 컴포넌트 설명은 모든 파일의 주석을 확인해주세요.
