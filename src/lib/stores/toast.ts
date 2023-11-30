import { writable } from "svelte/store";

export type ToastItem = {
  id?: string;
  type: "danger" | "warning" | "primary" | "success";
  icon?: string;
  actions: any[];
  title: string;
  description: string;
  duration?: number;
};

function createToasts() {
  const { set, update, subscribe } = writable<ToastItem[]>([]);

  function addToast(item: Partial<ToastItem>) {
    const id = `${Math.random()}`;

    setTimeout(() => {
      update((toasts) => toasts.filter((toast) => toast.id !== id));
    }, item.duration ?? 3000);

    update((toasts) => {
      return [
        ...toasts,
        {
          id,
          title: item.title ?? "",
          description: item.description ?? "",
          type: item.type ?? "primary",
          icon: item.icon ?? undefined,
          duration: item.duration ?? 3000,
          actions: item.actions ?? [],
        },
      ];
    });
  }

  return {
    subscribe,
    addToast,
  };
}

export const toasts = createToasts();
