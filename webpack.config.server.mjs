import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath( import.meta.url );
const __dirname = dirname( __filename );

export default {
    entry: {
        main: './src/index.ts',
    },
    output: {
        filename: 'server/[name].bundle.cjs',
        path: path.resolve( __dirname, 'dist' ),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: { extensions: [ '.ts', '.js' ], },
    target: 'node',
    mode: process.env.NODE_ENV || 'development',
    plugins: [],
};