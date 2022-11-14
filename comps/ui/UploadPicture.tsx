import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from "./Spinner";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { usePostData } from "../hooks/queries/apiHooks";

interface Props {
  imageUrl?: string;
  iconColor?: string;
  isLoading?: boolean;
  containerClassName?: string;
  imageClassName?: string;
  uploadImage: (file: File) => void;
}

// const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "pichanga");

const UploadPicture: FC<Props> = ({
  imageUrl,
  iconColor = "text-pichanga",
  isLoading,
  uploadImage,
  containerClassName = "relative flex h-28 w-28 flex-col items-center justify-center",
  imageClassName = "h-full w-full rounded-full bg-gray-600 bg-cover bg-center bg-no-repeat",
}) => (
  <div className={containerClassName}>
    {isLoading ? (
      <Spinner />
    ) : (
      <div
        className={imageClassName}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    )}
    <input type="file" onChange={(e) => uploadImage(e.target.files[0])} />
    <FontAwesomeIcon
      icon={faCloudArrowUp}
      className={`absolute bottom-2 right-2 text-xl drop-shadow-xl ${iconColor}`}
    />
  </div>
);

export default UploadPicture;
