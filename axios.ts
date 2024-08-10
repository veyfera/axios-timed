async function get(url: string): Promise<Response | string> {
    const MAX_WAIT = 10; // seconds
    const st = new Date();
    const controller = new AbortController();
    const request = new Request(url, {
        signal: controller.signal,
    });
    const timeout: Promise<string> = new Promise(res => {
        setTimeout(() => {
            res(`Request took more than ${MAX_WAIT} seconds`);
            controller.abort();
        }, MAX_WAIT * 1000);
    });

    return Promise.race([fetch(request), timeout]);
}

(async () => {
    const res = await get('http://localhost:3000/');
    try {
        console.log(await (res as Response).text());
    } catch {
        console.log(res);
    }
})();
