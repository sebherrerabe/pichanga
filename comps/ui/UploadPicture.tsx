import { ChangeEvent, FC } from "react";

import { AxiosError } from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICloudinaryResponse } from "../types";
import Spinner from "./Spinner";
import { UseMutateFunction } from "@tanstack/react-query";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

interface Props {
  imageUrl?: string;
  iconColor?: string;
  isLoading?: boolean;
  id?: string;
  containerClassName?: string;
  imageClassName?: string;
  uploadPhoto: UseMutateFunction<
    ICloudinaryResponse,
    AxiosError,
    FormData,
    {
      previousItems: FormData | undefined;
    }
  >;
}

const UploadPicture: FC<Props> = ({
  id = "userPic",
  imageUrl,
  iconColor = "text-pichanga",
  isLoading,
  uploadPhoto,
  containerClassName = "relative flex h-28 w-28 flex-col items-center justify-center",
  imageClassName = "h-full w-full rounded-full bg-gray-600 bg-cover bg-center bg-no-repeat",
}) => {
  const onFileChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const file = target.files?.[0];
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("upload_preset", "pichanga");
    uploadPhoto(formData);
  };
  return (
    <label htmlFor={id} className={containerClassName}>
      {isLoading ? (
        <Spinner />
      ) : (
        <div
          className={imageClassName}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      )}

      <FontAwesomeIcon
        icon={faCloudArrowUp}
        className={`absolute bottom-2 right-2 text-xl drop-shadow-xl ${iconColor}`}
      />
      <input
        type="file"
        name="image"
        id={id}
        onChange={onFileChange}
        className="hidden"
      />
    </label>
  );
};

export default UploadPicture;
