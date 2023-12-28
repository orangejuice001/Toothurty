// import library
const fs = require("fs");

/**
 * Reads the json
 * @param {string} path - path of file to read from
 * @returns {Object} - data
 */
export function getData(path) {
	fs.readFile(path, "utf8", (err, data) => {
		if (!err) {
			// Parse the JSON data
			return JSON.parse(data);
		}

		console.error("Error reading the file:", err);
	});
}

/**
 * Saves the object as json
 * @param {string} path - path for file to be saved
 * @param {Object} data - data to be saved
 */
export function saveData(path, data) {
	const jsonString = JSON.stringify(data, null, "\t");

	fs.writeFile(path, jsonString, "utf8", (err) => {
		if (err) {
			console.error("Error writing to the file:", err);
			return;
		}

		console.log("File has been written successfully!");
	});
}
