import { useEffect, useMemo, useRef, useState } from "react";

type UploadImage = {
  file: File;
  thumbnail: string;
  type: string;
};

interface ImgUploadProps {
  getUrl: (currentUrl: string) => void;
}

const ImgUpload = ({getUrl}: ImgUploadProps): JSX.Element => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<UploadImage | null>(null);

  const upLoadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    const length = fileList?.length;
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);

      setImageFile({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
    }
  };

  const handleClickFileInput = () => {
    fileInputRef.current?.click();
  };
  
  useEffect(() => {
    if(imageFile?.thumbnail) {
      getUrl(imageFile.thumbnail)
    } else {
      return
    }
  }, [imageFile])

  const showImage = useMemo(() => {
    if (!imageFile && imageFile === null) {
      return (
        <div className="mt-4"></div>
        // <img
        //   className="w-80 h-56 mx-auto my-0"
        //   src="src/assets/images/noThumbnail.png"
        //   onClick={handleClickFileInput}
        // />
      );
    }
    return (
      <img
        src={imageFile.thumbnail}
        alt={imageFile.type}
        className="w-80 h-56 mx-auto my-2"
        onClick={handleClickFileInput}
      />
    );
  }, [imageFile]);

  return (
    <div className="flex flex-col">
      {showImage}
      {/* <form method="post" encType="multipart/form-data"> */}
      <div className="mt-4">
        <label
          htmlFor="chooseFile"
          className="p-3 px-4 text-white text-base font-bold tracking-tight rounded-xl text-center whitespace-nowrap w-[180px] bg-green-3 border-green-3 hover:bg-green-4 hover:border-green-4"
        >
          사진 첨부하기
        </label>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        id="chooseFile"
        accept="image/*"
        onChange={upLoadImg}
        className="invisible absolute"
      />
      {/* </form> */}
    </div>
  );
};

export default ImgUpload;
