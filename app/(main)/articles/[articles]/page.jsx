// import {
//   BookmarkIcon,
//   CommentIcon,
//   CopyIcon,
//   FileTextIcon,
//   HeartIcon,
//   InfoIcon,
//   LinkIcon,
//   ShaireIcon2,
//   ShareIcon,
// } from "@/app/_assets/Icons";
// import Button from "@/app/_components/Button";
// import ArticleMain from "@/app/_pages/articles/[articles]/ArticleMain";
// import Link from "next/link";
// import { notFound } from "next/navigation";

// export const revalidate = 3600;

// const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

// export async function generateMetadata({ params }) {
//   const { articles: articleIdParam } = await params;
//   const articleId = Number(articleIdParam);

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_SITE_URL}/api/articles/${articleId}`,
//     {
//       next: {
//         revalidate: 3600,
//       },
//     },
//   );

//   const { article } = await res.json();

//   if (!article) {
//     return {
//       title: "مقاله یافت نشد | دانشران",
//       description: "مقاله مورد نظر در دانشران یافت نشد",
//       robots: "noindex, follow",
//     };
//   }

//   return {
//     title: `${article.title} | دانشران`,
//     description: article.abstract,
//     keywords: [article.tag, "مقاله علمی", "دانشران", "پژوهش", "مقالات علمی"],
//     authors: [{ name: article.author }],
//     openGraph: {
//       title: article.title,
//       description: article.abstract,
//       type: "article",
//       publishedTime: article.date,
//       authors: [article.author],
//       tags: [article.tag],
//       siteName: "دانشران",
//       url: `${baseUrl}/articles/${article.id}`,
//       images: [
//         {
//           url: `${baseUrl}/daneshran.webp`,
//           width: 1200,
//           height: 630,
//           alt: article.title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: article.title,
//       description: article.abstract,
//       images: [`${baseUrl}/daneshran.webp`],
//     },
//     alternates: {
//       canonical: `${baseUrl}/articles/${article.id}`,
//     },
//   };
// }

// export async function generateStaticParams() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/articles`, {
//     next: {
//       revalidate: 3600,
//     },
//   });

//   const { articles } = await res.json();

//   return articles.map((article) => ({
//     articles: String(article.id),
//   }));
// }

// export default async function page({ params }) {
//   const { articles: article_id } = await params;

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_SITE_URL}/api/articles/${article_id}`,
//     {
//       next: {
//         revalidate: 3600,
//       },
//     },
//   );

//   const { article: currentArticle } = await res.json();

//   if (!currentArticle) {
//     return notFound();
//   }

//   return (
//     <article className="mt-12 mb-6 px-4 sm:mt-18 sm:mb-10 sm:px-0">
//       <header className="flex w-full flex-col items-center justify-center gap-3 text-center sm:gap-5">
//         <h1 className="text-brand-2 flex items-center gap-2 text-[1.6rem] font-bold sm:gap-3 sm:text-[2rem]">
//           <FileTextIcon size={1.6} aria-hidden="true" />
//           مشاهده مقاله
//         </h1>
//         <p className="text-brand-4 text-sm font-normal sm:text-base">
//           متن کامل مقاله را مطالعه کنید و با جامعه علمی تعامل داشته باشید.
//         </p>
//         <hr className="text-brand-7 w-screen" />
//       </header>
//       <div className="mt-6 flex min-h-screen flex-col gap-6 sm:mt-10 sm:gap-8 lg:flex-row">
//         <ArticleMain article={currentArticle} />
//         <aside className="space-y-5 lg:sticky lg:top-20 lg:h-fit lg:flex-1/4">
//           <ArticleInfo />
//           <ShareActions />
//           <ArticleActions />
//           <RelatedArticles />
//         </aside>
//       </div>
//     </article>
//   );
// }

// function ArticleInfo() {
//   return (
//     <section className="border-brand-7 rounded-2xl border bg-white p-4 sm:p-5">
//       <h2 className="text-brand-2 mb-3 flex items-center space-x-1 font-semibold sm:mb-4">
//         <InfoIcon size={1.3} aria-hidden="true" />
//         <span className="text-sm sm:text-base">اطلاعات مقاله</span>
//       </h2>
//       <dl className="space-y-2">
//         <div className="flex items-center justify-between text-xs font-semibold sm:text-sm">
//           <dt className="text-brand-4 text-xs sm:text-sm">شناسه</dt>
//           <dd>DAN-۲۰۲۴-۱۲۳</dd>
//         </div>
//         <hr className="text-brand-7 mb-2" />
//         <div className="flex items-center justify-between text-xs font-semibold sm:text-sm">
//           <dt className="text-brand-4 text-xs sm:text-sm">نوع</dt>
//           <dd>مروری</dd>
//         </div>
//         <hr className="text-brand-7 mb-2" />
//         <div className="flex items-center justify-between text-xs font-semibold sm:text-sm">
//           <dt className="text-brand-4 text-xs sm:text-sm">زبان</dt>
//           <dd>فارسی</dd>
//         </div>
//         <hr className="text-brand-7 mb-2" />
//         <div className="flex items-center justify-between text-xs font-semibold sm:text-sm">
//           <dt className="text-brand-4 text-xs sm:text-sm">تعداد صفحات</dt>
//           <dd>18</dd>
//         </div>
//         <hr className="text-brand-7 mb-2" />
//         <div className="flex items-center justify-between text-xs font-semibold sm:text-sm">
//           <dt className="text-brand-4 text-xs sm:text-sm">وضعیت</dt>
//           <dd className="text-brand-2">تایید شده</dd>
//         </div>
//       </dl>
//     </section>
//   );
// }

// function ShareActions() {
//   return (
//     <section className="border-brand-7 rounded-2xl border bg-white p-4 sm:p-5">
//       <h2 className="text-brand-2 mb-3 flex items-center space-x-1 font-semibold sm:mb-4">
//         <ShareIcon size={1.4} aria-hidden="true" />
//         <span className="text-sm sm:text-base">اشتراک‌گذاری</span>
//       </h2>
//       <div className="space-y-3 sm:space-y-4">
//         <Button size="full" type={2}>
//           <CopyIcon size={1.2} aria-hidden="true" />
//           <span className="text-xs sm:text-sm">کپی لینک</span>
//         </Button>
//         <Button size="full" type={2}>
//           <ShaireIcon2 size={1.2} aria-hidden="true" />
//           <span className="text-xs sm:text-sm">اشتراک</span>
//         </Button>
//       </div>
//     </section>
//   );
// }

// function ArticleActions() {
//   return (
//     <section className="border-brand-7 rounded-2xl border bg-white p-4 sm:p-5">
//       <h2 className="text-brand-2 mb-3 flex items-center space-x-1 font-semibold sm:mb-4">
//         <BookmarkIcon size={1.3} aria-hidden="true" />
//         <span className="text-sm sm:text-base">اقدامات</span>
//       </h2>
//       <div className="space-y-3 sm:space-y-4">
//         <Button size="full">
//           <BookmarkIcon size={1.2} aria-hidden="true" />
//           <span className="text-xs sm:text-sm">ذخیره مقاله</span>
//         </Button>
//         <Button size="full" type={2}>
//           <CommentIcon size={1.2} aria-hidden="true" />
//           <span className="text-xs sm:text-sm">نظر</span>
//         </Button>
//         <Button size="full" type={2}>
//           <HeartIcon size={1.2} aria-hidden="true" />
//           <span className="text-xs sm:text-sm">پسندیدن</span>
//         </Button>
//       </div>
//     </section>
//   );
// }

// function RelatedArticles() {
//   return (
//     <section className="border-brand-7 rounded-2xl border bg-white p-4 sm:p-5">
//       <h2 className="text-brand-2 mb-3 flex items-center space-x-1 font-semibold sm:mb-4">
//         <LinkIcon size={1.3} aria-hidden="true" />
//         <span className="text-sm sm:text-base">مقالات مرتبط</span>
//       </h2>
//       <ul className="space-y-2">
//         <li>
//           <Link
//             href="/articles/1"
//             className="hover:text-brand-2 flex cursor-pointer items-center gap-2 text-xs duration-300 sm:text-sm"
//           >
//             <FileTextIcon size={1.2} aria-hidden="true" />
//             مرور سیستماتیک روش‌های یادگیری نیمه‌نظارتی
//           </Link>
//         </li>
//         <hr className="text-brand-7 mb-2" />
//         <li>
//           <Link
//             href="/articles/2"
//             className="hover:text-brand-2 flex cursor-pointer items-center gap-2 text-xs duration-300 sm:text-sm"
//           >
//             <FileTextIcon size={1.2} aria-hidden="true" />
//             کاربرد شبکه‌های عصبی در ترجمه ماشینی فارسی
//           </Link>
//         </li>
//         <hr className="text-brand-7 mb-2" />
//         <li>
//           <Link
//             href="/articles/3"
//             className="hover:text-brand-2 flex cursor-pointer items-center gap-2 text-xs duration-300 sm:text-sm"
//           >
//             <FileTextIcon size={1.2} aria-hidden="true" />
//             چالش‌های پردازش زبان‌های کم‌منبع
//           </Link>
//         </li>
//       </ul>
//     </section>
//   );
// }
