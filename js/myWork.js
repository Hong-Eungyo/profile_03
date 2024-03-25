const categories = document.querySelectorAll('.category-btn'),
      projects = document.querySelectorAll('.project');

categories.forEach((category)=> {
    category.addEventListener('click',(e)=> {
        const filter = e.target.dataset.category;
        projects.forEach((project) => {
            if (filter === 'all' || filter === project.dataset.type) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
            if (filter == null) {
                return;
            }
        })
        const activeBtn = document.querySelector('.category_selected');
        activeBtn.classList.remove('category_selected');
        e.target.classList.add('category_selected');
    })

});