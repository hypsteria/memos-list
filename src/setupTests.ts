import "@testing-library/jest-dom";
import "fake-indexeddb/auto";

window.matchMedia =
	window.matchMedia ||
	function () {
		return {
			matches: false,
			addListener: function () {},
			removeListener: function () {},
		};
	};

window.alert = jest.fn();
