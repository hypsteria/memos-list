import { addMemo, fetchMemosList } from "./utils/idb";

describe("IndexedDB memo operations", () => {
	test("save a memo", async () => {
		const newMemo = {
			id: 1,
			description: "Test memo",
		};

		await addMemo(newMemo);

		const memoList = await fetchMemosList(newMemo.id);

		expect(memoList[0]).toEqual(newMemo);
	});
});
