/**
 *
 * @param {String} key
 * @returns {JSON}
 */
export const getItem = key => JSON.parse(localStorage.getItem(key))

/**
 *
 * @param {String} key
 * @param {JSON} value
 */
export const setItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value))
