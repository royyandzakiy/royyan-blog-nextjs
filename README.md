# Royyan's Blog - a Next.js Tutorial

Disini aku telah belajar bagaimana cara membuat sebuah blog sederhana yang sudah mengimplementasikan beberapa hal berikut:

1. **Create nextjs app**: here i learned how to create an app from the command `npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"`
2. **Navigate between pages**: here i learned how to make a simple page or a page wrapper. and how to navigate between pages
    - pages in pages/posts as a handler/wrapper to collect all posts and create the base layout of the post
    - Link component for client side navigation
3. **Assets, Metadata, CSS**: here i learned about styling. although i only copy-pasted almost everything, but
    - Layout component: this component basically handles the main component used in the index.js. What's interesting is, here we can do if else statements to pick whether or not it is used in a home page or not. this components has it's own CSS file.
4. **Pre rendering & data fetching**: disini aku belajar soal pentingnya prerender, dan fungsinya mempercepat load. agak repot karena segala harus diatur dengan static atau async, sehingga bisa me-laod sebelum page dibuka (static generation), beda dengan yang biasanya (server side rendering)
    - static generation with data: di index gunakan async function getStaticProps agar bisa memanggil fungsi dapetin semua blog posts (getSortedPostsData) yang butuh akses file system dulu (atau bisa di ganti berupa memanggil query dari DB, atau fetch dari external API)
    - SWR & getServerSideProps as alternatives: ada opsi selain getStaticProps yang cuma bisa dapet data saat build time. SWR untuk bisa dapetin data dari client side, yaitu mengimplementasikan react hook. adapun getServerSideProps adalah yang ambil data tiap kali request time
5. **Dynamic routes**: disni belajar gimana bisa bikin route atau url untuk page post yang baru dibuat secara otomatis, yaitu dengan bikin [id].js sebagai sebuah dynamic route
    - getStaticPaths: disini perlu didapatkan list id yang akan dibikin path. dapetnya dari posts.js::getAllPostsIds
    - getStaticProps: disini diambil data posts dari id tertentu, diambil konten dari post tersebut yang merupakan .md. digunakan remark untuk render markdwon, dan dikasih await biar ngelakuin renderingnya asyncronous. akhirnya di [id].js::Post di masukin deh konten yang didapetin ke bagian article
6. **API Routes**: serverless functions/lambdas. uniknya ini gaakan masuk di clientside bundle. jadi aman aja kalo mau dipake yang aneh-aneh, misal akses database. jadi bisa aja suruh client isi form, dan form ini nembak ke API Route ini, nanti dari API Route ini akan dilanjutkan utk save ke DB.