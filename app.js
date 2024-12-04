function search() {
    var text = document.getElementById("paragraph").innerText;
    console.log(text);
    var searchInput = document.getElementById("searchInput").value;
    // console.log(searchInput);
    for (var i = 0; i < text.length; i++) {
      if (text.slice(i, i + 9) === 'Argentina') {
        console.log("Your Word Exists In Above Paragrah:", searchInput);
      }
    }

  }