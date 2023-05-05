import { useState, useEffect } from "react";
import { Modal, Input, Button } from "antd";
import { AudioMutedOutlined, AudioOutlined } from "@ant-design/icons";

import useSpeechRecognition from "../hooks/useSpeechRecognition";
import Memo from "../models/memo";

const { TextArea } = Input;

const MemoFormModal: React.FC<{
	isModalVisible: boolean;
	editingMemo: Memo | null;
	handleSave: (inputValue: string) => void;
	handleCancel: () => void;
}> = ({ isModalVisible, editingMemo, handleSave, handleCancel }) => {
	const { transcript, isListening, startListening, stopListening } =
		useSpeechRecognition();
	const [inputValue, setInputValue] = useState("");

	const handleRecord = () => {
		if (isListening) {
			stopListening();
		} else {
			startListening();
		}
	};

	const handleReset = () => {
		setInputValue("");
	};

	useEffect(() => {
		setInputValue((prevState) =>
			prevState.length > 0 ? prevState + " " + transcript : transcript
		);
	}, [transcript]);

	useEffect(() => {
		setInputValue(editingMemo ? editingMemo.description : "");
	}, [editingMemo, isModalVisible]);

	return (
		<Modal
			title={!editingMemo ? "Create Memo" : "Editing memo"}
			open={isModalVisible}
			onCancel={handleCancel}
			footer={[
				<Button
					key='record'
					icon={isListening ? <AudioMutedOutlined /> : <AudioOutlined />}
					onClick={handleRecord}
				>
					{isListening ? "Stop Recording" : "Record"}
				</Button>,
				<Button key='reset' onClick={handleReset}>
					Reset
				</Button>,
				<Button
					key='save'
					type='primary'
					onClick={() => handleSave(inputValue)}
					disabled={inputValue.length === 0}
				>
					Save memo
				</Button>,
			]}
		>
			<TextArea
				rows={3}
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder='Type or record your memo here...'
			/>
		</Modal>
	);
};

export default MemoFormModal;
