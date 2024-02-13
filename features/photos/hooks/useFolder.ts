import { FolderProps } from "../components/folder";
import { getRandomPos } from "../utils/folderUtils";
import { useWindowSize } from "./useWindowDimensions";

export const useFolder = () => {
  const { width, height } = useWindowSize();

  const folders: FolderProps[] = [
    {
      title: "photos",
      startPos: getRandomPos(width, height),
    },
    {
      title: "blog",
      startPos: getRandomPos(width, height),
    },
  ];

  return { folders };
};
