let blocked = []
let unblocked = []

async function fetchr(url) {
  if(url.startsWith("https://")) {
    url = url.replace("https://", "")
  }
let req = await fetch('https://production-archive-proxy-api.lightspeedsystems.com/archiveproxy', {
  method: 'POST',
  headers: {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9',
    'content-type': 'application/json',
    'origin': 'https://archive.lightspeedsystems.com',
    'priority': 'u=1, i',
    'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'x-api-key': 'onEkoztnFpTi3VG7XQEq6skQWN3aFm3h'
  },
  body: JSON.stringify({
    query: `
      query getDeviceCategorization($itemA: CustomHostLookupInput!, $itemB: CustomHostLookupInput!){
        a: custom_HostLookup(item: $itemA) {
          request {
            host
          }
          cat
          action
          source_ip
          archive_info {
            filter {
              category
              transTime
              reason
              isSafetyTable
              isTLD
            }
            rocket {
              category
            }
          }
        }
        b: custom_HostLookup(item: $itemB) {
          request {
            host
          }
          cat
          action
          source_ip
          archive_info {
            filter {
              category
              transTime
              reason
            }
            rocket {
              category
            }
          }
        }
      }`,
    variables: {
      itemA: {
        hostname: url,
        getArchive: true
      },
      itemB: {
        hostname: url,
        getArchive: true
      }
    }
  })
})

let res = await req.json();
try {
let cat = res.data.a.cat;
if((cat === 28)||(cat === 72)||(cat === 134)||(cat === 94)||(cat === 33)||(cat === 12)||(cat === 13)||(cat === 11)||(cat === 31)) {
  blocked.push(url);
} else if(cat !== -1) {
  unblocked.push(url);
  console.log('\x1b[32m%s\x1b[0m', 'Unblocked: ' + url);
} 
} catch(e) {console.log(req.status)}
return true
}

const arr = []

const input = 
`easymathgames.samirajoshi.com.np
computerforgood.computersforpeace.net
soccermedicine.deleesportsmedicine.com
pixeldomainpremium.iiiii.info
schoolistheworstdonotgo.minecraftnoob.com
eduschoolistheworst022
education3231321231239896.bot.nu
sniscool.chickenkiller.com
education121212.privatedns.org
fooddrive.stormfood.com
splitters.spelar.se
unblockedpremium.ukintech.com
fortnitetipsntricks.panel-laboralcj.gob.mx
education0102.chickenkiller.com
page.clienturl.net
american.vsmexicans.dob.jp
firewoodacademy.lu7fuf.com.ar
youranoobwompwomp.minecraftnoob.com
director.ve3.info
analyticsanddata.aybit.ch
ncthesecondbestowner.mine.bz
hoster.h-o-s-t.name
cinemasi.us.to
familyphotos.photo-frame.com
undoit1111.undo.it
humanitarianaid.computersforpeace.net
love.math.crabdance.com
gatedneighborhood.gatesweb.info
totallymath.w.strangled.net
peakisigma.tivita-dyndns.de
phycologyandphysics.h-o-s-t.name
wiki.pedia.qualitypoolsboulder.com
premiumpixel.larryagro.cl
schoolisthesuperwrost1111.port0.org
education12031231.mooo.com
micheal.jackson.smelly.cc
wager.aybit.ch
simplegeomentryquiz.orenbayannevresim.com.tr
grammerfixer.timholden.info
wiki.pedia.sundby.com
education10231231.fr.to
education123923176321783289132163213.hackquest.com
alien.ship.h-o-s-t.name
mcamath.cwnp.cn
learntocode.westkis.com
sercettheworst.fr.to
rally.ve3.info
ncisaw.zanity.net
schoology.super-modding.quest
byme.clienturl.net
whattttttttt.bot.nu
wendysdoubleburger.chaseinator.com
hgfsdfasewafd.x4xs.xyz
bruhhhhhjh.us.to
hate.waffles.okzk.com
dispenser.clienturl.net
shadow-ai.app
education10011.bot.nu
imlazy.internet-slackers.us
wompwompgetoverit.ftp.sh
freetraumatherepy.smartpettherapy.com
none.reason.org.nz
glasses.clienturl.net
wompwomp.mooo.com
brainskills.madhacker.biz
jesusisking.dob.jp
schoolwhy2123.fr.to
education1000000000.twilightparadox.com
howtotakegoodphotos.photographs.gs
ooooujumpingcrab.jumpingcrab.com
brokie.awiki.org
calculus.dhnas.cc
bruhbrobro.chickenkiller.com
nobodyknows.uk.to
lagug.jumpingcrab.com
library.port0.org
ixltriganomentry.h-o-s-t.name
pixeldomain.sysinfo.ro
let.it.happen.ayrnatales.net
schoolistheworst.farted.net
please-explain-physics-in-anime.soon.it
yrrol.clienturl.net
science-practiceandhelp.info.gf
clickdabutton.unibutton.com
sciencequiz.acquyvienthongcu.com
racker.aybit.ch
whatthehellareyoudoing.info.gf
noisthebest.chickenkiller.com
phycologyquiz.marcovera.cl
infographics.iiiii.info
basicdonotopenopopfa.chickenkiller.com
howtocode.appswiss.ch
alien.atack.jundy.org
onepieceisbest.youramys.com
learnhowtodraw.compadrones.cl
minecrosoft.mylogisoft.com
sn.twilightparadox.com
areyouathome.home.kg
frfrfrghostly.fr.to
notion.usercontent.motorcycles
mcamathtest.lysterfam.net
middleschoolmathquiz.galfione.com.ar
learnhowtodraw.paulkelly.org
rave.dob.jp
learnphysics.tk0438.com
byme.clienturl.net
coding-help.bot.nu
legak.uk.to
shadownetisthebest.us.to
randommathquestions.rivstargroupenterprise.com
school.work.0rg.us
dontknow.nimali.net
mathquiz.symtek.cl
brainscience.cassain.com.ar
ewwwyyoufarted.farted.net
miner.mine.bz
wompwompgetoveritwompwomp.chickenkiller.com
education0000000.ftp.sh
bear.aybit.ch
bruhbrobro123.ftp.sh
hot.dog.host2go.net
bro1212.ftp.sh
basicgeomentryquiz.iprogreso.cl
skibidirizzissosigma.es-1197.info
linker.aybit.ch
getsomefriendskid.pals.com.np
lawnmower.powermotors.com.br
schoolwhy212323.twilightparadox.com
surgerygloves.assuregloves.com
wompwomp21.twilightparadox.com
atom.aybit.ch
premiumlink.photo-frame.com
robloxgamegame1212.twilightparadox.com
phantom.lol
education000000000000321.mine.bz
dontundoit.undo.it
pixeldomain.thehitechhouse.com
mathquestionsquiz.919fm.in
bobbobobbb1212.chickenkiller.com
scientificmathcalculator.muebleriafiedler.cl
sunshinemath.uhaneingenieria.mx
relaxingmusic.cisua.tk
dispenser.clienturl.net
freefamilyphotos.photo-frame.com
schoolistheworst0.ftp.sh
ixlgeomentry.acompanhantesantoandre.com.br
uclatech.coppertech.cl
mathgames.morlaca.ro
ihate.math.crabdance.com
lambo.aybit.ch
lorry.clienturl.net
justdifferent.crabdance.com
ghostlyisthebest.privatedns.org
yousure.ftp.sh
learntoswim.swfin.net
submityourhomework.uncork.co
education157.fr.to
rampage.clienturl.net
definitely-geico-home-and-car-insurance.69.mu
whatareyoudoingeveryday.fr.to
fruitpicker.raspberryip.com
yourdumbeducation02383123.d-n-s.name
lagged.688.org
never.sysops.cl
brainscience.proadmin.cl
footsteps.ftp.sh
learntobowl.michiganbowling.com
145463.smartinnovation.md
mcaenglish.connorduffy.space
educollege.simpusku.id
uranooblol.minecraftnoob.com
classroomforsure.minecraftnoob.com
youshouldundoit.undo.it
baseballleague.itleague.com
education15700.chickenkiller.com
bobbobooboboboeducation1023321.awiki.org
shadowbrowser.privatedns.org
bobasasasasda.uk.to
shadowbestunblocker.uk.to
ravaged.ve3.info
yourabot11111.bot.nu
adoptapuppy.brianpuppy.com
popeyes.amorins.org
rocketscience.markysmeatmarket.com
blankyuwu.spacetechnology.net
googledocs.uk.to
bob12312321.us.to
damped.chickenkiller.com
bibleread.tecnografic.com.ar
xn--p3tx23j.wiftee.com
orchestra-help-getgood.home.kg
information.ve3.info
throwingabirthday.partybag.com
whoyoulookingata.uk.to
directorpromo.aybit.ch
iwonder.casp.com.mx
linkslinks.us.to
clientsaremain.clienturl.net
education1002321.ftp.sh
oilchange.powermotors.com.br
education121.ignorelist.com
starboy.chillcrew.net
undoitdumbeducation00023.undo.it
deployer.host2go.net
crzy.ignorelist.com
rockhard.tivita-dyndns.de
schoolisthebest1221.fr.to
education15800.fr.to
ugghhhlinksagain.chickenkiller.com
brainscience.pablomz.net
minecrafttips.minecraftnoob.com
music.tut.dcmusic.ca
glasses.clienturl.net
brainpuzzles.glk.com.np
definitelyenglish.undo.it
trainsdabest.lovethosetrains.com
big.blackmen.servernux.com
shadow.xalphabet.dev
pixelwork.morlaca.ro
crazyness.photo-frame.com
euphratesriver.datakontrol.xyz
moneytrees.manofaction.xyz
cleaningyourhome.home.kg
wompwompwompwomp.chickenkiller.com
lifeisslowdealwithit.ftp.sh
pigies.mooo.com
atom.aybit.ch
psychology.fmhchile.cl
youranoob.minecraftnoob.com
education138361391237821632132131.csproject.org
yoooowompwompeducation123.minecraftr.us
67453.bygone-transport.co.uk
skibbiditoilet.img.com.ar
education102301030213782173213213.twilightparadox.com
ustothebest.us.to
artsncraftsworkshop.fr.to
scienceisfun.gpsdata.ru
directorpromoontop.clienturl.net
education150yt21312.dcmusic.ca
school121.crabdance.com
shadowisthebestunblockerngl.strangled.net
ewwwwyoufartedagain.twilightparadox.com
historydiagram.navarajbudha.com.np
ghostlybestowner.jumpingcrab.com
tired.asf.ufodns.com
sciencestorys.remont-tovar.ru
paintinglessons.bot.nu
ftp2131.ftp.sh
ughhhhhhh.privatedns.org
goshadow.net
hilarious.verymad.net
jesusisthebest.mooo.com
becomeamechanic.motorwisemechanical.com.au
rights.ve3.info
simplephycology.oborenstein.com
schoolisthewrost12.strangled.net`;

const lines = input.split('\n');
lines.forEach((line) => {
  arr.push(line)
});

async function init() {
for(i of arr) {
  await fetchr(i);
}
}

init()