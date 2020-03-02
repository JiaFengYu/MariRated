function findTeachers() {

  let teachersPageUrl = "Teachers.html?";
  var checkedBoxes = [];

  document.getElementsByName("sel")
          .forEach(x => x.checked ? checkedBoxes.push(x.id) : undefined);
    window.location.href = teachersPageUrl +checkedBoxes.map(x => x + "=true").join("&");
}
