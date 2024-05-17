'use client'
import { getAllBooking } from '@/app/api/router'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link';

function Pagination({totalDatas, setTotalDatas}: any) {

    const searchParams = useSearchParams();
    const pathName = usePathname();
  const {replace} = useRouter();

     let search = searchParams.get('search')?.toString();
     let page = searchParams.get('page')?.toString() || '';
     console.log(search)

     useEffect(() => {
      const data = getAllBooking({page, search})
         data.then((data: any) => {
;              setTotalDatas(data?.data)
              page = data.currentPage
         }
        )
    }, [ page, search])

    // console.log(totalDatas)

     const handleBack = (page:any) => {
  const params = new URLSearchParams(searchParams);
  if (page) {
    params.set('page', page);
  } else {
    params.delete('page');
  }
  replace(`${pathName}?${params.toString()}`);
}
const handleNext = (page:any) => {
  const params = new URLSearchParams(searchParams);
  if (page >= 1) {
    params.set('page', page);
  } else {
    params.delete('page');
  }
  replace(`${pathName}?${params.toString()}`);
}

  return (
    <div className="join grid grid-cols-4 md:grid-cols-6 mt-2">
      {/* <Link  href={`${pathName}?page=${Number(page) > 1 ? Number(page) -1 : 1}`}> */}
      <button className="join-item btn btn-outline" disabled={Number(page) < 2} onClick={() =>handleBack( Number(page) > 1 ? Number(page)-1 : 1)}>Previous</button>
      {/* </Link>
      <Link href={`${pathName}?page=${page + 1}`}> */}
      <button className="join-item btn btn-outline" onClick={() => handleNext(Number(page)+1)}>Next</button>
      {/* </Link> */}
    </div>
  )
}

export default Pagination;

