import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={`route-${index}`}
            path={route.path}
            exact={route.exact}
            render={(props) => <route.component name={route.name} {...props} {...route.props} />}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
