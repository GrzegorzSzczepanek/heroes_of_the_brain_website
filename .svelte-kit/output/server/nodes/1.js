

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CE02e1ej.js","_app/immutable/chunks/scheduler.qna7N2zE.js","_app/immutable/chunks/index.C2WmZ_zx.js","_app/immutable/chunks/entry.DB7ljX5q.js"];
export const stylesheets = [];
export const fonts = [];
