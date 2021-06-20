import React, { useEffect, useState } from "react";
import { slice, take } from "lodash";
import Pagination from "./Pagination";
import { DemoTable } from "./Table";

const users = [
  {
    userId: 1,
    firstName: "Cort",
    lastName: "Tosh",
    emailAddress: "ctosh0@github.com",
    gender: "Male",
    phoneNumber: "327-626-5542",
  },
  {
    userId: 2,
    firstName: "Brianne",
    lastName: "Dzeniskevich",
    emailAddress: "bdzeniskevich1@hostgator.com",
    gender: "Female",
    phoneNumber: "144-190-8956",
  },
  {
    userId: 3,
    firstName: "Isadore",
    lastName: "Botler",
    emailAddress: "ibotler2@gmpg.org",
    gender: "Male",
    phoneNumber: "350-937-0792",
  },
  {
    userId: 4,
    firstName: "Janaya",
    lastName: "Klosges",
    emailAddress: "jklosges3@amazon.de",
    gender: "Female",
    phoneNumber: "502-438-7799",
  },
  {
    userId: 5,
    firstName: "Freddi",
    lastName: "Di Claudio",
    emailAddress: "fdiclaudio4@phoca.cz",
    gender: "Female",
    phoneNumber: "265-448-9627",
  },
  {
    userId: 6,
    firstName: "Oliy",
    lastName: "Mairs",
    emailAddress: "omairs5@fda.gov",
    gender: "Female",
    phoneNumber: "221-516-2295",
  },
  {
    userId: 7,
    firstName: "Tabb",
    lastName: "Wiseman",
    emailAddress: "twiseman6@friendfeed.com",
    gender: "Male",
    phoneNumber: "171-817-5020",
  },
  {
    userId: 8,
    firstName: "Joela",
    lastName: "Betteriss",
    emailAddress: "jbetteriss7@msu.edu",
    gender: "Female",
    phoneNumber: "481-100-9345",
  },
  {
    userId: 9,
    firstName: "Alistair",
    lastName: "Vasyagin",
    emailAddress: "avasyagin8@gnu.org",
    gender: "Male",
    phoneNumber: "520-669-8364",
  },
  {
    userId: 10,
    firstName: "Nealon",
    lastName: "Ratray",
    emailAddress: "nratray9@typepad.com",
    gender: "Male",
    phoneNumber: "993-654-9793",
  },
  {
    userId: 11,
    firstName: "Annissa",
    lastName: "Kissick",
    emailAddress: "akissicka@deliciousdays.com",
    gender: "Female",
    phoneNumber: "283-425-2705",
  },
  {
    userId: 12,
    firstName: "Nissie",
    lastName: "Sidnell",
    emailAddress: "nsidnellb@freewebs.com",
    gender: "Female",
    phoneNumber: "754-391-3116",
  },
  {
    userId: 13,
    firstName: "Madalena",
    lastName: "Fouch",
    emailAddress: "mfouchc@mozilla.org",
    gender: "Female",
    phoneNumber: "584-300-9004",
  },
  {
    userId: 14,
    firstName: "Rozina",
    lastName: "Atkins",
    emailAddress: "ratkinsd@japanpost.jp",
    gender: "Female",
    phoneNumber: "792-856-0845",
  },
  {
    userId: 15,
    firstName: "Lorelle",
    lastName: "Sandcroft",
    emailAddress: "lsandcrofte@google.nl",
    gender: "Female",
    phoneNumber: "882-911-7241",
  },
];
function pagination(items: any, pageNumber: any, pageSize: any) {
  const startIndex = (pageNumber - 1) * pageSize;
  return take(slice(items, startIndex), pageSize);
}

export const MockPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [paginatedData, setDataPagination] = useState([]);

  function handlePageChange(page: any): void {
    setCurrentPage(page);
  }

  function handlePageSizeChange(pageSize: any): void {
    setPageSize(pageSize);
  }

  useEffect(() => {
    const temp: any = pagination(users, currentPage, pageSize);

    setDataPagination(temp);
  }, [pageSize, currentPage]);

  return (
    <div className="">
      <DemoTable users={paginatedData} />
      <div className="mt-4 ">
        <Pagination
          itemsCount={users.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      </div>
    </div>
  );
};
