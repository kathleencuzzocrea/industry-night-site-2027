/* ---VARIABLES--- */
const timeline = document.querySelector('#timeline');

const studentProjects = [
    {
        year: 2007,
        details: 'These are fake details for the purposes of testing that my object works. These are fake details for the purposes of testing that my object works. These are fake details for the purposes of testing that my object works. These are fake details for the purposes of testing that my object works.'
    },
    {
        year: 2008,
        details: 'These are fake details for the purposes of testing that my object works'
    },
    {
        year: 2009,
        details: 'These are fake details for the purposes of testing that my object works. These are fake details for the purposes of testing that my object works. These are fake details for the purposes of testing that my object works'
    },
    {
        year: 2010,
        details: 'These are fake details for the purposes of testing that my object works. These are fake details for the purposes of testing that my object works. These are fake details for the purposes of testing that my object works.'
    },
];






/* ---FUNCTIONS--- */

function buildTimeline() {
    timeline.innerHTML = '';

    let heading = document.createElement("h2");
    heading.innerText = 'Student Showcase';
    heading.classList.add('visually-hidden');

    timeline.appendChild(heading);

    studentProjects.forEach((p) => {
        let card = document.createElement('div');
        let contentCon = document.createElement('article');
        let cardHeading = document.createElement('h2');
        let cardDetails = document.createElement('p');

        card.classList.add('timeline-card');
        card.classList.add('position');
        contentCon.classList.add('content');

        cardHeading.innerText = `${p.year}`;
        cardDetails.innerText = `${p.details}`;

        contentCon.appendChild(cardHeading);
        contentCon.appendChild(cardDetails);

        card.appendChild(contentCon);

        timeline.appendChild(card);
    });
}






/* ---EVENT LISTENERS--- */





buildTimeline();