const firstName: string = "Daniel";
const surName: string = "Figueiredo";
let fullName: string = "";
const greeting = (firstName: string, surName: string): string => {
  return (fullName = `${firstName} ${surName}`);
};

const span: HTMLElement = document.getElementById("span");
span.innerHTML = greeting(firstName, surName);
