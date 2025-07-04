document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved user preference, if any, on load
    const currentTheme = localStorage.getItem('theme') || 
                        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Apply the saved theme
    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
    }
    
    // Add click event listener to the theme toggle button
    themeToggle.addEventListener('click', function() {
        // Toggle between light and dark theme
        document.body.classList.toggle('light-theme');
        
        // Save the current theme to localStorage
        const isLight = document.body.classList.contains('light-theme');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        
        // Update the button's aria-label for accessibility
        themeToggle.setAttribute('aria-label', 
            `Switch to ${isLight ? 'dark' : 'light'} theme`);
    });
    
    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', e => {
        // Only apply system theme if user hasn't explicitly set a preference
        if (!localStorage.getItem('theme')) {
            document.body.classList.toggle('light-theme', !e.matches);
        }
    });
});
