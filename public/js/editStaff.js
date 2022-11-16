async function newFormHandler(event) {
    event.preventDefault();
    const teacher_name = document.querySelector('#teacher_name').value;
    const classroom_name = document.querySelector('#classroom_name').value;

    // Send fetch request to add a new Teacher
    const response = await fetch(`/Staff`, {
      method: 'POST',
      body: JSON.stringify({
        teacher_name,
        classroom_name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the teacher is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add Teacher');
    }
  }
  
  document.querySelector('.update-teacher-form').addEventListener('submit', newFormHandler);