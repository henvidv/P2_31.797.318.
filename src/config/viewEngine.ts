import path from 'path';

const viewEngine = (app: any) => {
    app.set('view engine', 'ejs');
    app.set('views', './src/views');
}

export default viewEngine;