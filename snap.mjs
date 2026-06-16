import { chromium } from 'playwright-core';
const exe='/opt/pw-browsers/chromium_headless_shell-1228/chrome-headless-shell-linux64/chrome-headless-shell';
const b=await chromium.launch({executablePath:exe,args:['--no-sandbox','--disable-gpu','--disable-dev-shm-usage']});
const ctx=await b.newContext({viewport:{width:1280,height:900},ignoreHTTPSErrors:true});
const pg=await ctx.newPage();
await pg.goto('https://tattoo-vorlage-3.vercel.app/?v='+Date.now(),{waitUntil:'domcontentloaded',timeout:60000}).catch(()=>{});
await pg.waitForTimeout(2500);
await pg.getByText('Nur notwendige').click({timeout:4000}).catch(()=>{});
// trigger reveals by scrolling fully then back
for(let y=0;y<6000;y+=600){await pg.evaluate(v=>window.scrollTo(0,v),y);await pg.waitForTimeout(250);}
await pg.evaluate(()=>window.scrollTo(0,0));await pg.waitForTimeout(800);
await pg.screenshot({path:'/tmp/full-d.png',fullPage:true});
await b.close(); console.log('done');
