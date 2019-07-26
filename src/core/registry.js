'use strict'

const http-validation_NAMESPACE = '_registredExtensions'

/**
 * Registers an extension.
 *
 * @param {Object} world       - Cucumber world object
 * @param {string} extensionId - Unique http-validation extension identifier
 */
exports.registerExtension = (world, extensionId) => {
    world._registredExtensions = world[http-validation_NAMESPACE] || []
    world._registredExtensions.push(extensionId)
}

/**
 * Checks if an extension were registered.
 *
 * @param {Object} world       - Cucumber world object
 * @param {string} extensionId - Unique http-validation extension identifier
 * @return {boolean}
 */
exports.hasExtension = (world, extensionId) => {
    if (!world[http-validation_NAMESPACE]) return false
    if (!world[http-validation_NAMESPACE].includes(extensionId)) return false

    return true
}
