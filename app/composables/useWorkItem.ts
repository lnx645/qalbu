import { WorkType } from "~~/types/work-type.types";
import Placeholder from "@/assets/images/placeholder.png";
export const useWorkItem = () => {
  const img = useImage();

  const getTypeClassess = computed(() => {
    return (type: WorkType) => {
      switch (type) {
        case WorkType.CERITA_PENDEK:
          return "bg-linear-to-r select-none pointer-none border border-orange-500 from-orange-500 to-orange-400 p-1 text-white rounded-circle rounded";
        case WorkType.PUISI:
          return "bg-linear-to-r select-none pointer-none border border-blue-500 from-blue-500 to-blue-400 p-1 px-3 text-white rounded-circle rounded";
        case WorkType.NOVEL:
          return "bg-linear-to-r select-none pointer-none border border-green-500 from-green-500 to-green-400 p-1 px-3 text-white rounded-circle rounded";
        case WorkType.FILM_SCRIPT:
          return "bg-linear-to-r select-none pointer-none border border-red-500 from-red-500 to-red-400 p-1 px-3 text-white rounded-circle rounded";
      }
    };
  });
  const getImageCoverStyle = computed(() => {
    return (url: string) => {
      if (!url) {
        return {
          backgroundImage: `url(${Placeholder})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "210px",
        };
      }
      const image = img(url, {
        quality: 10,
      });

      return {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "210px",
      };
    };
  });
  return {
    typeClasses: getTypeClassess,
    imageCoverStyle: getImageCoverStyle,
  };
};
