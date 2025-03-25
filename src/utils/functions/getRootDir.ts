import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
  
export function getRootDir() {
  const __filename = fileURLToPath( import.meta.url );
  const __dirname = dirname( __filename );    
  const root = resolve( __dirname, '../../../' );
  return root;
}