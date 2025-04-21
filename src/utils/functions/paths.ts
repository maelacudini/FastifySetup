import path from 'path'

export const getRootDir = () => {  
  return path.resolve('./')
}

export const getClientDir = () => {
  return path.join(getRootDir(), process.env.NODE_ENV === 'production' ? 'dist' : 'src', 'client')
}

export const getServerDir = () => {
  return path.join(getRootDir(), process.env.NODE_ENV === 'production' ? 'dist' : 'src')
}
