import path, { dirname } from "path";
import { fileURLToPath } from "url";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __filename = fileURLToPath( import.meta.url );
const __dirname = dirname( __filename );

export default {
    entry: {
        styles: './src/client/style/globals.css',
        scripts: './src/client/scripts/main.ts',
    },
    output: {
        filename: 'client/[name].bundle.cjs',
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
    resolve: { extensions: [ '.ts', '.js' ], },
    target: 'web',
    mode: 'development',
    plugins: [
        new MiniCssExtractPlugin( { filename: 'output.css', } ),
    ],
    stats: {
        preset: 'errors-warnings',
        moduleTrace: true,
        errorDetails: true,
        children: true,
    },
    watchOptions: {
        ignored: [
            '**/dist/**',
            '**/node_modules/**',
            '**/src/controllers/**',
            '**/src/db/**',
            '**/src/lib/**',
            '**/src/routes/**',
            '**/src/services/**',
            '**/src/utils/**',
            '**/src/index.ts',
        ]
    }
};