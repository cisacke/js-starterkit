import path from 'path';

export default {
    debug: true, // enables debugging information
    devtool: 'inline-source-map', // compilation speed vs. quality (higher quality source maps take longer to compile)
    noInfo: false, // webpack will display a list of the files it is bundling
    entry: [
        path.resolve(__dirname, 'src/index') // entry point of application (__dirname is part of node)
    ],
    target: 'web', // could set this to node, electron (for desktop style apps)
    output: { // webpack won't generate any physical files for development build. it will serve the build from memory
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [], // e.g hot reloading, linting
    module: {
        loaders: [
          {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
          {test: /\.css$/, loaders: ['style','css']}
        ]
    }
}
