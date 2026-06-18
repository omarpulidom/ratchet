type Handler = (payload: unknown) => void;

class EventBus {
  private listeners: Map<string, Set<Handler>> = new Map();

  on(event: string, handler: Handler) {
    if (!this.listeners.has(event)) this.listeners.set(event, new Set());
    this.listeners.get(event)!.add(handler);
    return () => this.listeners.get(event)!.delete(handler);
  }

  emit(event: string, payload: unknown) {
    this.listeners.get(event)?.forEach((h) => h(payload));
  }
}

export const bus = new EventBus();
