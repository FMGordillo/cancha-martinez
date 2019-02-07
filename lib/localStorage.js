/**
 *
 * @param {String} key
 * @returns {JSON}
 */
const getItem = key => JSON.parse(localStorage.getItem(key))

/**
 *
 * @param {String} key
 * @param {JSON} value
 */
const setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value))
