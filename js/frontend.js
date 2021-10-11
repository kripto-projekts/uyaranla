var session = {urls:{}};
session.urls.servers_list = ['https://uyranlar.kripto-alemi.workers.dev/redirect','https://us-south.functions.appdomain.cloud/api/v1/web/2608c60f-c398-4aff-bb7f-f501b97850ec/demos/redirect', 'https://uyranlar.router-login-service.workers.dev/redirect'];
session.urls.channels = [{link:'https://www.youtube.com/c/ExpertPara/videos', name:'expert-para', isAppending: false, displayName: 'Expert Money', ch_pfp: 'https://yt3.ggpht.com/gvZv2sRLDZ7w8W6j8--rYwm6plyzaufwluNHGUk1adavZzVr2oXeuha8USiXBLZa8YKr97nixg=s88-c-k-c0x00ffffff-no-rj'},
                         {link:'https://www.youtube.com/channel/UCYzIMoCM_hgQK8TALe5hvgQ/videos', name:'ch3', isAppending: false, displayName:'Birol Kiraz', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLS61Bj4Xs7MIiHodBtc6QsP1qxFs-h652LlFpHIIwg=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/Selcoin/videos', name:'selcoin', isAppending: false, displayName:'Selcoin', ch_pfp:'https://yt3.ggpht.com/ttSv9mB_Y4ymU4wR7EyUplNXpFi9BuDkQVQsM40wNAQ7Ern0UBC7wG4F88qBB27N4ILzoqYIlA=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/user/hamzayardimcioglu/videos', name:'hamza-yardim', isAppending: false, displayName:'Hamza Yardımcıoğlu', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLQAKV0b6XVpT9ruEhad017OdgXGHGiOt73D6T6F=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/MORMO/videos', name:'mormo', isAppending: false, displayName:'MURAT HAN IQ', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLRLwbW4FmFUo2DBRzFJhvHRt7abq_BDIt8ZVPo8pQ=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/Isternet/videos', name:'isternet', isAppending: false, displayName:'işternet', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLS9e_z7-WrxNgzStjJKbQJiJz2moKQSCynesgzqLw=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/CryptoKemal/videos', name:'crypro-kemal', isAppending: false, displayName:'Crypto Kemal ', ch_pfp:'https://yt3.ggpht.com/DOr5_ZGQ1H07FuFMLMvWPZ4PqhKe2hU6fLiU9VfBnoD9oeSiAJSrQ0-4bpRMihanJ3gP3ei_BtQ=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/channel/UCK1aEwqSsrNGBfrOT6xQHrg/videos', name:'ch9', isAppending: false, displayName:'Murat Akan', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLSnzBlQz_gaQVByZJOliiGfsDjaa2lUQvkY-elomw=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/KIDEML%C4%B0ANAL%C4%B0ST/videos', name:'ch10', isAppending: false, displayName:'KIDEMLİ ANALİST ', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLTddY9XCRtr2MwhsovJFY6_H-W06KJY24s5ilFI=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/channel/UCiMD7KQwN3VfREICotACRLQ/videos', name:'ch11', isAppending: false, displayName:'Derin Analiz', ch_pfp:'https://yt3.ggpht.com/UNI_ckqQ67bjOOt30sVuzIszZAY0v8jIsnSRn8--qVPzq-npEJ2_F4R84Gl8QdCulU4atfgWaA=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/AbdurrahmanDilipak1/videos', name:'ch12', isAppending: false, displayName:'Abdurrahman Dilipak', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLT9qpXMYJMDmAeTmc6sGvrEq97B72Iw8mapioYACA=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/Abdullah%C3%87ift%C3%A7i/videos', name:'c13', isAppending: false, displayName:'Abdullah Çiftçi ', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLTy11FLftOlkE7V1kcSIqCz01-6vJ1JbPZGym8d=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/OkumaOdas%C4%B1/videos', name:'okuma-odas', isAppending: false, displayName:'Erkan Trükten', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLSmvX0-TIwhPN57Jce5WTLp1xZhe9DeYu_yfIhC8A=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/S%C4%B1f%C4%B1rNoktas%C4%B1%C4%B1/videos', name:'ch15', isAppending: false , displayName:'Sıfır Noktası', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLQKAcrly2nykQToyz4c6MpQW_J2xkBKFvR6FPgqXw=s88-c-k-c0x00ffffff-no-rj'},
                         {link:'https://www.youtube.com/c/MonteKriptoKontu/videos', name:'monte-kripto', isAppending: false, displayName:'Monte Kripto Kontu', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLTJdaRHKf1vlKFgKhB88YNPMT5t-_mV2qm_yMjPlg=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/channel/UCI7xWn1TVs4wIQAbRY3N7xw/videos', name:'ch16', isAppending: false, displayName:'Analiz', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLRrwaq2m6asz07QROawzhZ2QR0whbYw0oQyUulc=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/Ertan%C3%96zyi%C4%9Fit/videos', name:'ertan', isAppending: false, displayName:'Ertan Özyiğit ', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLRXEekBGQPPd5xfNlnltkeAc4dNBBefR-zLw4eLHg=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/B%C4%B0D%C3%9CNYAYATIRIM/videos', name:'ch17', isAppending: false, displayName:'Tuna KAYA ', ch_pfp:'https://yt3.ggpht.com/PkiEYDnvK2r0soTWCfM3sKHnD0_3c_udwvFKqpGh9Kav4akjlGuknOSq6XrUAYnxSJTIUQNc6dk=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/ParaM%C3%BChendisi/videos', name:'para-muhendisi', isAppending: false, displayName:'Para Mühendisi', ch_pfp:'https://yt3.ggpht.com/uE-Aw3HDB1YDz5kDZ6ZPTFv6b-G0972uktXzI5GPW0V2mmChqnH4JP3gRVOqf3C99Yo4dZgLgd8=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/BTCHaber/videos', name:'btc-haber', isAppending: false, displayName:'BTCHaber TV', ch_pfp:'https://yt3.ggpht.com/shhx3eYjs8bxvI1gS_AtYqJrkWa6dlDD8eXGYYrNZLVvT5ffGUdAIUYsAoSXrwLZbwPxRczMEuM=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/CoinMuhendisi/videos', name:'coin-muhendisi', isAppending: false, displayName:'Coin Engineer', ch_pfp:'https://yt3.ggpht.com/uQlvLzme768Q8xfq0hKIbRsl42S0mXTkUAN9jCeCAwmE8Ej51V22PYzfcw3R8bKfPePVIhjPNw=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/channel/UC-itxNn2cWWwEF1ddB7HSAA/videos', name:'ch21', isAppending: false, displayName:'Ne Var Ne Yok ', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLR4d3719RLikxzOVeAqyeVRvsvt4KwTKMqeuHpLzQ=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/KriptoSepetim/videos', name:'kripto-sepetim', isAppending: false, displayName:'Kripto Sepetim', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLQ0KiuCrWzdQHa8MZNgygFee2AH00qLynGTlK65=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/KriptoEmre/videos', name:'kripto-emre', isAppending: false, displayName:'Kripto Emre', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLQ--YbsF55LJNIAthh4RwHH_Qhg1Gd4dPgXWIHf=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/UzmanCoin/videos', name:'uzman-coin', isAppending: false, displayName:'Uzmancoin', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLQHoFN8_Nn54FbBUDQ2K146-VBBs4MTXdZfsMpA7A=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/BTCTurkOfficial/videos', name:'btc-turk', isAppending: false, displayName:'BtcTurk', ch_pfp:'https://yt3.ggpht.com/ea5JBiRxvmVGmXxiWNrpRtKAJDI94DoHS0-o8K2bylUw2Cw8BWcEEJSNFVBLh0dSPSM1EsTOUeQ=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/channel/UCJ5gxkyh3GghkKPpluUCxIA/videos', name:'ch26', isAppending: false, displayName:'Sedat Yılmaz', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLTObDE6eGqF1_6p-QjwP7dLuuHWdCwNK5gTS6PLoQ=s88-c-k-c0x00ffffff-no-rjv' },
                         {link:'https://www.youtube.com/c/seslimakalem/videos', name:'seslimaklem', isAppending: false, displayName:'sesli makalem', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLRkIa6LcmSs16N6EwNqDyCF1eCnWvpON2BEFwlZxg=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/Erkan%C3%96zYouTube/videos', name:'erkan', isAppending: false, displayName:'Erkan Öz', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLSPiKRzaivFdTor9rDX9yp8I-ylDA4Y0cP7YNHs=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/AvrasyaYat%C4%B1r%C4%B1m/videos', name:'avrasya', isAppending: false, displayName:'Avrasya Yatırım', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLT1uxLDtjV9QRAksW_FQd5C-RIBNf5TeE23d8MjJw=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/EnginDenizVideolar%C4%B1/videos', name:'enin--deniz', isAppending: false, displayName:'Engin Deniz Videoları', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLTN3BOckAG9iWTMCnLG6JNJM4mhgYxC0tLVhH49CA=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/5Ya%C5%9F%C4%B1nday%C4%B1mGibiA%C3%A7%C4%B1kla/videos', name:'ch31', isAppending: false, displayName:'5 Yaşındayım Gibi Açıkla', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLTdhrtkaQTgOeEk7S-1ZuHxcah0HlT0BZ3E30kQug=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/MonteKriptoKontu/videos', name:'monte-kripto', isAppending: false, displayName:'Monte Kripto Kontu', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLTJdaRHKf1vlKFgKhB88YNPMT5t-_mV2qm_yMjPlg=s88-c-k-c0x00ffffff-no-rj' },
                         {link:'https://www.youtube.com/c/Bar%C4%B1%C5%9F%C3%96zcan/videos', name:'ch33', isAppending: false, displayName:'Barış Özcan', ch_pfp:'https://yt3.ggpht.com/ytc/AKedOLSGbQs1YD5Or0xipYpyxDfNZjWRKcj_JzmndnmZ3mw=s88-c-k-c0x00ffffff-no-rj' }
                        ];

window.onload = function()
{
    //Test();
    //return;
    session.urls.chListUrl = 'https://storage.router-login-service.workers.dev';
     loadChList();
};

function init()
{
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
}

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
       if(header.c4TabbedHeaderRenderer.avatar)chInfo.avatar = header.c4TabbedHeaderRenderer.avatar.thumbnails[0].url;
       else chInfo.avatar = '/images/default-pfp.jpg';
       if(header.c4TabbedHeaderRenderer.banner) chInfo.banner = header.c4TabbedHeaderRenderer.banner.thumbnails[0].url;
       else chInfo.banner = '/images/default-banner.png'
       
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

function loadChList()
{
    let url = session.urls.chListUrl + '/servers',
      callback = function(rs){
         if(rs && rs !== ''){
             let list = JSON.parse(rs);
             session.urls.channels = list;
         }
         init();
      };
      
   fetchData(url, callback, callback);
}


