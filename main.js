fetch('localhost:8080/api/content')
.then(response => response.json())
.then(data => console.log(data))
export default defineConfig({
  server: {
    open: '/docs/index.html',
  },
})