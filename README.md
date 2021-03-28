# Royyan's Blog - a Next.js Tutorial

Disini aku telah belajar bagaimana cara membuat sebuah blog sederhana dari [tutorial resmi Nextjs](https://nextjs.org/learn/basics/create-nextjs-app).

Disini aku sudah mengimplementasikan beberapa hal berikut:

1. **Create nextjs app**: Disini aku belajar cara bikin nextjs app dengan command `npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"`
2. **Navigate between pages**: disini aku belajar cara membuat sebubah simple page handler, dan cara navigasi antar page. page handler maksudnya untuk bisa mengendalikan pemanggilan page
    - pages di `pages/posts/[id].js` adalah sebuah handler untuk mengumpulkan semua post dan membuat base layout bagi sebuah post di `[id].js::Post`. adapun handlernya digunakan untuk membuat url melalui fungsi `getStaticPaths` dan `getStaticProps`, karena ini akan mengakses file-file post disaat build.
    - `Link` component digunakan untuk navigasi di client-side
3. **Assets, Metadata, CSS**: disini aku belajar tentang bagiamana melakukan styling di nextjs
    - `Layout` component: komponen ini menghandle layout yang digunakan di `index.js` dan juga laman lainnya. yang menarik, disini kita bisa kasih else statement untuk menentukan apakah layout ini layout khusus home atau lagi buka page umum aja. komponen ini juga punya file CSSnya tersendiri.
4. **Pre rendering & data fetching**: disini aku belajar soal pentingnya prerender, dan fungsinya mempercepat load. agak repot karena segala harus diatur dengan static atau async, sehingga bisa me-laod sebelum page dibuka (static generation), beda dengan yang biasanya (server side rendering)
    - static generation with data: di index gunakan async function `getStaticProps` agar bisa memanggil fungsi dapetin semua blog posts (`getSortedPostsData`) yang butuh akses file system dulu, berupa kumpulan file post dalam format .md (atau contoh kasus lain adalah ini bisa diganti berupa memanggil query dari DB, atau fetch dari external API)
    - `SWR` & `getServerSideProps` as alternatives: ada opsi selain `getStaticProps` dimana ia cuma bisa get data saat build time. `SWR` bisa dipake untuk dapetin data dari client side, yaitu mengimplementasikan react hook, ini perlu belajar lagi sih apa use case dari react hook. adapun `getServerSideProps` adalah yang ambil data tiap kali request time
5. **Dynamic routes**: disni belajar gimana bisa bikin route atau url untuk page post yang baru dibuat secara otomatis, yaitu dengan bikin `[id].js`, yaitu sebuah handler dynamic route
    - `getStaticPaths`: disini perlu didapatkan list `id` yang akan dibikin path, berupa nama file dari post didalam `/posts`. beragam id ini didapetnya dari fungsi `posts.js::getAllPostsIds`
    - `getStaticProps`: disini diambil data posts dari id tertentu, diambil konten dari post tersebut yang merupakan .md. digunakan `remark` alias render markdwon, dan dikasih `await` biar ngelakuin renderingnya secara `asyncronous`. akhirnya di `[id].js::Post` di ambillah konten yang didapetkan tadi, dan di `dangerouslySetInnerHTML` ke bagian `<article>...</article>`
6. **API Routes**: serverless functions/lambdas. sebuah opsi API yang bisa ditembak, dimana uniknya ini gaakan masuk di clientside bundle. jadi aman aja kalo mau dipake yang aneh-aneh, misal akses database. contoh use case adalah suruh client isi sebuah form, dan form ini nembak ke API Route ini, nanti dari API Route ini akan dilanjutkan untuk save ke DB.