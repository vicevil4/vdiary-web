/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',

  // https://nextjs.org/docs/api-reference/next.config.js/trailing-slash
  // Next.js에서는 기본적으로 url 뒤에 '/' 가 붙는 것을 없는 것으로 바꾸어 이동한다.
  // '/about/' -> '/about' 으로 처리하여 이동한다는 뜻이며,
  // 아래와 같이 옵션을 지정하면 이를 반대로 처리하게 된다.
  // '/about' -> '/about/' 으로 처리하게 된다.
  trailingSlash: true,  
}

module.exports = nextConfig
