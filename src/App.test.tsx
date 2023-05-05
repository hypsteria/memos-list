/* eslint-disable testing-library/no-unnecessary-act */
import { render, fireEvent, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import store from "./store/index";
import { Provider } from "react-redux";

describe("Memo creation and memo list", () => {
	test("create a memo and check if it appears in the memo list", async () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		const createMemoButton = screen.getByText("Add new memo");
		await act(async () => {
			userEvent.click(createMemoButton);
		});

		const inputElement = await screen.findByPlaceholderText(
			"Type or record your memo here..."
		);

		const newMemo = "A new memo";
		fireEvent.change(inputElement, { target: { value: newMemo } });

		const saveMemoButton = screen.getByText("Save memo");
		userEvent.click(saveMemoButton);

		await screen.findByText(newMemo);

		expect(screen.getByText(newMemo)).toBeInTheDocument();
	});
});
