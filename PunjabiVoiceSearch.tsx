import React, { useEffect, useState } from "react";
import { CiMicrophoneOn } from "react-icons/ci";
interface Props {
  Mic?: React.ElementType;
  activeMicColor?: string;
  micDefaultColor?: string;
  micSize: number;
  firstLetterOnly: boolean;
}
export default function PunjabiVoiceSearch({
  Mic,
  activeMicColor,
  micDefaultColor,
  micSize,
  firstLetterOnly,
}: Props) {
  const [Recording, setRecording] = useState<boolean>(false);
  const [isInitials, setInitials] = useState<boolean>();
  function handleMicClick(e: any) {
    console.log(isInitials);
  }
  useEffect(() => {
    firstLetterOnly ? () => setInitials(true) : () => setInitials(false);
  });
  return (
    <>
      <div className="mic-parent-container" onClick={handleMicClick}>
        {Mic ? (
          <Mic
            size={micSize}
            color={Recording ? activeMicColor : micDefaultColor}
          />
        ) : (
          <CiMicrophoneOn
            size={micSize}
            color={Recording ? activeMicColor : micDefaultColor}
          />
        )}
      </div>
    </>
  );
}
