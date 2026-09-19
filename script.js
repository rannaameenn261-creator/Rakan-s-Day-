const audio=document.getElementById("audio"), music=document.getElementById("music"), surprise=document.getElementById("surprise"), message=document.getElementById("message");

music.addEventListener("click",async()=>{try{if(audio.paused){await audio.play();music.innerHTML="❚❚ <span>Pause our song</span>"}else{audio.pause();music.innerHTML="♫ <span>Play our song</span>"}}catch(e){music.innerHTML="♫ <span>Tap to play</span>"}});

surprise.addEventListener("click",()=>{message.classList.toggle("show");surprise.textContent=message.classList.contains("show")?"Hide surprise 🤍":"One last surprise ✨"});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
