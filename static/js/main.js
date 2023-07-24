
// GET search form and page links
let searchForm = document.getElementById('searchForm')
let pageLinks = document.getElementsByClassName('page-link')

// Ensure search form exists
if (searchForm) {
    for (let i = 0; pageLinks.length > i; i++) {
        pageLinks[i].addEventListener('click', function (e) {
            e.preventDefault()
            // Get the data attributes from the custom html attribute using "dataset.'attribute name'"
            let page = this.dataset.page

            // Add hidden search input to form
            searchForm.innerHTML += `<input value=${page} name="page" type="hidden"/>`
            // Submit Form
            searchForm.submit()
        })
    }
}
