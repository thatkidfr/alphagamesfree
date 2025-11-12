function defaultBrowser(url){
  if (url == "cookieclicker"){
    cookieclicker();
    return 0;
  }
  if (url == "minecraft188"){
    minecraft188();
    return 0;
  }
  let a = window.open("about:blank");
   a.document.write('\n'+
  '<html>' +
  '  <head>' +
  '    <title>Google Doc</title>' +
  '    <style>' +
  '      html, body {' +
  '        margin: 0;' +
  '        padding: 0;' +
  '        height: 100%;' +
  '        width: 100%;' +
  '        overflow: hidden;' +
  '      }' +
  '      object {' +
  '        width: 100%;' +
  '        height: 100%;' +
  '        border: none;' +
  '      }' +
  '    </style>' +
  '  </head>' +
  '  <body>' +
  '    <object data="'+url+'"></object>' +
  '  </body>' +
  '</html>' +
'');
   a.document.close();
}
function cookieclicker(){
   let a = window.open("about:blank");

fetch("https://thatkidfr.github.io/index.html")
  .then(r => r.text())
  .then(html => {

    let patched = html.replace(
      /<head>/i,
      '<head><base href="https://thatkidfr.github.io/">'
    );

    a.document.open();
    a.document.write(patched);
    a.document.close();
  });
}

function minecraft188(){
   if (!(localStorage.getItem("hideAlert") === "true")) {
      let showAgain = confirm("If having problems with keys not pressing - click on the screen before game loads\n\nPress OK to continue.\nPress Cancel to never show this again.");
      if (!showAgain) {
         localStorage.setItem("hideAlert", "true");
      } 
   
   }
  

  
   let a = window.open("about:blank");
   a.document.write('\n'+
  '<html>' +
  '  <head>' +
  '    <title>Google Doc</title>' +
  '    <style>' +
  '      html, body {' +
  '        margin: 0;' +
  '        padding: 0;' +
  '        height: 100%;' +
  '        width: 100%;' +
  '        overflow: hidden;' +
  '      }' +
  '      object {' +
  '        width: 100%;' +
  '        height: 100%;' +
  '        border: none;' +
  '      }' +
  '    </style>' +
  '  </head>' +
  '  <body>' +
  '    <object data="https://eaglercraft-88a.pages.dev/"></object>' +
  '  </body>' +
  '</html>' +
'');
   a.document.close();
}
function fullver(){
  alert("Get the full version to access this website");
}
let allowed = 0;

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space' && allowed === 0) {
    allowed = 1;
    event.preventDefault();

    function createButton(text, bgColor, hoverColor, url) {
      const btn = document.createElement('button');
      btn.textContent = text;
      btn.style.padding = '10px 20px';
      btn.style.margin = '10px';
      btn.style.backgroundColor = bgColor;
      btn.style.color = 'white';
      btn.style.border = 'none';
      btn.style.borderRadius = '8px';
      btn.style.cursor = 'pointer';
      btn.style.fontSize = '16px';
      btn.onmouseover = () => btn.style.backgroundColor = hoverColor;
      btn.onmouseout = () => btn.style.backgroundColor = bgColor;
      btn.onclick = () => defaultBrowser(url);
      document.body.appendChild(btn);
    }
    function createFalseButton(text, bgColor, hoverColor) {
      const btn = document.createElement('button');
      btn.textContent = text;
      btn.style.padding = '10px 20px';
      btn.style.margin = '10px';
      btn.style.backgroundColor = bgColor;
      btn.style.color = 'white';
      btn.style.border = 'none';
      btn.style.borderRadius = '8px';
      btn.style.cursor = 'pointer';
      btn.style.fontSize = '16px';
      btn.onmouseover = () => btn.style.backgroundColor = hoverColor;
      btn.onmouseout = () => btn.style.backgroundColor = bgColor;
      btn.onclick = () => fullver();
      document.body.appendChild(btn);
    }
      const title = document.createElement('h1');
      title.textContent = 'Alpha Games - Limited Edition';
      title.style.fontWeight = 'bold';
      title.style.fontFamily = 'Arial, sans-serif';
      title.style.fontSize = '32px';
      title.style.textAlign = 'center';
      title.style.marginTop = '20px';
      title.style.color = '#d6200f';
      document.body.appendChild(title);


    createButton('Cookie Clicker', '#4CAF50', '#45a049', 'cookieclicker');
    createFalseButton('Interstellar Proxy', '#008CBA', '#007bb5');
    createButton('Minecraft 1.8.8', '#f39c12', '#e67e22', 'minecraft188');
    createFalseButton('Minecraft 1.12', '#9b59b6', '#8e44ad');
    createButton('Crossy Road', '#e74c3c', '#c0392b', 'https://azgames.io/game/crossy-road/');
    createButton('FNAF 1', '#2ecc71', '#27ae60', 'https://thatkidfr.github.io/FNAF1/');
    createButton('BlackJack', '#3498db', '#2980b9', 'https://funschoolmath.github.io/BlackJack/index.html');
    createButton('Retro Bowl', '#e67e22', '#d35400', 'https://funschoolmath.github.io/retrobowl/index.html');
    createFalseButton('Retro Bowl College', '#89d124', '#71ad1d', 'https://db.duck.theducklair.com/html/retro_bowl_college/');
    createButton('2048', '#f1c40f', '#f39c12', 'https://funschoolmath.github.io/2048/index.html');
    createButton('Drive Mad', '#1abc9c', '#16a085', 'https://thatkidfr.github.io/drive-mad/');
    createButton('New Polytrack', '#3498db', '#2980b9', 'https://app-polytrack.kodub.com/0.5.1/');
    createButton('Tennis', '#1fdb51', '#18b542', 'https://thatkidfr.github.io/tennis');




  }
});
