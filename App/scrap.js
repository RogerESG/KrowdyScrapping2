let btnscrap = document.getElementById('scrap-profile')

btnscrap.addEventListener('click', async () => {
  
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  var port = chrome.tabs.connect(tab.id);
  port.postMessage({acction: 'scraping'});

  /*
  const listCandidates = []
  port.onMessage.addListener(function (response){
    const {acction} = response
    switch(acction){
      case "endScrapingList":
        listCandidates = response?.list;
        if(listCandidates&&listCandidates.length>0){
          const {url} = listCandidates[0]
          port.postMessage({action:"scrapingProfile",index:0,url})
        }
        break
      case "endScrapingProfile":
        const {profile,index} = response
        port.postMessage({acction:"scrapingProfile", index, profile})
    }
  })
  */
  
})






