     // Define NHIF rates based on income thresholds
     const NHIF_RATES = [
        { threshold: 0, rate: 0 },
        { threshold: 5999, rate: 150 },
        { threshold: 7999, rate: 300 },
      ];
      
      // Define tax rates based on income thresholds
      const TAX_RATES = [
        { threshold: 0, rate: 0 },
        { threshold: 24000, rate: 0.1 },
        { threshold: 32333, rate: 0.25 },
        { threshold: 500000, rate: 0.3 },
        { threshold: 800000, rate: 0.325 },
        { threshold: Infinity, rate: 0.35 }
      ];
      
      // Define NSSF rate
      const NSSF_RATE = 0.06;
      
      // Function to calculate NHIF deductions based on income
      function calculateNHIFDeductionsCustom(income) {
        let deduction = 0;
      
        for (let i = 0; i < NHIF_RATES.length; i++) {
          const nhifRate = NHIF_RATES[i];
      
          if (income <= nhifRate.threshold) {
            deduction = nhifRate.rate;
            break;
          }
        }
      
        return deduction;
      }
      
      // Function to calculate tax based on income and tax rates
      function calculateTaxCustom(income, taxRates) {
        let tax = 0;
      
        for (let i = 0; i < taxRates.length; i++) {
          const rate = taxRates[i];
      
          if (income <= rate.threshold) {
            break;
          }
      
          tax += (rate.threshold - (i > 0 ? taxRates[i - 1].threshold : 0)) * rate.rate;
        }
      
        tax += (income - tax) * taxRates[taxRates.length - 1].rate;
        return tax;
      }
      
      // Function to calculate NSSF deductions based on income
      function calculateNSSFDeductionsCustom(income) {
        return income * NSSF_RATE;
      }
      
      // Function to calculate gross income based on basic salary and benefits
      function calculateGrossIncomeCustom(salary, benefits) {
        return salary + benefits;
      }
      
      // Function to calculate net salary
      function calculateNetSalaryCustom() {
        const salaryInput = prompt("Enter your basic salary:");
        const salary = parseFloat(salaryInput);
      
        const benefitsInput = prompt("Enter your total benefits:");
        const benefits = parseFloat(benefitsInput);
      
        if (isNaN(salary) || isNaN(benefits)) {
          console.log("Invalid input. Please enter a number.");
          return;
        }
      
        const grossIncome = calculateGrossIncomeCustom(salary, benefits);
        const nhifDeductions = calculateNHIFDeductionsCustom(salary);
        const tax = calculateTaxCustom(grossIncome, TAX_RATES);
        const nssfDeductions = calculateNSSFDeductionsCustom(salary);
        const netSalary = grossIncome - tax - nhifDeductions - nssfDeductions;
      
        alert(`Your net salary is: ${netSalary}`);
      }
      
      calculateNetSalaryCustom();
      