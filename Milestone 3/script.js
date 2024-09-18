// listing elements
var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var degreeElement = document.getElementById('degree');
    var institutionElement = document.getElementById('institution');
    var yearElement = document.getElementById('year');
    var jobTitleElement = document.getElementById('jobTitle');
    var companyElement = document.getElementById('company');
    var yearsElement = document.getElementById('years');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && degreeElement && institutionElement && yearElement && jobTitleElement && companyElement && yearsElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var degree = degreeElement.value;
        var institution = institutionElement.value;
        var year = yearElement.value;
        var jobTitle = jobTitleElement.value;
        var company = companyElement.value;
        var years = yearsElement.value;
        var skills = skillsElement.value;
        // create resume output
        var resumeBuilder = "\n    <h2>Personal Info</h2>\n    <p><strong>Name:</strong>".concat(name_1, "</p>\n    <p><strong>Email:</strong>").concat(email, "</p>\n    <p><strong>Contact:</strong>").concat(phone, "</p>\n\n    <h2>Education</h2>\n    <p><strong>Degree:</strong>").concat(degree, "</p>\n    <p><strong>Institution:</strong>").concat(institution, "</p>\n    <p><strong>Graduation Year:</strong>").concat(year, "</p>\n\n    <h2>Experience</h2>\n    <p><strong>Job Title:</strong>").concat(jobTitle, "</p>\n    <p><strong>Company:</strong>").concat(company, "</p>\n    <p><strong>Experience years:</strong>").concat(years, "</p>\n\n\n    <h2>Skills</h2>\n    <p><strong>Skills:</strong>").concat(skills, "</p>\n    ");
        var resumeBuilderElement = document.getElementById('resumeBuilder');
        if (resumeBuilderElement) {
            resumeBuilderElement.innerHTML = resumeBuilder;
        }
        else {
            console.error('the resume output elements are missing');
        }
    }
    else {
        console.error('one or more output elements are missing ');
    }
});
