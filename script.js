
function toggleForm(id) {
  const form = document.getElementById(id);
  form.style.display = form.style.display === 'block' ? 'none' : 'block';
}


function addEducation() {
  const years = document.getElementById('edu-years').value;
  const school = document.getElementById('edu-school').value;
  const degree = document.getElementById('edu-degree').value;
  
  if (!years || !school || !degree) {
    alert('Please fill all fields');
    return;
  }
  
  const item = document.createElement('div');
  item.className = 'education-item';
  item.innerHTML = `
    <p><strong>${years}</strong><br>${school}<br>${degree}
      <span class="dynamic-remove" onclick="this.parentNode.parentNode.remove()">× Remove</span>
    </p>
  `;
  
  document.getElementById('education-items').appendChild(item);
  
  
  document.getElementById('edu-years').value = '';
  document.getElementById('edu-school').value = '';
  document.getElementById('edu-degree').value = '';
  

  toggleForm('edu-form');
}


function addSkill() {
  const skill = document.getElementById('new-skill').value.trim();
  
  if (!skill) {
    alert('Please enter a skill');
    return;
  }
  
  const item = document.createElement('div');
  item.className = 'skill';
  item.innerHTML = `${skill} <span class="dynamic-remove" onclick="this.parentNode.remove()">× Remove</span>`;
  
  document.getElementById('skills-items').appendChild(item);
  
  
  document.getElementById('new-skill').value = '';
  

  toggleForm('skill-form');
}


function addExperience() {
  const company = document.getElementById('exp-company').value;
  const years = document.getElementById('exp-years').value;
  const position = document.getElementById('exp-position').value;
  const duties = document.getElementById('exp-duties').value;
  
  if (!company || !years || !position || !duties) {
    alert('Please fill all fields');
    return;
  }
  
  const item = document.createElement('div');
  item.className = 'experience-item';
  item.innerHTML = `
    <div class="job-header">
      <strong>${company}</strong>
      <span class="date">${years}</span>
    </div>
    <div class="position">${position}
      <span class="dynamic-remove" onclick="this.parentNode.parentNode.remove()">× Remove</span>
    </div>
    <ul class="responsibilities">${
      duties.split('\n').filter(d => d.trim()).map(d => `<li>${d.trim()}</li>`).join('')
    }</ul>
  `;
  
  document.getElementById('experience-items').appendChild(item);
  
  
  document.getElementById('exp-company').value = '';
  document.getElementById('exp-years').value = '';
  document.getElementById('exp-position').value = '';
  document.getElementById('exp-duties').value = '';
  
  
  toggleForm('exp-form');
}
