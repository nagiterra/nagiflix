import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/cadastro/categoria" component={CadastroCategoria} />
			<Route path="/cadastro/video" component={CadastroVideo} />
			<Route path="/" component={Home} exact />
			<Route component={Pagina404} />
			

		</Switch>
	</BrowserRouter>,
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,
  document.getElementById('root')
);
