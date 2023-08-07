## 📜 1. Overview

### 1. 프로젝트 소개 🌱

현재 위치, 입력된 지역에 맞추어 웰빙 음식점을 추천 해드립니다.

<br />

### 2. 기획 배경 🎞

- 최근 들어 건강을 고려한 음식을 선호하는 트렌드가 소비자들 사이에서 일어나고 있다. 이에 따라 ‘건강 우선 고려’란 트렌드를 반영한 다양한 음식상품, 음식점이 늘어나는 추세이다.
- ‘잘 먹고 잘 살기’를 지향하는 웰빙(well-being)이 하나의 문화코드로 자리잡고 있음에도 불구하고, 웰빙지향식을 판매하는 웰빙 음식점들에 대한 다양한 정보를 쉽게 찾기 힘들다.


<br />

### 3. 프로젝트 목표 🎯

- React18, React-router-dom, Redux 등 프론트엔드 최신 라이브러리 사용 능력을 향상시키자
- TypeScript 를 사용하여 가독성이 높은 코드를 작성해보자
- Firebase를 이용한 Serverless 프로젝트를 경험해보자
- 협업 프로젝트를 통한 gitflow 이해하자


<br />

### 4. 배포주소 📬

https://pulttaegi.vercel.app/

**모바일 환경(800px 이하)에서 사용해주세요.**

<br />

<br />

## 🚀 2. Preview

<br />

|                   메인화면                |                   검색화면 (지역검색)                   |                         검색화면 (음식검색)                          |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|  <img width="206"  alt="홈" src="https://user-images.githubusercontent.com/70708829/224070011-c5ab6388-5197-476d-871e-d4302d3792a5.png"> | <img width="206"  alt="장르별" src="https://user-images.githubusercontent.com/70708829/224062563-a4a6fadc-6d73-4d66-a636-c2312e133b65.png"> | <img width="206" alt="플랫폼별" src="https://user-images.githubusercontent.com/70708829/224062678-42a27690-774b-4fb5-bbaa-2a4f18a0f806.png">


|               검색 되었을 때 화면 (지역검색)                |                     검색 되었을 때 화면 (음식검색)                      |                       검색 목록 보기                     |   
| :----------------------------------------------------------: | :----------------------------------------------------------: |  :----------------------------------------------------------: |
| <img width="206" alt="로그인 화면" src="https://user-images.githubusercontent.com/70708829/224070378-cb640c68-c62d-4e74-adee-04607dde9fb5.png"> | <img width="206" alt="회원가입 화면" src="https://user-images.githubusercontent.com/70708829/224062238-3f80ee01-3c08-4e14-a38c-fc634022ba6f.png">  | <img width="206" alt="회원가입 화면" src="https://user-images.githubusercontent.com/70708829/224062850-642afab0-ffbd-456f-ba4c-3d9ed3542c75.png">  |

|                       맛집 상세보기                      |         |                
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img width="206" alt="게시판" src="https://user-images.githubusercontent.com/70708829/224063128-2c8e3c24-4bbf-43f7-b8d5-96b568400dd4.png"> |   <img  width="206" alt="게시판" src="https://user-images.githubusercontent.com/70708829/224063350-8f178f57-c387-4ef8-8721-2cf87dcc4511.png">  |  

|                                     리뷰 작성하기                   |                       리뷰 수정하기                   |  내가 쓴 리뷰                   |          
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img width="206" alt="게시판" src="https://user-images.githubusercontent.com/70708829/224066128-103b2329-c199-4783-8c55-54bc5c749ce2.png">   |  <img   width="206" alt="게시글 상세" src="https://user-images.githubusercontent.com/70708829/224066036-5589ae15-add8-4cc4-96f4-74514b3a8925.png">   | <img width="206" alt="회원가입 화면" src="https://user-images.githubusercontent.com/70708829/224065939-3d2bd1e7-913a-4e8e-952c-523c70a650eb.png">  |

|                       마이 페이지 (비로그인)                 |             마이 페이지 (로그인)                    |                     회원가입 화면                 |             로그인 화면                   |  
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |:----------------------------------------------------------: |
| <img width="206" alt="게시글 작성" src="https://user-images.githubusercontent.com/70708829/224066470-4ad2ba9a-3d47-47ba-83ad-458126ee6e5e.png">  |  <img width="206" alt="게시글 수정" src="https://user-images.githubusercontent.com/70708829/224066811-d18b66f4-84b9-4dbd-abec-633c7a79d49c.png">  | <img width="206" alt="회원가입 화면" src="https://user-images.githubusercontent.com/70708829/224066695-c8183ae4-220c-449b-b739-13a8cbf3f13a.png">  | <img width="206" alt="게시글 수정" src="https://user-images.githubusercontent.com/70708829/224066616-ecb312f1-f6e6-4779-9f19-eb9a7a9d476a.png">  | 

<br />

<br />

## 📌 3. Main function

### 1. 기능 소개

| 기능명        | 내용                                                                                                                                                       |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 메인 지도       | 카카오맵 api와 geolocation을 활용하여 현재 위치 및 지도가 제공된다.                                                                                 |
| 검색 기능      | 사용자는 원하는 지역을 검색할 수 있고, 음식 검색을 통해 음식점을 검색할 수 있다.                     |                                                                                           |
| 리뷰 기능      | 사용자는 음식집에 리뷰와 평점을 남길 수 있다.                      |
| 즐겨찾기 기능   | 사용자는 음식점을 즐겨찾기에 추가, 삭제 할 수 있다.   
| 로그인        | Firebase Authentication을 활용하여 회원가입, 로그인 기능을 제공한다.                                                                      |


### 2. 역할 분담

#### 공통

- 서비스 기획
- whimsical 컴포넌트 디자인 및 마크업 개발
- vercel 배포 및 프로젝트 최적화
- 공통 컴포넌트 구현

#### 김규리
- 리뷰 등록, 삭제, 수정 페이지 및 기능 

- 음식 상세 페이지

- 마이 페이지

- 내가 쓴 리뷰 페이지

#### 김진원
- 지도 현재위치 표시

- 지도 마커 표시 및 필터 

#### 배성준
- 로그인, 회원가입 기능

- 즐겨찾기 기능

#### 서유림
- 검색 기능

- 음식 상세 페이지

<br />

<br />

## 🛠️ 4. Skills

### 1. 기술스택 
<p align="center">
</p>
<p align="center">
  <img src="https://img.shields.io/badge/react-v18.2.0-9cf?logo=react" alt="react" />
  <img src="https://img.shields.io/badge/typescript-v4.9.3-blue?logo=typescript" alt="typescript"/>
  <img src="https://img.shields.io/badge/React_Router-v6.8.0-CA4245?style=flat&logo=react-router&logoColor=CA4245" alt="React_Router" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-v8.0.5-764ABC?style=flat&logo=redux&logoColor=764ABC" alt="Redux_Toolkit" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v3.2.4-06B6D4?style=flat&logo=tailwind-css&logoColor=06B6D4" alt="Tailwind_CSS"/>
  <img src="https://img.shields.io/badge/Vite-v4.1.0-646CFF?style=flat&logo=Vite&logoColor=646CFF" alt="Vite"/>
  <img src="https://img.shields.io/badge/firebase-v9.17.1-FFCC33?style=flat&logo=firebase&logoColor=FFCC33" alt="firebase"/>
</p>

### 2. 도입 이유 

- React18
  - 뷰, 앵귤러 대비 리액트가 참고할 수 있는 레퍼런스가 많아요. 
- TypeScript 
  - 에러를 사전에 방지할 수 있어요.
  - 개발 생산성이 향상되어요.
- Vite
  - 빠른 Vite를 선택하였어요. 
- React-router-dom
  - 컴포넌트 구현부의 코드를 clean하게 만들기 위해 도입하였어요.
- Redux-toolkit
  - React 자체 라이브러리로 상태 저장소가 외부에서 처리되지 않아요.
  - Redux 보다 가볍고 사용하기 쉬워요. (비동기 처리를 위한 추가적인 라이브러리 설치가 필요 x)
  - Redux-Toolkit을 사용하여 효율적인 상태 관리가 가능해요.
- Tailwind
  - 일관성 있는 디자인 시스템을 적용할 수 있어요.
- Firebase
  - Front-end 개발자로만 이루어진 프로젝트이기 때문에 낮은 러닝커브로 서버 대체 가능하다는 장점이 있어요.
  - Authentication, FireStore DB, Storage를 제공해요.

<br />

<br />

## 🏛️ 5. 아키텍처

### 1. 프로세스 플로우

![flow.png](https://user-images.githubusercontent.com/70708829/224048142-d699ae4c-d2e9-45c5-bed3-92c9de65fbca.png)

<br />

### 2. 폴더구조 

```
📦 src
├── 📂 api
├── 📂 assets
│   ├── 📂 icons
│   └── 📂 images
├── 📂 components
│   ├── 📂 category
│   ├── 📂 common
│   ├── 📂 detail
│   ├── 📂 map
│   ├── 📂 myPage
│   ├── 📂 myReview
│   ├── 📂 result
│   └── 📂 review
├── 📂 constants
│   └── 📂 typings
├── 📂 data
│   └── 📂 types
├── 📂 hooks
├── 📂 layouts
├── 📂 pages
├── 📂 redux
│   ├── 📂 action
│   └── 📂 reducer
├── 📂 store
│   ├── 📂 hooks
│   └── 📂 modules
└── 📂 styles
```

<br />

---

<br />

## 📞 팀원 소개

<table class="tg">
<tbody>
  <tr>
    <td>Name</td>
    <td>김규리</td>
    <td>김진원</td>
    <td>배성준</td>
    <td>서유림</td>
  </tr>
  <tr>
    <td >e-mail</td>
    <td ><a href="mailto:aliyah521@naver.com">Naver</a></td>
    <td ><a href="mailto:">Gmail</a></td>
    <td ><a href="mailto:">Gmail</a></td>
    <td ><a href="mailto:z_o__o@naver.com">Naver</a></td>
  </tr>
  <tr>
    <td>Github</td>
    <td><a href="https://github.com/rangggu" target="_blank">rangggu</a></td>
    <td><a href="https://github.com/rlawlsdnjs" target="_blank">rlawlsdnjs</a></td>
    <td><a href="https://github.com/seongjun3880" target="_blank">seongjun3880</a></td>
    <td><a href="https://github.com/ulimsss" target="_blank">ulimsss</a></td>
  </tr>
</tbody>
</table>








