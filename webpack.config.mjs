import path, { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __filename = fileURLToPath( import.meta.url );
const __dirname = dirname( __filename );

export default {
    entry: {
        main: './src/index.ts',
        styles: './src/client/style/globals.css',
    },
    output: {
        filename: '[name].bundle.cjs',
        path: path.resolve( __dirname, 'dist' ),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    target: 'node',
    mode: 'development',
    plugins: [
        new MiniCssExtractPlugin( {
            filename: 'output.css',
        } ),
    ],
};