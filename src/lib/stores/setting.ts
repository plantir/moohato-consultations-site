import { writable } from "svelte/store";

function SettingStore() {
    let { subscribe, set, update } = writable<any>(null);

    return {
        subscribe,
        set,
        update,
    }
}
export const settings = SettingStore();