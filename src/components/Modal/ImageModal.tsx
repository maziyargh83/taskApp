interface ImageModalProps {
  img: string | ArrayBuffer | null | undefined;
}
export const ImageModal = ({ img }: ImageModalProps) => {
  return (
    <div className="w-full h-full flex flex-1">
      <img
        src={img as string}
        className="w-full h-full rounded object-cover"
        alt=""
      />
    </div>
  );
};
