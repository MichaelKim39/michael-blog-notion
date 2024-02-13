import { useState } from "react";
import Draggable, { ControlPosition } from "react-draggable";
import folder from "/public/folder.png";
import Image from "next/image";

type FolderProps = {
  title: string;
  startPos: ControlPosition;
};

const Folder = ({ title, startPos }: FolderProps) => {
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });

  const onStart = (e: MouseEvent) => {
    console.log("on start");
    setDragStartPos({ x: e.screenX, y: e.screenY });
  };

  const onStop = (e: MouseEvent) => {
    const dragX = Math.abs(dragStartPos.x - e.screenX);
    const dragY = Math.abs(dragStartPos.y - e.screenY);
    if (dragX < 0.01 || dragY < 0.01) {
      console.log("CLICK");
    }
  };

  return (
    // @ts-expect-error Temporary testing
    <Draggable defaultPosition={startPos} onStart={onStart} onStop={onStop}>
      <div className="absolute flex flex-col h-[150px] w-[150px]">
        <div className="relative sm:order-none order-first w-100 sm:w-72 h-96 overflow-hidden rounded-lg m-5 hover:scale-[1.02] transition-all hover:shadow-xl">
          <Image
            className="object-cover transition-all pointer-events-none"
            src={folder}
            alt="me"
            placeholder="blur"
            fill
          />
        </div>
        <p className="text-base mt-3 text-center">{title}</p>
      </div>
    </Draggable>
  );
};

export default Folder;
