"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDefaultProjectForFilesGlob = exports.DEFAULT_PROJECT_FILES_ERROR_EXPLANATION = void 0;
exports.DEFAULT_PROJECT_FILES_ERROR_EXPLANATION = `

Having many files run with the default project is known to cause performance issues and slow down linting.

See https://typescript-eslint.io/troubleshooting/#allowdefaultproject-glob-too-wide
`;
function validateDefaultProjectForFilesGlob(options) {
    if (!options.allowDefaultProject?.length) {
        return;
    }
    for (const glob of options.allowDefaultProject) {
        if (glob === '*') {
            throw new Error(`allowDefaultProject contains the overly wide '*'.${exports.DEFAULT_PROJECT_FILES_ERROR_EXPLANATION}`);
        }
        if (glob.includes('**')) {
            throw new Error(`allowDefaultProject glob '${glob}' contains a disallowed '**'.${exports.DEFAULT_PROJECT_FILES_ERROR_EXPLANATION}`);
        }
    }
}
exports.validateDefaultProjectForFilesGlob = validateDefaultProjectForFilesGlob;
//# sourceMappingURL=validateDefaultProjectForFilesGlob.js.map