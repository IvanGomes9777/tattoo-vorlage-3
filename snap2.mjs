import { chromium } from 'playwright-core';
const exe='/opt/pw-browsers/chromium_headless_shell-1228/chrome-headless-shell-linux64/chrome-headless-shell';
const b=await chromium.launch({executablePath:exe,args:['--no-sandbox','--disable-gpu','--disable-dev-shm-usage']});
async function hero(w,h,file){
  const ctx=await b.newContext({viewport:{width:w,height:h},ignoreHTTPSErrors:true});
  const pg=await ctx.newPage();
  await pg.goto('https://tattoo-vorlage-3.vercel.app/?v='+Date.now(),{waitUntil:'domcontentloaded',timeout:60000}).catch(()=>{});
  await pg.waitForTimeout(3000);
  await pg.getByText('Nur notwendige').click({timeout:3000}).catch(()=>{});
  await pg.waitForTimeout(400);
  await pg.screenshot({path:file}); // viewport only = hero
  // check any text-shadow on headings/paras
  const sh=await pg.evaluate(()=>{
    const out=[];
    document.querySelectorAll('h1,h2,p,a,span').forEach(e=>{
      const cs=getComputedStyle(e); 
      if(cs.textShadow && cs.textShadow!=='none') out.push((e.tagName)+':'+e.textContent.slice(0,18)+' => '+cs.textShadow);
    });
    return out.slice(0,12);
  });
  console.log(file,'TEXTSHADOWS:',JSON.stringify(sh));
  await ctx.close();
}
await hero(1280,820,'/tmp/hero-d.png');
await hero(390,844,'/tmp/hero-m.png');
await b.close();
