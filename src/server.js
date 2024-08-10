const express = require('express')
const app = express()
const port = 3000

const MIN_DELAY = 5;
const MAX_DELAY = 15;

const todo = [];

async function sleep(ms){
    //const st = new Date()
    //let ct = 0;
        //do {
            ////console.log('waiting...')
        //} while (Date.now()-st< ms)
    return new Promise(res => setTimeout(res, ms));
}

app.get('/', async (req, res) => {
        const rndTime = Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY;
        
        console.log("waiting for " + rndTime + " seconds");
        await sleep(rndTime * 1000);
        res.send(`hello work ${rndTime}`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

