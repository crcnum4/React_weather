module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    // this is where were set the loaders
    loaders: [
      {
        //loader equals the loader package name
        loader: 'babel-loader',
        //this is how you give the loader options.
        query: {
          //run the code though babel against react then convert to es2015
          presets: ['react', 'es2015']
        },
        //regext expression to find the jsx extension. the $ says at end of file.
        test: /\.jsx?$/,
        //which folders should be excluded.
        exclude: /(node_modules|bower_components)/
      } //could add a second loader if , is added here and another {} object
    ]
  },
  devtool: 'eval-source-map'
};