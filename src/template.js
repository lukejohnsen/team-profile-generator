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