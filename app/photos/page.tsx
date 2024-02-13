"use client";

import Folder from "features/photos/components/folder";
import { useFolder } from "features/photos/hooks/useFolder";

export default function Photos() {
  const { folders } = useFolder();

  return (
    <>
      {folders.map(
        (folder, idx) =>
          folder.startPos && (
            <Folder title={folder.title} startPos={folder.startPos} key={idx} />
          )
      )}
    </>
  );
}
