(function(){
  // configuración inyectada (hardcodeada para testers)
  window.FLEE_CFG = {
    wsUrl: "wss://97ff83f2-e0c6-4d49-bea4-8dbe3367e576-00-n6lo5jgibdni.riker.replit.dev:3000/",
    gameId: "pony-event-1",
    forceAdmin: false
  };

  function injectFile(filename){
    const s = document.createElement('script');
    s.src = chrome.runtime.getURL(filename);
    s.type = 'text/javascript';
    document.documentElement.appendChild(s);
    s.onload = () => s.remove();
  }

  // inject player script + radar script
  injectFile('playerscript.bundle.js');
  injectFile('radar.bundle.js');
})();
