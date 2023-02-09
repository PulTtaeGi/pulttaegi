import { useMemo, useRef, useState } from "react";

type UploadImage = {
  file: File;
  thumbnail: string;
  type: string;
};
const ImgUpload = (): JSX.Element => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<UploadImage | null>(null);

  const upLoadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    const length = fileList?.length;
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);
      console.log(url);

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
      <div className="">
        <label
          htmlFor="chooseFile"
          className="btn w-full bg-myGreen border-myGreen  hover:bg-myDarkGreen hover:border-myGreen"
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
