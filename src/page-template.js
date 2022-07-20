const displayTeam = team => {
  let teamHTML = '';
  team.forEach(member => {
    if (member.getRole() === 'Engineer') {
      teamHTML += `
        <div class="team-member">
            <h2>${member.getName()}</h2>
            <h3>${member.getRole()}</h3>
            <p>ID: ${member.getId()}</p>
            <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
            <p>GitHub: ${member.getGithub()}</p>
        </div>
        `;
    } else if (member.getRole() === 'Intern') {
      teamHTML += `
        <div class="team-member">
            <h2>${member.getName()}</h2>
            <h3>${member.getRole()}</h3>
            <p>ID: ${member.getId()}</p>
            <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
            <p>School: ${member.getSchool()}</p>
        </div>
        `;
    } else {
      teamHTML += `
        <div class="team-member">
            <h2>${member.getName()}</h2>
            <h3>${member.getRole()}</h3>
            <p>ID :${member.getId()}</p>
            <p>Email :<a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
            <p>Office number: ${member.getOfficeNumber()}</p>
        </div>
        `;
    }
  });
  return teamHTML;
};

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
                <p>&copy; ${team[0].name}</p>
            </footer>
        </body>
        </html>
    `;
};
