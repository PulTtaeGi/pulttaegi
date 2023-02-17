import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

const firebaseConfig = {
    // firebase 설정과 관련된 개인 정보
    apiKey: "AIzaSyA_N8vIp0uKJHY4XDw5krt-HlkrQe8mJXA",
    authDomain: "pulttaegi-37599.firebaseapp.com",
    projectId: "pulttaegi-37599",
    storageBucket: "pulttaegi-37599.appspot.com",
    messagingSenderId: "131120868209",
    appId: "1:131120868209:web:a34d74012f2e5c0b3b24d0",
    measurementId: "G-9GC984VWWR"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };