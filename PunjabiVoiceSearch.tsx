import React, { useEffect, useRef, useState } from "react";
import { CiMicrophoneOn } from "react-icons/ci";
interface Props {
  Mic?: React.ElementType;
  activeMicColor?: string;
  micDefaultColor?: string;
  micDefaultBGColor?: string;
  micActiveBGColor?: string;
  micSize?: number;
  borderRadius?: string;
  searchType: string;
}
export default function PunjabiVoiceSearch({
  Mic,
  activeMicColor,
  micDefaultColor,
  micSize,
  searchType,
  micDefaultBGColor,
  micActiveBGColor,
  borderRadius,
}: Props) {
  const [recording, setRecording] = useState<boolean>(false);
  const streamRef = useRef<any>(null);
  const recorderRef = useRef<any>(null);
  const resultRef = useRef<any>(null);
  let chunks: any = [];
  const transcriptRef = useRef<any>(null);

  async function listen(e: any) {
    if (recording) {
      recorderRef.current.stop();
      setRecording(false);
      streamRef;
    } else {
      e.preventDefault();
      streamRef.current = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      recorderRef.current = new MediaRecorder(streamRef.current);
      recorderRef.current.ondataavailable = (e: BlobEvent) => {
        chunks.push(e.data);
      };
      recorderRef.current.onstop = async () => {
        let audioBlob = new Blob(chunks, { type: "audio/wav" });
        if (audioBlob) {
          let reader = new FileReader();
          reader.readAsDataURL(audioBlob);
          reader.onload = async () => {
            resultRef.current = reader.result?.toString().split(",")[1];
            let url = "http://localhost:3000/transcript";
            try {
              let res = await fetch(url, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  audioData: resultRef.current,
                  initials: searchType === "gurbani" ? true : false,
                }),
              });
              if (!res.ok) {
                console.log(res.status);
              } else {
                let data = await res.json();
                transcriptRef.current = data;
              }
            } catch (e) {
              console.log(e.message);
            }
          };
        }
      };
      recorderRef.current.start();
      setRecording(true);
    }
  }
  return (
    <>
      ReactDOM.createRoot(document.getElementById("root") as
      HTMLElement).render(
      <div className="mic-parent-container" onClick={listen}>
        {Mic ? (
          <Mic
            size={micSize}
            color={recording ? activeMicColor : micDefaultColor || "#01669b"}
            style={{
              background: recording
                ? micActiveBGColor
                : micDefaultBGColor || "#f39c1d",
              borderRadius: `${borderRadius ? borderRadius : 0}`,
            }}
          />
        ) : (
          <CiMicrophoneOn
            size={micSize}
            color={recording ? activeMicColor : micDefaultColor || "#01669b"}
            style={{
              background: recording
                ? micActiveBGColor
                : micDefaultBGColor || "#f39c1d",
              borderRadius: `${borderRadius ? borderRadius : 0}`,
            }}
          />
        )}
      </div>
    </>
  );
}
