const displayTeam = team => {
  let teamHTML = '';
  team.forEach(member => {
    if (member.getRole() === 'Engineer') {
      teamHTML += `
        <div class="team-member">
            <div class="card-title">
                <h2>${member.getName()}</h2>
                <h3>${member.getRole()}</h3>
            </div>
            <div class="card-body">
                <p>ID: ${member.getId()}</p>
                <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
                <p>GitHub: <a target="_blank" href="https://github.com/${member.getGithub()}">${member.getGithub()}</a></p>
            </div>
        </div>
        `;
    } else if (member.getRole() === 'Intern') {
      teamHTML += `
        <div class="team-member">
            <div class="card-title">
                <h2>${member.getName()}</h2>
                <h3>${member.getRole()}</h3>
            </div>
            <div class="card-body">
                <p>ID: ${member.getId()}</p>
                <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
                <p>School: ${member.getSchool()}</p>
            </div>
        </div>
        `;
    } else {
      teamHTML += `
        <div class="team-member">
            <div class="card-title">
                <h2>${member.getName()}</h2>
                <h3>${member.getRole()}</h3>
            </div>
            <div class="card-body">
                <p>ID: ${member.getId()}</p>
                <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
                <p>Office number: ${member.getOfficeNumber()}</p>
            </div>
        </div>
        `;
    }
  });
  return teamHTML;
};

const year = new Date().getFullYear();

module.exports = team => {
  console.log(team);
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>My Team</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>
            <main id="display-team">
                ${displayTeam(team)}
            </main>
            <footer>
                <p>&copy; ${team[0].name} ${year}</p>
            </footer>
        </body>
        </html>
    `;
};
