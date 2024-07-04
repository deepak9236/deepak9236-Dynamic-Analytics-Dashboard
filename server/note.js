// dout:-
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true, // why this is use
    useUnifiedTopology: true, // why this is use
  }) 

// 2:- 
import globalReducer from "state";


Backend:-
index.js
package.json--> add Script
.env
.gitignore

routes-->general.js
models--> User.js

models--> Product.js
models--> ProductStat.js



Frontend:-
npm i react-redux @reduxjs/toolkit react-datepicker react-router-dom@6 @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid @nivo/core @nivob/bar @nivo/geo @nivo/pie
jsconfig.json
theme.js
state--> index.js
index.js
App.js

scenes--> layout -->index.jsx
scenes--> dashboard -->index.jsx
components-->flexBetween.jsx
components-->Navbar.jsx
components-->sidebar.jsx
state--> api.js

scenes--> products -->index.jsx
components-->Header.jsx
state--> api.js--> add end-point

// 2:57
