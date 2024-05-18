'use client'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { getAllBooking } from '@/app/api/router';
import Link from 'next/link';

function PaginationNew({totalDatas, setTotalDatas}: any) {

    const searchParams = useSearchParams();
    const pathName = usePathname();
  const {replace} = useRouter();

     let search = searchParams.get('search')?.toString();
     let page = searchParams.get('page')?.toString() || 1;

     useEffect(() => {
        
      const data = getAllBooking({page, search})
         data.then((data: any) => {
;              setTotalDatas(data)
              page = data?.currentPage
         }
        )

    }, [ page, search])
     
     const getPageToShow = () => {
        let startPage = totalDatas?.currentPage - 2;
        let endPgage = totalDatas?.currentPage + 2;

        if (totalDatas?.currentPage <= 3){
          startPage = 1
          endPgage = 3
        } else if( totalDatas?.currentPage >= totalDatas?.numberOfPage - 2) {
          startPage = totalDatas?.numberOfPage - 4
          endPgage = totalDatas?.numberOfPage;
        }

        return Array.from(
            {length: endPgage - startPage + 1},
            (_, i) => startPage + i,
        );
     };

     const pages = getPageToShow();

  return (
    <div className="join mt-4 mb-4">
        <Link href={`?page=${totalDatas.currentPage - 1}`}> 
         <button className='join-item btn' disabled={Number(page) < 2}>Prev</button>
      </Link>
        { pages?.map((p, i) => (
       <Link key={p} href={`?page=${p}`}> 
        {/* <input className="join-item btn btn-square" value={p} type="radio" name="options" aria-label="1" checked={p === totalDatas?.currentPage ? true : false} /> */}
         <button className={`join-item btn ${p === totalDatas?.currentPage ? 'btn-active' : ''}`}>{p}</button>
      {/* <button className='btn'>{p}</button> */}
      </Link>
      ))}
      <Link href={`?page=${totalDatas.currentPage + 1}`}> 
         <button className='join-item btn'>Next</button>
      </Link>
    </div>
  )
}

export default PaginationNew;

