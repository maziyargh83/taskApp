import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { FiLink } from "react-icons/fi";
interface ImagePickerProps {
  save: (item: string | ArrayBuffer | null) => void;
  image?: string | ArrayBuffer | null;
}
export const ImagePicker = ({ save, image }: ImagePickerProps) => {
  const handleDrop = (acceptedFiles: File[]) => {
    const reader = new FileReader();
    reader.readAsDataURL(acceptedFiles[0]);
    reader.onload = () => {
      save(reader.result);
    };
  };
  return (
    <Dropzone
      accept={{
        "image/jpeg": [],
        "image/png": [],
      }}
      onDrop={handleDrop}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          {...getRootProps({
            className:
              "dropzone h-full w-full border rounded flex justify-center items-center",
            onDrop: (event) => event.stopPropagation(),
          })}
        >
          <input {...getInputProps()} />

          {(!acceptedFiles[0] || !image) && (
            <FiLink className="text-primary" size={20} />
          )}
          {(acceptedFiles[0] || image) && (
            <RenderImage imageData={image} acceptedFiles={acceptedFiles[0]} />
          )}
        </div>
      )}
    </Dropzone>
  );
};
interface RenderImageProps {
  acceptedFiles: File;
  imageData?: ArrayBuffer | string | null;
}
export const RenderImage = ({ acceptedFiles, imageData }: RenderImageProps) => {
  const [data, setData] = useState<ArrayBuffer | string | null>(
    imageData ?? null
  );
  const getData = () => {
    const reader = new FileReader();
    reader.readAsDataURL(acceptedFiles);
    reader.onload = () => {
      setData(reader.result);
    };
  };
  useEffect(() => {
    if (!imageData) getData();
  }, [acceptedFiles]);
  return (
    <img className="object-contain w-full h-full" src={data as string} alt="" />
  );
};
