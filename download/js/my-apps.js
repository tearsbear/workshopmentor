var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'Learn',
  theme: 'ios',
  // App id
  id: 'com.learn.workshop',
  // Enable swipe panel
  panel: {
    swipe: false,
  },
  // ... other parameters
});

var mainView = app.views.create('.view-main');