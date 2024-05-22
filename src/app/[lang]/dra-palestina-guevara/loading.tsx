export default function Loading() {
    return (
        <div className="flex flex-col gap-gap">
            <section className="flex gap-gap lg:h-[433px] flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
                <article className="flex flex-col gap-gap p-padding justify-center bg-primary rounded h-full w-full lg:w-1/4">
                    <div className="h-10 bg-gray-200 rounded w-full animate-pulse"></div>
                </article>
                <article className="flex flex-col gap-gap p-gap justify-center bg-primary animate-pulse rounded w-full h-[433px]">
                </article>
            </section>
            <section className="
                flex flex-col lg:flex-row-reverse relative gap-gap
            ">
                <div className="grow flex flex-col gap-gap">
                    <div className="flex gap-gap flex-wrap">
                        <article className="flex flex-col gap-gap justify-center bg-white rounded grow p-padding">
                            <div className="">
                                <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                                <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                                <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                                <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                            </div>
                            <div className="">
                                <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                                <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                                <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                                <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
  }