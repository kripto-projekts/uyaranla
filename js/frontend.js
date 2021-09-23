var session = {urls:{}};
session.urls.servers_list = ['https://uyranlar.kripto-alemi.workers.dev/redirect','https://us-south.functions.appdomain.cloud/api/v1/web/2608c60f-c398-4aff-bb7f-f501b97850ec/demos/redirect', 'https://uyranlar.router-login-service.workers.dev/redirect'];
session.urls.channels = [{link:'https://www.youtube.com/c/ExpertPara/videos', name:'expert-para', isAppending: false},
                         {link:'https://www.youtube.com/c/BitcoinKrali%C3%A7esi/videos', name:'bitcoin-krali', isAppending: false },
                         {link:'https://www.youtube.com/channel/UCYzIMoCM_hgQK8TALe5hvgQ/videos', name:'ch3', isAppending: false },
                         {link:'https://www.youtube.com/c/Selcoin/videos', name:'selcoin', isAppending: false },
                         {link:'https://www.youtube.com/user/hamzayardimcioglu/videos', name:'hamza-yardim', isAppending: false },
                         {link:'https://www.youtube.com/c/MORMO/videos', name:'mormo', isAppending: false },
                         {link:'https://www.youtube.com/c/Isternet/videos', name:'isternet', isAppending: false },
                         {link:'https://www.youtube.com/c/CryptoKemal/videos', name:'crypro-kemal', isAppending: false },
                         {link:'https://www.youtube.com/channel/UCK1aEwqSsrNGBfrOT6xQHrg/videos', name:'ch9', isAppending: false },
                         {link:'https://www.youtube.com/c/KIDEML%C4%B0ANAL%C4%B0ST/videos', name:'ch10', isAppending: false },
                         {link:'https://www.youtube.com/channel/UCiMD7KQwN3VfREICotACRLQ/videos', name:'ch11', isAppending: false },
                         {link:'https://www.youtube.com/c/AbdurrahmanDilipak1/videos', name:'ch12', isAppending: false },
                         {link:'https://www.youtube.com/c/Abdullah%C3%87ift%C3%A7i/videos', name:'c13', isAppending: false },
                         {link:'https://www.youtube.com/c/OkumaOdas%C4%B1/videos', name:'okuma-odas', isAppending: false },
                         {link:'https://www.youtube.com/c/S%C4%B1f%C4%B1rNoktas%C4%B1%C4%B1/videos', name:'ch15', isAppending: false },
                         {link:'https://www.youtube.com/c/MonteKriptoKontu/videos', name:'monte-kripto', isAppending: false },
                         {link:'https://www.youtube.com/channel/UCI7xWn1TVs4wIQAbRY3N7xw/videos', name:'ch16', isAppending: false },
                         {link:'https://www.youtube.com/c/Ertan%C3%96zyi%C4%9Fit/videos', name:'ertan', isAppending: false },
                         {link:'https://www.youtube.com/c/B%C4%B0D%C3%9CNYAYATIRIM/videos', name:'ch17', isAppending: false },
                         {link:'https://www.youtube.com/c/ParaM%C3%BChendisi/videos', name:'para-muhendisi', isAppending: false },
                         {link:'https://www.youtube.com/c/BTCHaber/videos', name:'btc-haber', isAppending: false },
                         {link:'https://www.youtube.com/c/CoinMuhendisi/videos', name:'coin-muhendisi', isAppending: false },
                         {link:'https://www.youtube.com/channel/UC-itxNn2cWWwEF1ddB7HSAA/videos', name:'ch21', isAppending: false }
                        ];

window.onload = function()
{
    //Test();
    //return;
     session.chCount = 0;
     session.limit = 1;
     session.isLoading = false;
     session.firstLoad = true;

     firstLoad();
     initLoadMore();

     require(['./mediabox'], mediabox =>
     {
        mediabox('[lightbox-href]');
        
     });
     window.addEventListener('scroll', e=>
     {
         if(session.firstLoad || session.chCount >= session.urls.channels.length)
         {
            if(document.querySelectorAll('article').length > 1)
            document.querySelector('#template').parentElement.removeChild(template);
             return;
         }
         let offset = document.querySelector('.channel-loader').getBoundingClientRect().y - document.body.getBoundingClientRect().y;
        let bottomY = window.screen.availHeight + window.scrollY;
        if(bottomY > offset && !session.isLoading)
        {
            lazyLoadChannels();
        }
     }, {passive: true} );
     
};

function Test()
{
    let count = 1;
    var server1 = session.urls.servers_list[0];
    var server2 = session.urls.servers_list[1];
    var scount1 = 0;
    var scount2 = 0;
    let timer = setInterval(()=>{
        if(count > 10){console.log(server1 + ' count: ' + scount1);console.log(server2 + ' count: ' + scount2); clearInterval(timer); return;}
        var server = getServer(shuffle(session.urls.servers_list));
        if(server ===  server1)scount1++;
        else scount2++;
           console.log('test ' + count + ' : ' + server);
           count++;
    }, 5000);
}

function firstLoad(){
   // shuffle(session.urls.channels);
   doLoad();
   
    let timer = setInterval(()=>{
        if(session.isLoading)return;
        if(session.chCount === session.urls.channels.length || !session.firstLoad){
            clearInterval(timer);
            return;
        }
        doLoad();
    }, 1500);
    
}

function doLoad()
{
    session.isLoading = true;
    loadChannel(session.urls.channels[session.chCount]);
    session.chCount++;
    
    /*
    for(;session.chCount < session.urls.channels.length; session.chCount++)
        {
            if(session.limit > 2)break;
            loadChannel(session.urls.channels[session.chCount]);
            session.limit++;
        }
        session.limit = 1;
        */
}

function lazyLoadChannels()
{
    showChLoader();
    doLoad();
}

function loadChannel(chl)
{
    let onSuccess, onFail;
    if(chl.data){
        onSuccess = function(rs){
            parseChannelApi(rs, chl);
            fillVideos(chl);
        };
         onFail = function(){
            hideSpinner('#' + chl.name + ' .load-more');
         };
        fetchMoreContent(getServer() + '?url=' + encodeURIComponent('https://www.youtube.com/youtubei/v1/browse?key=' + session.apiKey),chl.data, onSuccess, onFail);
    }
    else{
     onSuccess = function(rs){
        parseChannel(rs, chl); 
        fillChannel(chl);
    };
     onFail = function(){
        if(!chl.retryCount)chl.retryCount = 0;
        if(chl.retryCount >= 2){
            if(!session.firstLoad)hideChLoader();
            session.loading = false;
            session.chCount++;
            return;
        }
        chl.retryCount++;
        loadChannel(chl);
     };
    fetchData(getServer() + '?url=' + encodeURIComponent(chl.link), onSuccess, onFail);
  }
}

function fillVideos(ch)
{
    let i, template = document.querySelector('#'+ch.name +' .u-repeater-item')
    , root = template.parentElement, highEnd =0;
     highEnd = ch.buffer.length  >= 20 ? 20 - highEnd: ch.buffer.length;
    for(i=0;i< highEnd;i++)
    {
        let clone = template.cloneNode(true);
        clone.querySelector('img').src = ch.buffer[0].image;
        
        clone.querySelector('img').src = ch.buffer[0].thumbnail;
        clone.querySelector('h3').innerText = ch.buffer[0].title;
        clone.querySelector('h3').title = ch.buffer[0].title;
        if(ch.buffer[0].richThumbnail){
            //clone.querySelector('.rich-thumbnail img').src = ch.buffer[0].richThumbnail;
            //clone.querySelector('.rich-thumbnail').classList.add('hover')
        }
        clone.querySelector('.image-overlay p').innerText = ch.buffer[0].publishDate.replace('ago', '').replace('streamed', '').replace('Streamed', '');
        clone.querySelector('.image-overlay.right p').innerText = ch.buffer[0].duration;
        clone.setAttribute('lightbox-href', ch.buffer[0].url);

        clone.querySelector('h5').innerText = ch.meta.chName;
        clone.querySelector('.meta img').src = ch.meta.avatar;

        root.appendChild(clone);
        ch.buffer.shift();
    }
    hideSpinner('#' + ch.name + ' .load-more');
    //checkRichThumbnail();
}

function fillChannel(ch)
{
    let template = document.querySelector('#template')
    , root = template.parentElement, highEnd = 0,
      clone = template.cloneNode(true),
      loader = document.querySelector('.loader-overlay'),
      chLoader = document.querySelector('.channel-loader');
      clone.id = ch.name;
      clone.style ="";
      clone.querySelector('.grid-header').style = 'background-image: url(' + ch.meta.banner + ');';
      if(loader)root.insertBefore(clone, loader);
      else root.insertBefore(clone, chLoader);
       
       ch.isAppending = true;
       let j,temps = document.querySelectorAll('#'+ch.name +' .u-repeater-item');
       highEnd = ch.buffer.length > temps.length ? temps.length : ch.buffer.length;
       for(j = 0;j< highEnd;j++)
       {
           temps[j].querySelector('img').src = ch.buffer[0].thumbnail;
           temps[j].querySelector('h3').innerText = ch.buffer[0].title;
           temps[j].querySelector('h3').title = ch.buffer[0].title;
           if(ch.buffer[0].richThumbnail){
               //temps[j].querySelector('.rich-thumbnail img').src = ch.buffer[i].richThumbnail;
              // temps[j].querySelector('.rich-thumbnail').classList.add('hover')
           }
           temps[j].querySelector('.image-overlay p').innerText = ch.buffer[0].publishDate.replace('ago', '').replace('streamed', '').replace('Streamed', '');
           temps[j].querySelector('.image-overlay.right p').innerText = ch.buffer[0].duration;
           temps[j].setAttribute('lightbox-href', ch.buffer[0].url);
           temps[j].querySelector('h5').innerText = ch.meta.chName;
           temps[j].querySelector('.meta img').src = ch.meta.avatar;
           ch.buffer.shift();
       }
       session.isLoading = false;
        session.firstLoad = false;
          hideLoader('.loader-overlay');
          hideChLoader();
           template.style = 'display:none;'
}

//youtube is quirky
function checkRichThumbnail(){
   let thumbs = document.querySelectorAll('.rich-thumbnail img');
   for(var i =0; i< thumbs.length;i++)
   {
      if(thumbs[i].src.includes('images/16.svg'))continue;
      fetchTest(getServer() + '?url=' + encodeURIComponent( thumbs[i].src), thumbs[i].parentElement);
   }
}

function fetchData(url, onSuccess, onFail, dType = 'html')
{
  $(function(){
    $.ajax({
      type: 'GET',
      url: url,
      crossDomain: true,
      dataType: dType,
      success: function (rs) {
         if(onSuccess)onSuccess(rs);
      },
      error: function (xhr, stat, e) {
          console.log('error while fettching channel conttents, please make sure you are connected to the internet.' + ' url: ' + url);
          if (onFail)onFail(xhr); 
      }
       
    });
  });
}

function fetchMoreContent(url,body, onSuccess, onFail)
{
  $(function(){
    $.ajax({
      type: 'POST',
      url: url,
      data:JSON.stringify(body),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      crossDomain: true,
      success: function (rs) {
         if(onSuccess)onSuccess(rs);
      },
      error: function (xhr, stat, e) {
          console.error('error while fetching extra channel contents, please make sure you are connected to the internet.' + ' Url: ' + url + '    post-body: ' + body);
          if (onFail)onFail(xhr); 
      }
       
    });
  });
}

function fetchTest(url, el)
{
    $(function(){
        $.ajax({
          type: 'GET',
          url: url,
          crossDomain: true,
          success: function (rs) {
          },
          error: function (xhr, opt, e) { 
            el.classList.remove('hover');
          }
        });
      });
}

function initLoadMore()
{
    document.querySelector('.articles').addEventListener('click', function(e){
       if(e.target && !e.target.className.includes('load-more'))return;
        e.preventDefault();
        let targetCh = e.target.parentElement.parentElement.id,
            currentCh = session.urls.channels.find(li => li.name === targetCh);
        let btn = e.target;   
        showSpinner(btn);
        if(currentCh.buffer.length >= 20)
        {
            fillVideos(currentCh);
            return;
        }
       
        if(!currentCh.data)
        {
            //no more videos
            if(currentCh.buffer.length > 0) fillVideos(currentCh);
            //to do: remove load more button
            return;
        }
        
        loadChannel(currentCh);
        
    });   
}


function showSpinner(btn)
{
    btn.style.pointerEvents = 'none';
    btn.style.color = '#478ac9';
    
    btn.querySelector('div').style.display = 'block';
}
function hideSpinner(btn)
{
    if(typeof btn === 'string')
    {
        btn = document.querySelector(btn);
    }
    btn.style.color = '#ffffff';
    btn.style.pointerEvents = '';
    btn.querySelector('div').style.display = 'none';
}



function hideLoader(query)
{
    let l= document.querySelector(query);
     if(!l)return;
       l.parentElement.removeChild(l);
       document.querySelector('.logo-wrapper .play-btn').classList.add('stop');
}

function showChLoader()
{
    document.querySelector('.channel-loader').style.opacity = "1";
}
function hideChLoader()
{
    document.querySelector('.channel-loader').style.opacity = "0";
}


function parseChannel(rs, currentChannel)
{
    let yinitIndex = rs.indexOf('ytInitialData'),
        ycfgIndex = rs.indexOf('ytcfg.set({');
  
       if(yinitIndex < 0){
         console.error('received corrupted data from the server while fetching '+ ' channel');
         return;
       }
       let yinitEnd = rs.indexOf('</script>', yinitIndex),
           ycfgEnd = rs.indexOf('});', ycfgIndex),
       yData = 'window.' + rs.substr(yinitIndex, yinitEnd - yinitIndex)  + 'window.ytcfg=' + rs.substr(ycfgIndex + 10, ycfgEnd - ycfgIndex - 9); + ';'
       
    eval(yData);

    session.apiKey = window.ytcfg.INNERTUBE_API_KEY;

    let videos, header,
     tabs = window.ytInitialData.contents.twoColumnBrowseResultsRenderer.tabs;
     currentChannel.buffer = [];
    for(var k = 0; k<tabs.length;k++)
    {
        if(!tabs[k].tabRenderer || !tabs[k].tabRenderer.content)continue;
        //richGrid is for main page
         if(tabs[k].tabRenderer.content.richGridRenderer)
         {
             
             if(tabs[k].tabRenderer.content.richGridRenderer.contents[0].richItemRenderer.content.displayAdRenderer)
             {
                videos = tabs[k].tabRenderer.content.richGridRenderer.contents[0].richItemRenderer.content;
             }
             else{
                videos = tabs[k].tabRenderer.content.richGridRenderer.contents;
             }
              break;
         }
         else{
            videos = window.ytInitialData.contents.twoColumnBrowseResultsRenderer.tabs[1].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].gridRenderer.items;
            break;
         }
    }

    for(var i=0; i < videos.length;i++){
        let data;
        if(videos[i].gridVideoRenderer)
        {
           data = videos[i].gridVideoRenderer;
        }
        else if(videos[i].richItemRenderer) {
            if(videos[i].richItemRenderer.content.displayAdRenderer)continue;
            data = videos[i].richItemRenderer.content.videoRenderer;
        }
        if(!data && videos[i].continuationItemRenderer)
        {
            currentChannel.data = parseContinuation(videos[i].continuationItemRenderer);
            continue;
        }
    let meta = {id: data.videoId.replaceAll(' ', '_')};
    meta.url = 'https://www.youtube.com/watch?v=' + meta.id;
    meta.embedUrl= 'https://www.youtube-nocookie.com/embed/' + meta.id;
    meta.title = data.title.runs[0].text;
    
    meta.thumbnail = data.thumbnail.thumbnails[3].url;
    if(data.richThumbnail)meta.richThumbnail = data.richThumbnail.movingThumbnailRenderer.movingThumbnailDetails.thumbnails[0].url;
    if(data.publishedTimeText) 
    {
        meta.publishDate = data.publishedTimeText.simpleText;
        meta.duration = data.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer.text.simpleText;
    }
    else 
    {
        meta.publishDate = 'premiere';
        meta.duration = '0'
    }
    if( data.viewCountText){
        meta.views = data.viewCountText.simpleText;
    }else meta.views = '0';

    currentChannel.buffer.push(meta);
   }
   //get channel info
   header = window.ytInitialData.header;
   if(header.c4TabbedHeaderRenderer)
   {
       let chInfo = {};
       chInfo.chName = header.c4TabbedHeaderRenderer.title;
       chInfo.avatar = header.c4TabbedHeaderRenderer.avatar.thumbnails[0].url;
       chInfo.banner = header.c4TabbedHeaderRenderer.banner.thumbnails[0].url;
       currentChannel.meta = chInfo;
   }
}

function parseChannelApi(rs, currentChannel){
    let videos = rs.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems;
    currentChannel.data = {};
    if(!currentChannel.buffer) currentChannel.buffer = []
    for(var i=0; i < videos.length;i++){
        let data = videos[i].gridVideoRenderer;
        if(!data && videos[i].continuationItemRenderer)
        {
            currentChannel.data = parseContinuation(videos[i].continuationItemRenderer);
            continue;
        }
    let meta = {id: data.videoId.replaceAll(' ', '_')};
    meta.url = 'https://www.youtube.com/watch?v=' + meta.id;
    meta.embedUrl= 'https://www.youtube-nocookie.com/embed/' + meta.id;
    meta.title = data.title.runs[0].text;
    meta.views = data.viewCountText.simpleText;
    meta.thumbnail = data.thumbnail.thumbnails[3].url;
    if(data.richThumbnail)meta.richThumbnail = data.richThumbnail.movingThumbnailRenderer.movingThumbnailDetails.thumbnails[0].url;
    if(data.publishedTimeText) 
    {
        meta.publishDate = data.publishedTimeText.simpleText;
        meta.duration = data.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer.text.simpleText;
    }
    else 
    {
        meta.publishDate = 'premiere';
        meta.duration = '0'
    }
    currentChannel.buffer.push(meta);
    }
}

function parseContinuation(input)
{
   let cont = {},//{context:{clickTracking:{}}},
    root = input.continuationEndpoint;
    
    cont.context = window.ytcfg.INNERTUBE_CONTEXT;
    cont.context.client.mainAppWebInfo = {isWebNativeShareAvailable: true, webDisplayMode: "WEB_DISPLAY_MODE_BROWSER"};
    cont.context.client.mainAppWebInfo.graftUrl = cont.context.client.originalUrl + '/videos';
    cont.context.client.screenHeightPoints= 657;
    cont.context.client.screenWidthPoints =1366;
    cont.context.client.utcOffsetMinutes = 180;
    cont.context.client.connectionType= "CONN_CELLULAR_4G";
    cont.context.client.userInterfaceTheme = "USER_INTERFACE_THEME_DARK";
    cont.context.request.internalExperimentFlags= [];
    cont.context.request.consistencyTokenJars = [];
    //cont.context.request = {useSsl: true, internalExperimentFlags: [], consistencyTokenJars: []};
    //cont.context.user = {lockedSafetyMode: false};
    cont.context.clickTracking.clickTrackingParams = root.clickTrackingParams;
    cont.continuation = root.continuationCommand.token;
    
   return cont;
}

function getServer()
{
    let rand = Math.round(Math.random() * (session.urls.servers_list.length - 1));
    return shuffle(session.urls.servers_list)[rand];
}

function getServerTest(servers)
{
    let rand = Math.round(Math.random() * (servers.length - 1));
    return servers[rand];
}


function shuffle(data)
{
   return data.sort(() => .5 - Math.random());     
}



