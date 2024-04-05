var barColors = [    "#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00","#39CCCC", "#001f3f" , "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA","#deb887","#556b2f","#9932cc","#bdb76b","#ff8c00","#8fbc8f","#f8f8ff","cd5c5c","#008080","#800080","#40e0d0","#ffff00","#d8bfd8"  ];
function OutputDisplay() 
{
      // get the form values and convert them to numbers
	var vehicle_loan1 = parseFloat(document.getElementById("vehicle loan").value);
      var fuel1 = parseFloat(document.getElementById("Fuel").value);
      var vehicle_insurance1 = parseFloat(document.getElementById("Car Insurance").value);
      var car_maintenance1 = parseFloat(document.getElementById("Car Maintenance").value);
      var other_transport1 = parseFloat(document.getElementById("Other" ).value);
      var food_expenses = parseFloat(document.getElementById("food" ).value);
      var meals_expenses = parseFloat(document.getElementById("meals" ).value);
      var r=parseFloat(document.getElementById("rental").value);
      var m=parseFloat(document.getElementById("house1").value);
      var i=parseFloat(document.getElementById("houseinsurance").value);
      var u=parseFloat(document.getElementById("utilities").value);
      var meds = parseFloat(document.getElementById("medicines" ).value);
      var doc_fee = parseFloat(document.getElementById("doctorfee" ).value);
      var mf=parseFloat(document.getElementById("MutualFunds").value);
      var fd=parseFloat(document.getElementById("FixedDeposit").value);
      var pension=parseFloat(document.getElementById("Pension").value);
      var investments=parseFloat(document.getElementById("Investments").value);
      var cd=parseFloat(document.getElementById("creditcard").value);
      var ed=parseFloat(document.getElementById("educationloan").value);
      var oth_loans=parseFloat(document.getElementById("otherloans").value);
      var clothing=parseFloat(document.getElementById("clothing").value);
      var household_exp=parseFloat(document.getElementById("household").value);
      var hobby=parseFloat(document.getElementById("hobbies").value);
      var travel=parseFloat(document.getElementById("travel").value);
      var recreation=parseFloat(document.getElementById("recreation").value);
      var other_exp=parseFloat(document.getElementById("otherexpenses").value);
      var Category9=['Housing Expenses','Transportation Expenses', 'Food Expenses', 'Healthcare Expenses', 'Savings & Investments','Loans& Other Payments','Living Expenses','Miscellaneous Expenses'];
	var housing_exp=r+m+i+u;
	var transport_exp=vehicle_loan1+fuel1+vehicle_insurance1+car_maintenance1+other_transport1;
	var food_exp=food_expenses+meals_expenses;
	var healthcare_exp=meds+doc_fee;
	var investment_exp=mf+fd+pension+investments;
	var loan_exp=cd+ed+oth_loans;
	var living_exp=clothing+household_exp;
	var misc_exp=hobby+travel+recreation+other_exp;
	var total_exp=housing_exp+transport_exp+food_exp+healthcare_exp+investment_exp+loan_exp+living_exp+misc_exp;
	var Amount9=  [housing_exp,transport_exp,food_exp,healthcare_exp,investment_exp,loan_exp,living_exp,misc_exp];
	

      // create the data object for the pie chart
      var data = {
           labels: Category9,
              datasets:[{
                data: Amount9,
              backgroundColor: barColors
            }]
          };

      // create the pie chart
      var ctx = document.getElementById("Final").getContext("2d");
      var chart = new Chart(ctx, {
        type: "pie",
        data: data,
      });

      // customize the chart appearance
      chart.options = {
        title: {
          display: true,
          text: "Expenses",
        },
        legend: {
          display: true,
          position: "center",
        },
        pieceLabel: {
          render: "percentage",
          fontColor: ["black"],
          precision: 2,
        },
      };
}
function HouseDisplay() 
{
      var r=parseFloat(document.getElementById("rental").value);
      var m=parseFloat(document.getElementById("house1").value);
      var i=parseFloat(document.getElementById("houseinsurance").value);
      var u=parseFloat(document.getElementById("utilities").value);
      var housing_exp=r+m+i+u;
	var Category1=['Rent','Maintenance','Insurance','Utilities'];	
	var Amount1=  [r,m,i,u];
	

      // create the data object for the pie chart
      var data = {
           labels: Category1,
              datasets:[{
                data: Amount1,
              backgroundColor: barColors
            }]
          };

      // create the pie chart
      var ctx = document.getElementById("HousingChart").getContext("2d");
      var chart = new Chart(ctx, {
        type: "pie",
        data: data,
      });

      // customize the chart appearance
      chart.options = {
        title: {
          display: true,
          text: "Housing Expenses",
        },
        legend: {
          display: true,
          position: "center",
        },
        pieceLabel: {
          render: "percentage",
          fontColor: ["black"],
          precision: 2,
        },
      };
}
function HealthDisplay() {
      var meds = parseFloat(document.getElementById("medicines" ).value);
      var doc_fee = parseFloat(document.getElementById("doctorfee" ).value);
	var healthcare_exp=meds+doc_fee;
	var Category4=['Medicines','Doctor consultation/fees'];
	var Amount4= [meds,doc_fee];

	

      // create the data object for the pie chart
      var data = {
           labels: Category4,
              datasets:[{
                data: Amount4,
              backgroundColor: barColors
            }]
          };

      // create the pie chart
      var ctx = document.getElementById("HealthChart").getContext("2d");
      var chart = new Chart(ctx, {
        type: "pie",
        data: data,
      });

      // customize the chart appearance
      chart.options = {
        title: {
          display: true,
          text: "Healthcare Expenses",
        },
        legend: {
          display: true,
          position: "center",
        },
        pieceLabel: {
          render: "percentage",
          fontColor: ["black"],
          precision: 2,
        },
      };
}
function LivingDisplay() {
      var clothing=parseFloat(document.getElementById("clothing").value);
      var household_exp=parseFloat(document.getElementById("household").value);
	var living_exp=clothing+household_exp;
	var Category7=['Clothing','Household expenses'];
      var Amount7= [clothing,household_exp];


	

      // create the data object for the pie chart
      var data = {
           labels: Category7,
              datasets:[{
                data: Amount7,
              backgroundColor: barColors
            }]
          };

      // create the pie chart
      var ctx = document.getElementById("LivingChart").getContext("2d");
      var chart = new Chart(ctx, {
        type: "pie",
        data: data,
      });

      // customize the chart appearance
      chart.options = {
        title: {
          display: true,
          text: "Living Expenses",
        },
        legend: {
          display: true,
          position: "center",
        },
        pieceLabel: {
          render: "percentage",
          fontColor: ["black"],
          precision: 2,
        },
      };
}
function LoanDisplay() {
     	var cd=parseFloat(document.getElementById("creditcard").value);
      var ed=parseFloat(document.getElementById("educationloan").value);
      var oth_loans=parseFloat(document.getElementById("otherloans").value);
     	var loan_exp=cd+ed+oth_loans;
	var Category6=['Credit card',"Education Loan","Other loans"];
	var Amount6= [cd,ed,oth_loans];

	

      // create the data object for the pie chart
      var data = {
           labels: Category6,
              datasets:[{
                data: Amount6,
              backgroundColor: barColors
            }]
          };

      // create the pie chart
      var ctx = document.getElementById("LoanChart").getContext("2d");
      var chart = new Chart(ctx, {
        type: "pie",
        data: data,
      });

      // customize the chart appearance
      chart.options = {
        title: {
          display: true,
          text: "Loan and Other Payments",
        },
        legend: {
          display: true,
          position: "center",
        },
        pieceLabel: {
          render: "percentage",
          fontColor: ["black"],
          precision: 2,
        },
      };
}
function MiscDisplay() {
      var hobby=parseFloat(document.getElementById("hobbies").value);
      var travel=parseFloat(document.getElementById("travel").value);
      var recreation=parseFloat(document.getElementById("recreation").value);
      var other_exp=parseFloat(document.getElementById("otherexpenses").value);
	var misc_exp=hobby+travel+recreation+other_exp;
	var Category8=['Hobbies','Travel','Recreation','Other Expenses'];
	var Amount8=  [hobby,travel,recreation,other_exp];


	

      // create the data object for the pie chart
      var data = {
           labels: Category8,
              datasets:[{
                data: Amount8,
              backgroundColor: barColors
            }]
          };

      // create the pie chart
      var ctx = document.getElementById("MiscChart").getContext("2d");
      var chart = new Chart(ctx, {
        type: "pie",
        data: data,
      });

      // customize the chart appearance
      chart.options = {
        title: {
          display: true,
          text: "Miscellaneous Expenses",
        },
        legend: {
          display: true,
          position: "center",
        },
        pieceLabel: {
          render: "percentage",
          fontColor: ["black"],
          precision: 2,
        },
      };
}
function SaveDisplay() 
{
      var mf=parseFloat(document.getElementById("MutualFunds").value);
      var fd=parseFloat(document.getElementById("FixedDeposit").value);
      var pension=parseFloat(document.getElementById("Pension").value);
      var investments=parseFloat(document.getElementById("Investments").value);
	var investment_exp=mf+fd+pension+investments;
	var Category5=['Mutual Funds','Fixed Deposit','Pensions','Investments'];
	var Amount5= [mf,fd,pension,investments];

	

      // create the data object for the pie chart
      var data = {
           labels: Category5,
              datasets:[{
                data: Amount5,
              backgroundColor: barColors
            }]
          };

      // create the pie chart
      var ctx = document.getElementById("SavingsChart").getContext("2d");
      var chart = new Chart(ctx, {
        type: "pie",
        data: data,
      });

      // customize the chart appearance
      chart.options = {
        title: {
          display: true,
          text: "Savings and Investments",
        },
        legend: {
          display: true,
          position: "center",
        },
        pieceLabel: {
          render: "percentage",
          fontColor: ["black"],
          precision: 2,
        },
      };
}
function TransportDisplay() 
{
      var vehicle_loan1 = parseFloat(document.getElementById("vehicle loan").value);
      var fuel1 = parseFloat(document.getElementById("Fuel").value);
      var vehicle_insurance1 = parseFloat(document.getElementById("Car Insurance").value);
      var car_maintenance1 = parseFloat(document.getElementById("Car Maintenance").value);
      var other_transport1 = parseFloat(document.getElementById("Other" ).value);
      var transport_exp=vehicle_loan1+fuel1+vehicle_insurance1+car_maintenance1+other_transport1;
	var Category2=["Vehicle loan","Fuel","Car Insurance","Car maintenance","Other"];
      var Amount2=[vehicle_loan1,fuel1,vehicle_insurance1,car_maintenance1,other_transport1];

	

      // create the data object for the pie chart
      var data = {
           labels: Category2,
              datasets:[{
                data: Amount2,
              backgroundColor: barColors
            }]
          };

      // create the pie chart
      var ctx = document.getElementById("TransportChart").getContext("2d");
      var chart = new Chart(ctx, {
        type: "pie",
        data: data,
      });

      // customize the chart appearance
      chart.options = {
        title: {
          display: true,
          text: "Transport Expenses",
        },
        legend: {
          display: true,
          position: "center",
        },
        pieceLabel: {
          render: "percentage",
          fontColor: ["black"],
          precision: 2,
        },
      };
    }
function FoodDisplay() {
      var food_expenses = parseFloat(document.getElementById("food" ).value);
      var meals_expenses = parseFloat(document.getElementById("meals" ).value);
	var food_exp=food_expenses+meals_expenses;
	var Category3=['Food','Meals'];
	var Amount3= [food_expenses,meals_expenses];


	

      // create the data object for the pie chart
      var data = {
           labels: Category3,
              datasets:[{
                data: Amount3,
              backgroundColor: barColors
            }]
          };

      // create the pie chart
      var ctx = document.getElementById("FoodChart").getContext("2d");
      var chart = new Chart(ctx, {
        type: "pie",
        data: data,
      });

      // customize the chart appearance
      chart.options = {
        title: {
          display: true,
          text: "Food Expenses",
        },
        legend: {
          display: true,
          position: "center",
        },
        pieceLabel: {
          render: "percentage",
          fontColor: ["black"],
          precision: 2,
        },
      };
    }



