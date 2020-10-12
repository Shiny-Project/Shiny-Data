export function base64ToUint8Array(base64Text: string): Uint8Array {
    return Uint8Array.from(atob(base64Text), (c) => c.charCodeAt(0));
}
