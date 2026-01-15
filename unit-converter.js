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
        <h2>Length / Metric Converter</h2>
        <div class="converter-container">
            <div class="converter-box">
                <div class="input-group">
                    <label for="length-input">Enter Value:</label>
                    <input type="number" id="length-input" placeholder="Enter amount" step="0.01" min="0">
                </div>
                <div class="units-row">
                    <div class="unit-group">
                        <label for="from-unit">From:</label>
                        <select id="from-unit">
                            <option value="mm">Millimeter (mm)</option>
                            <option value="cm">Centimeter (cm)</option>
                            <option value="m" selected>Meter (m)</option>
                            <option value="km">Kilometer (km)</option>
                            <option value="inch">Inch (in)</option>
                            <option value="foot">Foot (ft)</option>
                            <option value="yard">Yard (yd)</option>
                            <option value="mile">Mile (mi)</option>
                        </select>
                    </div>
                    <div class="unit-group">
                        <label for="to-unit">To:</label>
                        <select id="to-unit">
                            <option value="mm">Millimeter (mm)</option>
                            <option value="cm">Centimeter (cm)</option>
                            <option value="m" selected>Meter (m)</option>
                            <option value="km">Kilometer (km)</option>
                            <option value="inch">Inch (in)</option>
                            <option value="foot">Foot (ft)</option>
                            <option value="yard">Yard (yd)</option>
                            <option value="mile">Mile (mi)</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="result-box">
                <p class="result-label">Result:</p>
                <p class="result-value" id="length-result">0.00</p>
            </div>
            <button class="btn-clear" onclick="clearLengthConverter()">Clear</button>
        </div>
    `;
    
    // Set up event listeners for the converter
    setupLengthConverter();
}

/**
 * Setup event listeners for length converter
 */
function setupLengthConverter() {
    const inputField = document.getElementById('length-input');
    const fromUnit = document.getElementById('from-unit');
    const toUnit = document.getElementById('to-unit');
    
    // Add event listeners for real-time conversion
    inputField.addEventListener('input', convertLength);
    fromUnit.addEventListener('change', convertLength);
    toUnit.addEventListener('change', convertLength);
    
    // Initial conversion
    convertLength();
}

/**
 * Convert length units
 * Conversion factors: all conversions go through meters as base unit
 */
function convertLength() {
    const input = document.getElementById('length-input').value;
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
    const resultElement = document.getElementById('length-result');
    
    if (!input || input === '') {
        resultElement.textContent = '0.00';
        return;
    }
    
    const value = parseFloat(input);
    
    // Conversion factors to meters
    const toMeters = {
        'mm': 0.001,
        'cm': 0.01,
        'm': 1,
        'km': 1000,
        'inch': 0.0254,
        'foot': 0.3048,
        'yard': 0.9144,
        'mile': 1609.344
    };
    
    // Convert input value to meters
    const valueInMeters = value * toMeters[fromUnit];
    
    // Convert from meters to target unit
    const result = valueInMeters / toMeters[toUnit];
    
    // Format result: round to 2 decimals
    const rounded = Math.round(result * 100) / 100;
    
    // If it's a whole number, display without decimals
    if (rounded === Math.floor(rounded)) {
        resultElement.textContent = Math.floor(rounded).toString();
    } else {
        // Otherwise display with 2 decimal places
        resultElement.textContent = rounded.toFixed(2);
    }
}

/**
 * Clear length converter form
 */
function clearLengthConverter() {
    document.getElementById('length-input').value = '';
    document.getElementById('from-unit').value = 'm';
    document.getElementById('to-unit').value = 'm';
    document.getElementById('length-result').textContent = '0.00';
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
