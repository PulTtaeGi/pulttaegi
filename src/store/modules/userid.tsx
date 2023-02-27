import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../hooks/configureStore.hook";
import { firestore } from "../../api/firebase";

const bucket_firstore = firestore.collection("bucket");

export const loadBucketFB = () => {
  //파이어 베이스 데이터 불러오기
  return function (dispatch) {
    bucket_firstore.get().then((docs) => {
      const bucket_data = [];

      docs.forEach((doc) => {
        if (doc.exists) {
          bucket_data = [...bucket_data, { id: doc.id, ...doc.data() }]; //id를 넣어줘야 관리가 편의함
        }
      });
      console.log(bucket_data);

      //파이어 베이스 리덕스와 연결하기
      dispatch(loadBucket(bucket_data));
    });
  };
};

export const addBucketFB = (bucket) => {
  return function (dispatch) {
    let bucket_data = { text: bucket, completed: false };

    bucket_db.add(bucket_data).then((docRef) => {
      bucket_data = { ...bucket_data, id: docRef.id };
      dispatch(createBucket(bucket_data));
    });
  };
};

export const updateBucketFB = (bucket) => {
  return function (dispatch, getState) {
    const _bucket_data = getState().bucket.list[bucket];

    let bucket_data = { ..._bucket_data, completed: true };

    if (!bucket_data.id) {
      return; //아이디가 없으면 요청x
    }

    bucket_db
      .doc(bucket_data.id)
      .update(bucket_data)
      .then((docRef) => {
        dispatch(updateBucket(bucket));
      });
  };
};

export const deleteBucketFB = (bucket) => {
  return function (dispatch, getState) {
    const _bucket_data = getState().bucket.list[bucket];
    if (!_bucket_data.id) {
      return;
    }
    bucket_db
      .doc(_bucket_data.id)
      .delete()
      .then((docRef) => {
        dispatch(deleteBucket(bucket));
      })
      .catch((error) => {
        console.log(error);
      }); // 오류가 나면 여길 실행
  };
};

// Reducer
export default function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    // do reducer stuff
    case "bucket/LOAD": {
      if (action.bucket.length > 0) {
        return { list: action.bucket }; // 로드 하는부분 파이어스토어 연동
      }

      return state;
    }

    case "bucket/CREATE":
      console.log(state, action);
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };

    case "bucket/DELETE":
      const bucket_list = state.list.filter((l, idx) => {
        if (idx !== action.bucket) {
          return l;
        }
      });
      return { list: bucket_list };

    case "bucket/UPDATE": {
      const bucket_list = state.list.map((l, idx) => {
        if (idx === action.bucket) {
          return { ...l, completed: true };
        } else {
          return l;
        }
      });
      return { list: bucket_list };
    }

    default:
      return state;
  }
}