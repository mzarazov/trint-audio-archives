visible = 0

function reveal() {
  all = document.all ? document.all : document.getElementsByTagName('div')
  oldclass = "ansexp" + (visible?1:0)
  visible = !visible
  newclass = "ansexp" + (visible?1:0)
  for (e=all.length-1; e>=0; e--) {
    if (all[e].className == oldclass)
      all[e].className = newclass;
  }
}
