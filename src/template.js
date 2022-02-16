// assistance with building cards from Jen Lucas

const managerCard = (manager) => {
    return `
        <div class= "col-md-4 mt-5 mb-4">
            <div class="card">
                <div id="cardHeaderManager" class="card-header">
                <h1 class="text-center">${manager.name}</h1>
                    <h2 class="text-center">Manager</h2>
                </div>

                <div class='card-body'>
                    <p>ID: ${manager.id}</p>
                    <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p>Office Number: ${manager.officeNumber}</p>
                </div>
            </div>      
        </div>   
    `;
}

const engineerCard = (engineer) => {
    return `
        <div class= "col-md-4 mt-5 mb-4">
            <div class="card">
                <div id="cardHeaderManager" class="card-header">
                <h1 class="text-center">${engineer.name}</h1>
                    <h2 class="text-center">Manager</h2>
                </div>

                <div class='card-body'>
                    <p>ID: ${engineer.id}</p>
                    <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p>Office Number: ${engineer.officeNumber}</p>
                </div>
            </div>      
        </div>   
    `;
}

const internCard = (intern) => {
    return `
        <div class= "col-md-4 mt-5 mb-4">
            <div class="card">
                <div id="cardHeaderManager" class="card-header">
                <h1 class="text-center">${intern.name}</h1>
                    <h2 class="text-center">Manager</h2>
                </div>

                <div class='card-body'>
                    <p>ID: ${intern.id}</p>
                    <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p>Office Number: ${intern.officeNumber}</p>
                </div>
            </div>      
        </div>   
    `;
}

const employeeHtml = (employees) => {
    let htmlEmployeeCards = [];

    for (let i = 0; i < employees.length; i++) {
        console.log(employees[i])

        if (employees[i].getRole() === "Manager") {
            const manager = managerCard(employees[i]);
            htmlEmployeeCards.push(manager)
        }
        else if (employees[i].getRole() === "Engineer") {
            const engineer = engineerCard(employees[i]);
            htmlEmployeeCards.push(engineer)
        }
        else if (employees[i].getRole() === "Intern") {
            const intern = internCard(employees[i]);
            htmlEmployeeCards.push(intern)
        }
    }
    let htmlEmployee = htmlEmployeeCards.join('');


    const generateTeamProfile = generateHTML(htmlEmployee);
    return generateTeamProfile;
};

const generateHTML = (htmlEmployee) => {
    return (
        `
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="./style.css"/>
	<title> Team Profile Generator </title>
</head>

<body>

<header>
    <h1 class="text-center"> Team Profile Generator </h1>
</header> 

<main> 

<section>
<div class="container">
    <div class="row">

        ${htmlEmployee}
    </div>
</div>
</section>


</main>

</body>

</html>
`
    )
};

module.exports = employeeHtml;