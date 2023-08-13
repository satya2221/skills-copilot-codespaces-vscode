function skillsMember() {
    var skills = [
        { name: 'HTML', level: 5 },
        { name: 'CSS', level: 5 },
        { name: 'JavaScript', level: 5 },
        { name: 'jQuery', level: 5 },
        { name: 'Bootstrap', level: 5 },
        { name: 'React', level: 5 },
        { name: 'Node.js', level: 5 },
        { name: 'Express', level: 5 },
        { name: 'MySQL', level: 5 },
        { name: 'MongoDB', level: 5 },
        { name: 'Git', level: 5 },
        { name: 'GitHub', level: 5 },
        { name: 'Heroku', level: 5 },
        { name: 'WordPress', level: 5 }
    ];

    var skillsList = document.getElementById('skills-list');

    for (var i = 0; i < skills.length; i++) {
        var skill = document.createElement('li');
        skill.textContent = skills[i].name;
        skill.setAttribute('class', 'skill');
        skill.setAttribute('data-level', skills[i].level);
        skillsList.appendChild(skill);
    }
}