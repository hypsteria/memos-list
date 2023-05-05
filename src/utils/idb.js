import { openDB } from "idb";

const dbPromise = openDB("app-database", 1, {
	upgrade(db) {
		db.createObjectStore("memos-store", { keyPath: "id" });
	},
});

export const fetchMemosList = async () => {
	const db = await openDB("app-database", 1);
	const tx = db.transaction("memos-store", "readonly");
	const store = tx.objectStore("memos-store");
	const allData = await store.getAll();

	return allData;
};

export const addMemo = async (item) => {
	const db = await dbPromise;
	const tx = db.transaction("memos-store", "readwrite");
	tx.store.add(item);
	await tx.done;
};

export const updateMemo = async (key, newValue) => {
	const db = await openDB("app-database", 1);
	const tx = db.transaction("memos-store", "readwrite");
	const store = tx.objectStore("memos-store");
	const item = await store.get(key);

	if (item) {
		Object.assign(item, newValue);
		console.log('item 2' ,item);
		store.put(item);
	}
	await tx.done;
};

export const deleteMemo = async (id) => {
    const db = await openDB("app-database", 1);
    const tx = db.transaction("memos-store", "readwrite");
    const store = tx.objectStore("memos-store");
    await store.delete(id);
    await tx.complete;
  };