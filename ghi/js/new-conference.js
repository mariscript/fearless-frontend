window.addEventListener("DOMContentLoaded", async () => {
  const locationUrl = "http://localhost:8000/api/locations/";
  const formTag = document.getElementById("create-conference-form");
  const selectTag = document.getElementById("location");

  try {
    const response = await fetch(locationUrl);

    if (response.ok) {
      const data = await response.json();
      for (let location of data.locations) {
        let option = document.createElement("option");
        option.value = location.id;
        option.innerHTML = location.name;
        selectTag.appendChild(option);
      }
    }
  } catch (e) {
    console.error("There has been an error loading the locations.");
  }

  if (formTag) {
    formTag.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(formTag);
      const locationId = selectTag.value;
      const jsonData = {
        ...Object.fromEntries(formData),
        location: locationId,
      };
      const json = JSON.stringify(jsonData);

      const conferenceUrl = "http://localhost:8000/api/conferences/";
      const fetchConfig = {
        method: "POST",
        body: json,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(conferenceUrl, fetchConfig);
      if (response.ok) {
        formTag.reset();
        console.log("Conference created successfully.");
      } else {
        console.error("There has been an error creating the conference.");
      }
    });
  }
});
