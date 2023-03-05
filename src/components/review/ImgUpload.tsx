import { useEffect, useMemo, useRef, useState } from "react";
import {
  getStorage,
  listAll,
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import app from "../../api/firebase";

interface ImgUploadProps {
  getUrl: (currentUrl: string) => void;
  title: string | undefined;
  prevUrl: string;
}

const ImgUpload = ({ getUrl, title, prevUrl }: ImgUploadProps): JSX.Element => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<any>();
  const [preloadUrl, setPreloadUrl] = useState<string>();
  const [existedImg, setExistedImg] = useState<any>();
  const storage = getStorage(app);
  const currentId = localStorage.getItem("id");

  const upLoadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null || !e.target.files) return;
    setImageFile(e.target.files[0]);
    uploadBytes(
      ref(storage, `images/${title}/${currentId}/${e.target.files[0].name}`),
      e.target.files[0]
    ).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setPreloadUrl(url);
      });
    });
  };

  const handleClickFileInput = () => {
    fileInputRef.current?.click();
  };

  const showImage = useMemo(() => {
    if (!imageFile && imageFile === undefined) {
      return <div className="mt-4"></div>;
    } else {
      return (
        <img
          src={preloadUrl}
          alt={imageFile.type}
          className="w-80 h-56 mx-auto my-2"
          onClick={handleClickFileInput}
        />
      );
    }
  }, [preloadUrl]);

  useEffect(() => {
    if (preloadUrl) {
      getUrl(preloadUrl);
    } else return;
  }, [preloadUrl]);

  useEffect(() => {
    const storage = getStorage(app, "gs://pulttaegi-37599.appspot.com");
    const currentImgRef = ref(storage, `images/${title}/${currentId}`);

    listAll(currentImgRef).then((response) => {
      getDownloadURL(response.items[0]).then((url) => {
        setExistedImg(url);
      });
    });
  }, []);

  return (
    <div className="flex flex-col">
      {showImage}
      <div className="">
        {existedImg && (
          <img
            src={existedImg}
            className="w-80 h-56 mx-auto my-2"
            onClick={handleClickFileInput}
          />
        )}
        {!existedImg && (
          <label
            htmlFor="chooseFile"
            className="p-3 px-4 text-white text-base font-bold rounded-xl text-center whitespace-nowrap w-[180px] bg-green-3 border-green-3 hover:bg-green-4 hover:border-green-4"
          >
            사진 첨부하기
          </label>
        )}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        id="chooseFile"
        accept="image/*"
        onChange={upLoadImg}
        className="invisible absolute"
      />
    </div>
  );
};

export default ImgUpload;
