
async function get (url) {
    const MAX_WAIT = 10;//seconds
    const st = new Date();
    const controller = new AbortController();
    const request = new Request(url, {
        signal: controller.signal,
    });

    const res = fetch(request);
    while(!res || Date.now()-st < 10*1000) {
        
    }
    if (!res) {
        controller.abort();
    }
    return res;


}

const res = get('http://localhost:3000/');
console.log(res)
