// Unit Converter App - Main JavaScript File

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Unit Converter App initialized');
    initializeApp();
});

/**
 * Initialize the application
 */
function initializeApp() {
    // Set up navigation event listeners
    setupNavigation();
    
    // Log app status
    console.log('App is ready');
}

/**
 * Setup navigation click handlers
 */
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            handleNavigation(target);
        });
    });
}

/**
 * Handle navigation between different converter types
 * @param {string} category - The converter category (e.g., #length, #weight)
 */
function handleNavigation(category) {
    console.log('Navigating to:', category);
    
    // Update the converter section based on category
    const converterSection = document.getElementById('converter-section');
    
    switch(category) {
        case '#length':
            loadLengthConverter();
            break;
        case '#weight':
            loadWeightConverter();
            break;
        case '#temperature':
            loadTemperatureConverter();
            break;
        case '#volume':
            loadVolumeConverter();
            break;
        default:
            console.log('Unknown category');
    }
}

/**
 * Load length converter
 */
function loadLengthConverter() {
    console.log('Loading length converter...');
    const converterSection = document.getElementById('converter-section');
    converterSection.innerHTML = `
        <h2>Length Converter</h2>
        <p>Convert between different length units (Meters, Feet, Miles, etc.)</p>
        <p><em>Coming soon...</em></p>
    `;
}

/**
 * Load weight converter
 */
function loadWeightConverter() {
    console.log('Loading weight converter...');
    const converterSection = document.getElementById('converter-section');
    converterSection.innerHTML = `
        <h2>Weight Converter</h2>
        <p>Convert between different weight units (Kilograms, Pounds, Ounces, etc.)</p>
        <p><em>Coming soon...</em></p>
    `;
}

/**
 * Load temperature converter
 */
function loadTemperatureConverter() {
    console.log('Loading temperature converter...');
    const converterSection = document.getElementById('converter-section');
    converterSection.innerHTML = `
        <h2>Temperature Converter</h2>
        <p>Convert between different temperature units (Celsius, Fahrenheit, Kelvin)</p>
        <p><em>Coming soon...</em></p>
    `;
}

/**
 * Load volume converter
 */
function loadVolumeConverter() {
    console.log('Loading volume converter...');
    const converterSection = document.getElementById('converter-section');
    converterSection.innerHTML = `
        <h2>Volume Converter</h2>
        <p>Convert between different volume units (Liters, Gallons, Milliliters, etc.)</p>
        <p><em>Coming soon...</em></p>
    `;
}
