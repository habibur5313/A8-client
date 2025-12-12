const BookGuidePage = async ({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[]>>;
}) => {
  const searchParamsObj = await searchParams;
  // const queryString = queryStringFormatter(searchParamsObj);

  // // const bookingsResult = await getBookings(queryString);

  // // const totalPages = Math.ceil(
  // //   (bookingsResult?.meta?.total || 1) / (bookingsResult?.meta?.limit || 1)
  // // );

  // console.log(bookingsResult)

  return (
    <div className="space-y-6">
   <h1>hello</h1>
    </div>
  );
};

export default BookGuidePage;