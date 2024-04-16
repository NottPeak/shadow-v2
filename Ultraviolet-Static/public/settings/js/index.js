  var tab = localStorage.getItem('tab');
  if (tab) {
    try {
      var tabData = JSON.parse(tab);
    } catch {
      var tabData = {};
    }
  } else {
    var tabData = {};
  }

  if (tabData.title) {
    document.title = tabData.title;
  }

  if (tabData.icon) {
    document.querySelector('link[rel="icon"]').href = tabData.icon;
  }
