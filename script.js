document.querySelectorAll(".select-menu").forEach(optionMenu => {
    const selectBtn = optionMenu.querySelector(".select-btn"),
          options = optionMenu.querySelectorAll(".option"),
          sBtn_text = optionMenu.querySelector(".sBtn-text");
  
    selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
  
    options.forEach(option => {
      option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
        console.log(selectedOption);
      });
    });
  });
  document.querySelectorAll(".capture-btn").forEach(optionMenu => {
    const toggle = optionMenu.querySelector(".toggle-box");

    toggle.addEventListener("click", () => toggle.classList.toggle("active"));
  })
  
  