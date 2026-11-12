const PH="918233834444",ADDR="Flat No C, #100, Kamadhenu Apartments, Diagonal Road, Parvathipuram, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka – 560004";
const MAP="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent("The Tooth Hub Dental Clinic, "+ADDR);
const ICO='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M7 3c-2.5 0-4 2-4 4.5 0 2 1 3.500 1.500 5.500.6 2.500.8 8 2.700 8 1.800 0 1.500-5 4.800-5s3 5 4.800 5c1.900 0 2.100-5.500 2.700-8 .5-2 1.500-3.500 1.500-5.500C21 5 19.500 3 17 3c-2 0-3 1-5 1S9 3 7 3z"/></svg>';
const S=[["root-canal","Root Canal Treatment","RESTORATIVE","Treats the inside of a tooth when its pulp is infected or inflamed, helping to keep the natural tooth.","an infected or deeply decayed tooth, or one with a cracked surface or lasting sensitivity"],
["implants","Dental Implants","RESTORATIVE","A replacement for a missing tooth root that supports a crown, bridge or denture.","one or more missing teeth and sufficient bone support, assessed by the dentist"],
["wisdom-tooth","Wisdom Tooth Extraction","ORAL SURGERY","Removal of third molars that are impacted, painful, decayed or crowding other teeth.","pain, swelling, repeated gum infection or impaction around a wisdom tooth"],
["braces","Orthodontics & Braces","ORTHODONTICS","Fixed appliances that gradually guide teeth and jaws into better alignment.","crowding, gaps, bite problems or irregular tooth positions"],
["aligners","Clear Aligners","ORTHODONTICS","Removable, transparent trays that move teeth in planned steps.","mild to moderate alignment concerns, subject to clinical assessment"],
["gums","Bleeding Gums Treatment","PERIODONTICS","Evaluation and care for gum inflammation, plaque and tartar related problems.","bleeding while brushing, swollen or tender gums, or persistent bad breath"],
["air-polishing","Air Polishing","PREVENTIVE","A cleaning method using a fine stream of air, water and powder to lift surface stains and plaque.","surface staining or routine preventive cleaning"],
["bonding","Composite Bonding","COSMETIC","Tooth-coloured material shaped onto a tooth to repair chips, gaps or discolouration.","minor chips, small gaps or uneven tooth shape"],
["crowns","Ceramic Crowns & Bridges","RESTORATIVE","Tooth-coloured caps and fixed bridges that restore damaged or missing teeth.","a heavily restored, weak or broken tooth, or a gap from a missing tooth"],
["maxillofacial","Oral & Maxillofacial Surgery","SURGERY","Surgical care for conditions of the teeth, jaws and surrounding oral structures.","jaw, facial or complex extraction concerns referred after examination"]];
const $=document.getElementById("app");
const wa=t=>"https://wa.me/"+PH+"?text="+encodeURIComponent(t);
const card=s=>`<div class="fc" tabindex="0" role="button" aria-label="${s[1]}, flip card"><div class="in"><div class="fa">${ICO}<div><h3>${s[1]}</h3></div><span class="cat">${s[2]}</span></div>
<div class="fa bk"><h3>${s[1]}</h3><p>${s[3]}</p><a class="btn" href="#book">Enquire Now</a><span class="bx">Tap card to flip back</span></div></div></div>`;
const cta=`<section class="alt"><div class="glow"></div><div class="w" style="position:relative"><h2>Ready to Take Care of Your Smile?</h2><p class="sub">Get in touch with The Tooth Hub Dental Clinic to enquire about an appointment.</p><a class="btn" href="#book">Book Appointment</a> <a class="btn o" href="tel:+918233834444">Call Clinic</a></div></section>`;
const opts=S.map(s=>`<option>${s[1]}</option>`).join("");
const form=`<form id="f"><div class="fr"><label>Patient name<input name="n" required></label><label>Phone number<input name="p" type="tel" required></label></div>
<div class="fr"><label>Preferred date<input name="d" type="date"></label><label>Preferred time<input name="t" type="time"></label></div>
<label>Treatment<select name="s"><option>Not sure / General consultation</option>${opts}</select></label>
<button class="btn" type="submit">Submit enquiry via WhatsApp</button><p class="bx">This opens WhatsApp with your enquiry prefilled. It is not a confirmed booking; the clinic will confirm availability.</p></form>`;
const loc=`<div class="g2"><div class="box"><h3>The Tooth Hub Dental Clinic</h3><p style="margin:10px 0">${ADDR}.</p><p>Near Sri Bhagavan Mahaveer Jain College / Sambavanath Jain Bhavan, and near National College Metro Station.</p><p style="margin:10px 0"><a href="tel:+918233834444" style="color:var(--br)">+91 82338 34444</a></p><p>Monday – Saturday: 10 AM – 10 PM<br>Sunday: 10 AM – 5 PM (confirmation required)</p><p style="margin-top:16px"><a class="btn" href="${MAP}" target="_blank" rel="noopener">Get Directions</a> <a class="btn o" href="${wa("Hello, I would like to enquire about an appointment.")}" target="_blank" rel="noopener">WhatsApp</a></p></div>
<div class="box" style="display:grid;place-items:center;text-align:center"><div><h3>Find us in Basavanagudi</h3><p class="bx" style="margin:8px 0 16px">Map opens in Google Maps.</p><a class="btn o" href="${MAP}" target="_blank" rel="noopener">Open Map</a></div></div></div>`;
const R={
home:()=>`<section class="hero"><div class="glow"></div><div class="w hg"><div><div class="bd"><span class="pill">★ 4.9/5 Google rating</span><span class="pill">280+ patient reviews</span><span class="pill">Basavanagudi, Bengaluru</span></div>
<h1>Advanced &amp; Gentle Dental Care in Basavanagudi, Bengaluru</h1><p>Your smile deserves expert care. Experience comprehensive dental treatments, modern technology and patient-focused dental care at The Tooth Hub Dental Clinic.</p>
<a class="btn" href="#book">Book Appointment</a> <a class="btn o" href="tel:+918233834444">Call Clinic</a></div>
<div class="vis"><div>${ICO}<p><small>Placeholder for clinic photography</small></p></div></div></div></section>
<section class="alt"><div class="w st rv"><div class="box"><b>4.9/5</b>Google Rating</div><div class="box"><b>280+</b>Patient Reviews</div><div class="box"><b>10 AM – 10 PM</b>Clinic Timings</div><div class="box"><b>Multiple</b>Dental Services</div></div></section>
<section><div class="w g2 rv"><div><h2>Your Smile, Our Priority</h2><p>The Tooth Hub is a dental care destination in Basavanagudi offering general dentistry, orthodontics, oral surgery and restorative treatments.</p><p style="margin-top:12px"><a class="btn o" href="#about">Learn more</a></p></div>
<ul class="c"><li>Patient-focused dental care</li><li>Multiple dental treatment options</li><li>Convenient Basavanagudi location</li><li>Wide operating hours</li><li>Professional dental environment</li></ul></div></section>
<section class="alt"><div class="glow"></div><div class="w" style="position:relative"><h2>Comprehensive Dental Care</h2><p class="sub">Explore our dental services and find the right care for your smile.</p><div class="sg">${S.map(card).join("")}</div></div></section>
${why()}
<section class="alt"><div class="w rv"><h2>What Our Patients Say</h2><p class="sub">Verified reviews will be displayed here once supplied with permission.</p><div class="box" style="max-width:480px"><b style="color:var(--tx);font-size:2rem">4.9/5</b><p>★★★★★ from 280+ Google reviews</p><p class="bx" style="margin:8px 0">Client-provided figures; to be verified before public launch.</p><span class="btn o" style="opacity:.6;cursor:default">Google reviews link: add after verification</span></div></div></section>
<section><div class="w g2"><div><h2>Ready to Take Care of Your Smile?</h2><p class="sub">Get in touch with The Tooth Hub Dental Clinic to enquire about an appointment.</p></div><div class="box">${form}</div></div></section>
<section class="alt"><div class="w"><h2>Location &amp; Timings</h2><br>${loc}</div></section>`,
about:()=>`<section class="hero"><div class="glow"></div><div class="w" style="position:relative"><h1>About The Tooth Hub</h1><p>The Tooth Hub Dental Clinic is a professional dental care clinic, orthodontics and oral surgery centre in Basavanagudi, Bengaluru. We offer general dentistry, orthodontic care, oral surgery and restorative treatments, with convenient timings from 10 AM to 10 PM on weekdays.</p><p class="bx">Doctor profiles, qualifications and facility details will be added after clinic confirmation.</p></div></section>${why()}${cta}`,
services:()=>`<section class="hero"><div class="glow"></div><div class="w" style="position:relative"><h1>All Dental Services</h1><p class="sub">Tap or hover a card to learn more, or open a treatment page for details.</p><div class="sg">${S.map(card).join("")}</div><div class="g3" style="margin-top:36px">${S.map(s=>`<a class="box" href="#s-${s[0]}"><h3 style="font-size:1rem">${s[1]}</h3><span class="bx">View details →</span></a>`).join("")}</div></div></section>${cta}`,
contact:()=>`<section class="hero"><div class="glow"></div><div class="w" style="position:relative"><h1>Contact Us</h1><br>${loc}</div></section>`,
book:()=>`<section class="hero"><div class="glow"></div><div class="w" style="position:relative;max-width:640px"><h1>Book an Appointment</h1><p class="sub">Send an enquiry and the clinic will get back to you.</p><div class="box">${form}</div></div></section>`,
why:()=>R.home()
};
function why(){const w=[["Comprehensive Dental Treatments","From preventive care to surgery."],["Patient-Centred Approach","Care that listens to your concerns."],["Convenient Clinic Location","Close to National College Metro Station."],["Wide Operating Hours","Open 10 AM – 10 PM, Monday to Saturday."],["Multiple Treatment Options","Restorative, orthodontic, cosmetic and surgical care."],["Easy Appointment Enquiries","Call, or message on WhatsApp."]];
return `<section id="why"><div class="w"><h2>Why Choose The Tooth Hub Dental Clinic?</h2><br><div class="g3 rv">${w.map(x=>`<div class="box"><h3 style="font-size:1.05rem">${x[0]}</h3><p class="bx" style="font-size:.9rem">${x[1]}</p></div>`).join("")}</div></div></section>`}
function detail(s){const n=s[1];return `<section class="hero"><div class="glow"></div><div class="w" style="position:relative;max-width:820px"><span class="cat">${s[2]}</span><h1 style="margin:12px 0">${n}</h1>
<h3>Introduction</h3><p>${s[3]}</p><br><h3>What it involves</h3><p>${n} is planned after an examination by the dentist, who explains the options, expected visits and care required.</p><br>
<h3>When you may need it</h3><p>A patient may consider this when they have ${s[4]}. Only a dentist can advise whether it suits you.</p><br>
<h3>General procedure</h3><ul class="c"><li>Consultation and examination, with X-rays if the dentist advises</li><li>Discussion of the treatment plan and options</li><li>Treatment in one or more visits</li><li>Aftercare guidance and follow-up</li></ul><br>
<h3>FAQs</h3><details><summary>Is ${n} right for me?</summary><p>This depends on your examination. Book a consultation for personal advice.</p></details>
<details><summary>How many visits will I need?</summary><p>The number of visits varies by case and is explained during planning.</p></details>
<details><summary>What does it cost?</summary><p>Pricing depends on the case. Please enquire with the clinic.</p></details><br>
<a class="btn" href="#book">Enquire About ${n}</a></div></section>`}
function render(){let h=(location.hash||"#home").slice(1),sc=null;
if(h==="why"){sc="why";h="home"}
const s=S.find(x=>"s-"+x[0]===h);
$.innerHTML=s?detail(s):(R[h]||R.home)();
document.title=s?s[1]+" | The Tooth Hub Dental Clinic, Basavanagudi":"The Tooth Hub Dental Clinic | Dentist in Basavanagudi, Bengaluru";
document.getElementById("lk").classList.remove("o");
if(sc){const e=document.getElementById(sc);e&&e.scrollIntoView()}else scrollTo(0,0);
bind()}
function bind(){
document.querySelectorAll(".fc").forEach(c=>{const t=()=>c.classList.toggle("f");
c.onclick=e=>{if(!e.target.closest("a"))t()};
c.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();t()}}});
const f=document.querySelectorAll("#f");f.forEach(fm=>fm.onsubmit=e=>{e.preventDefault();const d=new FormData(fm);
const m=`Hello, I would like to enquire about an appointment.\nName: ${d.get("n")}\nPhone: ${d.get("p")}\nTreatment: ${d.get("s")}\nPreferred date: ${d.get("d")||"Any"}\nPreferred time: ${d.get("t")||"Any"}`;
window.open(wa(m),"_blank","noopener")});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("v");io.unobserve(x.target)}}));
document.querySelectorAll(".rv").forEach(e=>io.observe(e))}
addEventListener("hashchange",render);render();
const nv=document.getElementById("nav");addEventListener("scroll",()=>nv.classList.toggle("s",scrollY>20));
document.getElementById("ham").onclick=()=>document.getElementById("lk").classList.toggle("o");
