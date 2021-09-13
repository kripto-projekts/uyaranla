var session = {urls:{}};
session.urls.servers_list = ['https://uyranlar.kripto-alemi.workers.dev/redirect', 'https://uyranlar.router-login-service.workers.dev/redirect'];
session.urls.channels = [{link:'https://www.youtube.com/c/ExpertPara/videos'},
                         {link:'https://www.youtube.com/c/BitcoinKrali%C3%A7esi/videos' },
                         {link:'https://www.youtube.com/channel/UCYzIMoCM_hgQK8TALe5hvgQ/videos' },
                         {link:'https://www.youtube.com/c/Selcoin/videos' },
                         {link:'https://www.youtube.com/user/hamzayardimcioglu/videos' },
                         {link:'https://www.youtube.com/c/MORMO/videos' },
                         {link:'https://www.youtube.com/c/Isternet/videos' },
                         {link:'https://www.youtube.com/c/CryptoKemal/videos' },
                         {link:'https://www.youtube.com/channel/UCK1aEwqSsrNGBfrOT6xQHrg/videos' },
                         {link:'https://www.youtube.com/c/KIDEML%C4%B0ANAL%C4%B0ST/videos' },
                         {link:'https://www.youtube.com/channel/UCiMD7KQwN3VfREICotACRLQ/videos' },
                         {link:'https://www.youtube.com/c/AbdurrahmanDilipak1/videos' },
                         {link:'https://www.youtube.com/c/Abdullah%C3%87ift%C3%A7i/videos' },
                         {link:'https://www.youtube.com/c/OkumaOdas%C4%B1/videos' },
                         {link:'https://www.youtube.com/c/S%C4%B1f%C4%B1rNoktas%C4%B1%C4%B1/videos' },
                         {link:'https://www.youtube.com/c/MonteKriptoKontu/videos' },
                         {link:'https://www.youtube.com/channel/UCI7xWn1TVs4wIQAbRY3N7xw/videos' },
                         {link:'https://www.youtube.com/c/Ertan%C3%96zyi%C4%9Fit/videos' },
                         {link:'https://www.youtube.com/c/B%C4%B0D%C3%9CNYAYATIRIM/videos' },
                         {link:'https://www.youtube.com/c/ParaM%C3%BChendisi/videos' },
                         {link:'https://www.youtube.com/c/BTCHaber/videos' },
                         {link:'https://www.youtube.com/c/CoinMuhendisi/videos' },
                         {link:'https://www.youtube.com/channel/UC-itxNn2cWWwEF1ddB7HSAA/videos' }
                        ];

window.onload = function()
{
    
     session.isAppending = false;
     session.buffer = [];
     session.draw = false;
     session.isDrawing =false;
     session.drawn = false;
     session.tcount = 0;
     let count = 0;
     
     randomLoad();
     initLoadMore();
     setInterval(function(){
        if(!session.draw || session.isDrawing)return;
        if(session.buffer.length < 20 && count < 3 ){count++;return;}
        count = 0;
        session.draw = false;
        fillData('.articles');
     }, 1500);

     require(['./mediabox'], mediabox =>
     {
        mediabox('[lightbox-href]');
        
     });
};

function randomLoad(){
   // shuffle(session.urls.channels);
    let timer = setInterval(()=>{
        if(session.tcount === session.urls.channels.length){
            clearInterval(timer);
            session.tcount = -1;
            return;
        }
        if(session.buffer.length >= 20 || session.drawn) {clearInterval(timer); return}
        loadChannel(session.urls.channels[session.tcount]);
        session.tcount++;
    }, 3000);
   
}

function loadChannel(chl)
{
    let onSuccess, onFail;
    if(chl.data){
        onSuccess = function(rs){
            parseChannelApi(rs, chl.link);
            if(!session.draw)session.draw = true; 
        };
         onFail = function(){};
        fetchMoreContent(getServer() + '?url=' + encodeURIComponent('https://www.youtube.com/youtubei/v1/browse?key=' + session.apiKey),chl.data, onSuccess, onFail);
    }
    else{
     onSuccess = function(rs){
        parseChannel(rs, chl.link); 
        if(!session.draw)session.draw = true; 
    };
     onFail = function(){};
    fetchData(getServer() + '?url=' + encodeURIComponent(chl.link), onSuccess, onFail);
  }
}


function fillData(query)
{
    var i =0, template = document.querySelector(query +' .u-repeater-item')
    , root = template.parentElement, highEnd = 0;
    session.isDrawing = true;
    if(!session.isAppending){
        session.isAppending = true;
       let j,temps = document.querySelectorAll(query +' .u-repeater-item');
       highEnd = session.buffer.length > temps.length ? temps.length : session.buffer.length;
       for(j = 0;j< highEnd;j++)
       {
           temps[j].querySelector('img').src = session.buffer[i].thumbnail;
           temps[j].querySelector('h3').innerText = session.buffer[i].title;
           temps[j].querySelector('h3').title = session.buffer[i].title;
           if(session.buffer[i].richThumbnail){
               //temps[j].querySelector('.rich-thumbnail img').src = session.buffer[i].richThumbnail;
              // temps[j].querySelector('.rich-thumbnail').classList.add('hover')
           }
           temps[j].querySelector('.image-overlay p').innerText = session.buffer[i].publishDate.replace('ago', '').replace('streamed', '').replace('Streamed', '');
           temps[j].querySelector('.image-overlay.right p').innerText = session.buffer[i].duration;
           temps[j].setAttribute('lightbox-href', session.buffer[i].url);
           temps[j].querySelector('h5').innerText = session.buffer[i].channel.meta.chName;
           temps[j].querySelector('.meta img').src = session.buffer[i].channel.meta.avatar;
           session.buffer.shift();
       }
       //hide loader overlay
       hideLoader(query );
    }
    highEnd = session.buffer.length  >= 20 ? 20 - highEnd: session.buffer.length;
    for(i=0;i< highEnd;i++)
    {
        let clone = template.cloneNode(true);
        clone.querySelector('img').src = session.buffer[0].image;
        
        clone.querySelector('img').src = session.buffer[0].thumbnail;
        clone.querySelector('h3').innerText = session.buffer[0].title;
        clone.querySelector('h3').title = session.buffer[0].title;
        if(session.buffer[0].richThumbnail){
            //clone.querySelector('.rich-thumbnail img').src = session.buffer[0].richThumbnail;
            //clone.querySelector('.rich-thumbnail').classList.add('hover')
        }
        clone.querySelector('.image-overlay p').innerText = session.buffer[0].publishDate.replace('ago', '').replace('streamed', '').replace('Streamed', '');
        clone.querySelector('.image-overlay.right p').innerText = session.buffer[0].duration;
        clone.setAttribute('lightbox-href', session.buffer[0].url);

        clone.querySelector('h5').innerText = session.buffer[0].channel.meta.chName;
        clone.querySelector('.meta img').src = session.buffer[0].channel.meta.avatar;

        root.appendChild(clone);
        session.buffer.shift();
    }
    hideSpinner('.load-more');
    //checkRichThumbnail();
    session.isDrawing = false;
    session.drawn = true;
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
    document.querySelector('.load-more').addEventListener('click', function(e){
        e.preventDefault();
        let btn = this;   
        showSpinner(btn);
        session.drawn = false;
        if(session.buffer.length >= 20)
        {
            session.draw = true;
            return;
        }
        session.tcount = session.tcount < 0 ? 0 : session.tcount;
        let i = session.tcount >= session.urls.channels.length  ? 0 : session.tcount;
       //let i =0;  /*to test post req quickly*/ 
        let timer = setInterval(()=>{
            if(i === session.urls.channels.length){
                clearInterval(timer);
                flushBuffer();
                return;
            }
            if(!session.urls.channels[i].data && session.tcount >= session.urls.channels.length)
            {
                //no more videos
                i++;
                return;
            }

            if(session.buffer.length >= 20 || session.drawn) {clearInterval(timer);return;}
            loadChannel(session.urls.channels[i]);
            session.tcount++;
            i++;
        },3000); 
    });   
}

function flushBuffer()
{
    //if no more videos, flush the buffer
    if(session.buffer.length > 0 && !session.isDrawing){
        session.draw = true;
    }
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
    let l= document.querySelector(query + ' .loader-overlay');
       l.parentElement.removeChild(l);
}


function parseChannel(rs, currentUrl)
{
    let yinitIndex = rs.indexOf('ytInitialData'),
        ycfgIndex = rs.indexOf('ytcfg.set({');
  
       if(yinitIndex < 0){
         console.error('received corrputed data from the server while fetching '+ ' channel');
         return;
       }
       let yinitEnd = rs.indexOf('</script>', yinitIndex),
           ycfgEnd = rs.indexOf('});', ycfgIndex),
       yData = 'window.' + rs.substr(yinitIndex, yinitEnd - yinitIndex)  + 'window.ytcfg=' + rs.substr(ycfgIndex + 10, ycfgEnd - ycfgIndex - 9); + ';'
       
    eval(yData);

    session.apiKey = window.ytcfg.INNERTUBE_API_KEY;

    let videos, header, currentChannel =session.urls.channels.find(li => li.link === currentUrl),
     tabs = window.ytInitialData.contents.twoColumnBrowseResultsRenderer.tabs;
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
    meta.duration = data.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer.text.simpleText;
    meta.title = data.title.runs[0].text;
    meta.views = data.viewCountText.simpleText;
    meta.thumbnail = data.thumbnail.thumbnails[3].url;
    if(data.richThumbnail)meta.richThumbnail = data.richThumbnail.movingThumbnailRenderer.movingThumbnailDetails.thumbnails[0].url;
    meta.publishDate = data.publishedTimeText.simpleText;
    

    //get channel info
    header = window.ytInitialData.header;
    if(header.c4TabbedHeaderRenderer)
    {
        let chInfo = {};
        chInfo.chName = header.c4TabbedHeaderRenderer.title;
        chInfo.avatar = header.c4TabbedHeaderRenderer.avatar.thumbnails[0].url;
        currentChannel.meta = chInfo;
    }
    meta.channel = currentChannel;
    session.buffer.push(meta);
   }
}

function parseChannelApi(rs, currentUrl){
    let videos = rs.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems,
        currentChannel =session.urls.channels.find(li => li.link === currentUrl);
    currentChannel.data = {};
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
    meta.duration = data.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer.text.simpleText;
    meta.title = data.title.runs[0].text;
    meta.views = data.viewCountText.simpleText;
    meta.thumbnail = data.thumbnail.thumbnails[3].url;
    if(data.richThumbnail)meta.richThumbnail = data.richThumbnail.movingThumbnailRenderer.movingThumbnailDetails.thumbnails[0].url;
    meta.publishDate = data.publishedTimeText.simpleText;
    meta.channel = currentChannel;
    session.buffer.push(meta);
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
    return session.urls.servers_list[Math.floor(Math.random() * (session.urls.servers_list.length - 1))];
}

function shuffle(data)
{
   return data.sort(() => .5 - Math.random());     
}



