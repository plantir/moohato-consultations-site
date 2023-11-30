import type { SvelteComponent } from "svelte";
import { writable } from "svelte/store";
export type ModalParams = {
    open: boolean;
    component?: new (...args: any) => SvelteComponent;
    props?: any;
    close: () => void;
    resolve: (data: any, shouldClose: boolean) => void;
    reject: (reason: any) => void;
  };
function createModalStore() {
    let { subscribe, set, update } = writable<ModalParams>();
    function open(component: any, props: any): Promise<any> {
        return new Promise((resolve, reject) => {
            function close() {
                update((modal) => ({
                    ...modal!,
                    open: false,
                }));
            }
            set({
                open: true,
                component,
                props,
                resolve: (payload: any, shouldClose: boolean = true) => {
                    if (shouldClose) {
                        close();
                    }
                    resolve(payload);
                },
                reject: (reason: any) => {
                    close();
                    reject(reason);
                },
                close() {
                    close();
                    resolve(false);
                },
            });
        });
    }
    return {
        subscribe,
        open
    }
}
export const modal = createModalStore();