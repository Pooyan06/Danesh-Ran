import Link from "next/link";

export default function ArticlesPagination({ page = 1, articleCount }) {
  const currentPage = Number(page);
  const pageSize = 10;

  const totalPages = Math.ceil(articleCount / pageSize);

  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);

  const pages = [];

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <nav
      aria-label="صفحه بندی مقالات"
      className="flex flex-wrap justify-center gap-2 sm:gap-3"
    >
      {currentPage === 1 ? (
        <span className="border-brand-7 text-brand-4 cursor-not-allowed rounded-md border px-2 py-1 text-xs font-semibold opacity-50 sm:px-3 sm:py-1.5 sm:text-sm">
          قبلی
        </span>
      ) : (
        <Link
          href={`/articles?page=${currentPage - 1}`}
          className="border-brand-7 hover:border-brand-2 hover:text-brand-2 text-brand-4 rounded-md border px-2 py-1 text-xs font-semibold duration-300 sm:px-3 sm:py-1.5 sm:text-sm"
          aria-label="رفتن به صفحه قبلي"
        >
          قبلی
        </Link>
      )}

      {/* Numbers */}

      {pages.map((pageNumber) => (
        <PaginationButton
          key={pageNumber}
          page={pageNumber}
          active={pageNumber === currentPage}
        />
      ))}

      {currentPage === totalPages ? (
        <span className="border-brand-7 text-brand-4 cursor-not-allowed rounded-md border px-2 py-1 text-xs font-semibold opacity-50 sm:px-3 sm:py-1.5 sm:text-sm">
          بعدی
        </span>
      ) : (
        <Link
          href={`/articles?page=${currentPage + 1}`}
          className="border-brand-7 hover:border-brand-2 hover:text-brand-2 text-brand-4 rounded-md border px-2 py-1 text-xs font-semibold duration-300 sm:px-3 sm:py-1.5 sm:text-sm"
          aria-label="رفتن به صفحه بعدي"
        >
          بعدی
        </Link>
      )}
    </nav>
  );
}

function PaginationButton({ page, active }) {
  return (
    <Link
      href={`/articles?page=${page}`}
      aria-label={`رفتن به صفحه ${page}`}
      className={`border-brand-7 rounded-md border px-2 py-1 text-xs font-semibold duration-300 sm:px-3 sm:py-1.5 sm:text-sm ${
        active
          ? "bg-brand-2 border-brand-2 text-white"
          : "text-brand-4 hover:border-brand-2 hover:text-brand-2"
      }`}
    >
      {page}
    </Link>
  );
}
