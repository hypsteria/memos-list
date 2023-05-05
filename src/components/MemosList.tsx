import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import { modalActions, memosActions, RootState } from "../store";
import { fetchMemosList, deleteMemo } from "../utils/idb";
import Memo from "../models/memo";

const MemosList: React.FC = () => {
	const dispatch = useDispatch();
	const list = useSelector((state: RootState) => state.memos.memosList);

	useEffect(() => {
		const getListData = async () => {
			const data = await fetchMemosList();
			dispatch(memosActions.setMemosList(data));
		};

		getListData();
	}, [dispatch]);

	const handleEdit = (item: Memo | null) => {
		dispatch(modalActions.openModal(item));
	};

	const handleDelete = (id: string) => {
		deleteMemo(id).then(() => {
			dispatch(memosActions.deleteMemo(id));
		});
	};

	return (
		<List
			bordered
			dataSource={list}
			renderItem={(item) => (
				<List.Item
					actions={[
						<Button
							type='link'
							icon={<EditOutlined />}
							onClick={() => handleEdit(item)}
						>
							Edit
						</Button>,
						<Button
							type='link'
							icon={<DeleteOutlined />}
							onClick={() => handleDelete(item.id)}
						>
							Delete
						</Button>,
					]}
				>
					{item.description}
				</List.Item>
			)}
		/>
	);
};

export default MemosList;
