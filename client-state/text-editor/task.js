const editor = document.getElementById('editor');  
 
editor.addEventListener('input', () => { 
  setlocalStorage() 
})  
 
function setlocalStorage () { 
  localStorage.setItem('userText', editor.value.toString()); 
} 
 
const keys = Object.keys(localStorage); 
 
for (let key of keys) { 
  if (key === 'userText') { 
    editor.value = localStorage.getItem(key) 
  } 
}