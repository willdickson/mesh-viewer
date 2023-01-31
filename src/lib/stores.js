import { writable } from 'svelte/store';

export const meshGeoms = writable({});
export const numMeshTotal = writable(0);
export const numMeshLoaded = writable(0);
export const meshChecked = writable({});
export const colorMap = writable({});

