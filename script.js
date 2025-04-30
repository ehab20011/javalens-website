// Version metadata
const versions = [
    {
      label: "Version 1.0",
      date: "April 29, 2025",
      windows: "JavaLens-Windows.zip",
      mac: "JavaLens-Mac.zip",
      notes: `
        • Initial release of JavaLens <br>
        • Real-time packet sniffing (TCP/UDP)<br>
        • Protocol filtering<br>
        • Live chart breakdown and clean UI`
    },
    {
      label: "Version 1.1",
      date: "May 10, 2025",
      windows: "JavaLens-Windows-v1.1.zip",
      mac: "JavaLens-Mac-v1.1.zip",
      notes: `
        • Added IP address filtering <br>
        • Export packet logs to .txt<br>
        • UI performance improvements<br>
        • Minor bug fixes`
    }
  ];
  
  const dropdown = document.getElementById("versionDropdown");
  const versionDate = document.getElementById("versionDate");
  const windowsBtn = document.querySelector("a[href$='Windows.zip']");
  const macBtn = document.querySelector("a[href$='Mac.zip']");
  
  // Populate dropdown
  versions.forEach((v, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = v.label;
    dropdown.appendChild(option);
  });
  
  // Initial render
  function updateVersion(index) {
    const v = versions[index];
    versionDate.textContent = `• ${v.date}`;
    windowsBtn.href = v.windows;
    macBtn.href = v.mac;
    document.getElementById("changelog").innerHTML = v.notes;
  }
  dropdown.addEventListener("change", (e) => updateVersion(e.target.value));
  updateVersion(0); // Default to first version
  