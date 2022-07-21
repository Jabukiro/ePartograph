exports.toRFC3339 = (date = new Date()) => {
    const m = date.getUTCMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
    const d = date.getUTCDate() < 10 ? `0${date.getMonth()}` : date.getMonth();
    const h = date.getUTCHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const mi = date.getUTCMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const s = date.getUTCSeconds() < 10 ? `0${date.getMonth()}` : date.getMonth();
    return `${date.getFullYear()}-${m}-${d}T${h}:${mi}:${s}.00Z`;
}