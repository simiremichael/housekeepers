'use client'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { getAllBooking } from '@/app/api/router';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';


function PaginationNew({totalDatas, setTotalDatas, page, search, setPage, setIsLoading}: any) {
 
  //  const query = useQuery({ queryKey: ['bookings'], queryFn: getAllBooking })
  

  //  console.log(query.data)

    const searchParams = useSearchParams();
    const pathName = usePathname();
  const {replace} = useRouter();

    //  let search = searchParams.get('search')?.toString() || '';
    //  let page = searchParams.get('page')?.toString() || 1;


    // console.log(pag)


   
     const querys = useQuery({ queryKey: ['bookings', page, search], queryFn: () => getAllBooking({page, search})})
  
   const { data, isLoading, isSuccess, error} = querys

useEffect(() => {
        //  if (isSuccess) {
          setTotalDatas(data)
        //  }
          setIsLoading(isLoading)
   }, [isSuccess, isLoading, data ])

  //  console.log(data)

    // useEffect(() => {
        
//       const data = getAllBooking({page, search})
//          data.then((data: any) => {
// ;              setTotalDatas(data)
//               page = data?.currentPage
//          }
//         )
    // }, [ page, search])
     
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
    //  const filters = pag.filter((i:any) => i === totalDatas?.currentPage)

    //  console.log(filters)

    const handleChange = (p:any) => {
      setPage(p)
    }

  return (
    <div className="join mt-4 mb-4">
        {/* <Link href={`?page=${totalDatas.length > 0 ? totalDatas.currentPage - 1 : 1}`}>   */}
         <button className='join-item btn' disabled={Number(page) <= 1} onClick={() => setPage(totalDatas.currentPage - 1)}>Prev</button>
      {/* </Link> */}
        { pages?.map((p, i) => (
      //  <Link key={p} href={`?page=${p}`}> 
       <input key={i} style={{display: totalDatas?.hasNextPage === false && p > totalDatas.currentPage ? 'none': ''}} disabled={totalDatas?.hasNextPage === false && p > totalDatas.currentPage} className="join-item btn btn-square" type="radio" value={p} name="options" aria-label={`${p}`} checked={page === p} onChange={() => handleChange(p)} />
        // <button className={`join-item btn ${p === pag ? 'btn-active' : ''}`} onClick={() => setPag(p)}>{p}</button>
      // </Link>
      ))}
      {/* <Link href={`?page=${totalDatas.length < 1 ? 1 : totalDatas.currentPage + 1}`} >  */}
         <button className='join-item btn' disabled={ totalDatas?.hasNextPage === false } onClick={() => setPage(totalDatas.currentPage + 1)}>Next</button>
      {/* </Link> */}
    </div>
  )
}

export default PaginationNew;

