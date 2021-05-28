document.getElementById('ok').addEventListener('click',function(){
    alert('This is button OK')
})

document.getElementById('cancel').addEventListener('click',function(){
    alert('This is button Cancel')
})

document.getElementById('no').addEventListener('click',function(){
    alert('This is button No')
})

document.getElementById('cancel').addEventListener('mousemove',function(c){
    var x = c.clientX;
    var y = c.clientY;
    console.log('x:'+x+','+'y:'+y)
})
