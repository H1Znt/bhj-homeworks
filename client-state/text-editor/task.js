const editor = document.getElementById('editor');  
 
editor.addEventListener('input', () => { 
  setlocalStorage() 
})  
 
function setlocalStorage () { 
  localStorage.setItem('userText', editor.value.toString()); 
} 

if (localStorage.getItem('userText')) {
  editor.value = localStorage.getItem('userText')
}