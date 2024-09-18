// listing elements

document.getElementById('resumeForm')?.addEventListener('submit' , function(event) {
    event.preventDefault();

// type assertion

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const degreeElement = document.getElementById('degree') as HTMLInputElement ;
    const institutionElement = document.getElementById('institution') as HTMLInputElement;
    const yearElement = document.getElementById('year') as HTMLInputElement ;
    const jobTitleElement = document.getElementById('jobTitle') as HTMLInputElement;
    const companyElement = document.getElementById('company') as HTMLInputElement;
    const yearsElement = document.getElementById('years') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if(nameElement && emailElement && phoneElement && degreeElement && institutionElement && yearElement && jobTitleElement && companyElement && yearsElement && skillsElement) {

        const name = nameElement.value ;
        const email = emailElement.value ;
        const phone = phoneElement.value ;
        const degree = degreeElement.value;
        const institution = institutionElement.value;
        const year = yearElement.value;
        const jobTitle = jobTitleElement.value;
        const company = companyElement.value;
        const years = yearsElement.value;
        const skills = skillsElement.value;

    // create resume output

    const resumeBuilder = `
    <h2>Personal Info</h2>
    <p><strong>Name:</strong>${name}</p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Contact:</strong>${phone}</p>

    <h2>Education</h2>
    <p><strong>Degree:</strong>${degree}</p>
    <p><strong>Institution:</strong>${institution}</p>
    <p><strong>Graduation Year:</strong>${year}</p>

    <h2>Experience</h2>
    <p><strong>Job Title:</strong>${jobTitle}</p>
    <p><strong>Company:</strong>${company}</p>
    <p><strong>Experience years:</strong>${years}</p>


    <h2>Skills</h2>
    <p><strong>Skills:</strong>${skills}</p>
    `;
        

    const resumeBuilderElement = document.getElementById('resumeBuilder')
    if (resumeBuilderElement) {
        resumeBuilderElement.innerHTML = resumeBuilder
    } else {
        console.error('the resume output elements are missing')
    }
} else {
    console.error('one or more output elements are missing ')
}
})

