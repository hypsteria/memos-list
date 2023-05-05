import { useDispatch } from "react-redux";
import { Button, Row, Col } from "antd";

import { modalActions } from "./store";

import MemoForm from "./components/MemoForm";
import MemosList from "./components/MemosList";

const App = () => {
	const dispatch = useDispatch();

	const showModal = () => {
		dispatch(modalActions.openModal(null));
	};

	return (
		<Row>
			<Col xs={{ span: 18, push: 3 }} md={{ span: 14, push: 5 }}>
				<h1>Memos List</h1>
				<Button
					type='primary'
					onClick={showModal}
					style={{ marginBottom: "18px" }}
				>
					Add new memo
				</Button>
				<MemosList />
				<MemoForm />
			</Col>
		</Row>
	);
};

export default App;
