'use client'
import React from "react";
import Link from "next/link";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { usePathname, useSearchParams } from "next/navigation";
import { generatePagination } from "@/lib/generate-pagination";

const Pagination = ({ totalPages }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  const PaginationNumber = ({ page, href, position, isActive }) => {
    let className = "flex h-10 w-10 items-center justify-center text-sm border";
    if (position === "first" || position === "single") {
      className += " rounded-l-sm";
    }
    if (position === "last" || position === "single") {
      className += " rounded-r-sm";
    }
    if (isActive) {
      className += " z-10 bg-blue-100 border-blue-500 text-white";
    } else {
      className += " hover:bg-gray-100";
    }
    if (position === "middle") {
      className += " text-gray-300 pointer-events-none";
    }

    return isActive && position === "middle" ? (
      <div className={className}>{page}</div>
    ) : (
      <Link href={href} className={className}>
        {page}
      </Link>
    );
  };

  const PaginationArrow = ({ href, direction, isDisabled }) => {
    let className = "flex h-10 w-10 items-center justify-center text-sm border";
    if (isDisabled) {
      className += " pointer-events-none text-gray-300 rounded-md";
    } else {
      className += " hover:bg-gray-100";
    }
    if (direction === "left") {
      className += " mr-2";
    } else if (direction === "right") {
      className += " ml-2";
    }

    const icon = direction === "left" ? <HiChevronLeft size={20} /> : <HiChevronRight size={20} />;

    return isDisabled ? (
      <div className={className}>{icon}</div>
    ) : (
      <Link href={href} className={className}>
        {icon}
      </Link>
    );
  };

  return (
    <div className="inline-flex">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      <div className="flex -space-x-px">
        {allPages.map((page, index) => {
          let position;
          if (index === 0) position = "first";
          if (index === allPages.length - 1) position = "last";
          if (allPages.length === 1) position = "single";
          if (page === "...") position = "middle";

          return (
            <PaginationNumber
              key={index}
              href={createPageURL(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>

      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
};

export default Pagination;