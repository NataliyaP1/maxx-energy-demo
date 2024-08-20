// Highlight current page


document.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL
    var currentPage = window.location.pathname.split('/').pop();
    
    // Select all the navigation links
    var navLinks = document.querySelectorAll('.nav-links a');
    
    // Loop through each link to find the one that matches the current page
    navLinks.forEach(function(link) {
        // Get the href attribute of the link
        var href = link.getAttribute('href');
        
        // Check if href matches the current page
        if (href === currentPage) {
            // Add the 'active' class to the matching link
            link.classList.add('active');
        }
    });
});