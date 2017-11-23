import axios from "axios";

/**
 *
 * @returns {Promise}
 */
export function getInitialData() {
	return axios.get("https://jsonplaceholder.typicode.com/users", {});
}