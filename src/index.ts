import "./styles.sass"

function docReady(fn: () => void) {
  // see if DOM is already available
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // call on next available tick
    setTimeout(fn, 1)
  } else {
    document.addEventListener("DOMContentLoaded", fn)
  }
}

docReady(function () {
  console.log("works")
  $("#diva").text("works")
})
