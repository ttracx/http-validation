'use strict'

const HTTPVALIDATION_NAMESPACE = '_registredExtensions'

/**
 * Registers an extension.
 *
 * @param {Object} world       - Cucumber world object
 * @param {string} extensionId - Unique HTTPVALIDATION extension identifier
 */
exports.registerExtension = (world, extensionId) => {
    world._registredExtensions = world[HTTPVALIDATION_NAMESPACE] || []
    world._registredExtensions.push(extensionId)
}

/**
 * Checks if an extension were registered.
 *
 * @param {Object} world       - Cucumber world object
 * @param {string} extensionId - Unique HTTPVALIDATION extension identifier
 * @return {boolean}
 */
exports.hasExtension = (world, extensionId) => {
    if (!world[HTTPVALIDATION_NAMESPACE]) return false
    if (!world[HTTPVALIDATION_NAMESPACE].includes(extensionId)) return false

    return true
}
