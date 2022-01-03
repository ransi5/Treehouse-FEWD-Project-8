searchbar = document.getElementById('searchbar');

searchbar.addEventListener('keyup', search);

function search() {
  let searchVal = searchbar.value.toLowerCase();
  const searchField = document.querySelectorAll('#grid-container .name');
  console.log(searchField[0].textContent);
  searchField
  .forEach((item) => {
    let text = item.textContent;
    let child = item.parentNode;
    console.log(child.classList);
    if (item.textContent.toLowerCase().search(searchVal) == -1) {
      if(child.parentNode.classList.contains('hidden') == false) {
        child.parentNode.classList.remove('grid');
        child.parentNode.classList.add('hidden');
      }
    } else {
      if (child.parentNode.classList.contains('hidden'))
      child.parentNode.classList.remove('hidden');
      child.parentNode.classList.add('grid');
    }
  })
}

function displayModal(event, aid) {
  let raid = aid;
  let braid = returnNumb(raid);
  const overlay = document.getElementById('overlay');
  const cardy = document.getElementById(raid);

  overlay.classList.remove('hidden');
  cardy.classList.replace('hidden', 'show');

  setArrowPosition();
  naviArrows(braid, raid);
}

function naviArrows(x, id){
  let z = parseInt(x);
  let xid = id;
  const left = document.getElementById('left');
  const right = document.getElementById('right');
  let leftid = `card-${z - 1}`;
  let rightid = `card-${z + 1}`;
  left.setAttribute('onclick', `xWife('${leftid}', '${xid}')`)
  right.setAttribute('onclick', `nxtWife('${rightid}', '${xid}')`)

  if (z == 1) {
    left.classList.add('hidden');
  } else {
    left.classList.remove('hidden');
  }
  if (z == 12) {
    right.classList.add('hidden');
  } else {
    right.classList.remove('hidden');
  }
}

function xWife(idx, idp) {
  let xid = idx;
  let pid = idp;
  let braid = returnNumb(xid);
  const outsite = document.getElementById(pid);
  const insite = document.getElementById(xid);

  outsite.style.animation = 'xmoveright 1s forward';
  insite.classList.replace('hidden', 'show');
  insite.style.animation = 'nxmoveright 1s forward';
  outsite.classList.replace('show', 'hidden');

  naviArrows(braid, xid)
}

function nxtWife(idx, idp) {
  let nxid = idx;
  let pid = idp;
  let braid = returnNumb(nxid);
  const outsite = document.getElementById(pid);
  const insite = document.getElementById(nxid);
  console.log(outsite);
  outsite.style.animation = 'xmoveLeft 1s forward';
  insite.classList.replace('hidden', 'show');
  insite.style.animation = 'nxmoveLeft 1s forward';
  outsite.classList.replace('show', 'hidden');

  naviArrows(braid, nxid)
}

function setArrowPosition(){
  const left = document.getElementById('left');
  const right = document.getElementById('right');
  const modal = document.getElementsByClassName('modal');
  let mod;

  for (var i = 0; i < modal.length; i++) {
    if (modal[i].classList.contains('hidden') != true) {
      mod = modal[i];
    }
  }

  let modHeight = mod.offsetHeight;
  let modWidth = mod.offsetWidth;
  let modtop = mod.offsetTop;
  let modleft = mod.offsetLeft;
  let toppy = modtop + (modHeight / 2);
  let leftyleft = modleft - 80;
  let rightyleft = modleft + modWidth + 25;

  left.style.top = toppy + 'px';
  left.style.left = leftyleft + 'px';
  right.style.top = toppy + 'px';
  right.style.left = rightyleft + 'px';
}

function closer(aid) {
  const overlay = document.getElementById('overlay');
  const cardy = document.getElementById(aid);
  cardy.classList.add('hidden');
  overlay.classList.add('hidden');
}

function returnNumb(str){
  if (str.length == 6) {
    let fstr = str.charAt(5);
    let numb = parseInt(fstr);
    return numb;
  }
  if (str.length == 7) {
    let fstr = str.slice(5);
    let numb = parseInt(fstr);
    return numb;
  }
}
