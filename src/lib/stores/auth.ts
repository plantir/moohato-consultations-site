import { writable } from "svelte/store";

function userStore() {
    let { subscribe, set, update } = writable<any>(null);
    function login(user: any) {
        set(user);
    }
    function logout() {
        set(null)
    }
    return {
        subscribe,
        set,
        update,
        login,
        logout,
    }
}
export const user = userStore();