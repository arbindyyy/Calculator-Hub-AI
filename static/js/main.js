// Calculator Hub AI - Interactive JavaScript Functionality

const toolsData = {
  financial: [
    { id: 'mortgage-calculator', title: 'Mortgage Calculator', description: 'Estimate your monthly mortgage payments.', icon: 'fas fa-home', action: 'Calculate Now' },
    { id: 'amortization-calculator', title: 'Amortization Calculator', description: 'See how your loan payment is split between principal and interest.', icon: 'fas fa-chart-pie', action: 'Calculate Now' },
    { id: 'mortgage-payoff-calculator', title: 'Mortgage Payoff Calculator', description: 'Find out how soon you can pay off your mortgage.', icon: 'fas fa-calendar-check', action: 'Calculate Now' },
    { id: 'house-affordability-calculator', title: 'House Affordability Calculator', description: 'Determine how much house you can afford.', icon: 'fas fa-house-user', action: 'Calculate Now' },
    { id: 'rent-calculator', title: 'Rent Calculator', description: 'Calculate rental costs and affordability.', icon: 'fas fa-key', action: 'Calculate Now' },
    { id: 'dti-ratio-calculator', title: 'Debt-to-Income Ratio Calculator', description: 'Calculate your debt-to-income (DTI) ratio.', icon: 'fas fa-percentage', action: 'Calculate Now' },
    { id: 'real-estate-calculator', title: 'Real Estate Calculator', description: 'Analyze potential real estate investments.', icon: 'fas fa-city', action: 'Calculate Now' },
    { id: 'refinance-calculator', title: 'Refinance Calculator', description: 'See if refinancing your mortgage is a good idea.', icon: 'fas fa-retweet', action: 'Calculate Now' },
    { id: 'rental-property-calculator', title: 'Rental Property Calculator', description: 'Evaluate the profitability of a rental property.', icon: 'fas fa-building', action: 'Calculate Now' },
    { id: 'apr-calculator', title: 'APR Calculator', description: 'Calculate the Annual Percentage Rate for a loan.', icon: 'fas fa-percent', action: 'Calculate Now' },
    { id: 'fha-loan-calculator', title: 'FHA Loan Calculator', description: 'Estimate payments for an FHA-insured mortgage.', icon: 'fas fa-landmark', action: 'Calculate Now' },
    { id: 'va-mortgage-calculator', title: 'VA Mortgage Calculator', description: 'Calculate payments for a VA home loan.', icon: 'fas fa-shield-halved', action: 'Calculate Now' },
    { id: 'down-payment-calculator', title: 'Down Payment Calculator', description: 'Calculate the required down payment for a home.', icon: 'fas fa-money-bill-wave', action: 'Calculate Now' },
    { id: 'rent-vs-buy-calculator', title: 'Rent vs. Buy Calculator', description: 'Compare the financial outcomes of renting versus buying.', icon: 'fas fa-balance-scale', action: 'Calculate Now' },
    { id: 'auto-loan-calculator', title: 'Auto Loan Calculator', description: 'Estimate your monthly car loan payments.', icon: 'fas fa-car', action: 'Calculate Now' },
    { id: 'cash-back-low-interest-calculator', title: 'Cash Back or Low Interest Calculator', description: 'Decide between a cash back offer or a low interest rate.', icon: 'fas fa-hand-holding-usd', action: 'Calculate Now' },
    { id: 'auto-lease-calculator', title: 'Auto Lease Calculator', description: 'Calculate the cost of leasing a car.', icon: 'fas fa-file-contract', action: 'Calculate Now' },
    { id: 'interest-calculator', title: 'Interest Calculator', description: 'Calculate simple or compound interest on a principal amount.', icon: 'fas fa-piggy-bank', action: 'Calculate Now' },
    { id: 'investment-calculator', title: 'Investment Calculator', description: 'Project the future value of your investments.', icon: 'fas fa-seedling', action: 'Calculate Now' },
    { id: 'compound-interest-calculator', title: 'Compound Interest Calculator', description: 'See how compound interest can grow your money.', icon: 'fas fa-chart-line', action: 'Calculate Now' },
    { id: 'savings-calculator', title: 'Savings Calculator', description: 'Plan and track your savings goals.', icon: 'fas fa-coins', action: 'Calculate Now' },
    { id: 'cd-calculator', title: 'CD Calculator', description: 'Calculate the potential earnings on a Certificate of Deposit.', icon: 'fas fa-lock', action: 'Calculate Now' },
    { id: 'retirement-calculator', title: 'Retirement Calculator', description: 'Plan for your financial future and retirement.', icon: 'fas fa-umbrella-beach', action: 'Calculate Now' },
    { id: '401k-calculator', title: '401K Calculator', description: 'Estimate the growth of your 401(k) savings.', icon: 'fas fa-user-tie', action: 'Calculate Now' },
    { id: 'income-tax-calculator', title: 'Income Tax Calculator', description: 'Estimate your federal income tax liability.', icon: 'fas fa-file-invoice-dollar', action: 'Calculate Now' },
    { id: 'salary-calculator', title: 'Salary Calculator', description: 'Convert your salary between hourly, weekly, and annual rates.', icon: 'fas fa-wallet', action: 'Calculate Now' },
    { id: 'loan-calculator', title: 'Loan Calculator', description: 'Calculate payments for any type of loan.', icon: 'fas fa-handshake', action: 'Calculate Now' },
    { id: 'currency-calculator', title: 'Currency Calculator', description: 'Convert between different world currencies.', icon: 'fas fa-globe', action: 'Calculate Now' },
    { id: 'inflation-calculator', title: 'Inflation Calculator', description: 'See how inflation affects the value of money over time.', icon: 'fas fa-arrow-trend-up', action: 'Calculate Now' },
    { id: 'sales-tax-calculator', title: 'Sales Tax Calculator', description: 'Quickly calculate sales tax on a purchase.', icon: 'fas fa-shopping-cart', action: 'Calculate Now' },
    { id: 'credit-card-payoff-calculator', title: 'Credit Card Payoff Calculator', description: 'Plan the best way to pay off your credit card debt.', icon: 'fab fa-cc-visa', action: 'Calculate Now' },
    { id: 'student-loan-calculator', title: 'Student Loan Calculator', description: 'Estimate your monthly student loan payments.', icon: 'fas fa-user-graduate', action: 'Calculate Now' },
    { id: 'business-loan-calculator', title: 'Business Loan Calculator', description: 'Calculate payments for a business loan.', icon: 'fas fa-briefcase', action: 'Calculate Now' },
    { id: 'budget-calculator', title: 'Budget Calculator', description: 'Create and manage your personal or household budget.', icon: 'fas fa-clipboard-list', action: 'Calculate Now' },
  ],
  health: [
    { id: 'bmi-calculator', title: 'BMI Calculator', description: 'Calculate your Body Mass Index.', icon: 'fas fa-weight-scale', action: 'Calculate Now' },
    { id: 'calorie-calculator', title: 'Calorie Calculator', description: 'Estimate your daily calorie needs.', icon: 'fas fa-apple-alt', action: 'Calculate Now' },
    { id: 'body-fat-calculator', title: 'Body Fat Calculator', description: 'Estimate your body fat percentage.', icon: 'fas fa-percentage', action: 'Calculate Now' },
    { id: 'bmr-calculator', title: 'BMR Calculator', description: 'Calculate your Basal Metabolic Rate.', icon: 'fas fa-fire', action: 'Calculate Now' },
    { id: 'ideal-weight-calculator', title: 'Ideal Weight Calculator', description: 'Find your ideal healthy weight range.', icon: 'fas fa-balance-scale-right', action: 'Calculate Now' },
    { id: 'pace-calculator', title: 'Pace Calculator', description: 'Calculate running pace, time, and distance.', icon: 'fas fa-running', action: 'Calculate Now' },
    { id: 'lean-body-mass-calculator', title: 'Lean Body Mass Calculator', description: 'Estimate your lean body mass.', icon: 'fas fa-dumbbell', action: 'Calculate Now' },
    { id: 'calories-burned-calculator', title: 'Calories Burned Calculator', description: 'Estimate calories burned during activities.', icon: 'fas fa-fire-alt', action: 'Calculate Now' },
    { id: 'one-rep-max-calculator', title: 'One Rep Max Calculator', description: 'Estimate your one-repetition maximum for lifts.', icon: 'fas fa-trophy', action: 'Calculate Now' },
    { id: 'target-heart-rate-calculator', title: 'Target Heart Rate Calculator', description: 'Find your target heart rate zones for exercise.', icon: 'fas fa-heart-pulse', action: 'Calculate Now' },
    { id: 'pregnancy-calculator', title: 'Pregnancy Calculator', description: 'Track your pregnancy and due date.', icon: 'fas fa-baby', action: 'Calculate Now' },
    { id: 'due-date-calculator', title: 'Due Date Calculator', description: 'Estimate your baby\'s due date.', icon: 'fas fa-calendar-alt', action: 'Calculate Now' },
    { id: 'ovulation-calculator', title: 'Ovulation Calculator', description: 'Predict your most fertile days.', icon: 'fas fa-leaf', action: 'Calculate Now' },
    { id: 'macro-calculator', title: 'Macro Calculator', description: 'Calculate your optimal macronutrient intake.', icon: 'fas fa-utensils', action: 'Calculate Now' },
    { id: 'tdee-calculator', title: 'TDEE Calculator', description: 'Calculate your Total Daily Energy Expenditure.', icon: 'fas fa-battery-full', action: 'Calculate Now' },
  ],
  math: [
    { id: 'scientific-calculator', title: 'Scientific Calculator', description: 'Perform advanced mathematical calculations.', icon: 'fas fa-flask', action: 'Calculate Now' },
    { id: 'fraction-calculator', title: 'Fraction Calculator', description: 'Add, subtract, multiply, and divide fractions.', icon: 'fas fa-divide', action: 'Calculate Now' },
    { id: 'percentage-calculator', title: 'Percentage Calculator', description: 'Solve various percentage problems.', icon: 'fas fa-percent', action: 'Calculate Now' },
    { id: 'random-number-generator', title: 'Random Number Generator', description: 'Generate random numbers within a range.', icon: 'fas fa-random', action: 'Calculate Now' },
    { id: 'exponent-calculator', title: 'Exponent Calculator', description: 'Solve expressions with exponents.', icon: 'fas fa-superscript', action: 'Calculate Now' },
    { id: 'binary-calculator', title: 'Binary Calculator', description: 'Perform calculations in binary.', icon: 'fas fa-microchip', action: 'Calculate Now' },
    { id: 'quadratic-formula-calculator', title: 'Quadratic Formula Calculator', description: 'Solve quadratic equations.', icon: 'fas fa-square-root-alt', action: 'Calculate Now' },
    { id: 'log-calculator', title: 'Log Calculator', description: 'Calculate logarithms with any base.', icon: 'fas fa-wave-square', action: 'Calculate Now' },
    { id: 'ratio-calculator', title: 'Ratio Calculator', description: 'Simplify and solve ratios.', icon: 'fas fa-equals', action: 'Calculate Now' },
    { id: 'standard-deviation-calculator', title: 'Standard Deviation Calculator', description: 'Calculate the standard deviation of a data set.', icon: 'fas fa-chart-bar', action: 'Calculate Now' },
    { id: 'probability-calculator', title: 'Probability Calculator', description: 'Calculate the probability of events.', icon: 'fas fa-dice', action: 'Calculate Now' },
    { id: 'mean-median-mode-range-calculator', title: 'Mean, Median, Mode, Range Calculator', description: 'Find central tendency of a data set.', icon: 'fas fa-sort-numeric-down', action: 'Calculate Now' },
    { id: 'triangle-calculator', title: 'Triangle Calculator', description: 'Solve for the sides and angles of a triangle.', icon: 'fas fa-drafting-compass', action: 'Calculate Now' },
    { id: 'volume-calculator', title: 'Volume Calculator', description: 'Calculate the volume of various 3D shapes.', icon: 'fas fa-cube', action: 'Calculate Now' },
    { id: 'area-calculator', title: 'Area Calculator', description: 'Calculate the area of 2D shapes.', icon: 'fas fa-square', action: 'Calculate Now' },
    { id: 'distance-calculator', title: 'Distance Calculator', description: 'Find the distance between two points.', icon: 'fas fa-ruler-horizontal', action: 'Calculate Now' },
  ],
  other: [
    { id: 'age-calculator', title: 'Age Calculator', description: 'Calculate age in years, months, and days.', icon: 'fas fa-birthday-cake', action: 'Calculate Now' },
    { id: 'date-calculator', title: 'Date Calculator', description: 'Add or subtract days from a date.', icon: 'fas fa-calendar-plus', action: 'Calculate Now' },
    { id: 'time-calculator', title: 'Time Calculator', description: 'Add, subtract, and calculate time durations.', icon: 'fas fa-clock', action: 'Calculate Now' },
    { id: 'concrete-calculator', title: 'Concrete Calculator', description: 'Estimate the amount of concrete needed for a project.', icon: 'fas fa-trowel-bricks', action: 'Calculate Now' },
    { id: 'btu-calculator', title: 'BTU Calculator', description: 'Determine heating or cooling needs for a room.', icon: 'fas fa-thermometer-half', action: 'Calculate Now' },
    { id: 'square-footage-calculator', title: 'Square Footage Calculator', description: 'Calculate the area of a space in square feet.', icon: 'fas fa-ruler-combined', action: 'Calculate Now' },
    { id: 'conversion-calculator', title: 'Conversion Calculator', description: 'Convert between various units of measurement.', icon: 'fas fa-exchange-alt', action: 'Calculate Now' },
    { id: 'roman-numeral-converter', title: 'Roman Numeral Converter', description: 'Convert numbers to and from Roman numerals.', icon: 'fas fa-monument', action: 'Calculate Now' },
    { id: 'ip-subnet-calculator', title: 'IP Subnet Calculator', description: 'Calculate subnets for an IP address range.', icon: 'fas fa-network-wired', action: 'Calculate Now' },
    { id: 'password-generator', title: 'Password Generator', description: 'Create strong, secure, random passwords.', icon: 'fas fa-key', action: 'Calculate Now' },
    { id: 'gpa-calculator', title: 'GPA Calculator', description: 'Calculate your Grade Point Average.', icon: 'fas fa-graduation-cap', action: 'Calculate Now' },
    { id: 'grade-calculator', title: 'Grade Calculator', description: 'Determine your course grade based on assignments.', icon: 'fas fa-percentage', action: 'Calculate Now' },
    { id: 'tip-calculator', title: 'Tip Calculator', description: 'Quickly calculate the tip for a bill.', icon: 'fas fa-concierge-bell', action: 'Calculate Now' },
    { id: 'sleep-calculator', title: 'Sleep Calculator', description: 'Find the best time to wake up or go to bed.', icon: 'fas fa-bed', action: 'Calculate Now' },
    { id: 'fuel-cost-calculator', title: 'Fuel Cost Calculator', description: 'Estimate the fuel cost for a trip.', icon: 'fas fa-gas-pump', action: 'Calculate Now' },
    { id: 'tire-size-calculator', title: 'Tire Size Calculator', description: 'Compare tire sizes and their effects on your vehicle.', icon: 'fas fa-dot-circle', action: 'Calculate Now' },
    { id: 'dice-roller', title: 'Dice Roller', description: 'Roll virtual dice for games and probability.', icon: 'fas fa-dice-d20', action: 'Calculate Now' },
  ]
};

// --- Calculator Implementation Hub ---
const calculatorImplementations = {
    'mortgage-calculator': {
        getHTML: () => `
            <form class="calculator-form">
                <div class="form-group">
                    <label for="loanAmount">Loan Amount ($)</label>
                    <input type="number" id="loanAmount" value="300000" placeholder="e.g., 300000">
                </div>
                <div class="form-group">
                    <label for="interestRate">Interest Rate (%)</label>
                    <input type="number" id="interestRate" value="6.5" step="0.01" placeholder="e.g., 6.5">
                </div>
                <div class="form-group">
                    <label for="loanTerm">Loan Term (years)</label>
                    <input type="number" id="loanTerm" value="30" placeholder="e.g., 30">
                </div>
                <div class="calculator-result-area">
                    <p class="result-title">Monthly Payment</p>
                    <p class="result-value" id="resultValue">$0.00</p>
                    <p class="result-interpretation" id="resultInterpretation"></p>
                </div>
            </form>
        `,
        attachEventListeners: (modal) => {
            const form = modal.querySelector('form');
            const calculate = () => {
                const P = parseFloat(modal.querySelector('#loanAmount').value);
                const annualRate = parseFloat(modal.querySelector('#interestRate').value);
                const termYears = parseFloat(modal.querySelector('#loanTerm').value);

                if (P > 0 && annualRate > 0 && termYears > 0) {
                    const i = annualRate / 100 / 12;
                    const n = termYears * 12;
                    const M = P * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);

                    modal.querySelector('#resultValue').textContent = M.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
                    modal.querySelector('#resultInterpretation').textContent = '';
                } else {
                    modal.querySelector('#resultValue').textContent = '$0.00';
                    modal.querySelector('#resultInterpretation').textContent = 'Please enter valid loan details.';
                }
            };
            form.addEventListener('input', calculate);
            calculate(); // Initial calculation
        }
    },
    'bmi-calculator': {
        getHTML: () => `
            <form class="calculator-form">
                <div class="form-group">
                    <label for="height">Height (cm)</label>
                    <input type="number" id="height" value="175" placeholder="e.g., 175">
                </div>
                <div class="form-group">
                    <label for="weight">Weight (kg)</label>
                    <input type="number" id="weight" value="70" placeholder="e.g., 70">
                </div>
                <div class="calculator-result-area">
                    <p class="result-title">Your BMI</p>
                    <p class="result-value" id="resultValue">--</p>
                    <p class="result-interpretation" id="resultInterpretation"></p>
                </div>
            </form>
        `,
        attachEventListeners: (modal) => {
            const form = modal.querySelector('form');
            const calculate = () => {
                const heightCm = parseFloat(modal.querySelector('#height').value);
                const weightKg = parseFloat(modal.querySelector('#weight').value);

                if (heightCm > 0 && weightKg > 0) {
                    const heightM = heightCm / 100;
                    const bmi = weightKg / (heightM * heightM);

                    let interpretation = 'Based on your BMI, you are in the ';
                    if (bmi < 18.5) interpretation += 'Underweight range.';
                    else if (bmi < 25) interpretation += 'Normal weight range.';
                    else if (bmi < 30) interpretation += 'Overweight range.';
                    else interpretation += 'Obesity range.';

                    modal.querySelector('#resultValue').textContent = bmi.toFixed(1);
                    modal.querySelector('#resultInterpretation').textContent = interpretation + ' This is an estimate, consult a healthcare professional for advice.';
                } else {
                    modal.querySelector('#resultValue').textContent = '--';
                    modal.querySelector('#resultInterpretation').textContent = 'Please enter a valid height and weight.';
                }
            };
            form.addEventListener('input', calculate);
            calculate();
        }
    },
    'age-calculator': {
        getHTML: () => `
            <form class="calculator-form">
                <div class="form-group">
                    <label for="birthDate">Enter Your Date of Birth</label>
                    <input type="date" id="birthDate">
                </div>
                <div class="calculator-result-area">
                    <p class="result-title">Your Age Is</p>
                    <p class="result-value" id="resultValue">--</p>
                    <p class="result-interpretation" id="resultInterpretation">Enter a date to see your age.</p>
                </div>
            </form>
        `,
        attachEventListeners: (modal) => {
            const form = modal.querySelector('form');
            const birthDateInput = modal.querySelector('#birthDate');

            const today = new Date();
            const formattedToday = today.toISOString().split('T')[0];
            birthDateInput.max = formattedToday;
            birthDateInput.value = formattedToday;

            const calculate = () => {
                if (!birthDateInput.value) return;

                const birthDate = new Date(birthDateInput.value);
                let years = today.getFullYear() - birthDate.getFullYear();
                let months = today.getMonth() - birthDate.getMonth();
                let days = today.getDate() - birthDate.getDate();

                if (days < 0) {
                    months--;
                    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
                }
                if (months < 0) {
                    years--;
                    months += 12;
                }

                if (years >= 0) {
                    modal.querySelector('#resultValue').textContent = `${years}y ${months}m ${days}d`;
                    modal.querySelector('#resultInterpretation').textContent = `Calculated as of ${today.toLocaleDateString()}`;
                } else {
                    modal.querySelector('#resultValue').textContent = '--';
                    modal.querySelector('#resultInterpretation').textContent = 'Birth date cannot be in the future.';
                }
            };
            form.addEventListener('input', calculate);
            calculate();
        }
    },
    'percentage-calculator': {
         getHTML: () => `
            <form class="calculator-form">
                <div class="form-group">
                     <select id="calcMode">
                        <option value="p_of_n">What is X % of Y?</option>
                        <option value="n_is_p_of">X is what % of Y?</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="val1" id="label1">Percentage (X)</label>
                    <input type="number" id="val1" placeholder="e.g., 15">
                </div>
                <div class="form-group">
                    <label for="val2" id="label2">Total Number (Y)</label>
                    <input type="number" id="val2" placeholder="e.g., 200">
                </div>
                <div class="calculator-result-area">
                    <p class="result-title">Result</p>
                    <p class="result-value" id="resultValue">--</p>
                </div>
            </form>
        `,
        attachEventListeners: (modal) => {
            const form = modal.querySelector('form');
            const modeSelect = modal.querySelector('#calcMode');
            const label1 = modal.querySelector('#label1');
            const label2 = modal.querySelector('#label2');

            const updateLabels = () => {
                if (modeSelect.value === 'p_of_n') {
                    label1.textContent = 'Percentage (X)';
                    label2.textContent = 'Total Number (Y)';
                } else {
                    label1.textContent = 'Part Number (X)';
                    label2.textContent = 'Total Number (Y)';
                }
            };

            const calculate = () => {
                const val1 = parseFloat(modal.querySelector('#val1').value);
                const val2 = parseFloat(modal.querySelector('#val2').value);
                let result = '--';

                if (!isNaN(val1) && !isNaN(val2)) {
                    if (modeSelect.value === 'p_of_n') {
                        result = (val1 / 100) * val2;
                    } else if (val2 !== 0) {
                        result = `${((val1 / val2) * 100).toFixed(2)}%`;
                    } else {
                        result = 'Error';
                    }
                }
                modal.querySelector('#resultValue').textContent = result;
            };

            modeSelect.addEventListener('change', () => {
                updateLabels();
                calculate();
            });
            form.addEventListener('input', calculate);
            updateLabels();
        }
    }
};


// --- Core Application Logic ---
let currentTheme = 'light';
let currentCategory = 'all';
let searchQuery = '';

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const sideSearchToggle = document.getElementById('sideSearchToggle');
const sideSearchPanel = document.getElementById('sideSearchPanel');
const searchPanelClose = document.getElementById('searchPanelClose');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const searchSuggestions = document.getElementById('searchSuggestions');
const categoryTabs = document.getElementById('categoryTabs');
const toolsGrid = document.getElementById('toolsGrid');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
// Modal-related elements are no longer needed as each calculator has its own page.

// --- Language Translation ---
const translations = {
    en: {
        navHome: "Home",
        navCalculators: "Calculators",
        navAbout: "About",
        navContact: "Contact",
        heroTitle1: "Intelligent Calculators",
        heroTitle2: "for Every Need",
        heroDesc: "From complex financial planning to daily health metrics and advanced math problems, find the perfect tool in our comprehensive, AI-enhanced suite.",
        heroBtn: "Explore Calculators",
        sectionTitle: "100+ Smart Calculators",
        sectionDesc: "Find the right tool for the job, organized by category.",
        allCalculators: "All Calculators",
        financial: "Financial",
        health: "Fitness & Health",
        math: "Math",
        other: "Other",
        searchPlaceholder: "e.g., BMI, Mortgage, Age...",
        searchTitle: "Search Calculators"
    },
    hi: {
        navHome: "होम",
        navCalculators: "कैलकुलेटर",
        navAbout: "परिचय",
        navContact: "संपर्क करें",
        heroTitle1: "बुद्धिमान कैलकुलेटर",
        heroTitle2: "हर जरूरत के लिए",
        heroDesc: "जटिल वित्तीय योजना से लेकर दैनिक स्वास्थ्य मीट्रिक और उन्नत गणित समस्याओं तक, हमारी व्यापक, एआई-सक्षम सूट में सही टूल खोजें।",
        heroBtn: "कैलकुलेटर देखें",
        sectionTitle: "100+ स्मार्ट कैलकुलेटर",
        sectionDesc: "श्रेणी के अनुसार व्यवस्थित, सही टool खोजें।",
        allCalculators: "सभी कैलकुलेटर",
        financial: "वित्तीय",
        health: "स्वास्थ्य और फिटनेस",
        math: "गणित",
        other: "अन्य",
        searchPlaceholder: "जैसे, BMI, मॉर्गेज, आयु...",
        searchTitle: "कैलकुलेटर खोजें"
    }
};
let currentLang = 'en';
const languageSwitcher = document.getElementById('languageSwitcher');
function updateLanguageTexts() {
    const t = translations[currentLang];
    // Navbar
    document.querySelectorAll('.nav-link')[0].textContent = t.navHome;
    document.querySelectorAll('.nav-link')[1].textContent = t.navCalculators;
    document.querySelectorAll('.nav-link')[2].textContent = t.navAbout;
    document.querySelectorAll('.nav-link')[3].textContent = t.navContact;
    // Hero
    document.querySelector('.hero-title .gradient-text').textContent = t.heroTitle1;
    document.querySelector('.hero-title').childNodes[2].textContent = t.heroTitle2;
    document.querySelector('.hero-description').textContent = t.heroDesc;
    document.querySelector('.hero-cta-button').childNodes[2].textContent = t.heroBtn;
    // Section
    document.querySelector('.section-title .gradient-text').textContent = t.sectionTitle.split(' ')[0];
    document.querySelector('.section-title').childNodes[1].textContent = t.sectionTitle.slice(t.sectionTitle.indexOf(' '));
    document.querySelector('.section-description').textContent = t.sectionDesc;
    // Tabs
    const tabBtns = document.querySelectorAll('.tab-button');
    tabBtns[0].childNodes[3].textContent = t.allCalculators;
    tabBtns[1].childNodes[3].textContent = t.financial;
    tabBtns[2].childNodes[3].textContent = t.health;
    tabBtns[3].childNodes[3].textContent = t.math;
    tabBtns[4].childNodes[3].textContent = t.other;
    // Search
    document.querySelector('.search-panel-title').textContent = t.searchTitle;
    document.getElementById('searchInput').placeholder = t.searchPlaceholder;
}
languageSwitcher.addEventListener('change', function() {
    currentLang = this.value;
    updateLanguageTexts();
});
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeEventListeners();
    renderTools();
    createScrollToTopButton();
    updateLanguageTexts();
});

function initializeTheme() {
  const savedTheme = localStorage.getItem('calculator-hub-theme') || 'light';
  currentTheme = savedTheme;
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon();
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('calculator-hub-theme', currentTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = themeToggle.querySelector('i');
  icon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

function initializeEventListeners() {
    themeToggle.addEventListener('click', toggleTheme);

    // Side Search Panel Listeners
    sideSearchToggle.addEventListener('click', toggleSearchPanel);
    searchPanelClose.addEventListener('click', closeSearchPanel);
    document.addEventListener('click', (e) => {
        if (!sideSearchPanel.contains(e.target) && !sideSearchToggle.contains(e.target)) {
            closeSearchPanel();
        }
    });

    // Search Input Listeners
    searchInput.addEventListener('input', handleSearch);
    searchClear.addEventListener('click', clearSearch);

    // Other Listeners
    categoryTabs.addEventListener('click', handleCategoryClick);
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    document.querySelectorAll('.nav-link, .hero-cta-button').forEach(link => {
        link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            if(navMenu.classList.contains('active')) {
            toggleMobileMenu();
            }
        }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            if (sideSearchPanel.classList.contains('active')) closeSearchPanel();
        }
    });
}

// --- Side Search Panel Control ---
function openSearchPanel() {
    if (!sideSearchPanel.classList.contains('active')) {
        sideSearchPanel.classList.add('active');
        searchInput.focus();
    }
}
function closeSearchPanel() {
    sideSearchPanel.classList.remove('active');
}
function toggleSearchPanel() {
    sideSearchPanel.classList.contains('active') ? closeSearchPanel() : openSearchPanel();
}

// --- Search Functionality ---
function handleSearch(e) {
  searchQuery = e.target.value.toLowerCase();
  searchClear.classList.toggle('visible', searchQuery.length > 0);

  const suggestions = generateSearchSuggestions();
  if (suggestions.length > 0 && searchQuery.length > 0) {
    renderSearchSuggestions(suggestions);
    searchSuggestions.classList.add('visible');
  } else {
    searchSuggestions.classList.remove('visible');
    searchSuggestions.innerHTML = '';
  }
  renderTools();
}

function clearSearch() {
  searchInput.value = '';
  searchInput.dispatchEvent(new Event('input'));
}

function generateSearchSuggestions() {
  const allTools = Object.values(toolsData).flat();
  return allTools.filter(tool => tool.title.toLowerCase().includes(searchQuery) || tool.description.toLowerCase().includes(searchQuery)).slice(0, 8); // Show more suggestions in panel
}

function renderSearchSuggestions(suggestions) {
  searchSuggestions.innerHTML = suggestions.map(tool => `
      <div class="suggestion-item" data-id="${tool.id}" onmousedown="selectTool('${tool.id}')">
        <i class="${tool.icon}"></i>
        <span>${tool.title}</span>
      </div>`).join('');
}

// --- Tool Card & Category Logic ---
// Note: handleToolClick and modal functions have been removed as all calculators now have dedicated pages.

function handleCategoryClick(e) {
  const button = e.target.closest('.tab-button');
  if (!button) return;
  categoryTabs.querySelector('.active')?.classList.remove('active');
  button.classList.add('active');
  currentCategory = button.dataset.category;
  renderTools();
}

function renderTools() {
  const filteredTools = getFilteredTools();
  if (filteredTools.length === 0) {
    toolsGrid.innerHTML = `<div class="no-results"><i class="fas fa-search"></i><h3>No calculators found</h3><p>Try adjusting your search or category filter.</p></div>`;
    return;
  }
  toolsGrid.innerHTML = filteredTools.map(tool => createToolCard(tool)).join('');
  observeToolCards();
}

function getFilteredTools() {
  let tools = (currentCategory === 'all') ? Object.values(toolsData).flat() : (toolsData[currentCategory] || []);
  if (searchQuery) {
    tools = tools.filter(tool => tool.title.toLowerCase().includes(searchQuery) || tool.description.toLowerCase().includes(searchQuery));
  }
  return tools;
}

function createToolCard(tool) {
  const categoryName = getCategoryName(tool);
  // All tool cards are now links to their dedicated pages.
  return `
      <a href="${tool.id}.html" class="tool-card-link">
        <div class="tool-card" data-category="${categoryName.toLowerCase()}">
          <div class="tool-header">
            <div class="tool-icon"><i class="${tool.icon}"></i></div>
            <h3 class="tool-title">${tool.title}</h3>
          </div>
          <div class="tool-content"><p class="tool-description">${tool.description}</p></div>
          <button class="tool-action">Go to Page</button>
        </div>
      </a>`;
}

function getCategoryName(tool) {
  for (const [category, tools] of Object.entries(toolsData)) {
    if (tools.some(t => t.id === tool.id)) return category.charAt(0).toUpperCase() + category.slice(1);
  }
  return 'Tool';
}

// --- Utility Functions ---
function toggleMobileMenu() {
  navMenu.classList.toggle('active');
  mobileMenuToggle.classList.toggle('active');
}

function createScrollToTopButton() {
    if(document.getElementById('scrollToTop')) return;
    const button = document.createElement('button');
    button.id = 'scrollToTop';
    button.className = 'scroll-to-top';
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.style.display = 'none';
    button.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(button);
    window.addEventListener('scroll', () => {
        button.style.display = (window.pageYOffset > 300) ? 'flex' : 'none';
    });
}

function observeToolCards() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.tool-card:not(.visible)').forEach(card => {
    observer.observe(card);
  });
}
