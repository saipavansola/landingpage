let navbarSections = document.querySelectorAll('section');

function scrollBar(){
    for (i of navbarSections){ 
        let sectionName = i.getAttribute('data-nav')
        let sectionID = i.getAttribute('id')
        let a = document.createElement('a'); 
        let li = document.createElement('li'); 
        let linkText = document.createTextNode(sectionName); 
        a.appendChild(linkText); 
        a.setAttribute('href', '#' + sectionID); 
        li.classList.add("header-items")
        a.classList.add("header-items")
        li.appendChild(a); 
        document.getElementById('navbar__list').appendChild(li); 
        scroll(li,i)
    }
}
function scroll(a, section){
	a.addEventListener("click", function(event){
		event.preventDefault();
		section.scrollIntoView({behavior: "smooth"})
	})
}

scrollBar()