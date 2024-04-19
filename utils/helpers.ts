interface ImageInfo {
  filename?: string;
}

interface Dimensions {
  width: string | null;
  height: string | null;
}

export const getImgDimensions = (img: ImageInfo): Dimensions => {
  return {
    width: img?.filename?.split("/")[5]?.split("x")[0] || null,
    height: img?.filename?.split("/")[5]?.split("x")[1] || null,
  };
};
