import Container from "../pages/Steps/Container";
import NotFound from "../pages/NotFound/NotFound";

export const routes = [
    {path: '/', component: Container, exact: true},
    {path: '/not-found', component: NotFound, exact: true},
];