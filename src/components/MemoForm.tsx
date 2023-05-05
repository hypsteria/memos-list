import { useDispatch, useSelector } from "react-redux";

import { modalActions, memosActions, RootState } from "../store";
import { addMemo, updateMemo } from "../utils/idb";
import Memo from "../models/memo";

import MemoFormModal from "./MemoFormModal";

const MemoForm: React.FC = () => {
	const isModalVisible = useSelector(
		(state: RootState) => state.modal.isModalVisible
	);
	const editingMemo = useSelector(
		(state: RootState) => state.modal.editingMemo
	);
	const dispatch = useDispatch();

	const handleSave = (inputValue: string) => {
		if (editingMemo) {
			updateMemo(editingMemo.id, {
				id: editingMemo.id,
				description: inputValue,
			}).then(() => {
				dispatch(
					memosActions.updateMemo({
						id: editingMemo.id,
						description: inputValue,
					})
				);
				dispatch(modalActions.closeModal());
			});
		} else {
			const newMemo = new Memo(inputValue);

			addMemo(newMemo).then(() => {
				dispatch(memosActions.addMemo(newMemo.toPlainObject()));
				dispatch(modalActions.closeModal());
			});
		}
	};

	const handleCancel = () => {
		dispatch(modalActions.closeModal());
	};

	return (
		<div className='atn-form'>
			<MemoFormModal
				isModalVisible={isModalVisible}
				handleSave={handleSave}
				handleCancel={handleCancel}
				editingMemo={editingMemo}
			/>
		</div>
	);
};

export default MemoForm;
