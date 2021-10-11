let dataRowTemplate = `<tr class="tr-shadow">
<td>
<img src="$ch_pfp" class="ch-pfp"></td>
<td class="ch-name">$ch_name</td>
<td>
<span class="desc block-email ch-url">$ch_url</span>
</td>

<td>
<div class="table-data-feature">

<button class="item del-btn" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete">
<i class="zmdi zmdi-delete"></i>
</button>
<button class="item up-btn" data-toggle="tooltip" data-placement="top" title="" data-original-title="Move Up">
<i class="zmdi zmdi-chevron-up"></i>
</button><button class="item down-btn" data-toggle="tooltip" data-placement="top" title="" data-original-title="Move Down">
<i class="zmdi zmdi-chevron-down"></i>
</button>
</div>
</td>
<td class="id hidden">$ch_id</td>
<td class="isAppending hidden">$ch_isAppending</td>
</tr>`,
proxyServers =['https://uyranlar.kripto-alemi.workers.dev/redirect','https://us-south.functions.appdomain.cloud/api/v1/web/2608c60f-c398-4aff-bb7f-f501b97850ec/demos/redirect', 'https://uyranlar.router-login-service.workers.dev/redirect'],
chListUrl = 'https://storage.router-login-service.workers.dev/servers',
chData =[],
isMobile = false,
btnOldContent;

function appendRows(rowsData, place = 'last'){
    let table = document.querySelector('.table-responsive tbody');
   for(var i  =0; i < rowsData.length; i++){
       let row = document.createElement('tr');
        row.className = 'tr-shadow';
        let rawRow = dataRowTemplate.replace('$ch_pfp', rowsData[i].ch_pfp).replace('$ch_name',rowsData[i].displayName).replace('$ch_url',rowsData[i].link).replace('$ch_id',rowsData[i].name).replace('$isAppending',rowsData[i].isAppending);
        row.innerHTML = rawRow;
        let spacer = document.createElement('tr');
         spacer.className = 'spacer';
        if(place === 'last'){
         table.appendChild(row);
         table.appendChild(spacer);
        }
        else{
            table.insertAdjacentElement('afterbegin', spacer);
            table.insertAdjacentElement('afterbegin', row);
        }
   }
}
function init(){
document.addEventListener('click', e=>
{
  if(!e.target.className.includes('zmdi') && !e.target.className.includes('item'))return;
   e.preventDefault();
   let row = e.target.parentNode.parentNode.parentNode;
   if(!row.className.includes('tr-shadow')) row = row.parentNode;
    if(e.target.className.includes('del-btn') || e.target.parentElement.className.includes('del-btn'))deleteRow(row);
   else if(e.target.className.includes('up-btn') || e.target.parentElement.className.includes('up-btn'))moveRowUp(row);
   else if(e.target.className.includes('down-btn') || e.target.parentElement.className.includes('down-btn'))moveRowDown(row);
});

document.querySelector('.add-first').addEventListener('click', e=>
{
   e.preventDefault();
    verifyLink('first');
});

document.querySelector('.add-last').addEventListener('click', e=>
{
   e.preventDefault();
   verifyLink('last');
});
 //check is mobile
 if(window.screen.availWidth < 650){
     isMobile = true;
 }
 document.querySelector('.btn-submit').addEventListener('click', e=>
 {
    e.preventDefault();
    submit();
 });
}

function verifyLink(type)
{
    hideError();
    let t = document.querySelector('.table-data__tool input').value;
    try{
        let url  = new URL(t);
        if(!url.pathname.endsWith('/videos') || !url.pathname.endsWith('/videos') || !url.hostname.includes('youtube.com'))
        {
            //show error
            showError('its not a youtube channel link');
            return;
        }
    }catch{
        //show error
        showError('its not a youtube channel link');
        return;
    }
    showSpinner(type);
    let proxy = getServer() + '?url=' + encodeURIComponent(t);
    let onSuccess = function(rs)
    {
        let meta;
        try{
         meta = ParseChMeta(rs);
        }catch{
            
            //show error
            showError('Server error, please contact developer');
            hideSpinner();
            return;
        }
        if(!meta){
            showError('Server error, please contact developer');
            hideSpinner();
            return;
        }
        let ch = {link: t, ch_pfp: meta.avatar, displayName: meta.chName, isAppending:false};
        ch.name = 'ch' + chData.length + 1;
       if(type === 'first')addNewFirst(ch);
       else addNewLast(ch);
       hideSpinner();
    },
    onFail = function(){
        showError('Internet error, please try again');
            hideSpinner();
    };
    fetchData('GET', proxy, null, onSuccess, onFail, 'html');
}

function addNewFirst(ch){
    let arr = [];
    arr.push(ch);
    appendRows(arr, 'first');
    chData.splice(0, 0, ch);
}

function addNewLast(ch){
    let arr = [];
    arr.push(ch);
    appendRows(arr, 'last');
    chData.push(ch);
}

function deleteRow(p)
{
 let id =p.querySelector('.id').innerText;
 let i = chData.findIndex(el => el.name === id);
 if(i >= 0)chData.splice(i, 1);
  p.parentNode.removeChild(p);
}
function moveRowUp(p){
    let id =p.querySelector('.id').innerText;
    let i = chData.findIndex(el => el.name === id);
    if(i <= 0) return;
    let copy = JSON.parse(JSON.stringify(chData[i])) ;
    chData.splice(i, 1);
    chData.splice(i-1, 0, copy);

    let clone = p.cloneNode(true);
    let relative =p.parentNode.childNodes[(2* i) - 1];
    p.parentNode.removeChild(p);
    relative.insertAdjacentElement('beforebegin', clone);
}
function moveRowDown(p){
    let id =p.querySelector('.id').innerText;
    let i = chData.findIndex(el => el.name === id);
    if(i < 0 || i + 1 === chData.length) return;
    let copy = JSON.parse(JSON.stringify(chData[i])) ;
    chData.splice(i, 1);
    chData.splice(i + 1, 0, copy);
    
    let clone = p.cloneNode(true);
    let relative =p.parentNode.childNodes[(2* i) + 3]; //childnodes adds extra text node + spacer
    p.parentNode.removeChild(p);
    relative.insertAdjacentElement('afterend', clone);
}

function loadChList()
{
      let callback = function(rs){
         if(rs && rs !== ''){
             chData = JSON.parse(rs);
             appendRows(chData);
             //finish loading
         }
      };
      let onfail = function(){
          showErrorBar('Internet error, failed to load channels list, please try again.')
      };
      
   fetchData('GET', chListUrl, null, callback, onfail);
}

function ParseChMeta(rs){
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
   
   let header = window.ytInitialData.header;
   if(header.c4TabbedHeaderRenderer)
   {
       let chInfo = {};
       chInfo.chName = header.c4TabbedHeaderRenderer.title;
       if(header.c4TabbedHeaderRenderer.avatar)chInfo.avatar = header.c4TabbedHeaderRenderer.avatar.thumbnails[0].url;
       else chInfo.avatar = '/images/default-pfp.jpg';
       if(header.c4TabbedHeaderRenderer.banner) chInfo.banner = header.c4TabbedHeaderRenderer.banner.thumbnails[0].url;
       else chInfo.banner = '/images/default-banner.png'
       
      return chInfo;
   }
}

function submit()
{
    showSpinner('save');
    window.__session.payload = chData;
    let onSuccess = function(){
        hideSpinner();
        showInfoBar('channel list was saved')
    },
    onFail = function()
    {
       showErrorBar('Failed to save list, please check your internet');
       hideSpinner();
    };
    fetchData('POST', chListUrl, JSON.stringify(window.__session), onSuccess, onFail)
}

function getServer()
{
    let rand = Math.round(Math.random() * (proxyServers.length - 1));
    return shuffle(proxyServers)[rand];
}

function shuffle(data)
{
   return data.sort(() => .5 - Math.random());     
}

function showSpinner(place)
{
    let btn;
    if(place === 'last')
    {
        btn = document.querySelector('.au-btn.add-last');
        document.querySelector('.au-btn.add-first').classList.add('btn-disabled');
        document.querySelector('.save-btn-wrapper .btn-submit').classList.add('btn-disabled');

    }else if(place === 'first')
    {
        btn = document.querySelector('.au-btn.add-first');
        document.querySelector('.au-btn.add-last').classList.add('btn-disabled');
        document.querySelector('.save-btn-wrapper .btn-submit').classList.add('btn-disabled');
    }
    else{
        btn = document.querySelector('.save-btn-wrapper .btn-submit');
        document.querySelector('.au-btn.add-last').classList.add('btn-disabled');
        document.querySelector('.au-btn.add-first').classList.add('btn-disabled');
    }
    // btnOldContent = btn.innerHTML;
     btn.classList.add('spinning');
     let  img = document.createElement('img');
     img.src = "/images/spinner.svg";
     img.className = 'img-spinner';
     btn.appendChild(img);
}

function hideSpinner()
{
    let btn = document.querySelector('.spinning');
    //btn.innerHTML = btnOldContent;
    let img = btn.querySelector('.img-spinner');
    btn.removeChild(img);
    btn.classList.remove('spinning');
    document.querySelectorAll('.btn-disabled').forEach(el =>
        {
            el.classList.remove('btn-disabled');
        });
}

function showError(error)
{
    let msg; 
    if(isMobile) msg = document.querySelector('.table-data__tool .error.mobile');
    else msg = document.querySelector('.table-data__tool .error.desktop');
    msg.innerText = error;
    msg.classList.remove('hidden');
}

function hideError()
{
    let msg; 
    if(isMobile) msg = document.querySelector('.table-data__tool .error.mobile');
    else msg = document.querySelector('.table-data__tool .error.desktop');
    msg.innerText = '';
    msg.classList.add('hidden');
}

function showErrorBar(error){
     let msg =document.querySelector('.msg-banner p');
     msg.innerText = error;
     msg.parentElement.classList.add('error');
     msg.parentElement.classList.remove('hidden');
     setTimeout(()=>
     {
       msg.innerText = '';
       msg.parentElement.classList.remove('error');
       msg.parentElement.classList.add('hidden');
     }, 6000);
}
function showInfoBar(error){
    let msg =document.querySelector('.msg-banner p');
    msg.innerText = error;
    msg.parentElement.classList.add('info');
    msg.parentElement.classList.remove('hidden');
    setTimeout(()=>
    {
      msg.innerText = '';
      msg.parentElement.classList.remove('info');
      msg.parentElement.classList.add('hidden');
    }, 6000);
}
  
  