import { useEffect, useState } from "react";

const useSpeechRecognition = () => {
	const [transcript, setTranscript] = useState("");
	const [isListening, setIsListening] = useState(false);
	const [recognition, setRecognition] = useState(null);

	useEffect(() => {
		const SpeechRecognition =
			window.SpeechRecognition || window.webkitSpeechRecognition;

		if (!SpeechRecognition) {
			alert(
				"SpeechRecognition is not supported in this browser. Please try Google Chrome or Microsoft Edge."
			);
			return;
		}

		const recognitionInstance = new SpeechRecognition();
		recognitionInstance.lang = "en-US";
		recognitionInstance.interimResults = false;
		recognitionInstance.maxAlternatives = 1;

		recognitionInstance.addEventListener("start", () => {
			setIsListening(true);
		});

		recognitionInstance.addEventListener("result", (event) => {
			setTranscript(event.results[0][0].transcript);
		});

		recognitionInstance.addEventListener("end", () => {
			setIsListening(false);
		});

		recognitionInstance.addEventListener("error", (event) => {
			console.error(`Error: ${event.error}`);
		});

		setRecognition(recognitionInstance);

		return () => {
			recognitionInstance.abort();
		};
	}, []);

	const startListening = () => {
		if (recognition) {
			recognition.start();
		}
	};

	const stopListening = () => {
		if (recognition) {
			recognition.stop();
		}
	};

	return { transcript, isListening, startListening, stopListening };
};

export default useSpeechRecognition;
