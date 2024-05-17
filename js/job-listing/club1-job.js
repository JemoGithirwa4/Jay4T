function goBack() {
  window.history.back();
}

// Function to parse URL parameters
function getParameterByName(name) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(window.location.href);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Function to fetch and display job details
function fetchJobDetails() {
  var jobTitle = getParameterByName('job');
  if (!jobTitle) {
    window.history.back();
    alert('Invalid request. Contact us for more information.');
      return;
  }

  // Example job details for demonstration
  var jobDetails = {
      'Head of Performance Support': {
          location: 'Stamford Bridge, Fulham Road, London, SW6 1HS, United Kingdom',
          employeeType: 'Permanent (Full-Time)',
          experience: '5 years',
          department: 'Performance Support',
          reportingTo: 'Director of Performance',
          jobFunction: 'Focused on the delivery of performance support within ClubName FC...',
          responsibilities: [
              'Overseeing performance support department',
              'Implementing strategies for player development',
              'Collaborating with coaching staff and medical team'
          ],
          expectations: [
              'Demonstrate and live by the club’s values',
              'Adhere to the club’s policies and procedures',
              'Act as an ambassador for diversity, equality, and inclusion'
          ],
          qualifications: 'Degree in Sports Science or related field',
          skills: 'Excellent knowledge of performance analytics tools',
          experience: [
              '5+ years in performance support roles',
              'Experience in elite sports environments',
              'Strong leadership and communication skills'
          ]
      },
      'Football Projects Officer': {
          location: 'Other Location',
          employeeType: 'Part-Time',
          experience: '2 years',
          department: 'Football Operations',
          reportingTo: 'Football Operations Manager',
          jobFunction: 'Responsible for support and lead on the various football projects...',
          responsibilities: [
              'Coordinating football project activities',
              'Managing project timelines and deliverables',
              'Liaising with stakeholders to ensure project success'
          ],
          expectations: [
              'Exhibit strong organizational skills',
              'Work collaboratively with team members',
              'Adhere to project management best practices'
          ],
          qualifications: 'Bachelor’s degree in Sports Management or related field',
          skills: 'Proficiency in project management software',
          experience: [
              'Experience in sports project management',
              'Ability to handle multiple projects simultaneously',
              'Strong analytical and problem-solving skills'
          ]
      },
      'Sponsorship Administrator': {
          location: 'Another Location',
          employeeType: 'Full-Time',
          experience: '3 years',
          department: 'Sponsorship',
          reportingTo: 'Sponsorship Manager',
          jobFunction: 'Responsible for coordinating travel logistics for sales teams...',
          responsibilities: [
              'Coordinating travel logistics',
              'Managing matchday invite lists',
              'Organizing client dinners'
          ],
          expectations: [
              'Strong attention to detail',
              'Excellent communication skills',
              'Ability to work under pressure'
          ],
          qualifications: 'Degree in Business Administration or related field',
          skills: 'Proficiency in Microsoft Office Suite',
          experience: [
              'Experience in event coordination',
              'Excellent organizational skills',
              'Ability to manage multiple tasks efficiently'
          ]
      }
  };

  var jobDetail = jobDetails[jobTitle];
  if (jobDetail) {
      document.getElementById('sub-heading').textContent = `${jobTitle} Position`;
      document.getElementById('job-title').textContent = `JOB TITLE: ${jobTitle}`;
      document.getElementById('job-location').textContent = jobDetail.location;
      document.getElementById('employee-type').textContent = jobDetail.employeeType;
      document.getElementById('minimum-experience').textContent = jobDetail.experience;
      document.getElementById('department').textContent = jobDetail.department;
      document.getElementById('reporting-to').textContent = jobDetail.reportingTo;
      document.getElementById('job-function').textContent = jobDetail.jobFunction;

      var responsibilitiesList = document.getElementById('main-responsibilities');
      responsibilitiesList.innerHTML = '';
      jobDetail.responsibilities.forEach(function (responsibility) {
          var li = document.createElement('li');
          li.textContent = responsibility;
          responsibilitiesList.appendChild(li);
      });

      var expectationsList = document.getElementById('our-expectations');
      expectationsList.innerHTML = '';
      jobDetail.expectations.forEach(function (expectation) {
          var li = document.createElement('li');
          li.textContent = expectation;
          expectationsList.appendChild(li);
      });

      document.getElementById('qualifications').textContent = jobDetail.qualifications;
      document.getElementById('skills').textContent = jobDetail.skills;

      var experienceList = document.getElementById('experience');
      experienceList.innerHTML = '';
      jobDetail.experience.forEach(function (exp) {
          var li = document.createElement('li');
          li.textContent = exp;
          experienceList.appendChild(li);
      });
  } else {
      var jobList = document.getElementById('job-list');
      var noDataMessage = document.createElement('div');
      noDataMessage.textContent = 'No job details available for this job title.';
      noDataMessage.style.color = "red";
      jobList.appendChild(noDataMessage);
  }
}

// Contact us form
let submitForm = document.getElementById("application-form");
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailAddress = document.getElementById("email-textbox");
  var regExpression = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (emailAddress.value.match(regExpression)) {
    var textPass = encodeURIComponent(emailAddress.value);
    window.location.href = "../../pages/job-listing/job-success.html?value=" + textPass;

  } else {
      document.querySelector("#email-textbox").style.border = "1px solid hsl(4, 100%, 67%)";
      document.querySelector("#email-textbox").style.color = "hsl(4, 100%, 67%)";
      document.getElementById("invalid").style.display = "block";

      setTimeout(function () {
          document.getElementById("invalid").style.display = "none";
          document.querySelector("#email-textbox").style.color = "black";
          document.querySelector("#email-textbox").style.border = "none";
      }, 2000);
  }
});

// Fetch and display job details when the page loads
window.onload = function () {
  fetchJobDetails();
};