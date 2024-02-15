form = document.getElementById("fundraise-form");
form.addEventListener('submit', (event) => {
  const checkboxes = form.querySelectorAll('input[name="project"]:checked');
  if (checkboxes.length < 1) {
    event.preventDefault();
    alert('Please select at least one project')
  }
});
