var services = document.getElementById('Services');

var  Original_Content =`<div>
<div class="icon"><i class="bi bi-briefcase"></i></div>
<h4 class="title"><a href="">TITLE</a></h4>
<p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
</div>`
fetch('http://localhost:3000/server')
  .then(response => response.json())
  .then(json => {
    json.forEach(element => {
        var content = Original_Content;
        content = content.replace(Element.name);
    
    var service = document.createElement('div')
    service.innerHTML = content;
    service.className = 'col-lg-4 col-md-6 icon-box';
    services.appendChild(service)
});
})