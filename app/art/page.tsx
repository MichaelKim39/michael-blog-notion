"use client";

import Folder from "features/art/components/folder";
import { useFolder } from "features/art/hooks/useFolder";

export default function Art() {
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
