age_calculate.onclick = () => {
  userDate = new Date(inpt.value);
  let date = new Date();

  let cy = date.getFullYear();
  let cm = date.getMonth();
  let cd = date.getDay();

  let uy = userDate.getFullYear();
  let um = userDate.getMonth();
  let ud = userDate.getDay();

  yy = cy - uy;
  if (cm > um) {
    mm = cm - um;
  } else {
    yy--;
    mm = 12 + cm - um;
  }

  if (cd > ud) {
    dd = cd - ud;
  } else {
    mm--;
    dd = 31 + cd - ud;
  }

  years.innerHTML = yy + "<br>" + "Year";
  months.innerHTML = mm + "<br>" + "Month";
  days.innerHTML = dd + "<br>" + "Day";
  inpt.value = "";
};
