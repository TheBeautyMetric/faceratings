---
name: Data Upload Form
about: Submit data through this form
title: "[Data] New Submission"
labels: data
---
<form onsubmit="submitData(event)">
  <input type="text" id="userData" required placeholder="Enter your data">
  <button type="submit">Upload to GitHub</button>
</form>

<script>
function submitData(e) {
  e.preventDefault();
  const data = document.getElementById('userData').value;
  window.location.href = `https://github.com/TheBeautyMetric/faceratings/issues/new?title=Data_Submission&body=${encodeURIComponent(data)}`;
}
</script>
