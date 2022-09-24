//Router 5
// import React from 'react';
// import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// function App() {
//   return (
//     <div>
//       <AuthWrapper>
//         <Router>
//           <Switch>
//             <PrivateRoute path='/' exact>
//               <Dashboard></Dashboard>
//             </PrivateRoute>
//             <Route path='/login'>
//               <Login />
//             </Route>
//             <Route path='*'>
//               <Error />
//             </Route>
//           </Switch>
//         </Router>
//       </AuthWrapper>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <AuthWrapper>
        <Router>
          <Routes>
            <Route
              path='/'
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Router>
      </AuthWrapper>
    </div>
  );
}

export default App;
