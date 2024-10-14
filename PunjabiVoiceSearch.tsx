import React, { useRef, useState } from "react";
import { CiMicrophoneOn } from "react-icons/ci";

interface Props {
  Mic?: React.ElementType;
  searchType: string;
  onTranscript?: (transcript: string) => void; // Callback for sending transcript
  micActiveBGColor?: string;
  activeMicColor?: string;
  micDefaultColor?: string;
  micDefaultBGColor?: string;
  micSize?: number;
  borderRadius?: string;
}

export default function PunjabiVoiceSearch({
  activeMicColor = "white",
  micDefaultColor = "white",
  Mic,
  micSize,
  searchType,
  micDefaultBGColor = "#01669b",
  micActiveBGColor = "#f39c1d",
  borderRadius,
  onTranscript, // Add the callback for transcript
}: Props) {
  const [recording, setRecording] = useState<boolean>(false);
  const streamRef = useRef<any>(null);
  const recorderRef = useRef<any>(null);
  const resultRef = useRef<any>(null);
  let chunks: any = [];
  const transcriptRef = useRef<any>(null);

  async function listen(e: any) {
    if (recording) {
      recorderRef.current.stop(); // Stop recording first
      // Stop the microphone stream after recording is stopped
      recorderRef.current.onstop = () => {
        streamRef.current.getTracks().forEach((track: any) => track.stop());
      };
      setRecording(false);
    } else {
      e.preventDefault();
      chunks = []; // Reset chunks array for new recording
      try {
        streamRef.current = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
      } catch (error) {
        console.error("Error accessing microphone:", error);
        return;
      }
      recorderRef.current = new MediaRecorder(streamRef.current);

      recorderRef.current.ondataavailable = (e: BlobEvent) => {
        chunks.push(e.data);
      };

      recorderRef.current.onstop = async () => {
        let audioBlob = new Blob(chunks, { type: "audio/wav" });
        chunks = []; // Clear chunks after processing

        if (audioBlob) {
          let reader = new FileReader();
          chunks = [];

          reader.readAsDataURL(audioBlob);

          reader.onload = async () => {
            resultRef.current = reader.result?.toString().split(",")[1];

            let url =
              "https://punjabi-transcript-82115345315.asia-southeast2.run.app/transcript";

            try {
              let res = await fetch(url, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  audioData: resultRef.current,
                  initials:
                    searchType === "gurbani"
                      ? true
                      : searchType === "transcript"
                      ? false
                      : undefined,
                }),
              });

              if (!res.ok) {
                console.log("Error:", res.status);
              } else {
                try {
                  let data = await res.json();
                  transcriptRef.current = data.transcript; // Assuming API returns 'transcript'

                  // Call the onTranscript callback if provided
                  if (onTranscript && transcriptRef.current) {
                    onTranscript(transcriptRef.current);
                  }
                } catch (err) {
                  console.error("Error parsing response:", err);
                }
              }
            } catch (e) {
              console.log("Error in fetching:", e.message);
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
      <div className="mic-parent-container" onClick={listen}>
        {Mic ? (
          <Mic
            size={micSize}
            color={recording ? activeMicColor : micDefaultColor}
            style={{
              background: recording ? micActiveBGColor : micDefaultBGColor,
              borderRadius: `${borderRadius ? borderRadius : 0}`,
            }}
          />
        ) : (
          <CiMicrophoneOn
            size={micSize}
            color={recording ? activeMicColor : micDefaultColor}
            style={{
              background: recording ? micActiveBGColor : micDefaultBGColor,
              borderRadius: `${borderRadius ? borderRadius : 0}`,
            }}
          />
        )}
      </div>
    </>
  );
}
