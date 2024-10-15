import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { CiMicrophoneOn } from "react-icons/ci";
export default function PunjabiVoiceSearch({ activeMicColor = "white", micDefaultColor = "white", Mic, micSize, initials, micDefaultBGColor = "#01669b", micActiveBGColor = "#f39c1d", borderRadius, state, setState, }) {
    const [recording, setRecording] = useState(false);
    const streamRef = useRef(null);
    const recorderRef = useRef(null);
    const resultRef = useRef(null);
    let chunks = [];
    const transcriptRef = useRef(null);
    async function listen(e) {
        if (recording) {
            recorderRef.current.stop();
            streamRef.current.getTracks().forEach((track) => track.stop());
            setRecording(false);
        }
        else {
            e.preventDefault();
            streamRef.current = await navigator.mediaDevices.getUserMedia({
                audio: true,
            });
            recorderRef.current = new MediaRecorder(streamRef.current);
            recorderRef.current.ondataavailable = (e) => {
                chunks.push(e.data);
            };
            recorderRef.current.onstop = async () => {
                let audioBlob = new Blob(chunks, { type: "audio/wav" });
                if (audioBlob) {
                    let reader = new FileReader();
                    chunks = [];
                    reader.readAsDataURL(audioBlob);
                    reader.onload = async () => {
                        resultRef.current = reader.result?.toString().split(",")[1];
                        let url = "https://punjabi-transcript-82115345315.asia-southeast2.run.app/transcript";
                        try {
                            let res = await fetch(url, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    audioData: resultRef.current,
                                    initials: initials
                                        ? true
                                        : initials === false
                                            ? false
                                            : undefined,
                                }),
                            });
                            if (!res.ok) {
                                console.log(res.status);
                            }
                            else {
                                let data = await res.json();
                                transcriptRef.current = data;
                                setState(data.transcript);
                            }
                        }
                        catch (e) {
                            console.log(e.message);
                        }
                    };
                }
            };
            recorderRef.current.start();
            setRecording(true);
        }
    }
    return (_jsx(_Fragment, { children: _jsx("div", { className: "mic-parent-container", onClick: listen, children: Mic ? (_jsx(Mic, { size: micSize, color: recording ? activeMicColor : micDefaultColor, style: {
                    background: recording ? micActiveBGColor : micDefaultBGColor,
                    borderRadius: `${borderRadius ? borderRadius : 0}`,
                } })) : (_jsx(CiMicrophoneOn, { size: micSize, color: recording ? activeMicColor : micDefaultColor, style: {
                    background: recording ? micActiveBGColor : micDefaultBGColor,
                    borderRadius: `${borderRadius ? borderRadius : 0}`,
                } })) }) }));
}
